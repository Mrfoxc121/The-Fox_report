"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Author.jsx":
/*!*******************************!*\
  !*** ./components/Author.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ \"./util.js\");\nvar _this = undefined;\n\n\n\n\nvar Author = function(param) {\n    var author = param.author;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center mt-20 mb-8 p-12 relative rounded-lg bg-zinc-100 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-0 right-0 -top-14\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    unoptimized: true,\n                    loader: _util__WEBPACK_IMPORTED_MODULE_3__.grpahCMSImageLoader,\n                    alt: author.name,\n                    height: \"100px\",\n                    width: \"100px\",\n                    className: \"align-middle rounded-full\",\n                    src: author.photo.url\n                }, void 0, false, {\n                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Author.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Author.jsx\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-stone-900 mt-4 mb-4 text-xl font-bold\",\n                children: author.name\n            }, void 0, false, {\n                fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Author.jsx\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-stone-900 text-ls\",\n                children: author.bio\n            }, void 0, false, {\n                fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Author.jsx\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Author.jsx\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, _this);\n};\n_c = Author;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Author);\nvar _c;\n$RefreshReg$(_c, \"Author\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhvci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDSztBQUVlO0FBRTlDLElBQU1HLE1BQU0sR0FBRztRQUFHQyxNQUFNLFNBQU5BLE1BQU07eUJBQ3RCLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw4REFBOEQ7OzBCQUMzRSw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGlDQUFpQzswQkFDOUMsNEVBQUNMLG1EQUFLO29CQUNKTSxXQUFXO29CQUNYQyxNQUFNLEVBQUVOLHNEQUFtQjtvQkFDM0JPLEdBQUcsRUFBRUwsTUFBTSxDQUFDTSxJQUFJO29CQUNoQkMsTUFBTSxFQUFDLE9BQU87b0JBQ2RDLEtBQUssRUFBQyxPQUFPO29CQUNiTixTQUFTLEVBQUMsMkJBQTJCO29CQUNyQ08sR0FBRyxFQUFFVCxNQUFNLENBQUNVLEtBQUssQ0FBQ0MsR0FBRzs7Ozs7eUJBQ3JCOzs7OztxQkFDRTswQkFDTiw4REFBQ0MsSUFBRTtnQkFBQ1YsU0FBUyxFQUFDLDRDQUE0QzswQkFBRUYsTUFBTSxDQUFDTSxJQUFJOzs7OztxQkFBTTswQkFDN0UsOERBQUNPLEdBQUM7Z0JBQUNYLFNBQVMsRUFBQyx3QkFBd0I7MEJBQUVGLE1BQU0sQ0FBQ2MsR0FBRzs7Ozs7cUJBQUs7Ozs7OzthQUNsRDtDQUNQO0FBaEJLZixLQUFBQSxNQUFNO0FBa0JaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRob3IuanN4PzRiZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHsgZ3JwYWhDTVNJbWFnZUxvYWRlciB9IGZyb20gJy4uL3V0aWwnO1xuXG5jb25zdCBBdXRob3IgPSAoeyBhdXRob3IgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTIwIG1iLTggcC0xMiByZWxhdGl2ZSByb3VuZGVkLWxnIGJnLXppbmMtMTAwIFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHJpZ2h0LTAgLXRvcC0xNFwiPlxuICAgICAgPEltYWdlXG4gICAgICAgIHVub3B0aW1pemVkXG4gICAgICAgIGxvYWRlcj17Z3JwYWhDTVNJbWFnZUxvYWRlcn1cbiAgICAgICAgYWx0PXthdXRob3IubmFtZX1cbiAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxuICAgICAgICB3aWR0aD1cIjEwMHB4XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgIHNyYz17YXV0aG9yLnBob3RvLnVybH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtOTAwIG10LTQgbWItNCB0ZXh0LXhsIGZvbnQtYm9sZFwiPnthdXRob3IubmFtZX08L2gzPlxuICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtOTAwIHRleHQtbHNcIj57YXV0aG9yLmJpb308L3A+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aG9yO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJncnBhaENNU0ltYWdlTG9hZGVyIiwiQXV0aG9yIiwiYXV0aG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwidW5vcHRpbWl6ZWQiLCJsb2FkZXIiLCJhbHQiLCJuYW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiLCJwaG90byIsInVybCIsImgzIiwicCIsImJpbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Author.jsx\n");

/***/ })

});