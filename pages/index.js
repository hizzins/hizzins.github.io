import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import L from "../lib/util";

const canvasWidth = 1920;
const canvasHeight = 1274;
const wheelWidth = 740;
const wheelHeight = 744;
let wheelDeg = 0;
let canvas = {};
let wheelImage = {};

// e - playground,
// d - blog,
// c - zeplin,
// b - remotemeeting,
// a - google,
// 9 - remotemeeting admin,
// 8 - 언어리소스,
// 7 - w3c
// 6 - 그룹웨어
// 5 - 레드마인

const menuColorMap = [
  {
    backgroundColor: "#fefefe",
    pointColor: "#272e58",
    label: "playground",
    link: "https://hizzins.github.io/playground/#/"
  },
  {
    backgroundColor: "#fdfdfd",
    pointColor: "#272e57",
    label: "blog",
    link: "https://hizzins.github.io/Notes/"
  },
  {
    backgroundColor: "#fcfcfc",
    pointColor: "#272e56",
    label: "zeplin",
    link: "https://app.zeplin.io/organization/5b8de02ca1e2154f3b1c2c52/projects"
  },
  {
    backgroundColor: "#fbfbfb",
    pointColor: "#272e55",
    label: "remotemeeting",
    link: "https://www.remotemeeting.com/ko/home"
  },
  {
    backgroundColor: "#fafafa",
    pointColor: "#272e54",
    label: "google",
    link: "https://www.google.com/"
  },
  {
    backgroundColor: "#f9f9f3",
    pointColor: "#272e52",
    label: "redmine",
    link: "https://projects.rsupport.com/login"
  },
  {
    backgroundColor: "#f8f8f8",
    pointColor: "#272e51",
    label: "language doc",
    link: "https://drive.google.com/drive/u/0/recent"
  },
  {
    backgroundColor: "#f7f7f7",
    pointColor: "#272e50",
    label: "w3c",
    link: "https://www.w3schools.com/graphics/canvas_text.asp"
  },
  {
    backgroundColor: "#f6f6f6",
    pointColor: "#272e5a",
    label: "group ware",
    link: "https://gw.rsupport.com/main/"
  },
  {
    backgroundColor: "#f4f4f4",
    pointColor: "#272e5c",
    label: "conference room",
    link:
      "https://docs.google.com/spreadsheets/d/1iGe93gej2d52vq0PCZ2uOz4OHE4UOl3zDxAV0aCUJAQ/edit?usp=drive_web&ouid=115569187072603616122"
  }
  // { backgroundColor: "#f5f5f5", pointColor: "#272e5b", label: "admin", link: '' },
];
const menuLength = menuColorMap.length;

const getRatio = () => {
  const currentCanvasWidth = document.getElementById("carCanvas").clientWidth;
  return canvasWidth / currentCanvasWidth;
};

const toRadian = deg => {
  return (deg * Math.PI) / 180;
};
const getMenuInfo = color => {
  for (var i = 0; i < menuLength; i++) {
    if (
      menuColorMap[i].backgroundColor === color ||
      menuColorMap[i].pointColor === color
    ) {
      return menuColorMap[i];
    }
  }
  return undefined;
};

const drawCar = (carCtx, angle, index) => {
  const carRadius = 40;
  const wheelRadius = wheelImage.imageWidth / 2;
  const r = wheelRadius + carRadius; // wheel의 반지름 + 자동차의 지름.
  const xPos = Math.cos(toRadian(angle)) * r; // 관람차 그리는 시작점의 x좌표
  const yPos = Math.sin(toRadian(angle)) * r; // 관람차 그리는 시작점의 y좌표
  const x = xPos + wheelImage.imageX + r - carRadius;
  const y = yPos + wheelImage.imageY + r - carRadius;
  const manuInfo = menuColorMap[index];
  const carBgColor = manuInfo.backgroundColor;
  const carPointColor = manuInfo.pointColor;
  const menuLabel = manuInfo.label;

  carCtx.beginPath();
  carCtx.arc(x, y, carRadius, 0, Math.PI * 2, false);
  carCtx.strokeStyle = carPointColor;
  carCtx.fillStyle = carBgColor;
  carCtx.lineWidth = 5;
  carCtx.stroke();
  carCtx.fill();

  carCtx.beginPath();
  carCtx.arc(x, y, carRadius, 0, Math.PI, false);
  carCtx.fillStyle = carPointColor;
  carCtx.fill();

  // carCtx.fillStyle = "#ecaf45";
  // carCtx.textAlign = "center";
  // carCtx.font = "40px Arial";
  // carCtx.fillText(menuLabel, x, y - 45);
};

const drawWheel = () => {
  const wheelCtx = canvas.wheelCtx;
  const carCanvas = document.getElementById("carCanvas");
  const carCtx = carCanvas.getContext("2d");

  wheelCtx.clearRect(0, 0, canvas.wheelCanvas.width, canvas.wheelCanvas.height);
  wheelCtx.save();
  wheelCtx.setTransform(1, 0, 0, 1, 0, 0);
  wheelCtx.translate(
    wheelImage.imageX + wheelImage.imageWidth / 2,
    wheelImage.imageY + wheelImage.imageHeight / 2
  );
  wheelCtx.rotate(toRadian(wheelDeg));
  // ctx.strokeRect(0 - wheelImage.imageWidth / 2, 0 - wheelImage.imageHeight / 2, wheelImage.imageWidth, wheelImage.imageHeight);

  wheelCtx.drawImage(
    wheelImage.image,
    0 - wheelImage.imageWidth / 2,
    0 - wheelImage.imageHeight / 2,
    wheelImage.imageWidth,
    wheelImage.imageHeight
  );

  carCtx.clearRect(0, 0, carCanvas.width, carCanvas.height);
  wheelCtx.restore();

  for (var i = 0; i < menuLength; i++) {
    const gap = 360 / menuLength; // 관람차 간격
    const carAngle = wheelDeg + i * gap;
    drawCar(carCtx, carAngle, i);
  }

  wheelDeg = wheelDeg > 360 ? 0 : wheelDeg + 0.05;

  requestAnimationFrame(drawWheel);
};

const Home = () => {
  useEffect(() => {
    const backgroundImage = {
      image: new Image(),
      imageWidth: 1920,
      imageHeight: 1274,
      imageX: 1,
      imageY: 1
    };
    const backgroundCanvas = document.getElementById("backgroundCanvas");
    const wheelCanvas = document.getElementById("wheelCanvas");
    const menuCanvas = document.getElementById("menuCanvas");
    const menuCtx = menuCanvas.getContext("2d");
    canvas = {
      backgroundCanvas,
      backgroundCtx: backgroundCanvas.getContext("2d"),
      wheelCanvas,
      wheelCtx: wheelCanvas.getContext("2d")
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
    backgroundImage.image.src = "/static/images/amusement-park.png";

    wheelImage = {
      image: new Image(),
      imageWidth: wheelWidth,
      imageHeight: wheelHeight,
      imageX: 765,
      imageY: 365
    };
    wheelImage.image.src = "/static/images/wheel.png";
    drawWheel();

    document.getElementById("carCanvas").addEventListener("click", function(e) {
      const menu = getMenu(this);

      menuCtx.clearRect(0, 0, canvasWidth, canvasHeight);

      if (menu !== undefined) {
        window.open("about:blank").location.href = menuInfo.link;
      }
    });

    document
      .getElementById("carCanvas")
      .addEventListener("mousemove", function(e) {
        const menu = getMenu(e, this);
        const pos = findPos(this);
        const ratio = getRatio();
        const x = (e.pageX - pos.x) * ratio;
        const y = (e.pageY - pos.y) * ratio;

        menuCtx.clearRect(0, 0, canvasWidth, canvasHeight);

        if (menu !== undefined) {
          menuCtx.fillStyle = "#ecaf45";
          menuCtx.textAlign = "center";
          menuCtx.font = "40px Arial";
          menuCtx.fillText(menu, x, y - 80);
        }
      });

    function getMenu(e, target) {
      const pos = findPos(target);
      const ratio = getRatio();
      const x = (e.pageX - pos.x) * ratio;
      const y = (e.pageY - pos.y) * ratio;
      const c = target.getContext("2d");
      const p = c.getImageData(x, y, 1, 1).data;
      const hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
      const menuInfo = getMenuInfo(hex);
      const menu = menuInfo && menuInfo.label;
      return menu;
    }

    function findPos(obj) {
      let curleft = 0;
      let curtop = 0;

      if (obj.offsetParent) {
        do {
          curleft += obj.offsetLeft;
          curtop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return { x: curleft, y: curtop };
      }
      return undefined;
    }

    function rgbToHex(r, g, b) {
      if (r > 255 || g > 255 || b > 255) throw "Invalid color component";
      return ((r << 16) | (g << 8) | b).toString(16);
    }
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
          <canvas
            id="backgroundCanvas"
            className="background-canvas"
            width={canvasWidth}
            height={canvasHeight}
          ></canvas>
          <canvas
            id="wheelCanvas"
            className="wheel-canvas"
            width={canvasWidth}
            height={canvasHeight}
          ></canvas>
          <canvas
            id="menuCanvas"
            className="menu-canvas"
            width={canvasWidth}
            height={canvasHeight}
          ></canvas>
          <canvas
            id="carCanvas"
            className="car-canvas"
            width={canvasWidth}
            height={canvasHeight}
          ></canvas>
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
        .wheel-canvas,
        .menu-canvas,
        .car-canvas {
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
};

export default Home;
