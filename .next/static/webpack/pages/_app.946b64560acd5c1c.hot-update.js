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

/***/ "./components/Categories.jsx":
/*!***********************************!*\
  !*** ./components/Categories.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ \"./services/index.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Categories = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), categories = ref[0], setCategories = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (0,_services__WEBPACK_IMPORTED_MODULE_3__.getCategories)().then(function(newCategories) {\n            setCategories(newCategories);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-stone-50 shadow-md rounded-lg p-8 pb-12 mb-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-xl text-slate-700 mb-8 font-semibold border-b border-slate-300 pb-4\",\n                children: \"Categories\"\n            }, void 0, false, {\n                fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Categories.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            categories.map(function(category, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/category/\".concat(category.slug),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"cursor-pointer text-slate-700 block \".concat(index === categories.length - 1 ? \"border-b-0\" : \"border-b\", \" pb-3 mb-3\"),\n                        children: category.name\n                    }, void 0, false, {\n                        fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Categories.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this1)\n                }, index, false, {\n                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Categories.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/Categories.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(Categories, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3JpZXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBQ3RCO0FBRWU7O0FBRTVDLElBQU1LLFVBQVUsR0FBRyxXQUFNOzs7SUFDdkIsSUFBb0NKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFObEQsVUFNbUIsR0FBbUJBLEdBQVksR0FBL0IsRUFObkIsYUFNa0MsR0FBSUEsR0FBWSxHQUFoQjtJQUVoQ0MsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RFLHdEQUFhLEVBQUUsQ0FBQ0ksSUFBSSxDQUFDLFNBQUNDLGFBQWEsRUFBSztZQUN0Q0YsYUFBYSxDQUFDRSxhQUFhLENBQUMsQ0FBQztTQUM5QixDQUFDLENBQUM7S0FDSixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGlEQUFpRDs7MEJBQzlELDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsMEVBQTBFOzBCQUFDLFlBQVU7Ozs7O3FCQUFLO1lBQ3ZHTCxVQUFVLENBQUNPLEdBQUcsQ0FBQyxTQUFDQyxRQUFRLEVBQUVDLEtBQUs7cUNBQzlCLDhEQUFDWixrREFBSTtvQkFBYWEsSUFBSSxFQUFFLFlBQVcsQ0FBZ0IsT0FBZEYsUUFBUSxDQUFDRyxJQUFJLENBQUU7OEJBQ2xELDRFQUFDQyxNQUFJO3dCQUFDUCxTQUFTLEVBQUUsc0NBQXFDLENBQWdFLE1BQVUsQ0FBeEUsS0FBTSxLQUFLTCxVQUFVLENBQUNhLE1BQU0sR0FBRyxDQUFDLEdBQUksWUFBWSxHQUFHLFVBQVUsRUFBQyxZQUFVLENBQUM7a0NBQUdMLFFBQVEsQ0FBQ00sSUFBSTs7Ozs7OEJBQVE7bUJBRGhKTCxLQUFLOzs7OzBCQUVUO2FBQ1IsQ0FBQzs7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0dBbkJLVixVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFxQmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yaWVzLmpzeD9hNzk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuY29uc3QgQ2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKG5ld0NhdGVnb3JpZXMpID0+IHtcbiAgICAgIHNldENhdGVnb3JpZXMobmV3Q2F0ZWdvcmllcyk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtNTAgc2hhZG93LW1kIHJvdW5kZWQtbGcgcC04IHBiLTEyIG1iLThcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtc2xhdGUtNzAwIG1iLTggZm9udC1zZW1pYm9sZCBib3JkZXItYiBib3JkZXItc2xhdGUtMzAwIHBiLTRcIj5DYXRlZ29yaWVzPC9oMz5cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgICAgIDxMaW5rIGtleT17aW5kZXh9IGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfWB9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyIHRleHQtc2xhdGUtNzAwIGJsb2NrICR7KGluZGV4ID09PSBjYXRlZ29yaWVzLmxlbmd0aCAtIDEpID8gJ2JvcmRlci1iLTAnIDogJ2JvcmRlci1iJ30gcGItMyBtYi0zYH0+e2NhdGVnb3J5Lm5hbWV9PC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJnZXRDYXRlZ29yaWVzIiwiQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwidGhlbiIsIm5ld0NhdGVnb3JpZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsImNhdGVnb3J5IiwiaW5kZXgiLCJocmVmIiwic2x1ZyIsInNwYW4iLCJsZW5ndGgiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Categories.jsx\n");

/***/ })

});