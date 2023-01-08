"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Banner.tsx":
/*!*******************************!*\
  !*** ./components/Banner.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/movie */ \"./constants/movie.ts\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _atoms_modalAtom___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/modalAtom. */ \"./atoms/modalAtom..ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Banner(param) {\n    var netflixOriginals = param.netflixOriginals;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), movie = ref[0], setMovie = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_atoms_modalAtom___WEBPACK_IMPORTED_MODULE_3__.movieState), 2), currentMovie = ref1[0], setCurrentMovie = ref1[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_atoms_modalAtom___WEBPACK_IMPORTED_MODULE_3__.modalState), 2), showModal = ref2[0], setShowModal = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);\n    }, [\n        netflixOriginals\n    ]);\n    console.table(movie);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col space-y-5 py-20 md:space-y-5 lg:h-[900vh] lg:justify-end lg:pb-15\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 left-0 -z-10 h-[95vh] w-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    layout: \"fill\",\n                    src: \"\".concat(_constants_movie__WEBPACK_IMPORTED_MODULE_2__.baseUrl).concat((movie === null || movie === void 0 ? void 0 : movie.backdrop_path) || (movie === null || movie === void 0 ? void 0 : movie.poster_path)),\n                    objectFit: \"cover\",\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"A:\\\\PROJECTS\\\\hktv2\\\\components\\\\Banner.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"A:\\\\PROJECTS\\\\hktv2\\\\components\\\\Banner.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold md:text-4xl lg:text-7xl\",\n                children: (movie === null || movie === void 0 ? void 0 : movie.title) || (movie === null || movie === void 0 ? void 0 : movie.name) || (movie === null || movie === void 0 ? void 0 : movie.original_name)\n            }, void 0, false, {\n                fileName: \"A:\\\\PROJECTS\\\\hktv2\\\\components\\\\Banner.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl\",\n                children: movie === null || movie === void 0 ? void 0 : movie.overview\n            }, void 0, false, {\n                fileName: \"A:\\\\PROJECTS\\\\hktv2\\\\components\\\\Banner.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bannerButton bg-white text-black\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaPlay, {\n                                className: \"h-4 w-4 text-black md:h-7 md:w-7\"\n                            }, void 0, false, {\n                                fileName: \"A:\\\\PROJECTS\\\\hktv2\\\\components\\\\Banner.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            \"Play\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"A:\\\\PROJECTS\\\\hktv2\\\\components\\\\Banner.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bannerButton bg-[gray]/70\",\n                        onClick: function() {\n                            setCurrentMovie(movie);\n                            setShowModal(true);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__.InformationCircleIcon, {\n                                className: \"h-5 w-5 md:h-8 md:w-8\"\n                            }, void 0, false, {\n                                fileName: \"A:\\\\PROJECTS\\\\hktv2\\\\components\\\\Banner.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            \" More Info\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"A:\\\\PROJECTS\\\\hktv2\\\\components\\\\Banner.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"A:\\\\PROJECTS\\\\hktv2\\\\components\\\\Banner.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"A:\\\\PROJECTS\\\\hktv2\\\\components\\\\Banner.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Banner, \"V5W+A7y6XiAQktkFbYgBuDZnh+Y=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState\n    ];\n});\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs0QkFDdEJLLFlBQVksQ0FBQyxJQUFJLENBQUM7d0JBQ3BCLENBQUM7OzBDQUVDLDhEQUFDaEIsOEVBQXFCO2dDQUFDd0IsU0FBUyxFQUFDLHVCQUF1Qjs7Ozs7b0NBQUc7NEJBQUEsWUFDN0Q7Ozs7Ozs0QkFBUzs7Ozs7O29CQUNMOzs7Ozs7WUFFSixDQUNMO0FBQ0gsQ0FBQztHQTlDUWYsTUFBTTs7UUFFMkJGLGtEQUFjO1FBQ3BCQSxrREFBYzs7O0FBSHpDRSxLQUFBQSxNQUFNO0FBZ0RmLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFubmVyLnRzeD9hYzc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluZm9ybWF0aW9uQ2lyY2xlSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSAnLi4vY29uc3RhbnRzL21vdmllJ1xyXG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gJy4uL3R5cGluZ3MnXHJcbmltcG9ydCB7IEZhUGxheSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgeyBtb2RhbFN0YXRlLCBtb3ZpZVN0YXRlIH0gZnJvbSAnLi4vYXRvbXMvbW9kYWxBdG9tLidcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgbmV0ZmxpeE9yaWdpbmFsczogTW92aWVbXVxyXG59XHJcblxyXG5mdW5jdGlvbiBCYW5uZXIoeyBuZXRmbGl4T3JpZ2luYWxzIH06IFByb3BzKSB7XHJcbiAgY29uc3QgW21vdmllLCBzZXRNb3ZpZV0gPSB1c2VTdGF0ZTxNb3ZpZSB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW2N1cnJlbnRNb3ZpZSwgc2V0Q3VycmVudE1vdmllXSA9IHVzZVJlY29pbFN0YXRlKG1vdmllU3RhdGUpXHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVJlY29pbFN0YXRlKG1vZGFsU3RhdGUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRNb3ZpZShcclxuICAgICAgbmV0ZmxpeE9yaWdpbmFsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXRmbGl4T3JpZ2luYWxzLmxlbmd0aCldXHJcbiAgICApXHJcbiAgfSwgW25ldGZsaXhPcmlnaW5hbHNdKVxyXG5cclxuICBjb25zb2xlLnRhYmxlKG1vdmllKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNSBweS0yMCBtZDpzcGFjZS15LTUgbGc6aC1bOTAwdmhdIGxnOmp1c3RpZnktZW5kIGxnOnBiLTE1XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIC16LTEwIGgtWzk1dmhdIHctc2NyZWVuXCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2Ake2Jhc2VVcmx9JHttb3ZpZT8uYmFja2Ryb3BfcGF0aCB8fCBtb3ZpZT8ucG9zdGVyX3BhdGh9YH1cclxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIiBhbHQ9eycnfSAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWQ6dGV4dC00eGwgbGc6dGV4dC03eGxcIj5cclxuICAgICAgICB7bW92aWU/LnRpdGxlIHx8IG1vdmllPy5uYW1lIHx8IG1vdmllPy5vcmlnaW5hbF9uYW1lfVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy14cyB0ZXh0LXhzIHRleHQtc2hhZG93LW1kIG1kOm1heC13LWxnIG1kOnRleHQtbGcgbGc6bWF4LXctMnhsIGxnOnRleHQtMnhsXCI+XHJcbiAgICAgICAge21vdmllPy5vdmVydmlld31cclxuICAgICAgPC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtM1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmFubmVyQnV0dG9uIGJnLXdoaXRlIHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgIDxGYVBsYXkgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWJsYWNrIG1kOmgtNyBtZDp3LTdcIiAvPlxyXG4gICAgICAgICAgUGxheVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJhbm5lckJ1dHRvbiBiZy1bZ3JheV0vNzBcIiBcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRDdXJyZW50TW92aWUobW92aWUpXHJcbiAgICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSlcclxuICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbmZvcm1hdGlvbkNpcmNsZUljb24gY2xhc3NOYW1lPVwiaC01IHctNSBtZDpoLTggbWQ6dy04XCIgLz4gTW9yZSBJbmZvXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lciJdLCJuYW1lcyI6WyJJbmZvcm1hdGlvbkNpcmNsZUljb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImJhc2VVcmwiLCJGYVBsYXkiLCJtb2RhbFN0YXRlIiwibW92aWVTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwiSW1hZ2UiLCJCYW5uZXIiLCJuZXRmbGl4T3JpZ2luYWxzIiwibW92aWUiLCJzZXRNb3ZpZSIsImN1cnJlbnRNb3ZpZSIsInNldEN1cnJlbnRNb3ZpZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNvbnNvbGUiLCJ0YWJsZSIsImRpdiIsImNsYXNzTmFtZSIsImxheW91dCIsInNyYyIsImJhY2tkcm9wX3BhdGgiLCJwb3N0ZXJfcGF0aCIsIm9iamVjdEZpdCIsImFsdCIsImgxIiwidGl0bGUiLCJuYW1lIiwib3JpZ2luYWxfbmFtZSIsInAiLCJvdmVydmlldyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Banner.tsx\n"));

/***/ })

});