/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/day17/input.txt":
/*!*****************************!*\
  !*** ./src/day17/input.txt ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("target area: x=137..171, y=-98..-73");

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
var text = __webpack_require__(/*! ./input.txt */ "./src/day17/input.txt");
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
function probe(sVel, target, curPos, highestY) {
    // SET EMPTY PARAMS
    if (!curPos)
        curPos = { x: 0, y: 0 };
    if (!highestY)
        highestY = curPos.y;
    // ARE WE THERE YET?
    if (curPos.x >= target.xMin && curPos.x <= target.xMax
        && curPos.y >= target.yMin && curPos.y <= target.yMax) {
        return { success: true, highestY: highestY };
    }
    ;
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
    if (newPos.y > highestY)
        highestY = newPos.y;
    console.log("newPos:", newPos, "newVel:", newVel, "highestY:", highestY);
    // HAVE WE MISSED?
    var prevYFromTarget = Math.abs(curPos.y - target.yMin);
    var curYFromTarget = Math.abs(newPos.y - target.yMin);
    if (sVel.y < 0 && curYFromTarget > prevYFromTarget)
        return { success: false, highestY: highestY };
    if (newPos.x > target.xMax)
        return { success: false, highestY: highestY };
    return probe(newVel, target, newPos, highestY);
}
var sVelToTry = [];
var tries = [];
var yLimit = 100;
for (var y = 1; y <= yLimit; y++) {
    for (var x = 1; x <= y; x++) {
        sVelToTry.push({ x: x, y: y });
    }
}
sVelToTry.forEach(function (vel) {
    var report = probe({ x: vel.x, y: vel.y }, target);
    if (report.success) {
        tries.push({ sVel: vel, highestY: report.highestY });
    }
});
console.log(tries);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEtBQUUsQ0FBQyxLQUFDLENBQUM7S0FDekI7Q0FDSjtBQUVELFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFTO0lBQ3hCLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxFQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsTUFBTSxDQUFDO0lBQ2xELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUVoQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBQyxDQUFDO0tBQ3JEO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmVudDIwMjEvLi9zcmMvZGF5MTcvaW5wdXQudHh0Iiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxLy4vc3JjL2RheTE3LzAxLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwidGFyZ2V0IGFyZWE6IHg9MTM3Li4xNzEsIHk9LTk4Li4tNzNcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHRleHQgPSByZXF1aXJlKCcuL2lucHV0LnR4dCcpO1xuZXhwb3J0IHt9XG5cbmludGVyZmFjZSBDb29yZCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEFyZWEge1xuICAgIHhNaW46IG51bWJlcjtcbiAgICB4TWF4OiBudW1iZXI7XG4gICAgeU1pbjogbnVtYmVyO1xuICAgIHlNYXg6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFJlcG9ydCB7XG4gICAgc3VjY2VzczogYm9vbGVhbjtcbiAgICBoaWdoZXN0WTogbnVtYmVyO1xufVxuXG5jb25zdCB0YXJnZXRBcnIgPSB0ZXh0LmRlZmF1bHQuc3BsaXQoXCIgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMiwgNClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGRpbTpzdHJpbmcpID0+IGRpbVswXSA9PT0gXCJ4XCIgPyBkaW0uc2xpY2UoMiwgLTEpIDogZGltLnNsaWNlKDIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZGltOnN0cmluZykgPT4gZGltLnNwbGl0KFwiLi5cIikubWFwKChkaW06c3RyaW5nKSA9PiBOdW1iZXIoZGltKSkpXG5cbmNvbnN0IHRhcmdldDpBcmVhID0ge1xuICAgIHhNaW46IHRhcmdldEFyclswXVswXSxcbiAgICB4TWF4OiB0YXJnZXRBcnJbMF1bMV0sXG4gICAgeU1pbjogdGFyZ2V0QXJyWzFdWzBdLFxuICAgIHlNYXg6IHRhcmdldEFyclsxXVsxXVxufVxuY29uc29sZS5sb2codGFyZ2V0KTtcblxuZnVuY3Rpb24gcHJvYmUoc1ZlbDpDb29yZCwgdGFyZ2V0OkFyZWEsIGN1clBvcz86Q29vcmQsIGhpZ2hlc3RZPzpudW1iZXIpOlJlcG9ydCB7XG4gICAgLy8gU0VUIEVNUFRZIFBBUkFNU1xuICAgIGlmICghY3VyUG9zKSBjdXJQb3MgPSB7eDogMCwgeTogMH07XG4gICAgaWYgKCFoaWdoZXN0WSkgaGlnaGVzdFkgPSBjdXJQb3MueTtcblxuICAgIC8vIEFSRSBXRSBUSEVSRSBZRVQ/XG4gICAgaWYgKGN1clBvcy54ID49IHRhcmdldC54TWluICYmIGN1clBvcy54IDw9IHRhcmdldC54TWF4XG4gICAgJiYgY3VyUG9zLnkgPj0gdGFyZ2V0LnlNaW4gJiYgY3VyUG9zLnkgPD0gdGFyZ2V0LnlNYXgpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGlnaGVzdFk6IGhpZ2hlc3RZIH1cbiAgICB9O1xuICAgIFxuICAgIC8vIFVQREFURSBTVEFUU1xuICAgIGNvbnN0IG5ld1BvcyA9IHsuLi5jdXJQb3N9O1xuICAgIG5ld1Bvcy54ICs9IHNWZWwueDtcbiAgICBuZXdQb3MueSArPSBzVmVsLnk7XG5cbiAgICBjb25zdCBuZXdWZWwgPSB7Li4uc1ZlbH07XG4gICAgaWYgKHNWZWwueCA+IDApIG5ld1ZlbC54IC09IDE7XG4gICAgaWYgKHNWZWwueCA8IDApIG5ld1ZlbC54ICs9IDE7XG4gICAgbmV3VmVsLnkgLT0gMTtcblxuICAgIGlmIChuZXdQb3MueSA+IGhpZ2hlc3RZKSBoaWdoZXN0WSA9IG5ld1Bvcy55O1xuXG4gICAgY29uc29sZS5sb2coXCJuZXdQb3M6XCIsIG5ld1BvcywgXCJuZXdWZWw6XCIsIG5ld1ZlbCwgXCJoaWdoZXN0WTpcIiwgaGlnaGVzdFkpO1xuXG4gICAgLy8gSEFWRSBXRSBNSVNTRUQ/XG4gICAgY29uc3QgcHJldllGcm9tVGFyZ2V0ID0gTWF0aC5hYnMoY3VyUG9zLnkgLSB0YXJnZXQueU1pbik7XG4gICAgY29uc3QgY3VyWUZyb21UYXJnZXQgPSBNYXRoLmFicyhuZXdQb3MueSAtIHRhcmdldC55TWluKTtcblxuICAgIGlmIChzVmVsLnkgPCAwICYmIGN1cllGcm9tVGFyZ2V0ID4gcHJldllGcm9tVGFyZ2V0KSBcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGhpZ2hlc3RZOiBoaWdoZXN0WSB9XG4gICAgXG4gICAgaWYgKG5ld1Bvcy54ID4gdGFyZ2V0LnhNYXgpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBoaWdoZXN0WTogaGlnaGVzdFkgfVxuXG4gICAgcmV0dXJuIHByb2JlKG5ld1ZlbCwgdGFyZ2V0LCBuZXdQb3MsIGhpZ2hlc3RZKTtcbn1cblxuXG5jb25zdCBzVmVsVG9Ucnk6Q29vcmRbXSA9IFtdO1xuXG5jb25zdCB0cmllczphbnkgPSBbXVxuXG5jb25zdCB5TGltaXQgPSAxMDA7XG5cbmZvciAobGV0IHkgPSAxOyB5IDw9IHlMaW1pdDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0geTsgeCsrKSB7XG4gICAgICAgIHNWZWxUb1RyeS5wdXNoKHt4LCB5fSlcbiAgICB9XG59XG5cbnNWZWxUb1RyeS5mb3JFYWNoKCh2ZWw6Q29vcmQpID0+IHtcbiAgICBjb25zdCByZXBvcnQgPSBwcm9iZSh7eDogdmVsLngsIHk6IHZlbC55fSwgdGFyZ2V0KVxuICAgIGlmIChyZXBvcnQuc3VjY2Vzcykge1xuXG4gICAgICAgIHRyaWVzLnB1c2goe3NWZWw6IHZlbCwgaGlnaGVzdFk6IHJlcG9ydC5oaWdoZXN0WX0pXG4gICAgfVxufSlcblxuY29uc29sZS5sb2codHJpZXMpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==