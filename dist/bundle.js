/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/day13/input_test.txt":
/*!**********************************!*\
  !*** ./src/day13/input_test.txt ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("6,10\n0,14\n9,10\n0,3\n10,4\n4,11\n6,0\n6,12\n4,1\n0,13\n10,12\n3,4\n3,0\n8,4\n1,10\n2,14\n8,10\n9,0\n\nfold along y=7\nfold along x=5");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/day13/01.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var text = __webpack_require__(/*! ./input_test.txt */ "./src/day13/input_test.txt");
var coords = text.default.split("\n\n")[0].split("\n").map(function (line) {
    return { x: line.split(",")[0], y: line.split(",")[1] };
});
var instructions = text.default.split("\n\n")[1].split("\n");
console.log(coords);
console.log(instructions);
var width = coords.reduce(function (p, c) {
    return Math.max(p, Number(c.x));
}, 0);
var height = coords.reduce(function (p, c) {
    return Math.max(p, Number(c.y));
}, 0);
console.log("width:", width);
console.log("height:", height);
var grid = new Array(height + 1).fill([]).map(function () { return new Array(width + 1).fill("."); });
console.log.apply(console, __spreadArray(["grid:"], grid, false));
coords.forEach(function (coord) {
    grid[coord.y][coord.x] = "#";
});
console.log.apply(console, __spreadArray(["grid:"], grid, false));
function fold(grid, axis, lineNum) {
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MDIxLy4vc3JjL2RheTEzL2lucHV0X3Rlc3QudHh0Iiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxLy4vc3JjL2RheTEzLzAxLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiNiwxMFxcbjAsMTRcXG45LDEwXFxuMCwzXFxuMTAsNFxcbjQsMTFcXG42LDBcXG42LDEyXFxuNCwxXFxuMCwxM1xcbjEwLDEyXFxuMyw0XFxuMywwXFxuOCw0XFxuMSwxMFxcbjIsMTRcXG44LDEwXFxuOSwwXFxuXFxuZm9sZCBhbG9uZyB5PTdcXG5mb2xkIGFsb25nIHg9NVwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgdGV4dCA9IHJlcXVpcmUoJy4vaW5wdXRfdGVzdC50eHQnKTtcbmV4cG9ydCB7fVxuXG5pbnRlcmZhY2UgQ29vcmQge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXJcbn1cblxuY29uc3QgY29vcmRzID0gdGV4dC5kZWZhdWx0LnNwbGl0KFwiXFxuXFxuXCIpWzBdLnNwbGl0KFwiXFxuXCIpLm1hcCgobGluZTpzdHJpbmcpID0+IHtcbiAgICByZXR1cm4geyB4OiBsaW5lLnNwbGl0KFwiLFwiKVswXSwgeTogbGluZS5zcGxpdChcIixcIilbMV0gfVxufSk7XG5jb25zdCBpbnN0cnVjdGlvbnMgPSB0ZXh0LmRlZmF1bHQuc3BsaXQoXCJcXG5cXG5cIilbMV0uc3BsaXQoXCJcXG5cIik7XG5cbmNvbnNvbGUubG9nKGNvb3Jkcyk7XG5jb25zb2xlLmxvZyhpbnN0cnVjdGlvbnMpO1xuXG5jb25zdCB3aWR0aCA9IGNvb3Jkcy5yZWR1Y2UoKHA6bnVtYmVyLCBjOmFueSkgPT4ge1xuICAgIHJldHVybiBNYXRoLm1heChwLCBOdW1iZXIoYy54KSk7XG59LCAwKVxuXG5jb25zdCBoZWlnaHQgPSBjb29yZHMucmVkdWNlKChwOm51bWJlciwgYzphbnkpID0+IHtcbiAgICByZXR1cm4gTWF0aC5tYXgocCwgTnVtYmVyKGMueSkpO1xufSwgMClcblxuY29uc29sZS5sb2coXCJ3aWR0aDpcIiwgd2lkdGgpO1xuY29uc29sZS5sb2coXCJoZWlnaHQ6XCIsIGhlaWdodCk7XG5cbmNvbnN0IGdyaWQgPSBuZXcgQXJyYXkoaGVpZ2h0ICsgMSkuZmlsbChbXSkubWFwKCgpID0+IG5ldyBBcnJheSh3aWR0aCArIDEpLmZpbGwoXCIuXCIpKVxuY29uc29sZS5sb2coXCJncmlkOlwiLCAuLi5ncmlkKTtcblxuY29vcmRzLmZvckVhY2goKGNvb3JkOkNvb3JkKSA9PiB7XG4gICAgZ3JpZFtjb29yZC55XVtjb29yZC54XSA9IFwiI1wiO1xufSlcblxuY29uc29sZS5sb2coXCJncmlkOlwiLCAuLi5ncmlkKTtcblxuZnVuY3Rpb24gZm9sZChncmlkOnN0cmluZ1tdW10sIGF4aXM6c3RyaW5nLCBsaW5lTnVtOm51bWJlcikge1xuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9