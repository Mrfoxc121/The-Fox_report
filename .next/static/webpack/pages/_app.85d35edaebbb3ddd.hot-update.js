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

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ \"./services/index.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), categories = ref[0], setCategories = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (0,_services__WEBPACK_IMPORTED_MODULE_3__.getCategories)().then(function(newCategories) {\n            setCategories(newCategories);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-10 mb-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border-b w-full inline-block border-slate-400 py-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:float-left block\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"cursor-pointer font-bold text-5xl text-slate-900 logoTitle\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-sky-500\",\n                                    children: \"Tendring\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Header.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 90\n                                }, _this),\n                                \" Culture Corner \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Header.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Header.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Header.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden md:float-left md:contents\",\n                    children: categories.map(function(category, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/category/\".concat(category.slug),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"md:float-right mt-2 align-middle text-3xl text-slate-900 ml-4 font-semibold cursor-pointer\",\n                                children: category.name\n                            }, void 0, false, {\n                                fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Header.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 67\n                            }, _this1)\n                        }, index, false, {\n                            fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Header.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Header.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Header.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Header.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFFdEI7QUFDZTs7QUFFNUMsSUFBTUssTUFBTSxHQUFHLFdBQU07OztJQUNuQixJQUFvQ0osR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU5sRCxVQU1tQixHQUFtQkEsR0FBWSxHQUEvQixFQU5uQixhQU1rQyxHQUFJQSxHQUFZLEdBQWhCO0lBRWhDQyxnREFBUyxDQUFDLFdBQU07UUFDZEUsd0RBQWEsRUFBRSxDQUFDSSxJQUFJLENBQUMsU0FBQ0MsYUFBYSxFQUFLO1lBQ3RDRixhQUFhLENBQUNFLGFBQWEsQ0FBQyxDQUFDO1NBQzlCLENBQUMsQ0FBQztLQUNKLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsOEJBQThCO2tCQUMzQyw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsb0RBQW9EOzs4QkFDakUsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7OEJBQ3BDLDRFQUFDUixrREFBSTt3QkFBQ1MsSUFBSSxFQUFDLEdBQUc7a0NBQ1YsNEVBQUNDLE1BQUk7NEJBQUNGLFNBQVMsRUFBQyw0REFBNEQ7OzhDQUFDLDhEQUFDRSxNQUFJO29DQUFDRixTQUFTLEVBQUMsY0FBYzs4Q0FBQyxVQUFROzs7Ozt5Q0FBTztnQ0FBQSxrQkFBZ0I7Ozs7OztpQ0FBTzs7Ozs7NkJBQzdJOzs7Ozt5QkFDSDs4QkFDTiw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGtDQUFrQzs4QkFDOUNMLFVBQVUsQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDLFFBQVEsRUFBRUMsS0FBSzs2Q0FDOUIsOERBQUNiLGtEQUFJOzRCQUFhUyxJQUFJLEVBQUUsWUFBVyxDQUFnQixPQUFkRyxRQUFRLENBQUNFLElBQUksQ0FBRTtzQ0FBRSw0RUFBQ0osTUFBSTtnQ0FBQ0YsU0FBUyxFQUFDLDRGQUE0RjswQ0FBRUksUUFBUSxDQUFDRyxJQUFJOzs7OztzQ0FBUTsyQkFBOUtGLEtBQUs7Ozs7a0NBQWdMO3FCQUNqTSxDQUFDOzs7Ozt5QkFDRTs7Ozs7O2lCQUNGOzs7OzthQUNGLENBQ047Q0FDSDtHQXpCS1gsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBMkJaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4PzU2N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENhdGVnb3JpZXMoKS50aGVuKChuZXdDYXRlZ29yaWVzKSA9PiB7XG4gICAgICBzZXRDYXRlZ29yaWVzKG5ld0NhdGVnb3JpZXMpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTEwIG1iLThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgdy1mdWxsIGlubGluZS1ibG9jayBib3JkZXItc2xhdGUtNDAwIHB5LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbG9hdC1sZWZ0IGJsb2NrXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmb250LWJvbGQgdGV4dC01eGwgdGV4dC1zbGF0ZS05MDAgbG9nb1RpdGxlXCI+PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXNreS01MDAnPlRlbmRyaW5nPC9zcGFuPiBDdWx0dXJlIENvcm5lciA8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxvYXQtbGVmdCBtZDpjb250ZW50c1wiPlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TGluayBrZXk9e2luZGV4fSBocmVmPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuc2x1Z31gfT48c3BhbiBjbGFzc05hbWU9XCJtZDpmbG9hdC1yaWdodCBtdC0yIGFsaWduLW1pZGRsZSB0ZXh0LTN4bCB0ZXh0LXNsYXRlLTkwMCBtbC00IGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXJcIj57Y2F0ZWdvcnkubmFtZX08L3NwYW4+PC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiZ2V0Q2F0ZWdvcmllcyIsIkhlYWRlciIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwidGhlbiIsIm5ld0NhdGVnb3JpZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3BhbiIsIm1hcCIsImNhdGVnb3J5IiwiaW5kZXgiLCJzbHVnIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.jsx\n");

/***/ })

});