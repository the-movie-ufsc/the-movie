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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _search_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search.module.css */ \"./pages/search/search.module.css\");\n/* harmony import */ var _search_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_search_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Shared_MovieRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Shared/MovieRow */ \"./components/Shared/MovieRow/index.js\");\n/* harmony import */ var _components_Shared_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Shared/Menu */ \"./components/Shared/Menu/index.js\");\n/* harmony import */ var _components_Shared_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Shared/Footer */ \"./components/Shared/Footer/index.js\");\n/* harmony import */ var _components_TMDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TMDB */ \"./components/TMDB.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Search() {\n    _s();\n    var query = router.query.query;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), searchList = ref[0], setSearchList = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {}, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Search | The Movie\"\n                    }, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"Home The Movie\"\n                    }, \"title\", false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_search_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        className: (_search_module_css__WEBPACK_IMPORTED_MODULE_7___default().menu)\n                    }, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_search_module_css__WEBPACK_IMPORTED_MODULE_7___default().list),\n                        children: console.log(searchList)\n                    }, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bridge/Documents/UFSC/the-movie/frontend/pages/search/[query].js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Search, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gvW3F1ZXJ5XS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDVjtBQUNlO0FBQ1I7QUFDSTtBQUNYO0FBQ1o7O0FBRWIsUUFBUSxDQUFDUyxNQUFNLEdBQUcsQ0FBQzs7SUFDaEMsR0FBSyxDQUFHQyxLQUFLLEdBQUtDLE1BQU0sQ0FBQ0QsS0FBSyxDQUF0QkEsS0FBSztJQUViLEdBQUssQ0FBK0JSLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBeENVLFVBQVUsR0FBbUJWLEdBQVksS0FBN0JXLGFBQWEsR0FBSVgsR0FBWTtJQUVoREQsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXRCLE1BQU07O3dGQUVETyxrREFBSTs7Z0dBQ0ZNLENBQUs7a0NBQUMsQ0FBa0I7Ozs7OztnR0FDeEJDLENBQUk7d0JBQUNDLFFBQVEsRUFBQyxDQUFVO3dCQUFDQyxPQUFPLEVBQUMsQ0FBZ0I7dUJBQUssQ0FBTzs7Ozs7Ozs7Ozs7d0ZBRS9EQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUVoQixxRUFBZ0I7O2dHQUM3QkUsK0RBQUk7d0JBQUNjLFNBQVMsRUFBRWhCLGdFQUFXOzs7Ozs7Z0dBRTNCbUIsQ0FBTzt3QkFBQ0gsU0FBUyxFQUFFaEIsZ0VBQVc7a0NBQUdxQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsVUFBVTs7Ozs7O2dHQUN2RE4saUVBQU07Ozs7Ozs7Ozs7Ozs7QUFJZixDQUFDO0dBckJ1QkcsTUFBTTtLQUFOQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlYXJjaC9bcXVlcnldLmpzP2E3NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc2VhcmNoLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBNb3ZpZVJvdyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaGFyZWQvTW92aWVSb3dcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NoYXJlZC9NZW51XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NoYXJlZC9Gb290ZXJcIjtcbmltcG9ydCBUTURCIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RNREJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgW3NlYXJjaExpc3QsIHNldFNlYXJjaExpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2VhcmNoIHwgVGhlIE1vdmllPC90aXRsZT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJIb21lIFRoZSBNb3ZpZVwiIGtleT1cInRpdGxlXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPE1lbnUgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gLz5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT57Y29uc29sZS5sb2coc2VhcmNoTGlzdCl9PC9zZWN0aW9uPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTW92aWVSb3ciLCJNZW51IiwiRm9vdGVyIiwiVE1EQiIsIkhlYWQiLCJTZWFyY2giLCJxdWVyeSIsInJvdXRlciIsInNlYXJjaExpc3QiLCJzZXRTZWFyY2hMaXN0IiwidGl0bGUiLCJtZXRhIiwicHJvcGVydHkiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWVudSIsInNlY3Rpb24iLCJsaXN0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search/[query].js\n");

/***/ })

});