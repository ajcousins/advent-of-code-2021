/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/day17/input_test.txt":
/*!**********************************!*\
  !*** ./src/day17/input_test.txt ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("target area: x=20..30, y=-10..-5");

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
  !*** ./src/day17/01.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var text = __webpack_require__(/*! ./input_test.txt */ "./src/day17/input_test.txt");
var targetArr = text.default.split(" ")
    .slice(2, 4)
    .map(function (dim) { return dim[0] === "x" ? dim.slice(2, -1) : dim.slice(2); })
    .map(function (dim) { return dim.split("..").map(function (dim) { return Number(dim); }); });
var target = {
    xMin: targetArr[0][0],
    xMax: targetArr[0][1],
    yMin: targetArr[1][0],
    yMax: targetArr[1][1]
};
console.log(target);
function probe(sVel, curPos, target, steps) {
    if (curPos.x >= target.xMin && curPos.x <= target.xMax
        && curPos.y >= target.yMin && curPos.y <= target.yMax)
        return true;
    if (steps === 0)
        return false;
    var newPos = __assign({}, curPos);
    newPos.x += sVel.x;
    newPos.y += sVel.y;
    var newVel = __assign({}, sVel);
    if (sVel.x > 0)
        newVel.x -= 1;
    if (sVel.x < 0)
        newVel.x += 1;
    newVel.y -= 1;
    console.log("newPos:", newPos, "newVel:", newVel);
    return probe(newVel, newPos, target, steps - 1);
}
console.log(probe({ x: 9, y: 0 }, { x: 0, y: 0 }, target, 20));

/*
- try to get rid of 'steps' in function. Get function to determine if it has missed target
- if curPos.y is increasing: keep going
- if curPos.y is decreasing, and distance to target is decreasing: keep going
- if curPos.x is greater than target.xMax: stop
*/ 

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FBRXZEOzs7OztFQUtFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS8uL3NyYy9kYXkxNy9pbnB1dF90ZXN0LnR4dCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS8uL3NyYy9kYXkxNy8wMS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcInRhcmdldCBhcmVhOiB4PTIwLi4zMCwgeT0tMTAuLi01XCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCB0ZXh0ID0gcmVxdWlyZSgnLi9pbnB1dF90ZXN0LnR4dCcpO1xuZXhwb3J0IHt9XG5cbmludGVyZmFjZSBDb29yZCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEFyZWEge1xuICAgIHhNaW46IG51bWJlcjtcbiAgICB4TWF4OiBudW1iZXI7XG4gICAgeU1pbjogbnVtYmVyO1xuICAgIHlNYXg6IG51bWJlcjtcbn1cblxuY29uc3QgdGFyZ2V0QXJyID0gdGV4dC5kZWZhdWx0LnNwbGl0KFwiIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDIsIDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChkaW06c3RyaW5nKSA9PiBkaW1bMF0gPT09IFwieFwiID8gZGltLnNsaWNlKDIsIC0xKSA6IGRpbS5zbGljZSgyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGRpbTpzdHJpbmcpID0+IGRpbS5zcGxpdChcIi4uXCIpLm1hcCgoZGltOnN0cmluZykgPT4gTnVtYmVyKGRpbSkpKVxuXG5jb25zdCB0YXJnZXQ6QXJlYSA9IHtcbiAgICB4TWluOiB0YXJnZXRBcnJbMF1bMF0sXG4gICAgeE1heDogdGFyZ2V0QXJyWzBdWzFdLFxuICAgIHlNaW46IHRhcmdldEFyclsxXVswXSxcbiAgICB5TWF4OiB0YXJnZXRBcnJbMV1bMV1cbn1cbmNvbnNvbGUubG9nKHRhcmdldCk7XG5cbmZ1bmN0aW9uIHByb2JlKHNWZWw6Q29vcmQsIGN1clBvczpDb29yZCwgdGFyZ2V0OkFyZWEsIHN0ZXBzOm51bWJlcik6Ym9vbGVhbiB7XG4gICAgaWYgKGN1clBvcy54ID49IHRhcmdldC54TWluICYmIGN1clBvcy54IDw9IHRhcmdldC54TWF4XG4gICAgJiYgY3VyUG9zLnkgPj0gdGFyZ2V0LnlNaW4gJiYgY3VyUG9zLnkgPD0gdGFyZ2V0LnlNYXgpIHJldHVybiB0cnVlO1xuICAgIGlmIChzdGVwcyA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zID0gey4uLmN1clBvc307XG4gICAgbmV3UG9zLnggKz0gc1ZlbC54O1xuICAgIG5ld1Bvcy55ICs9IHNWZWwueTtcblxuICAgIGNvbnN0IG5ld1ZlbCA9IHsuLi5zVmVsfTtcbiAgICBpZiAoc1ZlbC54ID4gMCkgbmV3VmVsLnggLT0gMTtcbiAgICBpZiAoc1ZlbC54IDwgMCkgbmV3VmVsLnggKz0gMTtcbiAgICBuZXdWZWwueSAtPSAxO1xuXG4gICAgY29uc29sZS5sb2coXCJuZXdQb3M6XCIsIG5ld1BvcywgXCJuZXdWZWw6XCIsIG5ld1ZlbCk7XG4gICAgcmV0dXJuIHByb2JlKG5ld1ZlbCwgbmV3UG9zLCB0YXJnZXQsIHN0ZXBzIC0gMSk7XG59XG5jb25zb2xlLmxvZyhwcm9iZSh7eDo5LCB5OjB9LCB7eDowLCB5OjB9LCB0YXJnZXQsIDIwKSk7XG5cbi8qXG4tIHRyeSB0byBnZXQgcmlkIG9mICdzdGVwcycgaW4gZnVuY3Rpb24uIEdldCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgaXQgaGFzIG1pc3NlZCB0YXJnZXRcbi0gaWYgY3VyUG9zLnkgaXMgaW5jcmVhc2luZzoga2VlcCBnb2luZ1xuLSBpZiBjdXJQb3MueSBpcyBkZWNyZWFzaW5nLCBhbmQgZGlzdGFuY2UgdG8gdGFyZ2V0IGlzIGRlY3JlYXNpbmc6IGtlZXAgZ29pbmdcbi0gaWYgY3VyUG9zLnggaXMgZ3JlYXRlciB0aGFuIHRhcmdldC54TWF4OiBzdG9wXG4qLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==