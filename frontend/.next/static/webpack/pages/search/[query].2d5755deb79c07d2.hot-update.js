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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var _home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _search_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search.module.css */ \"./pages/search/search.module.css\");\n/* harmony import */ var _search_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_search_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Shared_MovieRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Shared/MovieRow */ \"./components/Shared/MovieRow/index.js\");\n/* harmony import */ var _components_Shared_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Shared/Menu */ \"./components/Shared/Menu/index.js\");\n/* harmony import */ var _components_Shared_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Shared/Footer */ \"./components/Shared/Footer/index.js\");\n/* harmony import */ var _components_TMDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TMDB */ \"./components/TMDB.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Search() {\n    _s();\n    var query = router.query.query;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), searchList = ref[0], setSearchList = ref[1];\n    var onChange = function() {\n        var _ref = _asyncToGenerator(_home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var list;\n            return _home_bridge_Documents_UFSC_the_movie_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _components_TMDB__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getSearch(query);\n                    case 2:\n                        list = _ctx.sent;\n                        setSearchList(list);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onChange() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Search | The Movie\"\n                    }, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"Home The Movie\"\n                    }, \"title\", false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_search_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Shared_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: (_search_module_css__WEBPACK_IMPORTED_MODULE_8___default().menu)\n                    }, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                        className: (_search_module_css__WEBPACK_IMPORTED_MODULE_8___default().list),\n                        children: console.log(searchList)\n                    }, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Shared_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Search, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gvW3F1ZXJ5XS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDQztBQUNlO0FBQ1I7QUFDSTtBQUNYO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixRQUFRLENBQUNRLE1BQU0sR0FBRyxDQUFDOztJQUNoQyxHQUFLLENBQUdDLEtBQUssR0FBS0MsTUFBTSxDQUFDRCxLQUFLLENBQXRCQSxLQUFLO0lBRWIsR0FBSyxDQUErQlIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUF4Q1UsVUFBVSxHQUFtQlYsR0FBWSxLQUE3QlcsYUFBYSxHQUFJWCxHQUFZO0lBRWhELEdBQUssQ0FBQ1ksUUFBUTsrTEFBRyxRQUFRLFdBQUksQ0FBQztnQkFDeEJDLElBQUk7Ozs7OytCQUFTUixrRUFBYyxDQUFDRyxLQUFLOzt3QkFBakNLLElBQUk7d0JBQ1JGLGFBQWEsQ0FBQ0UsSUFBSTs7Ozs7O1FBQ3BCLENBQUM7d0JBSEtELFFBQVE7Ozs7SUFLZCxNQUFNOzt3RkFFRE4sa0RBQUk7O2dHQUNGUyxDQUFLO2tDQUFDLENBQWtCOzs7Ozs7Z0dBQ3hCQyxDQUFJO3dCQUFDQyxRQUFRLEVBQUMsQ0FBVTt3QkFBQ0MsT0FBTyxFQUFDLENBQWdCO3VCQUFLLENBQU87Ozs7Ozs7Ozs7O3dGQUUvREMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFbkIscUVBQWdCOztnR0FDN0JFLCtEQUFJO3dCQUFDaUIsU0FBUyxFQUFFbkIsZ0VBQVc7Ozs7OztnR0FFM0JzQixDQUFPO3dCQUFDSCxTQUFTLEVBQUVuQixnRUFBVztrQ0FBR3VCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZixVQUFVOzs7Ozs7Z0dBQ3ZETixpRUFBTTs7Ozs7Ozs7Ozs7OztBQUlmLENBQUM7R0F4QnVCRyxNQUFNO0tBQU5BLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1txdWVyeV0uanM/YTc1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc2VhcmNoLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBNb3ZpZVJvdyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaGFyZWQvTW92aWVSb3dcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NoYXJlZC9NZW51XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NoYXJlZC9Gb290ZXJcIjtcbmltcG9ydCBUTURCIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RNREJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgW3NlYXJjaExpc3QsIHNldFNlYXJjaExpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBsaXN0ID0gYXdhaXQgVE1EQi5nZXRTZWFyY2gocXVlcnkpO1xuICAgIHNldFNlYXJjaExpc3QobGlzdCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TZWFyY2ggfCBUaGUgTW92aWU8L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkhvbWUgVGhlIE1vdmllXCIga2V5PVwidGl0bGVcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8TWVudSBjbGFzc05hbWU9e3N0eWxlcy5tZW51fSAvPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9Pntjb25zb2xlLmxvZyhzZWFyY2hMaXN0KX08L3NlY3Rpb24+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJNb3ZpZVJvdyIsIk1lbnUiLCJGb290ZXIiLCJUTURCIiwiSGVhZCIsIlNlYXJjaCIsInF1ZXJ5Iiwicm91dGVyIiwic2VhcmNoTGlzdCIsInNldFNlYXJjaExpc3QiLCJvbkNoYW5nZSIsImxpc3QiLCJnZXRTZWFyY2giLCJ0aXRsZSIsIm1ldGEiLCJwcm9wZXJ0eSIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtZW51Iiwic2VjdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search/[query].js\n");

/***/ })

});