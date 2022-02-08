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
      context.drawImage(
        image,
        0,
        0,
        context.canvas.width,
        context.canvas.height
      );
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
      </Container>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default OCR;
