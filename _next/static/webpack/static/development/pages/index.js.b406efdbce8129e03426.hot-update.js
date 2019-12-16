webpackHotUpdate("static\\development\\pages\\index.js",{

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
var _jsxFileName = "C:\\Users\\Jenny\\Documents\\Private\\nextjs\\hizzins.github.io\\pages\\index.js";

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

var drawWheel = function drawWheel() {
  var wheelCtx = canvas.wheelCtx;
  wheelCtx.clearRect(wheelImage.imageX, wheelImage.imageY, wheelImage.imageWidth, wheelImage.imageHeight);
  wheelCtx.save();
  wheelCtx.setTransform(1, 0, 0, 1, 0, 0);
  wheelCtx.translate(wheelImage.imageX + wheelImage.imageWidth / 2, wheelImage.imageY + wheelImage.imageHeight / 2);
  wheelCtx.rotate(toRadian(wheelDeg)); // ctx.strokeRect(0 - wheelImage.imageWidth / 2, 0 - wheelImage.imageHeight / 2, wheelImage.imageWidth, wheelImage.imageHeight);

  wheelCtx.drawImage(wheelImage.image, 0 - wheelImage.imageWidth / 2, 0 - wheelImage.imageHeight / 2, wheelImage.imageWidth, wheelImage.imageHeight);
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
      lineNumber: 91
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-749247884",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Hisney Land | develope hub page")), __jsx("main", {
    className: "jsx-749247884" + " " + "contents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-749247884" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Hisney Land"), __jsx("p", {
    className: "jsx-749247884" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Hub page"), __jsx("div", {
    className: "jsx-749247884" + " " + "wrap-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("canvas", {
    id: "backgroundCanvas",
    width: canvasWidth,
    height: canvasHeight,
    className: "jsx-749247884" + " " + "background-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx("canvas", {
    id: "wheelCanvas",
    width: canvasWidth,
    height: canvasHeight,
    className: "jsx-749247884" + " " + "wheel-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "749247884",
    __self: this
  }, ".contents.jsx-749247884{height:100vh;}.wrap-canvas.jsx-749247884{position:relative;}.background-canvas.jsx-749247884,.wheel-canvas.jsx-749247884{position:absolute;left:0;top:0;width:100%;}.background-canvas.jsx-749247884{background-color:#fff;}.title.jsx-749247884{margin:0;width:100%;padding-top:30px;font-size:48px;text-align:center;color:#272e59;}.description.jsx-749247884{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmVubnlcXERvY3VtZW50c1xcUHJpdmF0ZVxcbmV4dGpzXFxoaXp6aW5zLmdpdGh1Yi5pb1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHa0IsQUFHc0IsQUFHSyxBQUlBLEFBTUksQUFHYixBQVFTLFNBUFAsSUFoQmIsS0FHQSxBQUlTLEFBaUJULEVBUG1CLEVBSm5CLEdBTFEsTUFDSyxNQVNJLEtBUmpCLFVBU29CLGtCQUNKLGNBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSmVubnlcXERvY3VtZW50c1xcUHJpdmF0ZVxcbmV4dGpzXFxoaXp6aW5zLmdpdGh1Yi5pb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2XCI7XHJcblxyXG5jb25zdCBjYW52YXNXaWR0aCA9IDE5MjA7XHJcbmNvbnN0IGNhbnZhc0hlaWdodCA9IDEyNzQ7XHJcbmNvbnN0IHdoZWVsV2lkdGggPSA3NDA7XHJcbmNvbnN0IHdoZWVsSGVpZ2h0ID0gNzQ0O1xyXG5sZXQgd2hlZWxEZWcgPSAwO1xyXG5sZXQgY2FudmFzID0ge307XHJcbmxldCB3aGVlbEltYWdlID0ge307XHJcblxyXG5jb25zdCBnZXRSYXRpbyA9ICgpID0+IHtcclxuICBjb25zdCBjYW52YXNXaWR0aCA9IDE5MjA7XHJcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIC8gY2FudmFzV2lkdGg7XHJcbn1cclxuXHJcbmNvbnN0IHRvUmFkaWFuID0gKGRlZykgPT4ge1xyXG4gIHJldHVybiBkZWcgKiBNYXRoLlBJIC8gMTgwO1xyXG59XHJcblxyXG5jb25zdCBkcmF3V2hlZWwgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2hlZWxDdHggPSBjYW52YXMud2hlZWxDdHg7XHJcbiAgd2hlZWxDdHguY2xlYXJSZWN0KHdoZWVsSW1hZ2UuaW1hZ2VYLCB3aGVlbEltYWdlLmltYWdlWSwgd2hlZWxJbWFnZS5pbWFnZVdpZHRoLCB3aGVlbEltYWdlLmltYWdlSGVpZ2h0KTtcclxuICB3aGVlbEN0eC5zYXZlKCk7XHJcbiAgd2hlZWxDdHguc2V0VHJhbnNmb3JtKDEsMCwwLDEsMCwwKTtcclxuICB3aGVlbEN0eC50cmFuc2xhdGUod2hlZWxJbWFnZS5pbWFnZVggKyB3aGVlbEltYWdlLmltYWdlV2lkdGggLyAyLCB3aGVlbEltYWdlLmltYWdlWSArIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHQgLyAyKTtcclxuICB3aGVlbEN0eC5yb3RhdGUodG9SYWRpYW4od2hlZWxEZWcpKTtcclxuICAvLyBjdHguc3Ryb2tlUmVjdCgwIC0gd2hlZWxJbWFnZS5pbWFnZVdpZHRoIC8gMiwgMCAtIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHQgLyAyLCB3aGVlbEltYWdlLmltYWdlV2lkdGgsIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHQpO1xyXG5cclxuICB3aGVlbEN0eC5kcmF3SW1hZ2UoXHJcbiAgICB3aGVlbEltYWdlLmltYWdlLFxyXG4gICAgMCAtIHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCAvIDIsXHJcbiAgICAwIC0gd2hlZWxJbWFnZS5pbWFnZUhlaWdodCAvIDIsXHJcbiAgICB3aGVlbEltYWdlLmltYWdlV2lkdGgsXHJcbiAgICB3aGVlbEltYWdlLmltYWdlSGVpZ2h0XHJcbiAgKTtcclxuXHJcbiAgY2FudmFzLndoZWVsQ3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgd2hlZWxEZWcgPSB3aGVlbERlZyA+IDM2MCA/IDAgOiB3aGVlbERlZyArIDAuMDU7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdXaGVlbCk7XHJcbn1cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSB7XHJcbiAgICAgIGltYWdlOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgaW1hZ2VXaWR0aDogMTkyMCxcclxuICAgICAgaW1hZ2VIZWlnaHQ6IDEyNzQsXHJcbiAgICAgIGltYWdlWDogMSxcclxuICAgICAgaW1hZ2VZOiAxXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJhdGlvID0gZ2V0UmF0aW8oKTtcclxuICAgIGNvbnN0IGJhY2tncm91bmRDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZENhbnZhcycpO1xyXG4gICAgY29uc3Qgd2hlZWxDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2hlZWxDYW52YXMnKTtcclxuICAgIGNhbnZhcyA9IHtcclxuICAgICAgYmFja2dyb3VuZENhbnZhcyxcclxuICAgICAgYmFja2dyb3VuZEN0eDogYmFja2dyb3VuZENhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxyXG4gICAgICB3aGVlbENhbnZhcyxcclxuICAgICAgd2hlZWxDdHg6IHdoZWVsQ2FudmFzLmdldENvbnRleHQoJzJkJylcclxuICAgIH07XHJcblxyXG4gICAgYmFja2dyb3VuZEltYWdlLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgY2FudmFzLmJhY2tncm91bmRDdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZSxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2VYLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZVksXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlV2lkdGgsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlSGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgYmFja2dyb3VuZEltYWdlLmltYWdlLnNyYyA9ICcvc3RhdGljL2ltYWdlcy9hbXVzZW1lbnQtcGFyay5wbmcnO1xyXG5cclxuICAgIHdoZWVsSW1hZ2UgPSB7XHJcbiAgICAgIGltYWdlOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgaW1hZ2VXaWR0aDogd2hlZWxXaWR0aCxcclxuICAgICAgaW1hZ2VIZWlnaHQ6IHdoZWVsSGVpZ2h0LFxyXG4gICAgICBpbWFnZVg6IDc2NSxcclxuICAgICAgaW1hZ2VZOiAzNjVcclxuICAgIH07XHJcbiAgICB3aGVlbEltYWdlLmltYWdlLnNyYyA9ICcvc3RhdGljL2ltYWdlcy93aGVlbC5wbmcnO1xyXG4gICAgZHJhd1doZWVsKCk7XHJcblxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5IaXNuZXkgTGFuZCB8IGRldmVsb3BlIGh1YiBwYWdlPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgey8qPE5hdiAvPiovfVxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGVudHNcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5IaXNuZXkgTGFuZDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5IdWIgcGFnZTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtY2FudmFzXCI+XHJcbiAgICAgICAgICA8Y2FudmFzIGlkPVwiYmFja2dyb3VuZENhbnZhc1wiIGNsYXNzTmFtZT1cImJhY2tncm91bmQtY2FudmFzXCIgd2lkdGg9e2NhbnZhc1dpZHRofSBoZWlnaHQ9e2NhbnZhc0hlaWdodH0+PC9jYW52YXM+XHJcbiAgICAgICAgICA8Y2FudmFzIGlkPVwid2hlZWxDYW52YXNcIiBjbGFzc05hbWU9XCJ3aGVlbC1jYW52YXNcIiB3aWR0aD17Y2FudmFzV2lkdGh9IGhlaWdodD17Y2FudmFzSGVpZ2h0fT48L2NhbnZhcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuY29udGVudHMge1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIH1cclxuICAgICAgLndyYXAtY2FudmFzIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLmJhY2tncm91bmQtY2FudmFzLFxyXG4gICAgICAud2hlZWwtY2FudmFze1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuYmFja2dyb3VuZC1jYW52YXMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzI3MmU1OTtcclxuICAgICAgfVxyXG4gICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Jenny\\Documents\\Private\\nextjs\\hizzins.github.io\\pages\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.b406efdbce8129e03426.hot-update.js.map