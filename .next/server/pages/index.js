(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Soma\\Desktop\\Projetos\\alexandremrus-resume\\pages\\index.js";


const Index = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Bem-vindo!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: props.currentDate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), props.repos.map(repo => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: repo.full_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Language: ", repo.language, " / Stars: ", repo.stargazers_count]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, undefined)]
      }, repo.id, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

async function getServerSideProps(context) {
  const resRepos = await fetch('https://api.github.com/users/kishaba/repos?sort=updated');
  const originalRepos = await resRepos.json();
  const dontShowRepos = ['kishaba/ProjetoLazarus', 'kishaba/ProjetoDelphi'];

  const isNotFork = repo => !repo.fork;

  const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1;

  const extractData = repo => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
    stargazers_count: repo.stargazers_count
  });

  const repos = originalRepos.filter(isNotFork).filter(dontShowFilter).map(extractData);
  return {
    props: {
      currentDate: new Date().toString(),
      repos
    } // will be passed to the page component as props

  };
}
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGV4YW5kcmVtcnVzLXJlc3VtZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2FsZXhhbmRyZW1ydXMtcmVzdW1lL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hbGV4YW5kcmVtcnVzLXJlc3VtZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJjdXJyZW50RGF0ZSIsInJlcG9zIiwibWFwIiwicmVwbyIsImZ1bGxfbmFtZSIsImxhbmd1YWdlIiwic3RhcmdhemVyc19jb3VudCIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlc1JlcG9zIiwiZmV0Y2giLCJvcmlnaW5hbFJlcG9zIiwianNvbiIsImRvbnRTaG93UmVwb3MiLCJpc05vdEZvcmsiLCJmb3JrIiwiZG9udFNob3dGaWx0ZXIiLCJpbmRleE9mIiwiZXh0cmFjdERhdGEiLCJmaWx0ZXIiLCJEYXRlIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsS0FBSyxHQUFJQyxLQUFELElBQVc7QUFDdkIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsZ0JBQU1BLEtBQUssQ0FBQ0M7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBR0dELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxHQUFaLENBQWlCQyxJQUFELElBQVU7QUFDekIsMEJBQ0U7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsbUNBQ2FELElBQUksQ0FBQ0UsUUFEbEIsZ0JBQ3NDRixJQUFJLENBQUNHLGdCQUQzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQSxTQUFVSCxJQUFJLENBQUNJLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQVFELEtBVEEsQ0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdCRCxDQWpCRDs7QUFtQk8sZUFBZUMsa0JBQWYsQ0FBa0NDLE9BQWxDLEVBQTJDO0FBQ2hELFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMseURBQUQsQ0FBNUI7QUFDQSxRQUFNQyxhQUFhLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQTVCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHLENBQUMsd0JBQUQsRUFBMkIsdUJBQTNCLENBQXRCOztBQUNBLFFBQU1DLFNBQVMsR0FBSVosSUFBRCxJQUFVLENBQUNBLElBQUksQ0FBQ2EsSUFBbEM7O0FBQ0EsUUFBTUMsY0FBYyxHQUFJZCxJQUFELElBQVVXLGFBQWEsQ0FBQ0ksT0FBZCxDQUFzQmYsSUFBSSxDQUFDQyxTQUEzQixNQUEwQyxDQUFDLENBQTVFOztBQUNBLFFBQU1lLFdBQVcsR0FBSWhCLElBQUQsS0FBVztBQUM3QkksTUFBRSxFQUFFSixJQUFJLENBQUNJLEVBRG9CO0FBRTdCSCxhQUFTLEVBQUVELElBQUksQ0FBQ0MsU0FGYTtBQUc3QkMsWUFBUSxFQUFFRixJQUFJLENBQUNFLFFBSGM7QUFJN0JDLG9CQUFnQixFQUFFSCxJQUFJLENBQUNHO0FBSk0sR0FBWCxDQUFwQjs7QUFNQSxRQUFNTCxLQUFLLEdBQUdXLGFBQWEsQ0FBQ1EsTUFBZCxDQUFxQkwsU0FBckIsRUFBZ0NLLE1BQWhDLENBQXVDSCxjQUF2QyxFQUF1RGYsR0FBdkQsQ0FBMkRpQixXQUEzRCxDQUFkO0FBRUEsU0FBTztBQUNMcEIsU0FBSyxFQUFFO0FBQ0xDLGlCQUFXLEVBQUUsSUFBSXFCLElBQUosR0FBV0MsUUFBWCxFQURSO0FBRUxyQjtBQUZLLEtBREYsQ0FJRjs7QUFKRSxHQUFQO0FBTUQ7QUFDRCwrREFBZUgsS0FBZixFOzs7Ozs7Ozs7OztBQzFDQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+QmVtLXZpbmRvITwvaDE+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmN1cnJlbnREYXRlfTwvZGl2PlxyXG4gICAgICB7cHJvcHMucmVwb3MubWFwKChyZXBvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYga2V5PXtyZXBvLmlkfT5cclxuICAgICAgICAgICAgPGgzPntyZXBvLmZ1bGxfbmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBMYW5ndWFnZToge3JlcG8ubGFuZ3VhZ2V9IC8gU3RhcnM6IHtyZXBvLnN0YXJnYXplcnNfY291bnR9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlc1JlcG9zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMva2lzaGFiYS9yZXBvcz9zb3J0PXVwZGF0ZWQnKTtcclxuICBjb25zdCBvcmlnaW5hbFJlcG9zID0gYXdhaXQgcmVzUmVwb3MuanNvbigpO1xyXG4gIGNvbnN0IGRvbnRTaG93UmVwb3MgPSBbJ2tpc2hhYmEvUHJvamV0b0xhemFydXMnLCAna2lzaGFiYS9Qcm9qZXRvRGVscGhpJ107XHJcbiAgY29uc3QgaXNOb3RGb3JrID0gKHJlcG8pID0+ICFyZXBvLmZvcms7XHJcbiAgY29uc3QgZG9udFNob3dGaWx0ZXIgPSAocmVwbykgPT4gZG9udFNob3dSZXBvcy5pbmRleE9mKHJlcG8uZnVsbF9uYW1lKSA9PT0gLTE7XHJcbiAgY29uc3QgZXh0cmFjdERhdGEgPSAocmVwbykgPT4gKHtcclxuICAgIGlkOiByZXBvLmlkLFxyXG4gICAgZnVsbF9uYW1lOiByZXBvLmZ1bGxfbmFtZSxcclxuICAgIGxhbmd1YWdlOiByZXBvLmxhbmd1YWdlLFxyXG4gICAgc3RhcmdhemVyc19jb3VudDogcmVwby5zdGFyZ2F6ZXJzX2NvdW50LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHJlcG9zID0gb3JpZ2luYWxSZXBvcy5maWx0ZXIoaXNOb3RGb3JrKS5maWx0ZXIoZG9udFNob3dGaWx0ZXIpLm1hcChleHRyYWN0RGF0YSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjdXJyZW50RGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgICByZXBvcyxcclxuICAgIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=