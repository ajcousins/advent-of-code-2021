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
function probe(sVel, curPos, target) {
    // ARE WE THERE YET?
    if (curPos.x >= target.xMin && curPos.x <= target.xMax
        && curPos.y >= target.yMin && curPos.y <= target.yMax)
        return true;
    // UPDATE STATS
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
    // if vel.y is < 0 and distance to target is increasing
    // (probe is getting faster but moving further away from target): stop
    // HAVE WE MISSED?
    var prevYFromTarget = Math.abs(curPos.y - target.yMin);
    var curYFromTarget = Math.abs(newPos.y - target.yMin);
    if (sVel.y < 0 && curYFromTarget > prevYFromTarget) {
        console.log("Missed Y");
        return false;
    }
    if (newPos.x > target.xMax) {
        console.log("Missed X");
        return false;
    }
    return probe(newVel, newPos, target);
}
console.log(probe({ x: 2, y: 20 }, { x: 0, y: 0 }, target));

/*
- try to get rid of 'steps' in function. Get function to determine if it has missed target
- if curPos.y is increasing: keep going
- if curPos.y is decreasing, and distance to target is decreasing: keep going
- if curPos.x is greater than target.xMax: stop
*/ 

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXhELElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksY0FBYyxHQUFHLGVBQWUsRUFBRTtRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sS0FBSztLQUNmO0lBQ0QsSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLEtBQUs7S0FDZjtJQUdELE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDOztBQUVwRDs7Ozs7RUFLRSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmVudDIwMjEvLi9zcmMvZGF5MTcvaW5wdXRfdGVzdC50eHQiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FkdmVudDIwMjEvLi9zcmMvZGF5MTcvMDEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJ0YXJnZXQgYXJlYTogeD0yMC4uMzAsIHk9LTEwLi4tNVwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgdGV4dCA9IHJlcXVpcmUoJy4vaW5wdXRfdGVzdC50eHQnKTtcbmV4cG9ydCB7fVxuXG5pbnRlcmZhY2UgQ29vcmQge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBBcmVhIHtcbiAgICB4TWluOiBudW1iZXI7XG4gICAgeE1heDogbnVtYmVyO1xuICAgIHlNaW46IG51bWJlcjtcbiAgICB5TWF4OiBudW1iZXI7XG59XG5cbmNvbnN0IHRhcmdldEFyciA9IHRleHQuZGVmYXVsdC5zcGxpdChcIiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgyLCA0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZGltOnN0cmluZykgPT4gZGltWzBdID09PSBcInhcIiA/IGRpbS5zbGljZSgyLCAtMSkgOiBkaW0uc2xpY2UoMikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChkaW06c3RyaW5nKSA9PiBkaW0uc3BsaXQoXCIuLlwiKS5tYXAoKGRpbTpzdHJpbmcpID0+IE51bWJlcihkaW0pKSlcblxuY29uc3QgdGFyZ2V0OkFyZWEgPSB7XG4gICAgeE1pbjogdGFyZ2V0QXJyWzBdWzBdLFxuICAgIHhNYXg6IHRhcmdldEFyclswXVsxXSxcbiAgICB5TWluOiB0YXJnZXRBcnJbMV1bMF0sXG4gICAgeU1heDogdGFyZ2V0QXJyWzFdWzFdXG59XG5jb25zb2xlLmxvZyh0YXJnZXQpO1xuXG5mdW5jdGlvbiBwcm9iZShzVmVsOkNvb3JkLCBjdXJQb3M6Q29vcmQsIHRhcmdldDpBcmVhKTpib29sZWFuIHtcbiAgICAvLyBBUkUgV0UgVEhFUkUgWUVUP1xuICAgIGlmIChjdXJQb3MueCA+PSB0YXJnZXQueE1pbiAmJiBjdXJQb3MueCA8PSB0YXJnZXQueE1heFxuICAgICYmIGN1clBvcy55ID49IHRhcmdldC55TWluICYmIGN1clBvcy55IDw9IHRhcmdldC55TWF4KSByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICAvLyBVUERBVEUgU1RBVFNcbiAgICBjb25zdCBuZXdQb3MgPSB7Li4uY3VyUG9zfTtcbiAgICBuZXdQb3MueCArPSBzVmVsLng7XG4gICAgbmV3UG9zLnkgKz0gc1ZlbC55O1xuXG4gICAgY29uc3QgbmV3VmVsID0gey4uLnNWZWx9O1xuICAgIGlmIChzVmVsLnggPiAwKSBuZXdWZWwueCAtPSAxO1xuICAgIGlmIChzVmVsLnggPCAwKSBuZXdWZWwueCArPSAxO1xuICAgIG5ld1ZlbC55IC09IDE7XG5cbiAgICBjb25zb2xlLmxvZyhcIm5ld1BvczpcIiwgbmV3UG9zLCBcIm5ld1ZlbDpcIiwgbmV3VmVsKTtcbiAgICAvLyBpZiB2ZWwueSBpcyA8IDAgYW5kIGRpc3RhbmNlIHRvIHRhcmdldCBpcyBpbmNyZWFzaW5nXG4gICAgLy8gKHByb2JlIGlzIGdldHRpbmcgZmFzdGVyIGJ1dCBtb3ZpbmcgZnVydGhlciBhd2F5IGZyb20gdGFyZ2V0KTogc3RvcFxuXG4gICAgLy8gSEFWRSBXRSBNSVNTRUQ/XG4gICAgY29uc3QgcHJldllGcm9tVGFyZ2V0ID0gTWF0aC5hYnMoY3VyUG9zLnkgLSB0YXJnZXQueU1pbik7XG4gICAgY29uc3QgY3VyWUZyb21UYXJnZXQgPSBNYXRoLmFicyhuZXdQb3MueSAtIHRhcmdldC55TWluKTtcblxuICAgIGlmIChzVmVsLnkgPCAwICYmIGN1cllGcm9tVGFyZ2V0ID4gcHJldllGcm9tVGFyZ2V0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWlzc2VkIFlcIik7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAobmV3UG9zLnggPiB0YXJnZXQueE1heCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1pc3NlZCBYXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cblxuICAgIHJldHVybiBwcm9iZShuZXdWZWwsIG5ld1BvcywgdGFyZ2V0KTtcbn1cbmNvbnNvbGUubG9nKHByb2JlKHt4OjIsIHk6MjB9LCB7eDowLCB5OjB9LCB0YXJnZXQpKTtcblxuLypcbi0gdHJ5IHRvIGdldCByaWQgb2YgJ3N0ZXBzJyBpbiBmdW5jdGlvbi4gR2V0IGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBpdCBoYXMgbWlzc2VkIHRhcmdldFxuLSBpZiBjdXJQb3MueSBpcyBpbmNyZWFzaW5nOiBrZWVwIGdvaW5nXG4tIGlmIGN1clBvcy55IGlzIGRlY3JlYXNpbmcsIGFuZCBkaXN0YW5jZSB0byB0YXJnZXQgaXMgZGVjcmVhc2luZzoga2VlcCBnb2luZ1xuLSBpZiBjdXJQb3MueCBpcyBncmVhdGVyIHRoYW4gdGFyZ2V0LnhNYXg6IHN0b3BcbiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9