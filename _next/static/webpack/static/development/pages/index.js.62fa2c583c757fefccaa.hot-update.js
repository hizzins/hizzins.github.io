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

var car = function car(angle) {
  var carCanvas = document.getElementById('carCanvas');
  var carCtx = carCanvas.getContext('2d');
  var xPos = Math.cos(toRadian(angle)) * wheelImage.imageWidth / 2;
  var yPos = Math.sin(toRadian(angle)) * wheelImage.imageHeight / 2;
  console.log('여기 carCtx', carCtx); // carCtx.clearRect(0, 0, canvas.width, canvas.height);
  // carCtx.beginPath();
  // carCtx.arc(wheelImage.imageX + 40, 0, 50, 0, Math.PI, false);
  // carCtx.fillStyle = '#272e59';
  // carCtx.strokeStyle = '#272e59';
  // carCtx.lineWidth = 10;
  // carCtx.fill();
  // carCtx.beginPath();
  // carCtx.arc(xPos + 250, yPos + 150, 10, Math.PI, Math.PI * 2);
  // carCtx.fill();
};

var drawWheel = function drawWheel() {
  var ratio = getRatio();
  canvas.wheelCtx.clearRect(0, 0, canvas.wheelCanvas.width, canvas.wheelCanvas.height);
  canvas.wheelCtx.save();
  canvas.wheelCtx.setTransform(1, 0, 0, 1, 0, 0);
  canvas.wheelCtx.translate(wheelImage.imageX + wheelImage.imageWidth / 2, wheelImage.imageY + wheelImage.imageHeight / 2);
  canvas.wheelCtx.rotate(toRadian(wheelDeg)); // ctx.strokeRect(0 - wheelImage.imageWidth / 2, 0 - wheelImage.imageHeight / 2, wheelImage.imageWidth, wheelImage.imageHeight);
  // canvas.wheelCtx.beginPath();
  // canvas.wheelCtx.arc((wheelImage.imageWidth / 2) + 40, 0, 50, 0, Math.PI * 2);
  // canvas.wheelCtx.lineWidth = 10;
  // canvas.wheelCtx.strokeStyle = '#272e59';
  // canvas.wheelCtx.stroke();
  // canvas.wheelCtx.beginPath();
  // canvas.wheelCtx.arc((wheelImage.imageWidth / 2) + 40, 0, 50, 0, Math.PI, false);
  // canvas.wheelCtx.fillStyle = '#272e59';
  // canvas.wheelCtx.strokeStyle = '#272e59';
  // canvas.wheelCtx.lineWidth = 10;
  // canvas.wheelCtx.stroke();

  canvas.wheelCtx.drawImage(wheelImage.image, 0 - wheelImage.imageWidth / 2, 0 - wheelImage.imageHeight / 2, wheelImage.imageWidth, wheelImage.imageHeight); // car(wheelDeg);

  canvas.wheelCtx.restore();
  wheelDeg = wheelDeg > 360 ? 0 : wheelDeg + 0.05;
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
      lineNumber: 127
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-749247884",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Hisney Land | develope hub page")), __jsx("main", {
    className: "jsx-749247884" + " " + "contents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-749247884" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Hisney Land"), __jsx("p", {
    className: "jsx-749247884" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Hub page"), __jsx("div", {
    className: "jsx-749247884" + " " + "wrap-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("canvas", {
    id: "backgroundCanvas",
    width: canvasWidth,
    height: canvasHeight,
    className: "jsx-749247884" + " " + "background-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), __jsx("canvas", {
    id: "wheelCanvas",
    width: canvasWidth,
    height: canvasHeight,
    className: "jsx-749247884" + " " + "wheel-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), __jsx("canvas", {
    id: "carCanvas",
    width: canvasWidth,
    height: canvasHeight,
    className: "jsx-749247884" + " " + "wheel-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "749247884",
    __self: this
  }, ".contents.jsx-749247884{height:100vh;}.wrap-canvas.jsx-749247884{position:relative;}.background-canvas.jsx-749247884,.wheel-canvas.jsx-749247884{position:absolute;left:0;top:0;width:100%;}.background-canvas.jsx-749247884{background-color:#fff;}.title.jsx-749247884{margin:0;width:100%;padding-top:30px;font-size:48px;text-align:center;color:#272e59;}.description.jsx-749247884{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaXp6aW40MTMvRG9jdW1lbnRzL05leHRKUy9oaXp6aW5zLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSWtCLEFBR3NCLEFBR0ssQUFJQSxBQU1JLEFBR2IsQUFRUyxTQVBQLElBaEJiLEtBR0EsQUFJUyxBQWlCVCxFQVBtQixFQUpuQixHQUxRLE1BQ0ssTUFTSSxLQVJqQixVQVNvQixrQkFDSixjQUNoQiIsImZpbGUiOiIvVXNlcnMvaGl6emluNDEzL0RvY3VtZW50cy9OZXh0SlMvaGl6emlucy5naXRodWIuaW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZcIjtcblxuY29uc3QgY2FudmFzV2lkdGggPSAxOTIwO1xuY29uc3QgY2FudmFzSGVpZ2h0ID0gMTI3NDtcbmNvbnN0IHdoZWVsV2lkdGggPSA3NDA7XG5jb25zdCB3aGVlbEhlaWdodCA9IDc0NDtcbmxldCB3aGVlbERlZyA9IDA7XG5sZXQgY2FudmFzID0ge307XG5sZXQgd2hlZWxJbWFnZSA9IHt9O1xuXG5jb25zdCBnZXRSYXRpbyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzV2lkdGggPSAxOTIwO1xuICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggLyBjYW52YXNXaWR0aDtcbn1cblxuY29uc3QgdG9SYWRpYW4gPSAoZGVnKSA9PiB7XG4gIHJldHVybiBkZWcgKiBNYXRoLlBJIC8gMTgwO1xufVxuXG5jb25zdCBjYXIgPSAoYW5nbGUpID0+IHtcbiAgY29uc3QgY2FyQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhckNhbnZhcycpO1xuICBjb25zdCBjYXJDdHggPSBjYXJDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3QgeFBvcyA9IE1hdGguY29zKHRvUmFkaWFuKGFuZ2xlKSkgKiB3aGVlbEltYWdlLmltYWdlV2lkdGggLyAyO1xuICBjb25zdCB5UG9zID0gTWF0aC5zaW4odG9SYWRpYW4oYW5nbGUpKSAqIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHQgLyAyO1xuICBjb25zb2xlLmxvZygn7Jes6riwIGNhckN0eCcsIGNhckN0eCk7XG4gIC8vIGNhckN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgLy8gY2FyQ3R4LmJlZ2luUGF0aCgpO1xuICAvLyBjYXJDdHguYXJjKHdoZWVsSW1hZ2UuaW1hZ2VYICsgNDAsIDAsIDUwLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIC8vIGNhckN0eC5maWxsU3R5bGUgPSAnIzI3MmU1OSc7XG4gIC8vIGNhckN0eC5zdHJva2VTdHlsZSA9ICcjMjcyZTU5JztcbiAgLy8gY2FyQ3R4LmxpbmVXaWR0aCA9IDEwO1xuICAvLyBjYXJDdHguZmlsbCgpO1xuXG4gIC8vIGNhckN0eC5iZWdpblBhdGgoKTtcbiAgLy8gY2FyQ3R4LmFyYyh4UG9zICsgMjUwLCB5UG9zICsgMTUwLCAxMCwgTWF0aC5QSSwgTWF0aC5QSSAqIDIpO1xuICAvLyBjYXJDdHguZmlsbCgpO1xufVxuXG5jb25zdCBkcmF3V2hlZWwgPSAoKSA9PiB7XG4gIGNvbnN0IHJhdGlvID0gZ2V0UmF0aW8oKTtcblxuICBjYW52YXMud2hlZWxDdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aGVlbENhbnZhcy53aWR0aCwgY2FudmFzLndoZWVsQ2FudmFzLmhlaWdodCk7XG4gIGNhbnZhcy53aGVlbEN0eC5zYXZlKCk7XG4gIGNhbnZhcy53aGVlbEN0eC5zZXRUcmFuc2Zvcm0oMSwwLDAsMSwwLDApO1xuICBjYW52YXMud2hlZWxDdHgudHJhbnNsYXRlKHdoZWVsSW1hZ2UuaW1hZ2VYICsgd2hlZWxJbWFnZS5pbWFnZVdpZHRoIC8gMiwgd2hlZWxJbWFnZS5pbWFnZVkgKyB3aGVlbEltYWdlLmltYWdlSGVpZ2h0IC8gMik7XG4gIGNhbnZhcy53aGVlbEN0eC5yb3RhdGUodG9SYWRpYW4od2hlZWxEZWcpKTtcbiAgLy8gY3R4LnN0cm9rZVJlY3QoMCAtIHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCAvIDIsIDAgLSB3aGVlbEltYWdlLmltYWdlSGVpZ2h0IC8gMiwgd2hlZWxJbWFnZS5pbWFnZVdpZHRoLCB3aGVlbEltYWdlLmltYWdlSGVpZ2h0KTtcblxuICAvLyBjYW52YXMud2hlZWxDdHguYmVnaW5QYXRoKCk7XG4gIC8vIGNhbnZhcy53aGVlbEN0eC5hcmMoKHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCAvIDIpICsgNDAsIDAsIDUwLCAwLCBNYXRoLlBJICogMik7XG4gIC8vIGNhbnZhcy53aGVlbEN0eC5saW5lV2lkdGggPSAxMDtcbiAgLy8gY2FudmFzLndoZWVsQ3R4LnN0cm9rZVN0eWxlID0gJyMyNzJlNTknO1xuICAvLyBjYW52YXMud2hlZWxDdHguc3Ryb2tlKCk7XG5cbiAgLy8gY2FudmFzLndoZWVsQ3R4LmJlZ2luUGF0aCgpO1xuICAvLyBjYW52YXMud2hlZWxDdHguYXJjKCh3aGVlbEltYWdlLmltYWdlV2lkdGggLyAyKSArIDQwLCAwLCA1MCwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAvLyBjYW52YXMud2hlZWxDdHguZmlsbFN0eWxlID0gJyMyNzJlNTknO1xuICAvLyBjYW52YXMud2hlZWxDdHguc3Ryb2tlU3R5bGUgPSAnIzI3MmU1OSc7XG4gIC8vIGNhbnZhcy53aGVlbEN0eC5saW5lV2lkdGggPSAxMDtcbiAgLy8gY2FudmFzLndoZWVsQ3R4LnN0cm9rZSgpO1xuXG4gIGNhbnZhcy53aGVlbEN0eC5kcmF3SW1hZ2UoXG4gICAgd2hlZWxJbWFnZS5pbWFnZSxcbiAgICAwIC0gd2hlZWxJbWFnZS5pbWFnZVdpZHRoIC8gMixcbiAgICAwIC0gd2hlZWxJbWFnZS5pbWFnZUhlaWdodCAvIDIsXG4gICAgd2hlZWxJbWFnZS5pbWFnZVdpZHRoLFxuICAgIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHRcbiAgKTtcblxuICAvLyBjYXIod2hlZWxEZWcpO1xuXG4gIGNhbnZhcy53aGVlbEN0eC5yZXN0b3JlKCk7XG5cbiAgd2hlZWxEZWcgPSB3aGVlbERlZyA+IDM2MCA/IDAgOiB3aGVlbERlZyArIDAuMDU7XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdXaGVlbCk7XG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSB7XG4gICAgICBpbWFnZTogbmV3IEltYWdlKCksXG4gICAgICBpbWFnZVdpZHRoOiAxOTIwLFxuICAgICAgaW1hZ2VIZWlnaHQ6IDEyNzQsXG4gICAgICBpbWFnZVg6IDEsXG4gICAgICBpbWFnZVk6IDFcbiAgICB9O1xuXG4gICAgY29uc3QgcmF0aW8gPSBnZXRSYXRpbygpO1xuICAgIGNvbnN0IGJhY2tncm91bmRDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZENhbnZhcycpO1xuICAgIGNvbnN0IHdoZWVsQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3doZWVsQ2FudmFzJyk7XG4gICAgY2FudmFzID0ge1xuICAgICAgYmFja2dyb3VuZENhbnZhcyxcbiAgICAgIGJhY2tncm91bmRDdHg6IGJhY2tncm91bmRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgIHdoZWVsQ2FudmFzLFxuICAgICAgd2hlZWxDdHg6IHdoZWVsQ2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB9O1xuXG4gICAgYmFja2dyb3VuZEltYWdlLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGNhbnZhcy5iYWNrZ3JvdW5kQ3R4LmRyYXdJbWFnZShcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2VYLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2VZLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2VXaWR0aCxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlSGVpZ2h0XG4gICAgICApO1xuICAgIH07XG4gICAgYmFja2dyb3VuZEltYWdlLmltYWdlLnNyYyA9ICcvc3RhdGljL2ltYWdlcy9hbXVzZW1lbnQtcGFyay5wbmcnO1xuXG4gICAgd2hlZWxJbWFnZSA9IHtcbiAgICAgIGltYWdlOiBuZXcgSW1hZ2UoKSxcbiAgICAgIGltYWdlV2lkdGg6IHdoZWVsV2lkdGgsXG4gICAgICBpbWFnZUhlaWdodDogd2hlZWxIZWlnaHQsXG4gICAgICBpbWFnZVg6IDc2NSxcbiAgICAgIGltYWdlWTogMzY1XG4gICAgfTtcbiAgICB3aGVlbEltYWdlLmltYWdlLnNyYyA9ICcvc3RhdGljL2ltYWdlcy93aGVlbC5wbmcnO1xuICAgIGRyYXdXaGVlbCgpO1xuXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhpc25leSBMYW5kIHwgZGV2ZWxvcGUgaHViIHBhZ2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICB7Lyo8TmF2IC8+Ki99XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnRzXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkhpc25leSBMYW5kPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5IdWIgcGFnZTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWNhbnZhc1wiPlxuICAgICAgICAgIDxjYW52YXMgaWQ9XCJiYWNrZ3JvdW5kQ2FudmFzXCIgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1jYW52YXNcIiB3aWR0aD17Y2FudmFzV2lkdGh9IGhlaWdodD17Y2FudmFzSGVpZ2h0fT48L2NhbnZhcz5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwid2hlZWxDYW52YXNcIiBjbGFzc05hbWU9XCJ3aGVlbC1jYW52YXNcIiB3aWR0aD17Y2FudmFzV2lkdGh9IGhlaWdodD17Y2FudmFzSGVpZ2h0fT48L2NhbnZhcz5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwiY2FyQ2FudmFzXCIgY2xhc3NOYW1lPVwid2hlZWwtY2FudmFzXCIgd2lkdGg9e2NhbnZhc1dpZHRofSBoZWlnaHQ9e2NhbnZhc0hlaWdodH0+PC9jYW52YXM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGVudHMge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgfVxuICAgICAgLndyYXAtY2FudmFzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmJhY2tncm91bmQtY2FudmFzLFxuICAgICAgLndoZWVsLWNhbnZhc3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmJhY2tncm91bmQtY2FudmFzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICMyNzJlNTk7XG4gICAgICB9XG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/hizzin413/Documents/NextJS/hizzins.github.io/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.62fa2c583c757fefccaa.hot-update.js.map