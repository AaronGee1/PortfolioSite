import React, { useEffect, useRef } from "react";
import Tesseract from "tesseract.js";
import { Container, Input } from "reactstrap";

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
        <canvas ref={canvasRef} />
      </Container>
    </div>
  );
};

export default OCR;
