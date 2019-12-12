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
var carAngle = 0;
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
  console.log('여기', angle);
  carCtx.clearRect(0, 0, carCanvas.width, carCanvas.height);
  carCtx.beginPath();
  carCtx.arc(xPos, yPos, 50, 0, Math.PI, false);
  carCtx.fillStyle = '#272e59';
  carCtx.strokeStyle = '#272e59';
  carCtx.lineWidth = 10;
  carCtx.fill(); // carCtx.beginPath();
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

  canvas.wheelCtx.drawImage(wheelImage.image, 0 - wheelImage.imageWidth / 2, 0 - wheelImage.imageHeight / 2, wheelImage.imageWidth, wheelImage.imageHeight);
  car(wheelDeg);
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
      lineNumber: 128
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-749247884",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Hisney Land | develope hub page")), __jsx("main", {
    className: "jsx-749247884" + " " + "contents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-749247884" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Hisney Land"), __jsx("p", {
    className: "jsx-749247884" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Hub page"), __jsx("div", {
    className: "jsx-749247884" + " " + "wrap-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("canvas", {
    id: "backgroundCanvas",
    width: canvasWidth,
    height: canvasHeight,
    className: "jsx-749247884" + " " + "background-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), __jsx("canvas", {
    id: "wheelCanvas",
    width: canvasWidth,
    height: canvasHeight,
    className: "jsx-749247884" + " " + "wheel-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), __jsx("canvas", {
    id: "carCanvas",
    width: canvasWidth,
    height: canvasHeight,
    className: "jsx-749247884" + " " + "wheel-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "749247884",
    __self: this
  }, ".contents.jsx-749247884{height:100vh;}.wrap-canvas.jsx-749247884{position:relative;}.background-canvas.jsx-749247884,.wheel-canvas.jsx-749247884{position:absolute;left:0;top:0;width:100%;}.background-canvas.jsx-749247884{background-color:#fff;}.title.jsx-749247884{margin:0;width:100%;padding-top:30px;font-size:48px;text-align:center;color:#272e59;}.description.jsx-749247884{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaXp6aW40MTMvRG9jdW1lbnRzL05leHRKUy9oaXp6aW5zLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSmtCLEFBR3NCLEFBR0ssQUFJQSxBQU1JLEFBR2IsQUFRUyxTQVBQLElBaEJiLEtBR0EsQUFJUyxBQWlCVCxFQVBtQixFQUpuQixHQUxRLE1BQ0ssTUFTSSxLQVJqQixVQVNvQixrQkFDSixjQUNoQiIsImZpbGUiOiIvVXNlcnMvaGl6emluNDEzL0RvY3VtZW50cy9OZXh0SlMvaGl6emlucy5naXRodWIuaW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZcIjtcblxuY29uc3QgY2FudmFzV2lkdGggPSAxOTIwO1xuY29uc3QgY2FudmFzSGVpZ2h0ID0gMTI3NDtcbmNvbnN0IHdoZWVsV2lkdGggPSA3NDA7XG5jb25zdCB3aGVlbEhlaWdodCA9IDc0NDtcbmxldCBjYXJBbmdsZSA9IDA7XG5sZXQgd2hlZWxEZWcgPSAwO1xubGV0IGNhbnZhcyA9IHt9O1xubGV0IHdoZWVsSW1hZ2UgPSB7fTtcblxuY29uc3QgZ2V0UmF0aW8gPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhc1dpZHRoID0gMTkyMDtcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIC8gY2FudmFzV2lkdGg7XG59XG5cbmNvbnN0IHRvUmFkaWFuID0gKGRlZykgPT4ge1xuICByZXR1cm4gZGVnICogTWF0aC5QSSAvIDE4MDtcbn1cblxuY29uc3QgY2FyID0gKGFuZ2xlKSA9PiB7XG4gIGNvbnN0IGNhckNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDYW52YXMnKTtcbiAgY29uc3QgY2FyQ3R4ID0gY2FyQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNvbnN0IHhQb3MgPSBNYXRoLmNvcyh0b1JhZGlhbihhbmdsZSkpICogd2hlZWxJbWFnZS5pbWFnZVdpZHRoIC8gMjtcbiAgY29uc3QgeVBvcyA9IE1hdGguc2luKHRvUmFkaWFuKGFuZ2xlKSkgKiB3aGVlbEltYWdlLmltYWdlSGVpZ2h0IC8gMjtcbiAgY29uc29sZS5sb2coJ+yXrOq4sCcsIGFuZ2xlKTtcbiAgY2FyQ3R4LmNsZWFyUmVjdCgwLCAwLCBjYXJDYW52YXMud2lkdGgsIGNhckNhbnZhcy5oZWlnaHQpO1xuICBjYXJDdHguYmVnaW5QYXRoKCk7XG4gIGNhckN0eC5hcmMoeFBvcywgeVBvcywgNTAsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgY2FyQ3R4LmZpbGxTdHlsZSA9ICcjMjcyZTU5JztcbiAgY2FyQ3R4LnN0cm9rZVN0eWxlID0gJyMyNzJlNTknO1xuICBjYXJDdHgubGluZVdpZHRoID0gMTA7XG4gIGNhckN0eC5maWxsKCk7XG5cbiAgLy8gY2FyQ3R4LmJlZ2luUGF0aCgpO1xuICAvLyBjYXJDdHguYXJjKHhQb3MgKyAyNTAsIHlQb3MgKyAxNTAsIDEwLCBNYXRoLlBJLCBNYXRoLlBJICogMik7XG4gIC8vIGNhckN0eC5maWxsKCk7XG59XG5cbmNvbnN0IGRyYXdXaGVlbCA9ICgpID0+IHtcbiAgY29uc3QgcmF0aW8gPSBnZXRSYXRpbygpO1xuXG4gIGNhbnZhcy53aGVlbEN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndoZWVsQ2FudmFzLndpZHRoLCBjYW52YXMud2hlZWxDYW52YXMuaGVpZ2h0KTtcbiAgY2FudmFzLndoZWVsQ3R4LnNhdmUoKTtcbiAgY2FudmFzLndoZWVsQ3R4LnNldFRyYW5zZm9ybSgxLDAsMCwxLDAsMCk7XG4gIGNhbnZhcy53aGVlbEN0eC50cmFuc2xhdGUod2hlZWxJbWFnZS5pbWFnZVggKyB3aGVlbEltYWdlLmltYWdlV2lkdGggLyAyLCB3aGVlbEltYWdlLmltYWdlWSArIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHQgLyAyKTtcbiAgY2FudmFzLndoZWVsQ3R4LnJvdGF0ZSh0b1JhZGlhbih3aGVlbERlZykpO1xuICAvLyBjdHguc3Ryb2tlUmVjdCgwIC0gd2hlZWxJbWFnZS5pbWFnZVdpZHRoIC8gMiwgMCAtIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHQgLyAyLCB3aGVlbEltYWdlLmltYWdlV2lkdGgsIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHQpO1xuXG4gIC8vIGNhbnZhcy53aGVlbEN0eC5iZWdpblBhdGgoKTtcbiAgLy8gY2FudmFzLndoZWVsQ3R4LmFyYygod2hlZWxJbWFnZS5pbWFnZVdpZHRoIC8gMikgKyA0MCwgMCwgNTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgLy8gY2FudmFzLndoZWVsQ3R4LmxpbmVXaWR0aCA9IDEwO1xuICAvLyBjYW52YXMud2hlZWxDdHguc3Ryb2tlU3R5bGUgPSAnIzI3MmU1OSc7XG4gIC8vIGNhbnZhcy53aGVlbEN0eC5zdHJva2UoKTtcblxuICAvLyBjYW52YXMud2hlZWxDdHguYmVnaW5QYXRoKCk7XG4gIC8vIGNhbnZhcy53aGVlbEN0eC5hcmMoKHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCAvIDIpICsgNDAsIDAsIDUwLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIC8vIGNhbnZhcy53aGVlbEN0eC5maWxsU3R5bGUgPSAnIzI3MmU1OSc7XG4gIC8vIGNhbnZhcy53aGVlbEN0eC5zdHJva2VTdHlsZSA9ICcjMjcyZTU5JztcbiAgLy8gY2FudmFzLndoZWVsQ3R4LmxpbmVXaWR0aCA9IDEwO1xuICAvLyBjYW52YXMud2hlZWxDdHguc3Ryb2tlKCk7XG5cbiAgY2FudmFzLndoZWVsQ3R4LmRyYXdJbWFnZShcbiAgICB3aGVlbEltYWdlLmltYWdlLFxuICAgIDAgLSB3aGVlbEltYWdlLmltYWdlV2lkdGggLyAyLFxuICAgIDAgLSB3aGVlbEltYWdlLmltYWdlSGVpZ2h0IC8gMixcbiAgICB3aGVlbEltYWdlLmltYWdlV2lkdGgsXG4gICAgd2hlZWxJbWFnZS5pbWFnZUhlaWdodFxuICApO1xuXG4gIGNhcih3aGVlbERlZyk7XG5cbiAgY2FudmFzLndoZWVsQ3R4LnJlc3RvcmUoKTtcblxuICB3aGVlbERlZyA9IHdoZWVsRGVnID4gMzYwID8gMCA6IHdoZWVsRGVnICsgMC4wNTtcblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd1doZWVsKTtcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IHtcbiAgICAgIGltYWdlOiBuZXcgSW1hZ2UoKSxcbiAgICAgIGltYWdlV2lkdGg6IDE5MjAsXG4gICAgICBpbWFnZUhlaWdodDogMTI3NCxcbiAgICAgIGltYWdlWDogMSxcbiAgICAgIGltYWdlWTogMVxuICAgIH07XG5cbiAgICBjb25zdCByYXRpbyA9IGdldFJhdGlvKCk7XG4gICAgY29uc3QgYmFja2dyb3VuZENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kQ2FudmFzJyk7XG4gICAgY29uc3Qgd2hlZWxDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2hlZWxDYW52YXMnKTtcbiAgICBjYW52YXMgPSB7XG4gICAgICBiYWNrZ3JvdW5kQ2FudmFzLFxuICAgICAgYmFja2dyb3VuZEN0eDogYmFja2dyb3VuZENhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxuICAgICAgd2hlZWxDYW52YXMsXG4gICAgICB3aGVlbEN0eDogd2hlZWxDYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIH07XG5cbiAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgY2FudmFzLmJhY2tncm91bmRDdHguZHJhd0ltYWdlKFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2UsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZVgsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZVksXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZVdpZHRoLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2VIZWlnaHRcbiAgICAgICk7XG4gICAgfTtcbiAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2Uuc3JjID0gJy9zdGF0aWMvaW1hZ2VzL2FtdXNlbWVudC1wYXJrLnBuZyc7XG5cbiAgICB3aGVlbEltYWdlID0ge1xuICAgICAgaW1hZ2U6IG5ldyBJbWFnZSgpLFxuICAgICAgaW1hZ2VXaWR0aDogd2hlZWxXaWR0aCxcbiAgICAgIGltYWdlSGVpZ2h0OiB3aGVlbEhlaWdodCxcbiAgICAgIGltYWdlWDogNzY1LFxuICAgICAgaW1hZ2VZOiAzNjVcbiAgICB9O1xuICAgIHdoZWVsSW1hZ2UuaW1hZ2Uuc3JjID0gJy9zdGF0aWMvaW1hZ2VzL3doZWVsLnBuZyc7XG4gICAgZHJhd1doZWVsKCk7XG5cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SGlzbmV5IExhbmQgfCBkZXZlbG9wZSBodWIgcGFnZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKjxOYXYgLz4qL31cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGVudHNcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+SGlzbmV5IExhbmQ8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkh1YiBwYWdlPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtY2FudmFzXCI+XG4gICAgICAgICAgPGNhbnZhcyBpZD1cImJhY2tncm91bmRDYW52YXNcIiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWNhbnZhc1wiIHdpZHRoPXtjYW52YXNXaWR0aH0gaGVpZ2h0PXtjYW52YXNIZWlnaHR9PjwvY2FudmFzPlxuICAgICAgICAgIDxjYW52YXMgaWQ9XCJ3aGVlbENhbnZhc1wiIGNsYXNzTmFtZT1cIndoZWVsLWNhbnZhc1wiIHdpZHRoPXtjYW52YXNXaWR0aH0gaGVpZ2h0PXtjYW52YXNIZWlnaHR9PjwvY2FudmFzPlxuICAgICAgICAgIDxjYW52YXMgaWQ9XCJjYXJDYW52YXNcIiBjbGFzc05hbWU9XCJ3aGVlbC1jYW52YXNcIiB3aWR0aD17Y2FudmFzV2lkdGh9IGhlaWdodD17Y2FudmFzSGVpZ2h0fT48L2NhbnZhcz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250ZW50cyB7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB9XG4gICAgICAud3JhcC1jYW52YXMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuYmFja2dyb3VuZC1jYW52YXMsXG4gICAgICAud2hlZWwtY2FudmFze1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuYmFja2dyb3VuZC1jYW52YXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzI3MmU1OTtcbiAgICAgIH1cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/hizzin413/Documents/NextJS/hizzins.github.io/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.84eea443ebace37ee7e4.hot-update.js.map