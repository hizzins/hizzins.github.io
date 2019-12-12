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

const drawWheel = () => {
  canvas.wheelCtx.clearRect(wheelImage.imageX, wheelImage.imageY, wheelImage.imageWidth, wheelImage.imageHeight);
  canvas.wheelCtx.save();
  canvas.wheelCtx.setTransform(1,0,0,1,0,0);
  canvas.wheelCtx.translate(wheelImage.imageX + wheelImage.imageWidth / 2, wheelImage.imageY + wheelImage.imageHeight / 2);
  canvas.wheelCtx.rotate(toRadian(wheelDeg));
  // ctx.strokeRect(0 - wheelImage.imageWidth / 2, 0 - wheelImage.imageHeight / 2, wheelImage.imageWidth, wheelImage.imageHeight);

  canvas.wheelCtx.drawImage(
    wheelImage.image,
    0 - wheelImage.imageWidth / 2,
    0 - wheelImage.imageHeight / 2,
    wheelImage.imageWidth,
    wheelImage.imageHeight
  );

  canvas.wheelCtx.restore();

  wheelDeg = wheelDeg > 360 ? 0 : wheelDeg + 0.05;
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
