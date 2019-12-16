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
  }, ".contents.jsx-749247884{height:100vh;}.wrap-canvas.jsx-749247884{position:relative;}.background-canvas.jsx-749247884,.wheel-canvas.jsx-749247884{position:absolute;left:0;top:0;width:100%;}.background-canvas.jsx-749247884{background-color:#fff;}.title.jsx-749247884{margin:0;width:100%;padding-top:30px;font-size:48px;text-align:center;color:#272e59;}.description.jsx-749247884{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmVubnlcXERvY3VtZW50c1xcUHJpdmF0ZVxcbmV4dGpzXFxoaXp6aW5zLmdpdGh1Yi5pb1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHa0IsQUFHc0IsQUFHSyxBQUlBLEFBTUksQUFHYixBQVFTLFNBUFAsSUFoQmIsS0FHQSxBQUlTLEFBaUJULEVBUG1CLEVBSm5CLEdBTFEsTUFDSyxNQVNJLEtBUmpCLFVBU29CLGtCQUNKLGNBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSmVubnlcXERvY3VtZW50c1xcUHJpdmF0ZVxcbmV4dGpzXFxoaXp6aW5zLmdpdGh1Yi5pb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2XCI7XHJcblxyXG5jb25zdCBjYW52YXNXaWR0aCA9IDE5MjA7XHJcbmNvbnN0IGNhbnZhc0hlaWdodCA9IDEyNzQ7XHJcbmNvbnN0IHdoZWVsV2lkdGggPSA3NDA7XHJcbmNvbnN0IHdoZWVsSGVpZ2h0ID0gNzQ0O1xyXG5sZXQgd2hlZWxEZWcgPSAwO1xyXG5sZXQgY2FudmFzID0ge307XHJcbmxldCB3aGVlbEltYWdlID0ge307XHJcblxyXG5jb25zdCBnZXRSYXRpbyA9ICgpID0+IHtcclxuICBjb25zdCBjYW52YXNXaWR0aCA9IDE5MjA7XHJcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIC8gY2FudmFzV2lkdGg7XHJcbn1cclxuXHJcbmNvbnN0IHRvUmFkaWFuID0gKGRlZykgPT4ge1xyXG4gIHJldHVybiBkZWcgKiBNYXRoLlBJIC8gMTgwO1xyXG59XHJcblxyXG5jb25zdCBkcmF3V2hlZWwgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2hlZWxDdHggPSBjYW52YXMud2hlZWxDdHg7XHJcbiAgd2hlZWxDdHguY2xlYXJSZWN0KHdoZWVsSW1hZ2UuaW1hZ2VYLCB3aGVlbEltYWdlLmltYWdlWSwgd2hlZWxJbWFnZS5pbWFnZVdpZHRoLCB3aGVlbEltYWdlLmltYWdlSGVpZ2h0KTtcclxuICB3aGVlbEN0eC5zYXZlKCk7XHJcbiAgd2hlZWxDdHguc2V0VHJhbnNmb3JtKDEsMCwwLDEsMCwwKTtcclxuICB3aGVlbEN0eC50cmFuc2xhdGUod2hlZWxJbWFnZS5pbWFnZVggKyB3aGVlbEltYWdlLmltYWdlV2lkdGggLyAyLCB3aGVlbEltYWdlLmltYWdlWSArIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHQgLyAyKTtcclxuICB3aGVlbEN0eC5yb3RhdGUodG9SYWRpYW4od2hlZWxEZWcpKTtcclxuICAvLyBjdHguc3Ryb2tlUmVjdCgwIC0gd2hlZWxJbWFnZS5pbWFnZVdpZHRoIC8gMiwgMCAtIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHQgLyAyLCB3aGVlbEltYWdlLmltYWdlV2lkdGgsIHdoZWVsSW1hZ2UuaW1hZ2VIZWlnaHQpO1xyXG5cclxuICB3aGVlbEN0eC5kcmF3SW1hZ2UoXHJcbiAgICB3aGVlbEltYWdlLmltYWdlLFxyXG4gICAgMCAtIHdoZWVsSW1hZ2UuaW1hZ2VXaWR0aCAvIDIsXHJcbiAgICAwIC0gd2hlZWxJbWFnZS5pbWFnZUhlaWdodCAvIDIsXHJcbiAgICB3aGVlbEltYWdlLmltYWdlV2lkdGgsXHJcbiAgICB3aGVlbEltYWdlLmltYWdlSGVpZ2h0XHJcbiAgKTtcclxuICBcclxuICBjYW52YXMud2hlZWxDdHgucmVzdG9yZSgpO1xyXG5cclxuICB3aGVlbERlZyA9IHdoZWVsRGVnID4gMzYwID8gMCA6IHdoZWVsRGVnICsgMC4wNTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd1doZWVsKTtcclxufVxyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IHtcclxuICAgICAgaW1hZ2U6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBpbWFnZVdpZHRoOiAxOTIwLFxyXG4gICAgICBpbWFnZUhlaWdodDogMTI3NCxcclxuICAgICAgaW1hZ2VYOiAxLFxyXG4gICAgICBpbWFnZVk6IDFcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmF0aW8gPSBnZXRSYXRpbygpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kQ2FudmFzJyk7XHJcbiAgICBjb25zdCB3aGVlbENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aGVlbENhbnZhcycpO1xyXG4gICAgY2FudmFzID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ2FudmFzLFxyXG4gICAgICBiYWNrZ3JvdW5kQ3R4OiBiYWNrZ3JvdW5kQ2FudmFzLmdldENvbnRleHQoJzJkJyksXHJcbiAgICAgIHdoZWVsQ2FudmFzLFxyXG4gICAgICB3aGVlbEN0eDogd2hlZWxDYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG4gICAgfTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBjYW52YXMuYmFja2dyb3VuZEN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5pbWFnZVgsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmltYWdlWSxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2VXaWR0aCxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2VIZWlnaHRcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2UuaW1hZ2Uuc3JjID0gJy9zdGF0aWMvaW1hZ2VzL2FtdXNlbWVudC1wYXJrLnBuZyc7XHJcblxyXG4gICAgd2hlZWxJbWFnZSA9IHtcclxuICAgICAgaW1hZ2U6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBpbWFnZVdpZHRoOiB3aGVlbFdpZHRoLFxyXG4gICAgICBpbWFnZUhlaWdodDogd2hlZWxIZWlnaHQsXHJcbiAgICAgIGltYWdlWDogNzY1LFxyXG4gICAgICBpbWFnZVk6IDM2NVxyXG4gICAgfTtcclxuICAgIHdoZWVsSW1hZ2UuaW1hZ2Uuc3JjID0gJy9zdGF0aWMvaW1hZ2VzL3doZWVsLnBuZyc7XHJcbiAgICBkcmF3V2hlZWwoKTtcclxuXHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhpc25leSBMYW5kIHwgZGV2ZWxvcGUgaHViIHBhZ2U8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICB7Lyo8TmF2IC8+Ki99XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50c1wiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkhpc25leSBMYW5kPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkh1YiBwYWdlPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1jYW52YXNcIj5cclxuICAgICAgICAgIDxjYW52YXMgaWQ9XCJiYWNrZ3JvdW5kQ2FudmFzXCIgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1jYW52YXNcIiB3aWR0aD17Y2FudmFzV2lkdGh9IGhlaWdodD17Y2FudmFzSGVpZ2h0fT48L2NhbnZhcz5cclxuICAgICAgICAgIDxjYW52YXMgaWQ9XCJ3aGVlbENhbnZhc1wiIGNsYXNzTmFtZT1cIndoZWVsLWNhbnZhc1wiIHdpZHRoPXtjYW52YXNXaWR0aH0gaGVpZ2h0PXtjYW52YXNIZWlnaHR9PjwvY2FudmFzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb250ZW50cyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgfVxyXG4gICAgICAud3JhcC1jYW52YXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICAuYmFja2dyb3VuZC1jYW52YXMsXHJcbiAgICAgIC53aGVlbC1jYW52YXN7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5iYWNrZ3JvdW5kLWNhbnZhcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMjcyZTU5O1xyXG4gICAgICB9XHJcbiAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Jenny\\Documents\\Private\\nextjs\\hizzins.github.io\\pages\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.71b8085ec71a17230ac0.hot-update.js.map