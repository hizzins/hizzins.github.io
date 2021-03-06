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
  var yPos = Math.sin(toRadian(angle)) * r; // carCtx.clearRect(0, 0, carCanvas.width, carCanvas.height);

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
  }, ".contents.jsx-749247884{height:100vh;}.wrap-canvas.jsx-749247884{position:relative;}.background-canvas.jsx-749247884,.wheel-canvas.jsx-749247884{position:absolute;left:0;top:0;width:100%;}.background-canvas.jsx-749247884{background-color:#fff;}.title.jsx-749247884{margin:0;width:100%;padding-top:30px;font-size:48px;text-align:center;color:#272e59;}.description.jsx-749247884{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaXp6aW40MTMvRG9jdW1lbnRzL05leHRKUy9oaXp6aW5zLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SmtCLEFBR3NCLEFBR0ssQUFJQSxBQU1JLEFBR2IsQUFRUyxTQVBQLElBaEJiLEtBR0EsQUFJUyxBQWlCVCxFQVBtQixFQUpuQixHQUxRLE1BQ0ssTUFTSSxLQVJqQixVQVNvQixrQkFDSixjQUNoQiIsImZpbGUiOiIvVXNlcnMvaGl6emluNDEzL0RvY3VtZW50cy9OZXh0SlMvaGl6emlucy5naXRodWIuaW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZcIjtcblxuY29uc3QgY2FudmFzV2lkdGggPSAxOTIwO1xuY29uc3QgY2FudmFzSGVpZ2h0ID0gMTI3NDtcbmNvbnN0IHdoZWVsV2lkdGggPSA3NDA7XG5jb25zdCB3aGVlbEhlaWdodCA9IDc0NDtcbmxldCB3aGVlbERlZyA9IDA7XG5sZXQgY2FudmFzID0ge307XG5sZXQgd2hlZWxJbWFnZSA9IHt9O1xuXG5jb25zdCBnZXRSYXRpbyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzV2lkdGggPSAxOTIwO1xuICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggLyBjYW52YXNXaWR0aDtcbn1cblxuY29uc3QgdG9SYWRpYW4gPSAoZGVnKSA9PiB7XG4gIHJldHVybiBkZWcgKiBNYXRoLlBJIC8gMTgwO1xufVxuXG5jb25zdCBkcmF3Q2FyID0gKGNhckN0eCwgYW5nbGUpID0+IHtcbiAgY29uc3QgY2FyUmFkaXVzID0gNDA7XG4gIGNvbnN0IHdoZWVsUmFkaXVzID0gd2hlZWxJbWFnZS5pbWFnZVdpZHRoIC8gMjtcbiAgY29uc3QgciA9IHdoZWVsUmFkaXVzICsgY2FyUmFkaXVzOyAvL3doZWVsUmFkaXVzICsgMjA7XG4gIGNvbnN0IHhQb3MgPSBNYXRoLmNvcyh0b1JhZGlhbihhbmdsZSkpICogcjtcbiAgY29uc3QgeVBvcyA9IE1hdGguc2luKHRvUmFkaWFuKGFuZ2xlKSkgKiByO1xuXG4gIC8vIGNhckN0eC5jbGVhclJlY3QoMCwgMCwgY2FyQ2FudmFzLndpZHRoLCBjYXJDYW52YXMuaGVpZ2h0KTtcbiAgY2FyQ3R4LnNhdmUoKTtcbiAgY2FyQ3R4LmJlZ2luUGF0aCgpO1xuICBjYXJDdHguYXJjKHhQb3MgKyB3aGVlbEltYWdlLmltYWdlWCArIHIgLSBjYXJSYWRpdXMsIHlQb3MgKyB3aGVlbEltYWdlLmltYWdlWSArIHIgLSBjYXJSYWRpdXMsIGNhclJhZGl1cywgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBjYXJDdHguZmlsbFN0eWxlID0gJyMyNzJlNTknO1xuICBjYXJDdHguc3Ryb2tlU3R5bGUgPSAnIzI3MmU1OSc7XG4gIGNhckN0eC5saW5lV2lkdGggPSAxMDtcbiAgY2FyQ3R4LmZpbGwoKTtcblxuICBjYXJDdHguYmVnaW5QYXRoKCk7XG4gIGNhckN0eC5hcmMoeFBvcyArIHdoZWVsSW1hZ2UuaW1hZ2VYICsgciAtIGNhclJhZGl1cywgeVBvcyArIHdoZWVsSW1hZ2UuaW1hZ2VZICsgciAtIGNhclJhZGl1cywgY2FyUmFkaXVzLCAwLCBNYXRoLlBJICoyLCBmYWxzZSk7XG4gIGNhckN0eC5zdHJva2VTdHlsZSA9ICcjMjcyZTU5JztcbiAgY2FyQ3R4LmxpbmVXaWR0aCA9IDEwO1xuICBjYXJDdHguc3Ryb2tlKCk7XG5cbiAgLy8gY2FyQ3R4LmJlZ2luUGF0aCgpO1xuICAvLyBjYXJDdHguYXJjKHdoZWVsSW1hZ2UuaW1hZ2VYICsgciAtIGNhclJhZGl1cywgd2hlZWxJbWFnZS5pbWFnZVkgKyByIC0gY2FyUmFkaXVzLCByLCAwLCBNYXRoLlBJICoyLCBmYWxzZSk7XG4gIC8vIGNhckN0eC5zdHJva2VTdHlsZSA9ICcjZGQ0YjM5JztcbiAgLy8gY2FyQ3R4LmxpbmVXaWR0aCA9IDU7XG4gIC8vIGNhckN0eC5zdHJva2UoKTtcblxuICBjYXJDdHgucmVzdG9yZSgpO1xufVxuXG5jb25zdCBkcmF3V2hlZWwgPSAoKSA9PiB7XG4gIGNvbnN0IHdoZWVsQ3R4ID0gY2FudmFzLndoZWVsQ3R4O1xuICBjb25zdCBjYXJDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyQ2FudmFzJyk7XG4gIGNvbnN0IGNhckN0eCA9IGNhckNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICB3aGVlbEN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndoZWVsQ2FudmFzLndpZHRoLCBjYW52YXMud2hlZWxDYW52YXMuaGVpZ2h0KTtcbiAgd2hlZWxDdHguc2F2ZSgpO1xuICB3aGVlbEN0eC5zZXRUcmFuc2Zvcm0oMSwwLDAsMSwwLDApO1xuICB3aGVlbEN0eC50cmFuc2xhdGUod2hlZWxJbWFnZS5pbWFnZVggKyB3aGVlbEltYWdlLmltYWdlV2lkdGggLyAyLCB3aGVlbEltYWdlLmltYWdlWSArIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHQgLyAyKTtcbiAgd2hlZWxDdHgucm90YXRlKHRvUmFkaWFuKHdoZWVsRGVnKSk7XG4gIC8vIGN0eC5zdHJva2VSZWN0KDAgLSB3aGVlbEltYWdlLmltYWdlV2lkdGggLyAyLCAwIC0gd2hlZWxJbWFnZS5pbWFnZUhlaWdodCAvIDIsIHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCwgd2hlZWxJbWFnZS5pbWFnZUhlaWdodCk7XG5cblxuICB3aGVlbEN0eC5kcmF3SW1hZ2UoXG4gICAgd2hlZWxJbWFnZS5pbWFnZSxcbiAgICAwIC0gd2hlZWxJbWFnZS5pbWFnZVdpZHRoIC8gMixcbiAgICAwIC0gd2hlZWxJbWFnZS5pbWFnZUhlaWdodCAvIDIsXG4gICAgd2hlZWxJbWFnZS5pbWFnZVdpZHRoLFxuICAgIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHRcbiAgKTtcblxuXG4gIGNhckN0eC5jbGVhclJlY3QoMCwgMCwgY2FyQ2FudmFzLndpZHRoLCBjYXJDYW52YXMuaGVpZ2h0KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDExOyBpKyspIHtcbiAgICBjb25zdCBjYXJBbmdsZSA9IHdoZWVsRGVnICsgKGkgKiAzNik7XG4gICAgY29uc29sZS5sb2coJ+yXrOq4sCcsIGNhckFuZ2xlKTtcbiAgICBkcmF3Q2FyKGNhckN0eCwgY2FyQW5nbGUpO1xuICB9XG5cblxuICB3aGVlbEN0eC5yZXN0b3JlKCk7XG5cbiAgd2hlZWxEZWcgPSB3aGVlbERlZyA+IDM2MCA/IDAgOiB3aGVlbERlZyArIDAuMDU7XG4gIC8vIHdoZWVsRGVnID0gd2hlZWxEZWcgPiAzNjAgPyAwIDogd2hlZWxEZWcgKyAwLjU7IC8vIO2FjOyKpO2KuOyaqVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3V2hlZWwpO1xufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0ge1xuICAgICAgaW1hZ2U6IG5ldyBJbWFnZSgpLFxuICAgICAgaW1hZ2VXaWR0aDogMTkyMCxcbiAgICAgIGltYWdlSGVpZ2h0OiAxMjc0LFxuICAgICAgaW1hZ2VYOiAxLFxuICAgICAgaW1hZ2VZOiAxXG4gICAgfTtcblxuICAgIGNvbnN0IHJhdGlvID0gZ2V0UmF0aW8oKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmRDYW52YXMnKTtcbiAgICBjb25zdCB3aGVlbENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aGVlbENhbnZhcycpO1xuICAgIGNhbnZhcyA9IHtcbiAgICAgIGJhY2tncm91bmRDYW52YXMsXG4gICAgICBiYWNrZ3JvdW5kQ3R4OiBiYWNrZ3JvdW5kQ2FudmFzLmdldENvbnRleHQoJzJkJyksXG4gICAgICB3aGVlbENhbnZhcyxcbiAgICAgIHdoZWVsQ3R4OiB3aGVlbENhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgfTtcblxuICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjYW52YXMuYmFja2dyb3VuZEN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZSxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlWCxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlWSxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlV2lkdGgsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZUhlaWdodFxuICAgICAgKTtcbiAgICB9O1xuICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZS5zcmMgPSAnL3N0YXRpYy9pbWFnZXMvYW11c2VtZW50LXBhcmsucG5nJztcblxuICAgIHdoZWVsSW1hZ2UgPSB7XG4gICAgICBpbWFnZTogbmV3IEltYWdlKCksXG4gICAgICBpbWFnZVdpZHRoOiB3aGVlbFdpZHRoLFxuICAgICAgaW1hZ2VIZWlnaHQ6IHdoZWVsSGVpZ2h0LFxuICAgICAgaW1hZ2VYOiA3NjUsXG4gICAgICBpbWFnZVk6IDM2NVxuICAgIH07XG4gICAgd2hlZWxJbWFnZS5pbWFnZS5zcmMgPSAnL3N0YXRpYy9pbWFnZXMvd2hlZWwucG5nJztcbiAgICBkcmF3V2hlZWwoKTtcblxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5IaXNuZXkgTGFuZCB8IGRldmVsb3BlIGh1YiBwYWdlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgey8qPE5hdiAvPiovfVxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50c1wiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5IaXNuZXkgTGFuZDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+SHViIHBhZ2U8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1jYW52YXNcIj5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwiYmFja2dyb3VuZENhbnZhc1wiIGNsYXNzTmFtZT1cImJhY2tncm91bmQtY2FudmFzXCIgd2lkdGg9e2NhbnZhc1dpZHRofSBoZWlnaHQ9e2NhbnZhc0hlaWdodH0+PC9jYW52YXM+XG4gICAgICAgICAgPGNhbnZhcyBpZD1cIndoZWVsQ2FudmFzXCIgY2xhc3NOYW1lPVwid2hlZWwtY2FudmFzXCIgd2lkdGg9e2NhbnZhc1dpZHRofSBoZWlnaHQ9e2NhbnZhc0hlaWdodH0+PC9jYW52YXM+XG4gICAgICAgICAgPGNhbnZhcyBpZD1cImNhckNhbnZhc1wiIGNsYXNzTmFtZT1cIndoZWVsLWNhbnZhc1wiIHdpZHRoPXtjYW52YXNXaWR0aH0gaGVpZ2h0PXtjYW52YXNIZWlnaHR9PjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRlbnRzIHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIH1cbiAgICAgIC53cmFwLWNhbnZhcyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5iYWNrZ3JvdW5kLWNhbnZhcyxcbiAgICAgIC53aGVlbC1jYW52YXN7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5iYWNrZ3JvdW5kLWNhbnZhcyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMjcyZTU5O1xuICAgICAgfVxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/hizzin413/Documents/NextJS/hizzins.github.io/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4dea7f82074e0a551ec1.hot-update.js.map