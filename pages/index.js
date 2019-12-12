import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";

const canvasWidth = 1920;
const canvasHeight = 1274;
const wheelWidth = 740;
const wheelHeight = 744;
let wheelDeg = 0;
let canvas = {};
let wheelImage = {};

const getRatio = () => {
  const canvasWidth = 1920;
  return window.innerWidth / canvasWidth;
}

const toRadian = (deg) => {
  return deg * Math.PI / 180;
}

const drawCar = () => {

}

const renderCar = (angle) => {
  const ratio = getRatio();
  const carCanvas = document.getElementById('carCanvas');
  const carCtx = carCanvas.getContext('2d');
  const carRadius = 40;
  const wheelRadius = wheelImage.imageWidth / 2;
  const r = wheelRadius + carRadius; //wheelRadius + 20;
  const xPos = Math.cos(toRadian(angle)) * r;
  const yPos = Math.sin(toRadian(angle)) * r;
  console.log('여기', angle);

  carCtx.clearRect(0, 0, carCanvas.width, carCanvas.height);
  carCtx.save();
  carCtx.beginPath();
  carCtx.arc(xPos + wheelImage.imageX + r - carRadius, yPos + wheelImage.imageY + r - carRadius, carRadius, 0, Math.PI, false);
  carCtx.fillStyle = '#272e59';
  carCtx.strokeStyle = '#272e59';
  carCtx.lineWidth = 10;
  carCtx.fill();

  carCtx.beginPath();
  carCtx.arc(xPos + wheelImage.imageX + r - carRadius, yPos + wheelImage.imageY + r - carRadius, carRadius, 0, Math.PI *2, false);
  carCtx.strokeStyle = '#272e59';
  carCtx.lineWidth = 10;
  carCtx.stroke();

  // carCtx.beginPath();
  // carCtx.arc(wheelImage.imageX + r - carRadius, wheelImage.imageY + r - carRadius, r, 0, Math.PI *2, false);
  // carCtx.strokeStyle = '#dd4b39';
  // carCtx.lineWidth = 5;
  // carCtx.stroke();

  carCtx.restore();
}

const drawWheel = () => {
  const wheelCtx = canvas.wheelCtx;
  wheelCtx.clearRect(0, 0, canvas.wheelCanvas.width, canvas.wheelCanvas.height);
  wheelCtx.save();
  wheelCtx.setTransform(1,0,0,1,0,0);
  wheelCtx.translate(wheelImage.imageX + wheelImage.imageWidth / 2, wheelImage.imageY + wheelImage.imageHeight / 2);
  wheelCtx.rotate(toRadian(wheelDeg));
  // ctx.strokeRect(0 - wheelImage.imageWidth / 2, 0 - wheelImage.imageHeight / 2, wheelImage.imageWidth, wheelImage.imageHeight);


  wheelCtx.drawImage(
    wheelImage.image,
    0 - wheelImage.imageWidth / 2,
    0 - wheelImage.imageHeight / 2,
    wheelImage.imageWidth,
    wheelImage.imageHeight
  );

  renderCar(wheelDeg);

  wheelCtx.restore();

  wheelDeg = wheelDeg > 360 ? 0 : wheelDeg + 0.05;
  // wheelDeg = wheelDeg > 360 ? 0 : wheelDeg + 0.5; // 테스트용

  requestAnimationFrame(drawWheel);
}

const Home = () => {

  useEffect(() => {
    const backgroundImage = {
      image: new Image(),
      imageWidth: 1920,
      imageHeight: 1274,
      imageX: 1,
      imageY: 1
    };

    const ratio = getRatio();
    const backgroundCanvas = document.getElementById('backgroundCanvas');
    const wheelCanvas = document.getElementById('wheelCanvas');
    canvas = {
      backgroundCanvas,
      backgroundCtx: backgroundCanvas.getContext('2d'),
      wheelCanvas,
      wheelCtx: wheelCanvas.getContext('2d')
    };

    backgroundImage.image.onload = () => {
      canvas.backgroundCtx.drawImage(
        backgroundImage.image,
        backgroundImage.imageX,
        backgroundImage.imageY,
        backgroundImage.imageWidth,
        backgroundImage.imageHeight
      );
    };
    backgroundImage.image.src = '/static/images/amusement-park.png';

    wheelImage = {
      image: new Image(),
      imageWidth: wheelWidth,
      imageHeight: wheelHeight,
      imageX: 765,
      imageY: 365
    };
    wheelImage.image.src = '/static/images/wheel.png';
    drawWheel();

  }, []);

  return (
    <div>
      <Head>
        <title>Hisney Land | develope hub page</title>
      </Head>

      {/*<Nav />*/}

      <main className="contents">
        <h1 className="title">Hisney Land</h1>
        <p className="description">Hub page</p>
        <div className="wrap-canvas">
          <canvas id="backgroundCanvas" className="background-canvas" width={canvasWidth} height={canvasHeight}></canvas>
          <canvas id="wheelCanvas" className="wheel-canvas" width={canvasWidth} height={canvasHeight}></canvas>
          <canvas id="carCanvas" className="wheel-canvas" width={canvasWidth} height={canvasHeight}></canvas>
        </div>
      </main>

      <style jsx>{`
      .contents {
        height: 100vh;
      }
      .wrap-canvas {
        position: relative;
      }
      .background-canvas,
      .wheel-canvas{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
      }
      .background-canvas {
        background-color: #fff;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 30px;
        font-size: 48px;
        text-align: center;
        color: #272e59;
      }
      .description {
        text-align: center;
      }
    `}</style>
    </div>
  );
}

export default Home;
