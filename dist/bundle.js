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
  !*** ./src/day17/02.ts ***!
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
function probe(sVel, target, curPos) {
    // SET EMPTY PARAMS
    if (!curPos)
        curPos = { x: 0, y: 0 };
    // ARE WE THERE YET?
    if (curPos.x >= target.xMin && curPos.x <= target.xMax
        && curPos.y >= target.yMin && curPos.y <= target.yMax)
        return { success: true, nearest: { x: curPos.x, y: curPos.y } };
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
    // HAVE WE MISSED?
    var prevYFromTarget = Math.abs(curPos.y - target.yMin);
    var curYFromTarget = Math.abs(newPos.y - target.yMin);
    if (sVel.y < 0 && curYFromTarget > prevYFromTarget)
        return { success: false, nearest: { x: curPos.x, y: curPos.y } };
    if (newPos.x > target.xMax)
        return { success: false, nearest: { x: newPos.x, y: newPos.y } };
    return probe(newVel, target, newPos);
}
var yLimit = 200;
var yVisited = {};
var xyVisited = {};
var successCoords = [];
var curX = 0;
var dirX = 1;
for (var y = target.yMin; y <= yLimit; y++) {
    var xLeft = false;
    var xRight = false;
    var targetWidth = target.xMax - target.xMin;
    while (!yVisited["".concat(y)]) {
        if (xyVisited["(".concat(curX, ", ").concat(y, ")")]) {
            curX += dirX;
            continue;
        }
        else
            xyVisited["(".concat(curX, ", ").concat(y, ")")] = true;
        var report = probe({ x: curX, y: y }, target);
        if (report.nearest.x < target.xMin - targetWidth) {
            xLeft = true;
            dirX = 1;
        }
        else if (report.nearest.x > target.xMax + targetWidth) {
            xRight = true;
            dirX = -1;
        }
        if (report.success)
            successCoords.push({ coord: "(".concat(curX, ", ").concat(y, ")") });
        curX += dirX;
        if (xLeft && xRight) {
            yVisited["".concat(y)] = true;
            xLeft = false;
            xRight = false;
        }
    }
}
console.log(successCoords);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO1lBQ3hCLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDZCxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2xCO0tBQ0o7Q0FDSjtBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZlbnQyMDIxLy4vc3JjL2RheTE3L2lucHV0LnR4dCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS8uL3NyYy9kYXkxNy8wMi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcInRhcmdldCBhcmVhOiB4PTEzNy4uMTcxLCB5PS05OC4uLTczXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCB0ZXh0ID0gcmVxdWlyZSgnLi9pbnB1dC50eHQnKTtcbmV4cG9ydCB7fVxuXG5pbnRlcmZhY2UgQ29vcmQge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBBcmVhIHtcbiAgICB4TWluOiBudW1iZXI7XG4gICAgeE1heDogbnVtYmVyO1xuICAgIHlNaW46IG51bWJlcjtcbiAgICB5TWF4OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBSZXBvcnQge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgbmVhcmVzdDogQ29vcmQ7XG59XG5cbmludGVyZmFjZSBSZWcge1xuICAgIFtrZXk6c3RyaW5nXTogYm9vbGVhbjtcbn1cblxuY29uc3QgdGFyZ2V0QXJyID0gdGV4dC5kZWZhdWx0LnNwbGl0KFwiIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDIsIDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChkaW06c3RyaW5nKSA9PiBkaW1bMF0gPT09IFwieFwiID8gZGltLnNsaWNlKDIsIC0xKSA6IGRpbS5zbGljZSgyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGRpbTpzdHJpbmcpID0+IGRpbS5zcGxpdChcIi4uXCIpLm1hcCgoZGltOnN0cmluZykgPT4gTnVtYmVyKGRpbSkpKVxuXG5jb25zdCB0YXJnZXQ6QXJlYSA9IHtcbiAgICB4TWluOiB0YXJnZXRBcnJbMF1bMF0sXG4gICAgeE1heDogdGFyZ2V0QXJyWzBdWzFdLFxuICAgIHlNaW46IHRhcmdldEFyclsxXVswXSxcbiAgICB5TWF4OiB0YXJnZXRBcnJbMV1bMV1cbn1cbmNvbnNvbGUubG9nKHRhcmdldCk7XG5cbmZ1bmN0aW9uIHByb2JlKHNWZWw6Q29vcmQsIHRhcmdldDpBcmVhLCBjdXJQb3M/OkNvb3JkKTpSZXBvcnQge1xuICAgIC8vIFNFVCBFTVBUWSBQQVJBTVNcbiAgICBpZiAoIWN1clBvcykgY3VyUG9zID0ge3g6IDAsIHk6IDB9O1xuXG4gICAgLy8gQVJFIFdFIFRIRVJFIFlFVD9cbiAgICBpZiAoY3VyUG9zLnggPj0gdGFyZ2V0LnhNaW4gJiYgY3VyUG9zLnggPD0gdGFyZ2V0LnhNYXhcbiAgICAmJiBjdXJQb3MueSA+PSB0YXJnZXQueU1pbiAmJiBjdXJQb3MueSA8PSB0YXJnZXQueU1heCkgXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG5lYXJlc3Q6IHt4OiBjdXJQb3MueCwgeTogY3VyUG9zLnl9fVxuICAgIFxuICAgIC8vIFVQREFURSBTVEFUU1xuICAgIGNvbnN0IG5ld1BvcyA9IHsuLi5jdXJQb3N9O1xuICAgIG5ld1Bvcy54ICs9IHNWZWwueDtcbiAgICBuZXdQb3MueSArPSBzVmVsLnk7XG5cbiAgICBjb25zdCBuZXdWZWwgPSB7Li4uc1ZlbH07XG4gICAgaWYgKHNWZWwueCA+IDApIG5ld1ZlbC54IC09IDE7XG4gICAgaWYgKHNWZWwueCA8IDApIG5ld1ZlbC54ICs9IDE7XG4gICAgbmV3VmVsLnkgLT0gMTtcbiAgICBcbiAgICAvLyBIQVZFIFdFIE1JU1NFRD9cbiAgICBjb25zdCBwcmV2WUZyb21UYXJnZXQgPSBNYXRoLmFicyhjdXJQb3MueSAtIHRhcmdldC55TWluKTtcbiAgICBjb25zdCBjdXJZRnJvbVRhcmdldCA9IE1hdGguYWJzKG5ld1Bvcy55IC0gdGFyZ2V0LnlNaW4pO1xuICAgIGlmIChzVmVsLnkgPCAwICYmIGN1cllGcm9tVGFyZ2V0ID4gcHJldllGcm9tVGFyZ2V0KSBcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG5lYXJlc3Q6IHt4OiBjdXJQb3MueCwgeTogY3VyUG9zLnl9IH1cbiAgICBcbiAgICBpZiAobmV3UG9zLnggPiB0YXJnZXQueE1heClcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG5lYXJlc3Q6IHt4OiBuZXdQb3MueCwgeTogbmV3UG9zLnl9IH1cblxuICAgIHJldHVybiBwcm9iZShuZXdWZWwsIHRhcmdldCwgbmV3UG9zKTtcbn1cblxuY29uc3QgeUxpbWl0ID0gMjAwO1xuY29uc3QgeVZpc2l0ZWQ6UmVnID0ge307XG5jb25zdCB4eVZpc2l0ZWQ6UmVnID0ge307XG5jb25zdCBzdWNjZXNzQ29vcmRzID0gW107XG5sZXQgY3VyWCA9IDA7XG5sZXQgZGlyWCA9IDE7XG5cbmZvciAobGV0IHkgPSB0YXJnZXQueU1pbjsgeSA8PSB5TGltaXQ7IHkrKykge1xuICAgIGxldCB4TGVmdCA9IGZhbHNlO1xuICAgIGxldCB4UmlnaHQgPSBmYWxzZTtcbiAgICBjb25zdCB0YXJnZXRXaWR0aCA9IHRhcmdldC54TWF4IC0gdGFyZ2V0LnhNaW47XG5cbiAgICB3aGlsZSAoIXlWaXNpdGVkW2Ake3l9YF0pe1xuICAgICAgICBpZiAoeHlWaXNpdGVkW2AoJHtjdXJYfSwgJHt5fSlgXSkge1xuICAgICAgICAgICAgY3VyWCArPSBkaXJYXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIHh5VmlzaXRlZFtgKCR7Y3VyWH0sICR7eX0pYF0gPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHJlcG9ydCA9IHByb2JlKHt4OiBjdXJYLCB5OiB5fSwgdGFyZ2V0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHJlcG9ydC5uZWFyZXN0LnggPCB0YXJnZXQueE1pbiAtIHRhcmdldFdpZHRoKSB7XG4gICAgICAgICAgICB4TGVmdCA9IHRydWU7XG4gICAgICAgICAgICBkaXJYID0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXBvcnQubmVhcmVzdC54ID4gdGFyZ2V0LnhNYXggKyB0YXJnZXRXaWR0aCkge1xuICAgICAgICAgICAgeFJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGRpclggPSAtMTtcbiAgICAgICAgfSBcblxuICAgICAgICBpZiAocmVwb3J0LnN1Y2Nlc3MpIHN1Y2Nlc3NDb29yZHMucHVzaCh7Y29vcmQ6IGAoJHtjdXJYfSwgJHt5fSlgfSlcbiAgICAgICAgY3VyWCArPSBkaXJYXG5cbiAgICAgICAgaWYgKHhMZWZ0ICYmIHhSaWdodCkgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgeVZpc2l0ZWRbYCR7eX1gXSA9IHRydWU7XG4gICAgICAgICAgICB4TGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgeFJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zb2xlLmxvZyhzdWNjZXNzQ29vcmRzKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=