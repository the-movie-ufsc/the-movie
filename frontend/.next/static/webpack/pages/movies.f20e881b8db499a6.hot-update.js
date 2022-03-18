"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies",{

/***/ "./components/Shared/FeaturedMovie/index.js":
/*!**************************************************!*\
  !*** ./components/Shared/FeaturedMovie/index.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _featuredMovie_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./featuredMovie.module.css */ \"./components/Shared/FeaturedMovie/featuredMovie.module.css\");\n/* harmony import */ var _featuredMovie_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_featuredMovie_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function(param) {\n    var item = param.item;\n    _s();\n    var router = useRouter();\n    var media_type = null;\n    if (router.pathname == \"/movies\") {\n        media_type = \"movie\";\n    } else if (router.pathname == \"/series\") {\n        media_type = \"tv\";\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_featuredMovie_module_css__WEBPACK_IMPORTED_MODULE_2___default().cover),\n        style: {\n            backgroundSize: \"cover\",\n            backgroundPosition: \"top\",\n            backgroundImage: \"linear-gradient(90deg, #171717 5%, transparent), url(https://image.tmdb.org/t/p/original\".concat(item.backdrop_path, \")\")\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_featuredMovie_module_css__WEBPACK_IMPORTED_MODULE_2___default().info),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_featuredMovie_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: item.name || item.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henrique\\\\Documents\\\\GitHub\\\\the-movie\\\\frontend\\\\components\\\\Shared\\\\FeaturedMovie\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Henrique\\\\Documents\\\\GitHub\\\\the-movie\\\\frontend\\\\components\\\\Shared\\\\FeaturedMovie\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_featuredMovie_module_css__WEBPACK_IMPORTED_MODULE_2___default().desc),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.overview\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henrique\\\\Documents\\\\GitHub\\\\the-movie\\\\frontend\\\\components\\\\Shared\\\\FeaturedMovie\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Henrique\\\\Documents\\\\GitHub\\\\the-movie\\\\frontend\\\\components\\\\Shared\\\\FeaturedMovie\\\\index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_featuredMovie_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttons),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: (_featuredMovie_module_css__WEBPACK_IMPORTED_MODULE_2___default().button_watch),\n                            href: \"\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaPlay, {\n                                    className: (_featuredMovie_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon_fa),\n                                    color: \"var(--color-white)\",\n                                    size: 16\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henrique\\\\Documents\\\\GitHub\\\\the-movie\\\\frontend\\\\components\\\\Shared\\\\FeaturedMovie\\\\index.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, _this),\n                                \"Assistir\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Henrique\\\\Documents\\\\GitHub\\\\the-movie\\\\frontend\\\\components\\\\Shared\\\\FeaturedMovie\\\\index.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: (_featuredMovie_module_css__WEBPACK_IMPORTED_MODULE_2___default().button_more_info),\n                            href: \"\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaInfoCircle, {\n                                    className: (_featuredMovie_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon_fa),\n                                    color: \"var(--color-white)\",\n                                    size: 16\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henrique\\\\Documents\\\\GitHub\\\\the-movie\\\\frontend\\\\components\\\\Shared\\\\FeaturedMovie\\\\index.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, _this),\n                                \"Mais informa\\xe7\\xf5es\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Henrique\\\\Documents\\\\GitHub\\\\the-movie\\\\frontend\\\\components\\\\Shared\\\\FeaturedMovie\\\\index.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Henrique\\\\Documents\\\\GitHub\\\\the-movie\\\\frontend\\\\components\\\\Shared\\\\FeaturedMovie\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Henrique\\\\Documents\\\\GitHub\\\\the-movie\\\\frontend\\\\components\\\\Shared\\\\FeaturedMovie\\\\index.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Henrique\\\\Documents\\\\GitHub\\\\the-movie\\\\frontend\\\\components\\\\Shared\\\\FeaturedMovie\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this));\n}, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", true));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlZC9GZWF0dXJlZE1vdmllL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDc0I7QUFDRDtBQUNPOzs7QUFFckQsK0RBQWUsV0FBUSxRQUFNLENBQUM7UUFBWkssSUFBSSxTQUFKQSxJQUFJOztJQUNwQixHQUFLLENBQUNDLE1BQU0sR0FBR0MsU0FBUztJQUV4QixHQUFHLENBQUNDLFVBQVUsR0FBRyxJQUFJO0lBRXJCLEVBQUUsRUFBRUYsTUFBTSxDQUFDRyxRQUFRLElBQUksQ0FBUyxVQUFFLENBQUM7UUFDakNELFVBQVUsR0FBRyxDQUFPO0lBQ3RCLENBQUMsTUFBTSxFQUFFLEVBQUVGLE1BQU0sQ0FBQ0csUUFBUSxJQUFJLENBQVMsVUFBRSxDQUFDO1FBQ3hDRCxVQUFVLEdBQUcsQ0FBSTtJQUNuQixDQUFDO0lBQ0QsTUFBTSw2RUFDSEUsQ0FBTztRQUNOQyxTQUFTLEVBQUVWLHdFQUFZO1FBQ3ZCWSxLQUFLLEVBQUUsQ0FBQztZQUNOQyxjQUFjLEVBQUUsQ0FBTztZQUN2QkMsa0JBQWtCLEVBQUUsQ0FBSztZQUN6QkMsZUFBZSxFQUFHLENBQXdGLDBGQUFxQixNQUFDLENBQXBCWCxJQUFJLENBQUNZLGFBQWEsRUFBQyxDQUFDO1FBQ2xJLENBQUM7OEZBRUFDLENBQUc7WUFBQ1AsU0FBUyxFQUFFVix1RUFBVzs7NEZBQ3hCaUIsQ0FBRztvQkFBQ1AsU0FBUyxFQUFFVix1RUFBVzswR0FDeEJvQixDQUFFO2tDQUFFaEIsSUFBSSxDQUFDZSxJQUFJLElBQUlmLElBQUksQ0FBQ2lCLEtBQUs7Ozs7Ozs7Ozs7OzRGQUc3QkosQ0FBRztvQkFBQ1AsU0FBUyxFQUFFVix1RUFBVzswR0FDeEJ1QixDQUFDO2tDQUFFbkIsSUFBSSxDQUFDb0IsUUFBUTs7Ozs7Ozs7Ozs7NEZBR2xCUCxDQUFHO29CQUFDUCxTQUFTLEVBQUVWLDBFQUFjOztvR0FDM0IwQixDQUFDOzRCQUFDaEIsU0FBUyxFQUFFViwrRUFBbUI7NEJBQUU0QixJQUFJLEVBQUMsQ0FBRTs7NEdBQ3ZDMUIsa0RBQU07b0NBQUNRLFNBQVMsRUFBRVYsMEVBQWM7b0NBQUU4QixLQUFLLEVBQUMsQ0FBb0I7b0NBQUNDLElBQUksRUFBRSxFQUFFOzs7Ozs7Z0NBQUksQ0FFNUU7Ozs7Ozs7b0dBRUNMLENBQUM7NEJBQUNoQixTQUFTLEVBQUVWLG1GQUF1Qjs0QkFBRTRCLElBQUksRUFBQyxDQUFFOzs0R0FDM0N6Qix3REFBWTtvQ0FBQ08sU0FBUyxFQUFFViwwRUFBYztvQ0FBRThCLEtBQUssRUFBQyxDQUFvQjtvQ0FBQ0MsSUFBSSxFQUFFLEVBQUU7Ozs7OztnQ0FBSSxDQUVsRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQyx5Q0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NoYXJlZC9GZWF0dXJlZE1vdmllL2luZGV4LmpzPzFjMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2ZlYXR1cmVkTW92aWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVQbHVzIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IEZhUGxheSwgRmFJbmZvQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBpdGVtIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgbGV0IG1lZGlhX3R5cGUgPSBudWxsO1xyXG5cclxuICBpZiAocm91dGVyLnBhdGhuYW1lID09IFwiL21vdmllc1wiKSB7XHJcbiAgICBtZWRpYV90eXBlID0gXCJtb3ZpZVwiO1xyXG4gIH0gZWxzZSBpZiAocm91dGVyLnBhdGhuYW1lID09IFwiL3Nlcmllc1wiKSB7XHJcbiAgICBtZWRpYV90eXBlID0gXCJ0dlwiO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJ9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTcxNzE3IDUlLCB0cmFuc3BhcmVudCksIHVybChodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbCR7aXRlbS5iYWNrZHJvcF9wYXRofSlgLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICA8aDE+e2l0ZW0ubmFtZSB8fCBpdGVtLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY30+XHJcbiAgICAgICAgICA8cD57aXRlbS5vdmVydmlld308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fd2F0Y2h9IGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgPEZhUGxheSBjbGFzc05hbWU9e3N0eWxlcy5pY29uX2ZhfSBjb2xvcj1cInZhcigtLWNvbG9yLXdoaXRlKVwiIHNpemU9ezE2fSAvPlxyXG4gICAgICAgICAgICBBc3Npc3RpclxyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9tb3JlX2luZm99IGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgPEZhSW5mb0NpcmNsZSBjbGFzc05hbWU9e3N0eWxlcy5pY29uX2ZhfSBjb2xvcj1cInZhcigtLWNvbG9yLXdoaXRlKVwiIHNpemU9ezE2fSAvPlxyXG4gICAgICAgICAgICBNYWlzIGluZm9ybWHDp8O1ZXNcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiQWlPdXRsaW5lUGx1cyIsIkZhUGxheSIsIkZhSW5mb0NpcmNsZSIsIml0ZW0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtZWRpYV90eXBlIiwicGF0aG5hbWUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiY292ZXIiLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2Ryb3BfcGF0aCIsImRpdiIsImluZm8iLCJuYW1lIiwiaDEiLCJ0aXRsZSIsImRlc2MiLCJwIiwib3ZlcnZpZXciLCJidXR0b25zIiwiYSIsImJ1dHRvbl93YXRjaCIsImhyZWYiLCJpY29uX2ZhIiwiY29sb3IiLCJzaXplIiwiYnV0dG9uX21vcmVfaW5mbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Shared/FeaturedMovie/index.js\n");

/***/ })

});