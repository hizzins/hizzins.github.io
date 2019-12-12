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
  var carCtx = document.getElementById('carCanvas');
  var xPos = Math.cos(toRadian(angle)) * wheelImage.imageWidth / 2;
  var yPos = Math.sin(toRadian(angle)) * wheelImage.imageHeight / 2;
  carCtx.beginPath();
  carCtx.arc(wheelImage.imageWidth / 2 + 40, 0, 50, 0, Math.PI, false);
  carCtx.fillStyle = '#272e59';
  carCtx.strokeStyle = '#272e59';
  carCtx.lineWidth = 10;
  carCtx.fill();
  carCtx.stroke();
  canvas.wheelCtx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.wheelCtx.beginPath();
  canvas.wheelCtx.arc(xPos + 250, yPos + 150, 10, Math.PI, Math.PI * 2);
  canvas.wheelCtx.fill();
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
  }, ".contents.jsx-749247884{height:100vh;}.wrap-canvas.jsx-749247884{position:relative;}.background-canvas.jsx-749247884,.wheel-canvas.jsx-749247884{position:absolute;left:0;top:0;width:100%;}.background-canvas.jsx-749247884{background-color:#fff;}.title.jsx-749247884{margin:0;width:100%;padding-top:30px;font-size:48px;text-align:center;color:#272e59;}.description.jsx-749247884{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaXp6aW40MTMvRG9jdW1lbnRzL05leHRKUy9oaXp6aW5zLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSWtCLEFBR3NCLEFBR0ssQUFJQSxBQU1JLEFBR2IsQUFRUyxTQVBQLElBaEJiLEtBR0EsQUFJUyxBQWlCVCxFQVBtQixFQUpuQixHQUxRLE1BQ0ssTUFTSSxLQVJqQixVQVNvQixrQkFDSixjQUNoQiIsImZpbGUiOiIvVXNlcnMvaGl6emluNDEzL0RvY3VtZW50cy9OZXh0SlMvaGl6emlucy5naXRodWIuaW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZcIjtcblxuY29uc3QgY2FudmFzV2lkdGggPSAxOTIwO1xuY29uc3QgY2FudmFzSGVpZ2h0ID0gMTI3NDtcbmNvbnN0IHdoZWVsV2lkdGggPSA3NDA7XG5jb25zdCB3aGVlbEhlaWdodCA9IDc0NDtcbmxldCB3aGVlbERlZyA9IDA7XG5sZXQgY2FudmFzID0ge307XG5sZXQgd2hlZWxJbWFnZSA9IHt9O1xuXG5jb25zdCBnZXRSYXRpbyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzV2lkdGggPSAxOTIwO1xuICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggLyBjYW52YXNXaWR0aDtcbn1cblxuY29uc3QgdG9SYWRpYW4gPSAoZGVnKSA9PiB7XG4gIHJldHVybiBkZWcgKiBNYXRoLlBJIC8gMTgwO1xufVxuXG5jb25zdCBjYXIgPSAoYW5nbGUpID0+IHtcbiAgY29uc3QgY2FyQ3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhckNhbnZhcycpO1xuICBjb25zdCB4UG9zID0gTWF0aC5jb3ModG9SYWRpYW4oYW5nbGUpKSAqIHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCAvIDI7XG4gIGNvbnN0IHlQb3MgPSBNYXRoLnNpbih0b1JhZGlhbihhbmdsZSkpICogd2hlZWxJbWFnZS5pbWFnZUhlaWdodCAvIDI7XG4gIFxuICBjYXJDdHguYmVnaW5QYXRoKCk7XG4gIGNhckN0eC5hcmMoKHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCAvIDIpICsgNDAsIDAsIDUwLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIGNhckN0eC5maWxsU3R5bGUgPSAnIzI3MmU1OSc7XG4gIGNhckN0eC5zdHJva2VTdHlsZSA9ICcjMjcyZTU5JztcbiAgY2FyQ3R4LmxpbmVXaWR0aCA9IDEwO1xuICBjYXJDdHguZmlsbCgpO1xuICBjYXJDdHguc3Ryb2tlKCk7XG5cbiAgY2FudmFzLndoZWVsQ3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjYW52YXMud2hlZWxDdHguYmVnaW5QYXRoKCk7XG4gIGNhbnZhcy53aGVlbEN0eC5hcmMoeFBvcyArIDI1MCwgeVBvcyArIDE1MCwgMTAsIE1hdGguUEksIE1hdGguUEkgKiAyKTtcbiAgY2FudmFzLndoZWVsQ3R4LmZpbGwoKTtcbn1cblxuY29uc3QgZHJhd1doZWVsID0gKCkgPT4ge1xuICBjb25zdCByYXRpbyA9IGdldFJhdGlvKCk7XG5cbiAgY2FudmFzLndoZWVsQ3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2hlZWxDYW52YXMud2lkdGgsIGNhbnZhcy53aGVlbENhbnZhcy5oZWlnaHQpO1xuICBjYW52YXMud2hlZWxDdHguc2F2ZSgpO1xuICBjYW52YXMud2hlZWxDdHguc2V0VHJhbnNmb3JtKDEsMCwwLDEsMCwwKTtcbiAgY2FudmFzLndoZWVsQ3R4LnRyYW5zbGF0ZSh3aGVlbEltYWdlLmltYWdlWCArIHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCAvIDIsIHdoZWVsSW1hZ2UuaW1hZ2VZICsgd2hlZWxJbWFnZS5pbWFnZUhlaWdodCAvIDIpO1xuICBjYW52YXMud2hlZWxDdHgucm90YXRlKHRvUmFkaWFuKHdoZWVsRGVnKSk7XG4gIC8vIGN0eC5zdHJva2VSZWN0KDAgLSB3aGVlbEltYWdlLmltYWdlV2lkdGggLyAyLCAwIC0gd2hlZWxJbWFnZS5pbWFnZUhlaWdodCAvIDIsIHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCwgd2hlZWxJbWFnZS5pbWFnZUhlaWdodCk7XG5cbiAgLy8gY2FudmFzLndoZWVsQ3R4LmJlZ2luUGF0aCgpO1xuICAvLyBjYW52YXMud2hlZWxDdHguYXJjKCh3aGVlbEltYWdlLmltYWdlV2lkdGggLyAyKSArIDQwLCAwLCA1MCwgMCwgTWF0aC5QSSAqIDIpO1xuICAvLyBjYW52YXMud2hlZWxDdHgubGluZVdpZHRoID0gMTA7XG4gIC8vIGNhbnZhcy53aGVlbEN0eC5zdHJva2VTdHlsZSA9ICcjMjcyZTU5JztcbiAgLy8gY2FudmFzLndoZWVsQ3R4LnN0cm9rZSgpO1xuXG4gIC8vIGNhbnZhcy53aGVlbEN0eC5iZWdpblBhdGgoKTtcbiAgLy8gY2FudmFzLndoZWVsQ3R4LmFyYygod2hlZWxJbWFnZS5pbWFnZVdpZHRoIC8gMikgKyA0MCwgMCwgNTAsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgLy8gY2FudmFzLndoZWVsQ3R4LmZpbGxTdHlsZSA9ICcjMjcyZTU5JztcbiAgLy8gY2FudmFzLndoZWVsQ3R4LnN0cm9rZVN0eWxlID0gJyMyNzJlNTknO1xuICAvLyBjYW52YXMud2hlZWxDdHgubGluZVdpZHRoID0gMTA7XG4gIC8vIGNhbnZhcy53aGVlbEN0eC5zdHJva2UoKTtcblxuICBjYW52YXMud2hlZWxDdHguZHJhd0ltYWdlKFxuICAgIHdoZWVsSW1hZ2UuaW1hZ2UsXG4gICAgMCAtIHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCAvIDIsXG4gICAgMCAtIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHQgLyAyLFxuICAgIHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCxcbiAgICB3aGVlbEltYWdlLmltYWdlSGVpZ2h0XG4gICk7XG5cbiAgY2FyKHdoZWVsRGVnKTtcblxuICBjYW52YXMud2hlZWxDdHgucmVzdG9yZSgpO1xuXG4gIHdoZWVsRGVnID0gd2hlZWxEZWcgPiAzNjAgPyAwIDogd2hlZWxEZWcgKyAwLjA1O1xuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3V2hlZWwpO1xufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0ge1xuICAgICAgaW1hZ2U6IG5ldyBJbWFnZSgpLFxuICAgICAgaW1hZ2VXaWR0aDogMTkyMCxcbiAgICAgIGltYWdlSGVpZ2h0OiAxMjc0LFxuICAgICAgaW1hZ2VYOiAxLFxuICAgICAgaW1hZ2VZOiAxXG4gICAgfTtcblxuICAgIGNvbnN0IHJhdGlvID0gZ2V0UmF0aW8oKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmRDYW52YXMnKTtcbiAgICBjb25zdCB3aGVlbENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aGVlbENhbnZhcycpO1xuICAgIGNhbnZhcyA9IHtcbiAgICAgIGJhY2tncm91bmRDYW52YXMsXG4gICAgICBiYWNrZ3JvdW5kQ3R4OiBiYWNrZ3JvdW5kQ2FudmFzLmdldENvbnRleHQoJzJkJyksXG4gICAgICB3aGVlbENhbnZhcyxcbiAgICAgIHdoZWVsQ3R4OiB3aGVlbENhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgfTtcblxuICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjYW52YXMuYmFja2dyb3VuZEN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZSxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlWCxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlWSxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlV2lkdGgsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZUhlaWdodFxuICAgICAgKTtcbiAgICB9O1xuICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZS5zcmMgPSAnL3N0YXRpYy9pbWFnZXMvYW11c2VtZW50LXBhcmsucG5nJztcblxuICAgIHdoZWVsSW1hZ2UgPSB7XG4gICAgICBpbWFnZTogbmV3IEltYWdlKCksXG4gICAgICBpbWFnZVdpZHRoOiB3aGVlbFdpZHRoLFxuICAgICAgaW1hZ2VIZWlnaHQ6IHdoZWVsSGVpZ2h0LFxuICAgICAgaW1hZ2VYOiA3NjUsXG4gICAgICBpbWFnZVk6IDM2NVxuICAgIH07XG4gICAgd2hlZWxJbWFnZS5pbWFnZS5zcmMgPSAnL3N0YXRpYy9pbWFnZXMvd2hlZWwucG5nJztcbiAgICBkcmF3V2hlZWwoKTtcblxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5IaXNuZXkgTGFuZCB8IGRldmVsb3BlIGh1YiBwYWdlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgey8qPE5hdiAvPiovfVxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50c1wiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5IaXNuZXkgTGFuZDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+SHViIHBhZ2U8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1jYW52YXNcIj5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwiYmFja2dyb3VuZENhbnZhc1wiIGNsYXNzTmFtZT1cImJhY2tncm91bmQtY2FudmFzXCIgd2lkdGg9e2NhbnZhc1dpZHRofSBoZWlnaHQ9e2NhbnZhc0hlaWdodH0+PC9jYW52YXM+XG4gICAgICAgICAgPGNhbnZhcyBpZD1cIndoZWVsQ2FudmFzXCIgY2xhc3NOYW1lPVwid2hlZWwtY2FudmFzXCIgd2lkdGg9e2NhbnZhc1dpZHRofSBoZWlnaHQ9e2NhbnZhc0hlaWdodH0+PC9jYW52YXM+XG4gICAgICAgICAgPGNhbnZhcyBpZD1cImNhckNhbnZhc1wiIGNsYXNzTmFtZT1cIndoZWVsLWNhbnZhc1wiIHdpZHRoPXtjYW52YXNXaWR0aH0gaGVpZ2h0PXtjYW52YXNIZWlnaHR9PjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRlbnRzIHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIH1cbiAgICAgIC53cmFwLWNhbnZhcyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5iYWNrZ3JvdW5kLWNhbnZhcyxcbiAgICAgIC53aGVlbC1jYW52YXN7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5iYWNrZ3JvdW5kLWNhbnZhcyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMjcyZTU5O1xuICAgICAgfVxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/hizzin413/Documents/NextJS/hizzins.github.io/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.fbf1438c2a58a92bd199.hot-update.js.map