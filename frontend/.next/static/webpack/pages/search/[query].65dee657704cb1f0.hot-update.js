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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var _home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _search_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search.module.css */ \"./pages/search/search.module.css\");\n/* harmony import */ var _search_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_search_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Shared_MovieRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Shared/MovieRow */ \"./components/Shared/MovieRow/index.js\");\n/* harmony import */ var _components_Shared_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Shared/Menu */ \"./components/Shared/Menu/index.js\");\n/* harmony import */ var _components_Shared_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Shared/Footer */ \"./components/Shared/Footer/index.js\");\n/* harmony import */ var _components_TMDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TMDB */ \"./components/TMDB.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Search() {\n    _s();\n    var query1 = router.query.query;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), searchList = ref[0], setSearchList = ref[1];\n    var onChange = function() {\n        var _ref = _asyncToGenerator(_home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(query) {\n            var list;\n            return _home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _components_TMDB__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getSearch(query);\n                    case 2:\n                        list = _ctx.sent;\n                        setSearchList(list);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onChange(query) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Search | The Movie\"\n                    }, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"Home The Movie\"\n                    }, \"title\", false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_search_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Shared_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: (_search_module_css__WEBPACK_IMPORTED_MODULE_8___default().menu)\n                    }, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                        className: (_search_module_css__WEBPACK_IMPORTED_MODULE_8___default().list),\n                        children: console.log(searchList)\n                    }, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Shared_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Search, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gvW3F1ZXJ5XS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDQztBQUNlO0FBQ1I7QUFDSTtBQUNYO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixRQUFRLENBQUNRLE1BQU0sR0FBRyxDQUFDOztJQUNoQyxHQUFLLENBQUdDLE1BQUssR0FBS0MsTUFBTSxDQUFDRCxLQUFLLENBQXRCQSxLQUFLO0lBRWIsR0FBSyxDQUErQlIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUF4Q1UsVUFBVSxHQUFtQlYsR0FBWSxLQUE3QlcsYUFBYSxHQUFJWCxHQUFZO0lBRWhELEdBQUssQ0FBQ1ksUUFBUTsrTEFBRyxRQUFRLFNBQURKLEtBQUssRUFBSyxDQUFDO2dCQUM3QkssSUFBSTs7Ozs7K0JBQVNSLGtFQUFjLENBQUNHLEtBQUs7O3dCQUFqQ0ssSUFBSTt3QkFDUkYsYUFBYSxDQUFDRSxJQUFJOzs7Ozs7UUFDcEIsQ0FBQzt3QkFIS0QsUUFBUSxDQUFVSixLQUFLOzs7O0lBSzdCLE1BQU07O3dGQUVERixrREFBSTs7Z0dBQ0ZTLENBQUs7a0NBQUMsQ0FBa0I7Ozs7OztnR0FDeEJDLENBQUk7d0JBQUNDLFFBQVEsRUFBQyxDQUFVO3dCQUFDQyxPQUFPLEVBQUMsQ0FBZ0I7dUJBQUssQ0FBTzs7Ozs7Ozs7Ozs7d0ZBRS9EQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUVuQixxRUFBZ0I7O2dHQUM3QkUsK0RBQUk7d0JBQUNpQixTQUFTLEVBQUVuQixnRUFBVzs7Ozs7O2dHQUUzQnNCLENBQU87d0JBQUNILFNBQVMsRUFBRW5CLGdFQUFXO2tDQUFHdUIsT0FBTyxDQUFDQyxHQUFHLENBQUNmLFVBQVU7Ozs7OztnR0FDdkROLGlFQUFNOzs7Ozs7Ozs7Ozs7O0FBSWYsQ0FBQztHQXhCdUJHLE1BQU07S0FBTkEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2gvW3F1ZXJ5XS5qcz9hNzViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zZWFyY2gubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE1vdmllUm93IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NoYXJlZC9Nb3ZpZVJvd1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2hhcmVkL01lbnVcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2hhcmVkL0Zvb3RlclwiO1xuaW1wb3J0IFRNREIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVE1EQlwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBbc2VhcmNoTGlzdCwgc2V0U2VhcmNoTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSBhc3luYyAocXVlcnkpID0+IHtcbiAgICBsZXQgbGlzdCA9IGF3YWl0IFRNREIuZ2V0U2VhcmNoKHF1ZXJ5KTtcbiAgICBzZXRTZWFyY2hMaXN0KGxpc3QpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2VhcmNoIHwgVGhlIE1vdmllPC90aXRsZT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJIb21lIFRoZSBNb3ZpZVwiIGtleT1cInRpdGxlXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPE1lbnUgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gLz5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT57Y29uc29sZS5sb2coc2VhcmNoTGlzdCl9PC9zZWN0aW9uPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTW92aWVSb3ciLCJNZW51IiwiRm9vdGVyIiwiVE1EQiIsIkhlYWQiLCJTZWFyY2giLCJxdWVyeSIsInJvdXRlciIsInNlYXJjaExpc3QiLCJzZXRTZWFyY2hMaXN0Iiwib25DaGFuZ2UiLCJsaXN0IiwiZ2V0U2VhcmNoIiwidGl0bGUiLCJtZXRhIiwicHJvcGVydHkiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWVudSIsInNlY3Rpb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search/[query].js\n");

/***/ })

});