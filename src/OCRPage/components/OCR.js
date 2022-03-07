import React, { useEffect, useRef } from "react";
import Tesseract from "tesseract.js";
import {
  Container,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";

const OCR = () => {
  const image = new Image();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0, image.width, image.height);
    };
  }, []);

  return (
    <div>
      <Container>
        <Input
          type="file"
          id="imageInput"
          onChange={(e) => {
            image.src = URL.createObjectURL(e.target.files[0]);
          }}
        ></Input>
        <Card>
          <CardBody>
            <CardHeader>Starting Image</CardHeader>
            <canvas ref={canvasRef} />
            <CardFooter />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardHeader>Modified Image</CardHeader>
            <canvas />
            <CardFooter />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardHeader>Gray Image</CardHeader>
            <canvas />
            <CardFooter />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardHeader>Blurred Image</CardHeader>
            <canvas />
            <CardFooter />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardHeader>Sharpen Image</CardHeader>
            <canvas />
            <CardFooter />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardHeader>Dilated Image</CardHeader>
            <canvas />
            <CardFooter />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardHeader>Contoured Image</CardHeader>
            <canvas />
            <CardFooter />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardHeader>Parsed Image</CardHeader>
            <canvas />
            <CardFooter />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default OCR;
