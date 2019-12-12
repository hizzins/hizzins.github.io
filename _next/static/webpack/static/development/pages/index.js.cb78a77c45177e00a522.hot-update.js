webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
var _jsxFileName = "/Users/hizzin413/Documents/NextJS/hizzins.github.io/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var canvasWidth = 1920;
var canvasHeight = 1274;
var wheelWidth = 740;
var wheelHeight = 744;
var wheelDeg = 0;
var canvas = {};
var wheelImage = {};

var getRatio = function getRatio() {
  var canvasWidth = 1920;
  return window.innerWidth / canvasWidth;
};

var toRadian = function toRadian(deg) {
  return deg * Math.PI / 180;
};

var drawCar = function drawCar(carCtx, angle) {
  var carRadius = 40;
  var wheelRadius = wheelImage.imageWidth / 2;
  var r = wheelRadius + carRadius; //wheelRadius + 20;

  var xPos = Math.cos(toRadian(angle)) * r;
  var yPos = Math.sin(toRadian(angle)) * r;
  carCtx.save();
  carCtx.beginPath();
  carCtx.arc(xPos + wheelImage.imageX + r - carRadius, yPos + wheelImage.imageY + r - carRadius, carRadius, 0, Math.PI, false);
  carCtx.fillStyle = '#272e59';
  carCtx.strokeStyle = '#272e59';
  carCtx.lineWidth = 10;
  carCtx.fill();
  carCtx.beginPath();
  carCtx.arc(xPos + wheelImage.imageX + r - carRadius, yPos + wheelImage.imageY + r - carRadius, carRadius, 0, Math.PI * 2, false);
  carCtx.strokeStyle = '#272e59';
  carCtx.lineWidth = 10;
  carCtx.stroke(); // carCtx.beginPath();
  // carCtx.arc(wheelImage.imageX + r - carRadius, wheelImage.imageY + r - carRadius, r, 0, Math.PI *2, false);
  // carCtx.strokeStyle = '#dd4b39';
  // carCtx.lineWidth = 5;
  // carCtx.stroke();

  carCtx.restore();
};

var drawWheel = function drawWheel() {
  var wheelCtx = canvas.wheelCtx;
  var carCanvas = document.getElementById('carCanvas');
  var carCtx = carCanvas.getContext('2d');
  wheelCtx.clearRect(0, 0, canvas.wheelCanvas.width, canvas.wheelCanvas.height);
  wheelCtx.save();
  wheelCtx.setTransform(1, 0, 0, 1, 0, 0);
  wheelCtx.translate(wheelImage.imageX + wheelImage.imageWidth / 2, wheelImage.imageY + wheelImage.imageHeight / 2);
  wheelCtx.rotate(toRadian(wheelDeg)); // ctx.strokeRect(0 - wheelImage.imageWidth / 2, 0 - wheelImage.imageHeight / 2, wheelImage.imageWidth, wheelImage.imageHeight);

  wheelCtx.drawImage(wheelImage.image, 0 - wheelImage.imageWidth / 2, 0 - wheelImage.imageHeight / 2, wheelImage.imageWidth, wheelImage.imageHeight);
  carCtx.clearRect(0, 0, carCanvas.width, carCanvas.height);

  for (var i = 0; i < 11; i++) {
    var carAngle = wheelDeg + i * 36;
    console.log('여기', carAngle);
    drawCar(carCtx, carAngle);
  }

  wheelCtx.restore();
  wheelDeg = wheelDeg > 360 ? 0 : wheelDeg + 0.05; // wheelDeg = wheelDeg > 360 ? 0 : wheelDeg + 0.5; // 테스트용

  requestAnimationFrame(drawWheel);
};

var Home = function Home() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var backgroundImage = {
      image: new Image(),
      imageWidth: 1920,
      imageHeight: 1274,
      imageX: 1,
      imageY: 1
    };
    var ratio = getRatio();
    var backgroundCanvas = document.getElementById('backgroundCanvas');
    var wheelCanvas = document.getElementById('wheelCanvas');
    canvas = {
      backgroundCanvas: backgroundCanvas,
      backgroundCtx: backgroundCanvas.getContext('2d'),
      wheelCanvas: wheelCanvas,
      wheelCtx: wheelCanvas.getContext('2d')
    };

    backgroundImage.image.onload = function () {
      canvas.backgroundCtx.drawImage(backgroundImage.image, backgroundImage.imageX, backgroundImage.imageY, backgroundImage.imageWidth, backgroundImage.imageHeight);
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
  return __jsx("div", {
    className: "jsx-749247884",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-749247884",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Hisney Land | develope hub page")), __jsx("main", {
    className: "jsx-749247884" + " " + "contents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-749247884" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Hisney Land"), __jsx("p", {
    className: "jsx-749247884" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Hub page"), __jsx("div", {
    className: "jsx-749247884" + " " + "wrap-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("canvas", {
    id: "backgroundCanvas",
    width: canvasWidth,
    height: canvasHeight,
    className: "jsx-749247884" + " " + "background-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx("canvas", {
    id: "wheelCanvas",
    width: canvasWidth,
    height: canvasHeight,
    className: "jsx-749247884" + " " + "wheel-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), __jsx("canvas", {
    id: "carCanvas",
    width: canvasWidth,
    height: canvasHeight,
    className: "jsx-749247884" + " " + "wheel-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "749247884",
    __self: this
  }, ".contents.jsx-749247884{height:100vh;}.wrap-canvas.jsx-749247884{position:relative;}.background-canvas.jsx-749247884,.wheel-canvas.jsx-749247884{position:absolute;left:0;top:0;width:100%;}.background-canvas.jsx-749247884{background-color:#fff;}.title.jsx-749247884{margin:0;width:100%;padding-top:30px;font-size:48px;text-align:center;color:#272e59;}.description.jsx-749247884{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaXp6aW40MTMvRG9jdW1lbnRzL05leHRKUy9oaXp6aW5zLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SmtCLEFBR3NCLEFBR0ssQUFJQSxBQU1JLEFBR2IsQUFRUyxTQVBQLElBaEJiLEtBR0EsQUFJUyxBQWlCVCxFQVBtQixFQUpuQixHQUxRLE1BQ0ssTUFTSSxLQVJqQixVQVNvQixrQkFDSixjQUNoQiIsImZpbGUiOiIvVXNlcnMvaGl6emluNDEzL0RvY3VtZW50cy9OZXh0SlMvaGl6emlucy5naXRodWIuaW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZcIjtcblxuY29uc3QgY2FudmFzV2lkdGggPSAxOTIwO1xuY29uc3QgY2FudmFzSGVpZ2h0ID0gMTI3NDtcbmNvbnN0IHdoZWVsV2lkdGggPSA3NDA7XG5jb25zdCB3aGVlbEhlaWdodCA9IDc0NDtcbmxldCB3aGVlbERlZyA9IDA7XG5sZXQgY2FudmFzID0ge307XG5sZXQgd2hlZWxJbWFnZSA9IHt9O1xuXG5jb25zdCBnZXRSYXRpbyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzV2lkdGggPSAxOTIwO1xuICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggLyBjYW52YXNXaWR0aDtcbn1cblxuY29uc3QgdG9SYWRpYW4gPSAoZGVnKSA9PiB7XG4gIHJldHVybiBkZWcgKiBNYXRoLlBJIC8gMTgwO1xufVxuXG5jb25zdCBkcmF3Q2FyID0gKGNhckN0eCwgYW5nbGUpID0+IHtcbiAgY29uc3QgY2FyUmFkaXVzID0gNDA7XG4gIGNvbnN0IHdoZWVsUmFkaXVzID0gd2hlZWxJbWFnZS5pbWFnZVdpZHRoIC8gMjtcbiAgY29uc3QgciA9IHdoZWVsUmFkaXVzICsgY2FyUmFkaXVzOyAvL3doZWVsUmFkaXVzICsgMjA7XG4gIGNvbnN0IHhQb3MgPSBNYXRoLmNvcyh0b1JhZGlhbihhbmdsZSkpICogcjtcbiAgY29uc3QgeVBvcyA9IE1hdGguc2luKHRvUmFkaWFuKGFuZ2xlKSkgKiByO1xuXG4gIGNhckN0eC5zYXZlKCk7XG4gIGNhckN0eC5iZWdpblBhdGgoKTtcbiAgY2FyQ3R4LmFyYyh4UG9zICsgd2hlZWxJbWFnZS5pbWFnZVggKyByIC0gY2FyUmFkaXVzLCB5UG9zICsgd2hlZWxJbWFnZS5pbWFnZVkgKyByIC0gY2FyUmFkaXVzLCBjYXJSYWRpdXMsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgY2FyQ3R4LmZpbGxTdHlsZSA9ICcjMjcyZTU5JztcbiAgY2FyQ3R4LnN0cm9rZVN0eWxlID0gJyMyNzJlNTknO1xuICBjYXJDdHgubGluZVdpZHRoID0gMTA7XG4gIGNhckN0eC5maWxsKCk7XG5cbiAgY2FyQ3R4LmJlZ2luUGF0aCgpO1xuICBjYXJDdHguYXJjKHhQb3MgKyB3aGVlbEltYWdlLmltYWdlWCArIHIgLSBjYXJSYWRpdXMsIHlQb3MgKyB3aGVlbEltYWdlLmltYWdlWSArIHIgLSBjYXJSYWRpdXMsIGNhclJhZGl1cywgMCwgTWF0aC5QSSAqMiwgZmFsc2UpO1xuICBjYXJDdHguc3Ryb2tlU3R5bGUgPSAnIzI3MmU1OSc7XG4gIGNhckN0eC5saW5lV2lkdGggPSAxMDtcbiAgY2FyQ3R4LnN0cm9rZSgpO1xuXG4gIC8vIGNhckN0eC5iZWdpblBhdGgoKTtcbiAgLy8gY2FyQ3R4LmFyYyh3aGVlbEltYWdlLmltYWdlWCArIHIgLSBjYXJSYWRpdXMsIHdoZWVsSW1hZ2UuaW1hZ2VZICsgciAtIGNhclJhZGl1cywgciwgMCwgTWF0aC5QSSAqMiwgZmFsc2UpO1xuICAvLyBjYXJDdHguc3Ryb2tlU3R5bGUgPSAnI2RkNGIzOSc7XG4gIC8vIGNhckN0eC5saW5lV2lkdGggPSA1O1xuICAvLyBjYXJDdHguc3Ryb2tlKCk7XG5cbiAgY2FyQ3R4LnJlc3RvcmUoKTtcbn1cblxuY29uc3QgZHJhd1doZWVsID0gKCkgPT4ge1xuICBjb25zdCB3aGVlbEN0eCA9IGNhbnZhcy53aGVlbEN0eDtcbiAgY29uc3QgY2FyQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhckNhbnZhcycpO1xuICBjb25zdCBjYXJDdHggPSBjYXJDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgXG4gIHdoZWVsQ3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2hlZWxDYW52YXMud2lkdGgsIGNhbnZhcy53aGVlbENhbnZhcy5oZWlnaHQpO1xuICB3aGVlbEN0eC5zYXZlKCk7XG4gIHdoZWVsQ3R4LnNldFRyYW5zZm9ybSgxLDAsMCwxLDAsMCk7XG4gIHdoZWVsQ3R4LnRyYW5zbGF0ZSh3aGVlbEltYWdlLmltYWdlWCArIHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCAvIDIsIHdoZWVsSW1hZ2UuaW1hZ2VZICsgd2hlZWxJbWFnZS5pbWFnZUhlaWdodCAvIDIpO1xuICB3aGVlbEN0eC5yb3RhdGUodG9SYWRpYW4od2hlZWxEZWcpKTtcbiAgLy8gY3R4LnN0cm9rZVJlY3QoMCAtIHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCAvIDIsIDAgLSB3aGVlbEltYWdlLmltYWdlSGVpZ2h0IC8gMiwgd2hlZWxJbWFnZS5pbWFnZVdpZHRoLCB3aGVlbEltYWdlLmltYWdlSGVpZ2h0KTtcblxuXG4gIHdoZWVsQ3R4LmRyYXdJbWFnZShcbiAgICB3aGVlbEltYWdlLmltYWdlLFxuICAgIDAgLSB3aGVlbEltYWdlLmltYWdlV2lkdGggLyAyLFxuICAgIDAgLSB3aGVlbEltYWdlLmltYWdlSGVpZ2h0IC8gMixcbiAgICB3aGVlbEltYWdlLmltYWdlV2lkdGgsXG4gICAgd2hlZWxJbWFnZS5pbWFnZUhlaWdodFxuICApO1xuXG5cbiAgY2FyQ3R4LmNsZWFyUmVjdCgwLCAwLCBjYXJDYW52YXMud2lkdGgsIGNhckNhbnZhcy5oZWlnaHQpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMTE7IGkrKykge1xuICAgIGNvbnN0IGNhckFuZ2xlID0gd2hlZWxEZWcgKyAoaSAqIDM2KTtcbiAgICBjb25zb2xlLmxvZygn7Jes6riwJywgY2FyQW5nbGUpO1xuICAgIGRyYXdDYXIoY2FyQ3R4LCBjYXJBbmdsZSk7XG4gIH1cblxuXG4gIHdoZWVsQ3R4LnJlc3RvcmUoKTtcblxuICB3aGVlbERlZyA9IHdoZWVsRGVnID4gMzYwID8gMCA6IHdoZWVsRGVnICsgMC4wNTtcbiAgLy8gd2hlZWxEZWcgPSB3aGVlbERlZyA+IDM2MCA/IDAgOiB3aGVlbERlZyArIDAuNTsgLy8g7YWM7Iqk7Yq47JqpXG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdXaGVlbCk7XG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSB7XG4gICAgICBpbWFnZTogbmV3IEltYWdlKCksXG4gICAgICBpbWFnZVdpZHRoOiAxOTIwLFxuICAgICAgaW1hZ2VIZWlnaHQ6IDEyNzQsXG4gICAgICBpbWFnZVg6IDEsXG4gICAgICBpbWFnZVk6IDFcbiAgICB9O1xuXG4gICAgY29uc3QgcmF0aW8gPSBnZXRSYXRpbygpO1xuICAgIGNvbnN0IGJhY2tncm91bmRDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZENhbnZhcycpO1xuICAgIGNvbnN0IHdoZWVsQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3doZWVsQ2FudmFzJyk7XG4gICAgY2FudmFzID0ge1xuICAgICAgYmFja2dyb3VuZENhbnZhcyxcbiAgICAgIGJhY2tncm91bmRDdHg6IGJhY2tncm91bmRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgIHdoZWVsQ2FudmFzLFxuICAgICAgd2hlZWxDdHg6IHdoZWVsQ2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB9O1xuXG4gICAgYmFja2dyb3VuZEltYWdlLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGNhbnZhcy5iYWNrZ3JvdW5kQ3R4LmRyYXdJbWFnZShcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2VYLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2VZLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2VXaWR0aCxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlSGVpZ2h0XG4gICAgICApO1xuICAgIH07XG4gICAgYmFja2dyb3VuZEltYWdlLmltYWdlLnNyYyA9ICcvc3RhdGljL2ltYWdlcy9hbXVzZW1lbnQtcGFyay5wbmcnO1xuXG4gICAgd2hlZWxJbWFnZSA9IHtcbiAgICAgIGltYWdlOiBuZXcgSW1hZ2UoKSxcbiAgICAgIGltYWdlV2lkdGg6IHdoZWVsV2lkdGgsXG4gICAgICBpbWFnZUhlaWdodDogd2hlZWxIZWlnaHQsXG4gICAgICBpbWFnZVg6IDc2NSxcbiAgICAgIGltYWdlWTogMzY1XG4gICAgfTtcbiAgICB3aGVlbEltYWdlLmltYWdlLnNyYyA9ICcvc3RhdGljL2ltYWdlcy93aGVlbC5wbmcnO1xuICAgIGRyYXdXaGVlbCgpO1xuXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhpc25leSBMYW5kIHwgZGV2ZWxvcGUgaHViIHBhZ2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICB7Lyo8TmF2IC8+Ki99XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnRzXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkhpc25leSBMYW5kPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5IdWIgcGFnZTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWNhbnZhc1wiPlxuICAgICAgICAgIDxjYW52YXMgaWQ9XCJiYWNrZ3JvdW5kQ2FudmFzXCIgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1jYW52YXNcIiB3aWR0aD17Y2FudmFzV2lkdGh9IGhlaWdodD17Y2FudmFzSGVpZ2h0fT48L2NhbnZhcz5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwid2hlZWxDYW52YXNcIiBjbGFzc05hbWU9XCJ3aGVlbC1jYW52YXNcIiB3aWR0aD17Y2FudmFzV2lkdGh9IGhlaWdodD17Y2FudmFzSGVpZ2h0fT48L2NhbnZhcz5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwiY2FyQ2FudmFzXCIgY2xhc3NOYW1lPVwid2hlZWwtY2FudmFzXCIgd2lkdGg9e2NhbnZhc1dpZHRofSBoZWlnaHQ9e2NhbnZhc0hlaWdodH0+PC9jYW52YXM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGVudHMge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgfVxuICAgICAgLndyYXAtY2FudmFzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmJhY2tncm91bmQtY2FudmFzLFxuICAgICAgLndoZWVsLWNhbnZhc3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmJhY2tncm91bmQtY2FudmFzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICMyNzJlNTk7XG4gICAgICB9XG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/hizzin413/Documents/NextJS/hizzins.github.io/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.cb78a77c45177e00a522.hot-update.js.map