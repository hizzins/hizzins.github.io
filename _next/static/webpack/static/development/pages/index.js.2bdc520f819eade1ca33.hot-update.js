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
  wheelCtx.rotate(toRadian(wheelDeg));
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
      lineNumber: 90
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-749247884",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Hisney Land | develope hub page")), __jsx("main", {
    className: "jsx-749247884" + " " + "contents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-749247884" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Hisney Land"), __jsx("p", {
    className: "jsx-749247884" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Hub page"), __jsx("div", {
    className: "jsx-749247884" + " " + "wrap-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("canvas", {
    id: "backgroundCanvas",
    width: canvasWidth,
    height: canvasHeight,
    className: "jsx-749247884" + " " + "background-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx("canvas", {
    id: "wheelCanvas",
    width: canvasWidth,
    height: canvasHeight,
    className: "jsx-749247884" + " " + "wheel-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "749247884",
    __self: this
  }, ".contents.jsx-749247884{height:100vh;}.wrap-canvas.jsx-749247884{position:relative;}.background-canvas.jsx-749247884,.wheel-canvas.jsx-749247884{position:absolute;left:0;top:0;width:100%;}.background-canvas.jsx-749247884{background-color:#fff;}.title.jsx-749247884{margin:0;width:100%;padding-top:30px;font-size:48px;text-align:center;color:#272e59;}.description.jsx-749247884{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmVubnlcXERvY3VtZW50c1xcUHJpdmF0ZVxcbmV4dGpzXFxoaXp6aW5zLmdpdGh1Yi5pb1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlHa0IsQUFHc0IsQUFHSyxBQUlBLEFBTUksQUFHYixBQVFTLFNBUFAsSUFoQmIsS0FHQSxBQUlTLEFBaUJULEVBUG1CLEVBSm5CLEdBTFEsTUFDSyxNQVNJLEtBUmpCLFVBU29CLGtCQUNKLGNBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSmVubnlcXERvY3VtZW50c1xcUHJpdmF0ZVxcbmV4dGpzXFxoaXp6aW5zLmdpdGh1Yi5pb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2XCI7XHJcblxyXG5jb25zdCBjYW52YXNXaWR0aCA9IDE5MjA7XHJcbmNvbnN0IGNhbnZhc0hlaWdodCA9IDEyNzQ7XHJcbmNvbnN0IHdoZWVsV2lkdGggPSA3NDA7XHJcbmNvbnN0IHdoZWVsSGVpZ2h0ID0gNzQ0O1xyXG5sZXQgd2hlZWxEZWcgPSAwO1xyXG5sZXQgY2FudmFzID0ge307XHJcbmxldCB3aGVlbEltYWdlID0ge307XHJcblxyXG5jb25zdCBnZXRSYXRpbyA9ICgpID0+IHtcclxuICBjb25zdCBjYW52YXNXaWR0aCA9IDE5MjA7XHJcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIC8gY2FudmFzV2lkdGg7XHJcbn1cclxuXHJcbmNvbnN0IHRvUmFkaWFuID0gKGRlZykgPT4ge1xyXG4gIHJldHVybiBkZWcgKiBNYXRoLlBJIC8gMTgwO1xyXG59XHJcblxyXG5jb25zdCBkcmF3V2hlZWwgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2hlZWxDdHggPSBjYW52YXMud2hlZWxDdHg7XHJcblxyXG4gIHdoZWVsQ3R4LmNsZWFyUmVjdCh3aGVlbEltYWdlLmltYWdlWCwgd2hlZWxJbWFnZS5pbWFnZVksIHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCwgd2hlZWxJbWFnZS5pbWFnZUhlaWdodCk7XHJcbiAgd2hlZWxDdHguc2F2ZSgpO1xyXG4gIHdoZWVsQ3R4LnNldFRyYW5zZm9ybSgxLDAsMCwxLDAsMCk7XHJcbiAgd2hlZWxDdHgudHJhbnNsYXRlKHdoZWVsSW1hZ2UuaW1hZ2VYICsgd2hlZWxJbWFnZS5pbWFnZVdpZHRoIC8gMiwgd2hlZWxJbWFnZS5pbWFnZVkgKyB3aGVlbEltYWdlLmltYWdlSGVpZ2h0IC8gMik7XHJcbiAgd2hlZWxDdHgucm90YXRlKHRvUmFkaWFuKHdoZWVsRGVnKSk7XHJcbiAgd2hlZWxDdHguZHJhd0ltYWdlKFxyXG4gICAgd2hlZWxJbWFnZS5pbWFnZSxcclxuICAgIDAgLSB3aGVlbEltYWdlLmltYWdlV2lkdGggLyAyLFxyXG4gICAgMCAtIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHQgLyAyLFxyXG4gICAgd2hlZWxJbWFnZS5pbWFnZVdpZHRoLFxyXG4gICAgd2hlZWxJbWFnZS5pbWFnZUhlaWdodFxyXG4gICk7XHJcblxyXG4gIGNhbnZhcy53aGVlbEN0eC5yZXN0b3JlKCk7XHJcblxyXG4gIHdoZWVsRGVnID0gd2hlZWxEZWcgPiAzNjAgPyAwIDogd2hlZWxEZWcgKyAwLjA1O1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3V2hlZWwpO1xyXG59XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0ge1xyXG4gICAgICBpbWFnZTogbmV3IEltYWdlKCksXHJcbiAgICAgIGltYWdlV2lkdGg6IDE5MjAsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiAxMjc0LFxyXG4gICAgICBpbWFnZVg6IDEsXHJcbiAgICAgIGltYWdlWTogMVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByYXRpbyA9IGdldFJhdGlvKCk7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmRDYW52YXMnKTtcclxuICAgIGNvbnN0IHdoZWVsQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3doZWVsQ2FudmFzJyk7XHJcbiAgICBjYW52YXMgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDYW52YXMsXHJcbiAgICAgIGJhY2tncm91bmRDdHg6IGJhY2tncm91bmRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcclxuICAgICAgd2hlZWxDYW52YXMsXHJcbiAgICAgIHdoZWVsQ3R4OiB3aGVlbENhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcbiAgICB9O1xyXG5cclxuICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIGNhbnZhcy5iYWNrZ3JvdW5kQ3R4LmRyYXdJbWFnZShcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2UsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlWCxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2VZLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZVdpZHRoLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZUhlaWdodFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZS5zcmMgPSAnL3N0YXRpYy9pbWFnZXMvYW11c2VtZW50LXBhcmsucG5nJztcclxuXHJcbiAgICB3aGVlbEltYWdlID0ge1xyXG4gICAgICBpbWFnZTogbmV3IEltYWdlKCksXHJcbiAgICAgIGltYWdlV2lkdGg6IHdoZWVsV2lkdGgsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiB3aGVlbEhlaWdodCxcclxuICAgICAgaW1hZ2VYOiA3NjUsXHJcbiAgICAgIGltYWdlWTogMzY1XHJcbiAgICB9O1xyXG4gICAgd2hlZWxJbWFnZS5pbWFnZS5zcmMgPSAnL3N0YXRpYy9pbWFnZXMvd2hlZWwucG5nJztcclxuICAgIGRyYXdXaGVlbCgpO1xyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SGlzbmV5IExhbmQgfCBkZXZlbG9wZSBodWIgcGFnZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIHsvKjxOYXYgLz4qL31cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnRzXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+SGlzbmV5IExhbmQ8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+SHViIHBhZ2U8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWNhbnZhc1wiPlxyXG4gICAgICAgICAgPGNhbnZhcyBpZD1cImJhY2tncm91bmRDYW52YXNcIiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWNhbnZhc1wiIHdpZHRoPXtjYW52YXNXaWR0aH0gaGVpZ2h0PXtjYW52YXNIZWlnaHR9PjwvY2FudmFzPlxyXG4gICAgICAgICAgPGNhbnZhcyBpZD1cIndoZWVsQ2FudmFzXCIgY2xhc3NOYW1lPVwid2hlZWwtY2FudmFzXCIgd2lkdGg9e2NhbnZhc1dpZHRofSBoZWlnaHQ9e2NhbnZhc0hlaWdodH0+PC9jYW52YXM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbnRlbnRzIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICB9XHJcbiAgICAgIC53cmFwLWNhbnZhcyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIC5iYWNrZ3JvdW5kLWNhbnZhcyxcclxuICAgICAgLndoZWVsLWNhbnZhc3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmJhY2tncm91bmQtY2FudmFzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMyNzJlNTk7XHJcbiAgICAgIH1cclxuICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Jenny\\Documents\\Private\\nextjs\\hizzins.github.io\\pages\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.2bdc520f819eade1ca33.hot-update.js.map