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

/***/ "./components/FeaturedPostCard.jsx":
/*!*****************************************!*\
  !*** ./components/FeaturedPostCard.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar FeaturedPostCard = function(param) {\n    var post = param.post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-72\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72\",\n                style: {\n                    backgroundImage: \"url('\".concat(post.featuredImage.url, \"')\")\n                }\n            }, void 0, false, {\n                fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/FeaturedPostCard.jsx\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72\"\n            }, void 0, false, {\n                fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/FeaturedPostCard.jsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white mb-4 text-shadow font-semibold text-xs\",\n                        children: moment__WEBPACK_IMPORTED_MODULE_2___default()(post.createdAt).format(\"MMM DD, YYYY\")\n                    }, void 0, false, {\n                        fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/FeaturedPostCard.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white mb-4 text-shadow font-semibold text-2xl text-center\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/FeaturedPostCard.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center absolute bottom-5 w-full justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                unoptimized: true,\n                                alt: post.author.name,\n                                height: \"30px\",\n                                width: \"30px\",\n                                className: \"align-middle drop-shadow-lg rounded-full\",\n                                src: post.author.photo.url\n                            }, void 0, false, {\n                                fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/FeaturedPostCard.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"inline align-middle text-stone-100 text-shadow ml-2 font-medium\",\n                                children: post.author.name\n                            }, void 0, false, {\n                                fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/FeaturedPostCard.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/FeaturedPostCard.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/FeaturedPostCard.jsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/post/\".concat(post.slug),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"cursor-pointer absolute w-full h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/FeaturedPostCard.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 39\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/FeaturedPostCard.jsx\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/FeaturedPostCard.jsx\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, _this);\n};\n_c = FeaturedPostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturedPostCard);\nvar _c;\n$RefreshReg$(_c, \"FeaturedPostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmVkUG9zdENhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ0U7QUFDRztBQUNGO0FBRTdCLElBQU1JLGdCQUFnQixHQUFHO1FBQUdDLElBQUksU0FBSkEsSUFBSTt5QkFDOUIsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGVBQWU7OzBCQUM1Qiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHdGQUF3RjtnQkFBQ0MsS0FBSyxFQUFFO29CQUFFQyxlQUFlLEVBQUUsT0FBTSxDQUF5QixNQUFFLENBQXpCSixJQUFJLENBQUNLLGFBQWEsQ0FBQ0MsR0FBRyxFQUFDLElBQUUsQ0FBQztpQkFBRTs7Ozs7cUJBQUk7MEJBQzFLLDhEQUFDTCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMkdBQTJHOzs7OztxQkFBRzswQkFDN0gsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxpRkFBaUY7O2tDQUM5Riw4REFBQ0ssR0FBQzt3QkFBQ0wsU0FBUyxFQUFDLG1EQUFtRDtrQ0FBRU4sNkNBQU0sQ0FBQ0ksSUFBSSxDQUFDUSxTQUFTLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBQzs7Ozs7NkJBQUs7a0NBQ3BILDhEQUFDRixHQUFDO3dCQUFDTCxTQUFTLEVBQUMsZ0VBQWdFO2tDQUFFRixJQUFJLENBQUNVLEtBQUs7Ozs7OzZCQUFLO2tDQUM5Riw4REFBQ1QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDJEQUEyRDs7MENBQ3hFLDhEQUFDTCxtREFBSztnQ0FDSmMsV0FBVztnQ0FDWEMsR0FBRyxFQUFFWixJQUFJLENBQUNhLE1BQU0sQ0FBQ0MsSUFBSTtnQ0FDckJDLE1BQU0sRUFBQyxNQUFNO2dDQUNiQyxLQUFLLEVBQUMsTUFBTTtnQ0FDWmQsU0FBUyxFQUFDLDBDQUEwQztnQ0FDcERlLEdBQUcsRUFBRWpCLElBQUksQ0FBQ2EsTUFBTSxDQUFDSyxLQUFLLENBQUNaLEdBQUc7Ozs7O3FDQUMxQjswQ0FDRiw4REFBQ0MsR0FBQztnQ0FBQ0wsU0FBUyxFQUFDLGlFQUFpRTswQ0FBRUYsSUFBSSxDQUFDYSxNQUFNLENBQUNDLElBQUk7Ozs7O3FDQUFLOzs7Ozs7NkJBQ2pHOzs7Ozs7cUJBQ0Y7MEJBQ04sOERBQUNoQixrREFBSTtnQkFBQ3FCLElBQUksRUFBRSxRQUFPLENBQVksT0FBVm5CLElBQUksQ0FBQ29CLElBQUksQ0FBRTswQkFBRSw0RUFBQ0MsTUFBSTtvQkFBQ25CLFNBQVMsRUFBQyx1Q0FBdUM7Ozs7O3lCQUFHOzs7OztxQkFBTzs7Ozs7O2FBQy9GO0NBQ1A7QUFyQktILEtBQUFBLGdCQUFnQjtBQXVCdEIsK0RBQWVBLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmVhdHVyZWRQb3N0Q2FyZC5qc3g/ZmVjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgRmVhdHVyZWRQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNzJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJvdW5kZWQtbGcgYmctY2VudGVyIGJnLW5vLXJlcGVhdCBiZy1jb3ZlciBzaGFkb3ctbWQgaW5saW5lLWJsb2NrIHctZnVsbCBoLTcyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke3Bvc3QuZmVhdHVyZWRJbWFnZS51cmx9JylgIH19IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByb3VuZGVkLWxnIGJnLWNlbnRlciBiZy1ncmFkaWVudC10by1iIG9wYWNpdHktNTAgZnJvbS1ncmF5LTQwMCB2aWEtZ3JheS03MDAgdG8tYmxhY2sgdy1mdWxsIGgtNzJcIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLWxnIHAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbFwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi00IHRleHQtc2hhZG93IGZvbnQtc2VtaWJvbGQgdGV4dC14c1wiPnttb21lbnQocG9zdC5jcmVhdGVkQXQpLmZvcm1hdCgnTU1NIERELCBZWVlZJyl9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi00IHRleHQtc2hhZG93IGZvbnQtc2VtaWJvbGQgdGV4dC0yeGwgdGV4dC1jZW50ZXJcIj57cG9zdC50aXRsZX08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGFic29sdXRlIGJvdHRvbS01IHctZnVsbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICB1bm9wdGltaXplZFxuICAgICAgICAgIGFsdD17cG9zdC5hdXRob3IubmFtZX1cbiAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcbiAgICAgICAgICB3aWR0aD1cIjMwcHhcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZSBkcm9wLXNoYWRvdy1sZyByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgIHNyYz17cG9zdC5hdXRob3IucGhvdG8udXJsfVxuICAgICAgICAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUgYWxpZ24tbWlkZGxlIHRleHQtc3RvbmUtMTAwIHRleHQtc2hhZG93IG1sLTIgZm9udC1tZWRpdW1cIj57cG9zdC5hdXRob3IubmFtZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtwb3N0LnNsdWd9YH0+PHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbFwiIC8+PC9MaW5rPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkUG9zdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb21lbnQiLCJJbWFnZSIsIkxpbmsiLCJGZWF0dXJlZFBvc3RDYXJkIiwicG9zdCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZmVhdHVyZWRJbWFnZSIsInVybCIsInAiLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJ0aXRsZSIsInVub3B0aW1pemVkIiwiYWx0IiwiYXV0aG9yIiwibmFtZSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwicGhvdG8iLCJocmVmIiwic2x1ZyIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FeaturedPostCard.jsx\n");

/***/ })

});