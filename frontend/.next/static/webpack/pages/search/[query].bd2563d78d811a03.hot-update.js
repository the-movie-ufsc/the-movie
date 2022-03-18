"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search/[query]",{

/***/ "./pages/search/[query].js":
/*!*********************************!*\
  !*** ./pages/search/[query].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var _home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _search_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search.module.css */ \"./pages/search/search.module.css\");\n/* harmony import */ var _search_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_search_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Shared_MovieRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Shared/MovieRow */ \"./components/Shared/MovieRow/index.js\");\n/* harmony import */ var _components_Shared_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Shared/Menu */ \"./components/Shared/Menu/index.js\");\n/* harmony import */ var _components_Shared_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Shared/Footer */ \"./components/Shared/Footer/index.js\");\n/* harmony import */ var _components_TMDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TMDB */ \"./components/TMDB.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Search() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    var query = router.query.query;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), items = ref[0], setItems = ref[1];\n    var media_type = null;\n    if (router.pathname == \"/movies\") {\n        media_type = \"movie\";\n    } else if (router.pathname == \"/series\") {\n        media_type = \"tv\";\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var load = function() {\n            var _ref = _asyncToGenerator(_home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var list;\n                return _home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _components_TMDB__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getSearch(query);\n                        case 2:\n                            list = _ctx.sent;\n                            setItems(list);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function load() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        load();\n    }, [\n        query\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Search | The Movie\"\n                    }, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"Home The Movie\"\n                    }, \"title\", false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_search_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Shared_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: (_search_module_css__WEBPACK_IMPORTED_MODULE_10___default().menu)\n                    }, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                        className: (_search_module_css__WEBPACK_IMPORTED_MODULE_10___default().list),\n                        children: items.results && items.results.length > 0 && items.results.map(function(item, key) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_search_module_css__WEBPACK_IMPORTED_MODULE_10___default().item),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                    href: {\n                                        pathname: \"/about/[id]\",\n                                        query: {\n                                            id: item.id,\n                                            type: media_type || (item.name ? \"tv\" : \"movie\")\n                                        }\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        className: (_search_module_css__WEBPACK_IMPORTED_MODULE_10___default().img),\n                                        src: \"https://image.tmdb.org/t/p/w300\".concat(item.poster_path),\n                                        alt: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                                        lineNumber: 56,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, _this)\n                            }, key, false, {\n                                fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Shared_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Search, \"Hi2RJgcOCJHNFGixyOoPRNMzVvU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gvW3F1ZXJ5XS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1Y7QUFDZTtBQUNSO0FBQ0k7QUFDWDtBQUNaO0FBQ1c7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLFFBQVEsQ0FBQ1csTUFBTSxHQUFHLENBQUM7OztJQUNoQyxHQUFLLENBQUNDLE1BQU0sR0FBR0gsc0RBQVM7SUFDeEIsR0FBSyxDQUFHSSxLQUFLLEdBQUtELE1BQU0sQ0FBQ0MsS0FBSyxDQUF0QkEsS0FBSztJQUViLEdBQUssQ0FBcUJYLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBOUJZLEtBQUssR0FBY1osR0FBWSxLQUF4QmEsUUFBUSxHQUFJYixHQUFZO0lBRXRDLEdBQUcsQ0FBQ2MsVUFBVSxHQUFHLElBQUk7SUFFckIsRUFBRSxFQUFFSixNQUFNLENBQUNLLFFBQVEsSUFBSSxDQUFTLFVBQUUsQ0FBQztRQUNqQ0QsVUFBVSxHQUFHLENBQU87SUFDdEIsQ0FBQyxNQUFNLEVBQUUsRUFBRUosTUFBTSxDQUFDSyxRQUFRLElBQUksQ0FBUyxVQUFFLENBQUM7UUFDeENELFVBQVUsR0FBRyxDQUFJO0lBQ25CLENBQUM7SUFFRGYsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUNpQixJQUFJO21NQUFHLFFBQVEsV0FBSSxDQUFDO29CQUNwQkMsSUFBSTs7Ozs7bUNBQVNaLGtFQUFjLENBQUNNLEtBQUs7OzRCQUFqQ00sSUFBSTs0QkFDUkosUUFBUSxDQUFDSSxJQUFJOzs7Ozs7WUFDZixDQUFDOzRCQUhLRCxJQUFJOzs7O1FBSVZBLElBQUk7SUFDTixDQUFDLEVBQUUsQ0FBQ0w7UUFBQUEsS0FBSztJQUFBLENBQUM7SUFFVixNQUFNOzt3RkFFREwsa0RBQUk7O2dHQUNGYSxDQUFLO2tDQUFDLENBQWtCOzs7Ozs7Z0dBQ3hCQyxDQUFJO3dCQUFDQyxRQUFRLEVBQUMsQ0FBVTt3QkFBQ0MsT0FBTyxFQUFDLENBQWdCO3VCQUFLLENBQU87Ozs7Ozs7Ozs7O3dGQUUvREMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFdkIsc0VBQWdCOztnR0FDN0JFLCtEQUFJO3dCQUFDcUIsU0FBUyxFQUFFdkIsaUVBQVc7Ozs7OztnR0FFM0IwQixDQUFPO3dCQUFDSCxTQUFTLEVBQUV2QixpRUFBVztrQ0FDNUJXLEtBQUssQ0FBQ2dCLE9BQU8sSUFDWmhCLEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQ0MsTUFBTSxHQUFHLENBQUMsSUFDeEJqQixLQUFLLENBQUNnQixPQUFPLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsR0FBRzswQ0FDMUIsTUFBTSwrREFBTFQsQ0FBRztnQ0FBV0MsU0FBUyxFQUFFdkIsaUVBQVc7c0hBQ2xDTyxrREFBSTtvQ0FDSHlCLElBQUksRUFBRSxDQUFDO3dDQUNMbEIsUUFBUSxFQUFFLENBQWE7d0NBQ3ZCSixLQUFLLEVBQUUsQ0FBQzs0Q0FDTnVCLEVBQUUsRUFBRUgsSUFBSSxDQUFDRyxFQUFFOzRDQUNYQyxJQUFJLEVBQUVyQixVQUFVLEtBQUtpQixJQUFJLENBQUNLLElBQUksR0FBRyxDQUFJLE1BQUcsQ0FBTzt3Q0FDakQsQ0FBQztvQ0FDSCxDQUFDOzBIQUVBQyxDQUFHO3dDQUNGYixTQUFTLEVBQUV2QixnRUFBVTt3Q0FDckJxQyxHQUFHLEVBQUcsQ0FBK0IsaUNBQW1CLE9BQWpCUCxJQUFJLENBQUNRLFdBQVc7d0NBQ3ZEQyxHQUFHLEVBQUVULElBQUksQ0FBQ1osS0FBSzs7Ozs7Ozs7Ozs7K0JBYlhhLEdBQUc7Ozs7Ozs7Ozs7O2dHQW1CbEI1QixpRUFBTTs7Ozs7Ozs7Ozs7OztBQUlmLENBQUM7R0ExRHVCSyxNQUFNOztRQUNiRixrREFBUzs7O0tBREZFLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1txdWVyeV0uanM/YTc1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zZWFyY2gubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE1vdmllUm93IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NoYXJlZC9Nb3ZpZVJvd1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2hhcmVkL01lbnVcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2hhcmVkL0Zvb3RlclwiO1xuaW1wb3J0IFRNREIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVE1EQlwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcblxuICBsZXQgbWVkaWFfdHlwZSA9IG51bGw7XG5cbiAgaWYgKHJvdXRlci5wYXRobmFtZSA9PSBcIi9tb3ZpZXNcIikge1xuICAgIG1lZGlhX3R5cGUgPSBcIm1vdmllXCI7XG4gIH0gZWxzZSBpZiAocm91dGVyLnBhdGhuYW1lID09IFwiL3Nlcmllc1wiKSB7XG4gICAgbWVkaWFfdHlwZSA9IFwidHZcIjtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGxldCBsaXN0ID0gYXdhaXQgVE1EQi5nZXRTZWFyY2gocXVlcnkpO1xuICAgICAgc2V0SXRlbXMobGlzdCk7XG4gICAgfTtcbiAgICBsb2FkKCk7XG4gIH0sIFtxdWVyeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2VhcmNoIHwgVGhlIE1vdmllPC90aXRsZT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJIb21lIFRoZSBNb3ZpZVwiIGtleT1cInRpdGxlXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPE1lbnUgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gLz5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cbiAgICAgICAgICB7aXRlbXMucmVzdWx0cyAmJlxuICAgICAgICAgICAgaXRlbXMucmVzdWx0cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBpdGVtcy5yZXN1bHRzLm1hcCgoaXRlbSwga2V5KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9hYm91dC9baWRdXCIsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogbWVkaWFfdHlwZSB8fCAoaXRlbS5uYW1lID8gXCJ0dlwiIDogXCJtb3ZpZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWd9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAke2l0ZW0ucG9zdGVyX3BhdGh9YH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIk1vdmllUm93IiwiTWVudSIsIkZvb3RlciIsIlRNREIiLCJIZWFkIiwidXNlUm91dGVyIiwiTGluayIsIlNlYXJjaCIsInJvdXRlciIsInF1ZXJ5IiwiaXRlbXMiLCJzZXRJdGVtcyIsIm1lZGlhX3R5cGUiLCJwYXRobmFtZSIsImxvYWQiLCJsaXN0IiwiZ2V0U2VhcmNoIiwidGl0bGUiLCJtZXRhIiwicHJvcGVydHkiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWVudSIsInNlY3Rpb24iLCJyZXN1bHRzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImtleSIsImhyZWYiLCJpZCIsInR5cGUiLCJuYW1lIiwiaW1nIiwic3JjIiwicG9zdGVyX3BhdGgiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search/[query].js\n");

/***/ })

});