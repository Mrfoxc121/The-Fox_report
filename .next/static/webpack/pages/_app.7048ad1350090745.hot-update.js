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

/***/ "./components/PostDetail.jsx":
/*!***********************************!*\
  !*** ./components/PostDetail.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar PostDetail = function(param) {\n    var post = param.post;\n    var _this1 = _this;\n    var getContentFragment = function(index, text, obj, type) {\n        var modifiedText = text;\n        if (obj) {\n            if (obj.bold) {\n                modifiedText = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: text\n                }, index, false, {\n                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 25\n                }, _this1);\n            }\n            if (obj.italic) {\n                modifiedText = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n                    children: text\n                }, index, false, {\n                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 25\n                }, _this1);\n            }\n            if (obj.underline) {\n                modifiedText = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"u\", {\n                    children: text\n                }, index, false, {\n                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 25\n                }, _this1);\n            }\n        }\n        switch(type){\n            case \"heading-three\":\n                var _this4 = _this1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-xl font-semibold mb-4\",\n                    children: modifiedText.map(function(item, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                            children: item\n                        }, i, false, {\n                            fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 102\n                        }, _this4);\n                    })\n                }, index, false, {\n                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 16\n                }, _this1);\n            case \"paragraph\":\n                var _this2 = _this1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-8\",\n                    children: modifiedText.map(function(item, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                            children: item\n                        }, i, false, {\n                            fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 79\n                        }, _this2);\n                    })\n                }, index, false, {\n                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 16\n                }, _this1);\n            case \"heading-four\":\n                var _this3 = _this1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"text-md font-semibold mb-4\",\n                    children: modifiedText.map(function(item, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                            children: item\n                        }, i, false, {\n                            fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 102\n                        }, _this3);\n                    })\n                }, index, false, {\n                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 16\n                }, _this1);\n            case \"image\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    alt: obj.title,\n                    height: obj.height,\n                    width: obj.width,\n                    src: obj.src\n                }, index, false, {\n                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, _this1);\n            default:\n                return modifiedText;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-stone-100 shadow-md rounded-lg lg:p-8 pb-12 mb-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative overflow-hidden shadow-md mb-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post.featuredImage.url,\n                        alt: \"\",\n                        className: \"object-top h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-4 lg:px-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center mb-8 w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            alt: post.author.name,\n                                            height: \"30px\",\n                                            width: \"30px\",\n                                            className: \"align-middle rounded-full\",\n                                            src: post.author.photo.url\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"inline align-middle text-gray-700 ml-2 font-medium text-lg\",\n                                            children: post.author.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-medium text-stone-100\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            className: \"h-6 w-6 inline mr-2 text-red-900\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            stroke: \"currentColor\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                strokeWidth: \"2\",\n                                                d: \"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"align-middle\",\n                                            children: moment__WEBPACK_IMPORTED_MODULE_2___default()(post.createdAt).format(\"MMM DD, YYYY\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mb-8 text-3xl text-slate-900 font-semibold\",\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, _this),\n                        post.content.raw.children.map(function(typeObj, index) {\n                            var children = typeObj.children.map(function(item, itemindex) {\n                                return getContentFragment(itemindex, item.text, item);\n                            });\n                            return getContentFragment(index, children, typeObj, typeObj.type);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chrisfox/Desktop/the_fox_report_v3/components/PostDetail.jsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = PostDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostDetail);\nvar _c;\n$RefreshReg$(_c, \"PostDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQUNsQyxHQUFHLENBQUMsU0FBQ21DLE9BQU8sRUFBRWhELEtBQUssRUFBSzs0QkFDakQsSUFBTStDLFFBQVEsR0FBR0MsT0FBTyxDQUFDRCxRQUFRLENBQUNsQyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFbUMsU0FBUzt1Q0FBS2xELGtCQUFrQixDQUFDa0QsU0FBUyxFQUFFbkMsSUFBSSxDQUFDYixJQUFJLEVBQUVhLElBQUksQ0FBQzs2QkFBQSxDQUFDOzRCQUUxRyxPQUFPZixrQkFBa0IsQ0FBQ0MsS0FBSyxFQUFFK0MsUUFBUSxFQUFFQyxPQUFPLEVBQUVBLE9BQU8sQ0FBQzdDLElBQUksQ0FBQyxDQUFDO3lCQUNuRSxDQUFDOzs7Ozs7eUJBQ0U7Ozs7OztpQkFDRjtxQkFFTCxDQUNIO0NBQ0g7QUE1RUtOLEtBQUFBLFVBQVU7QUE4RWhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0RGV0YWlsLmpzeD85ZmQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY29uc3QgUG9zdERldGFpbCA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCBnZXRDb250ZW50RnJhZ21lbnQgPSAoaW5kZXgsIHRleHQsIG9iaiwgdHlwZSkgPT4ge1xuICAgIGxldCBtb2RpZmllZFRleHQgPSB0ZXh0O1xuXG4gICAgaWYgKG9iaikge1xuICAgICAgaWYgKG9iai5ib2xkKSB7XG4gICAgICAgIG1vZGlmaWVkVGV4dCA9ICg8YiBrZXk9e2luZGV4fT57dGV4dH08L2I+KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9iai5pdGFsaWMpIHtcbiAgICAgICAgbW9kaWZpZWRUZXh0ID0gKDxlbSBrZXk9e2luZGV4fT57dGV4dH08L2VtPik7XG4gICAgICB9XG5cbiAgICAgIGlmIChvYmoudW5kZXJsaW5lKSB7XG4gICAgICAgIG1vZGlmaWVkVGV4dCA9ICg8dSBrZXk9e2luZGV4fT57dGV4dH08L3U+KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2hlYWRpbmctdGhyZWUnOlxuICAgICAgICByZXR1cm4gPGgzIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00XCI+e21vZGlmaWVkVGV4dC5tYXAoKGl0ZW0sIGkpID0+IDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PntpdGVtfTwvUmVhY3QuRnJhZ21lbnQ+KX08L2gzPjtcbiAgICAgIGNhc2UgJ3BhcmFncmFwaCc6XG4gICAgICAgIHJldHVybiA8cCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtYi04XCI+e21vZGlmaWVkVGV4dC5tYXAoKGl0ZW0sIGkpID0+IDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PntpdGVtfTwvUmVhY3QuRnJhZ21lbnQ+KX08L3A+O1xuICAgICAgY2FzZSAnaGVhZGluZy1mb3VyJzpcbiAgICAgICAgcmV0dXJuIDxoNCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0ZXh0LW1kIGZvbnQtc2VtaWJvbGQgbWItNFwiPnttb2RpZmllZFRleHQubWFwKChpdGVtLCBpKSA9PiA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT57aXRlbX08L1JlYWN0LkZyYWdtZW50Pil9PC9oND47XG4gICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGFsdD17b2JqLnRpdGxlfVxuICAgICAgICAgICAgaGVpZ2h0PXtvYmouaGVpZ2h0fVxuICAgICAgICAgICAgd2lkdGg9e29iai53aWR0aH1cbiAgICAgICAgICAgIHNyYz17b2JqLnNyY31cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG1vZGlmaWVkVGV4dDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS0xMDAgc2hhZG93LW1kIHJvdW5kZWQtbGcgbGc6cC04IHBiLTEyIG1iLThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIG1iLTZcIj5cbiAgICAgICAgICA8aW1nIHNyYz17cG9zdC5mZWF0dXJlZEltYWdlLnVybH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwib2JqZWN0LXRvcCBoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciAgc2hhZG93LWxnIHJvdW5kZWQtdC1sZyBsZzpyb3VuZGVkLWxnXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBsZzpweC0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi04IHctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbGc6bWItMCBsZzp3LWF1dG8gbXItOCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGFsdD17cG9zdC5hdXRob3IubmFtZX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwcHhcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgIHNyYz17cG9zdC5hdXRob3IucGhvdG8udXJsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUgYWxpZ24tbWlkZGxlIHRleHQtZ3JheS03MDAgbWwtMiBmb250LW1lZGl1bSB0ZXh0LWxnXCI+e3Bvc3QuYXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtc3RvbmUtMTAwXCI+XG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNiB3LTYgaW5saW5lIG1yLTIgdGV4dC1yZWQtOTAwXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNOCA3VjNtOCA0VjNtLTkgOGgxME01IDIxaDE0YTIgMiAwIDAwMi0yVjdhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyelwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj57bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ01NTSBERCwgWVlZWScpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi04IHRleHQtM3hsIHRleHQtc2xhdGUtOTAwIGZvbnQtc2VtaWJvbGRcIj57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIHtwb3N0LmNvbnRlbnQucmF3LmNoaWxkcmVuLm1hcCgodHlwZU9iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdHlwZU9iai5jaGlsZHJlbi5tYXAoKGl0ZW0sIGl0ZW1pbmRleCkgPT4gZ2V0Q29udGVudEZyYWdtZW50KGl0ZW1pbmRleCwgaXRlbS50ZXh0LCBpdGVtKSk7XG5cbiAgICAgICAgICAgIHJldHVybiBnZXRDb250ZW50RnJhZ21lbnQoaW5kZXgsIGNoaWxkcmVuLCB0eXBlT2JqLCB0eXBlT2JqLnR5cGUpO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0RGV0YWlsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW9tZW50IiwiUG9zdERldGFpbCIsInBvc3QiLCJnZXRDb250ZW50RnJhZ21lbnQiLCJpbmRleCIsInRleHQiLCJvYmoiLCJ0eXBlIiwibW9kaWZpZWRUZXh0IiwiYm9sZCIsImIiLCJpdGFsaWMiLCJlbSIsInVuZGVybGluZSIsInUiLCJoMyIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpIiwiRnJhZ21lbnQiLCJwIiwiaDQiLCJpbWciLCJhbHQiLCJ0aXRsZSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiZGl2IiwiZmVhdHVyZWRJbWFnZSIsInVybCIsImF1dGhvciIsIm5hbWUiLCJwaG90byIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwic3BhbiIsImNyZWF0ZWRBdCIsImZvcm1hdCIsImgxIiwiY29udGVudCIsInJhdyIsImNoaWxkcmVuIiwidHlwZU9iaiIsIml0ZW1pbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostDetail.jsx\n");

/***/ })

});