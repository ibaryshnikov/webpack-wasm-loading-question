(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/add.js":
/*!********************!*\
  !*** ./src/add.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.wasm */ \"./src/add.wasm\");\n\n\nconsole.log(Object(_add_wasm__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(2, 3));\n\n\n//# sourceURL=webpack:///./src/add.js?");

/***/ }),

/***/ "./src/add.wasm":
/*!**********************!*\
  !*** ./src/add.wasm ***!
  \**********************/
/*! exports provided: memory, __indirect_function_table, __heap_base, __data_end, add */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./src/add.wasm?");

/***/ })

}]);