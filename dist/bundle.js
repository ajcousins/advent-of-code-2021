/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/day11/input.txt":
/*!*****************************!*\
  !*** ./src/day11/input.txt ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("2478668324\n4283474125\n1663463374\n1738271323\n4285744861\n3551311515\n8574335438\n7843525826\n1366237577\n3554687226");

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
  !*** ./src/day11/01.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
var text = __webpack_require__(/*! ./input.txt */ "./src/day11/input.txt");
var grid = text.default.split("\n")
    .map(function (row) { return row.split("").map(function (char) { return Number(char); }); });
var flashCounter = 0;
function runGrid(grid, steps) {
    if (!steps)
        return grid;
    var gridCopy = grid.map(function (row) { return row.slice(); });
    for (var y = 0; y < gridCopy.length; y++) {
        for (var x = 0; x < gridCopy[0].length; x++) {
            gridCopy[y][x]++;
        }
    }
    var queue = [];
    for (var y = 0; y < gridCopy.length; y++) {
        for (var x = 0; x < gridCopy[0].length; x++) {
            if (gridCopy[y][x] > 9)
                queue.push({ y: y, x: x });
        }
    }
    while (queue.length) {
        var cur = queue.shift();
        var toCheck = adjCells(cur.y, cur.x, gridCopy);
        toCheck.forEach(function (coord) {
            if (gridCopy[coord.y][coord.x] === 9) {
                queue.push({ y: coord.y, x: coord.x });
            }
            gridCopy[coord.y][coord.x]++;
        });
    }
    for (var y = 0; y < gridCopy.length; y++) {
        for (var x = 0; x < gridCopy[0].length; x++) {
            if (gridCopy[y][x] > 9) {
                gridCopy[y][x] = 0;
                flashCounter++;
            }
        }
    }
    return runGrid(gridCopy, steps - 1);
}
function adjCells(y, x, grid) {
    var coords = [];
    for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
            coords.push({ y: y + i, x: x + j });
        }
    }
    return coords.filter(function (coord) {
        if (coord.x === x && coord.y === y)
            return false;
        if (coord.x < 0 ||
            coord.y < 0 ||
            coord.x > grid.length - 1 ||
            coord.y > grid.length - 1)
            return false;
        return true;
    });
}
console.log(runGrid(grid, 100));
console.log("flashes:", flashCounter);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsR0FBRyxDQUFDO1lBQ1gsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ1gsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDekIsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLEtBQUs7UUFDM0MsT0FBTyxJQUFJO0lBQ2YsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZlbnQyMDIxLy4vc3JjL2RheTExL2lucHV0LnR4dCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS8uL3NyYy9kYXkxMS8wMS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjI0Nzg2NjgzMjRcXG40MjgzNDc0MTI1XFxuMTY2MzQ2MzM3NFxcbjE3MzgyNzEzMjNcXG40Mjg1NzQ0ODYxXFxuMzU1MTMxMTUxNVxcbjg1NzQzMzU0MzhcXG43ODQzNTI1ODI2XFxuMTM2NjIzNzU3N1xcbjM1NTQ2ODcyMjZcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHRleHQgPSByZXF1aXJlKCcuL2lucHV0LnR4dCcpO1xuZXhwb3J0IHt9XG5cbmludGVyZmFjZSBDb29yZCB7XG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlclxufVxuXG5jb25zdCBncmlkID0gdGV4dC5kZWZhdWx0LnNwbGl0KFwiXFxuXCIpXG4gICAgLm1hcCgocm93OnN0cmluZykgPT4gcm93LnNwbGl0KFwiXCIpLm1hcCgoY2hhcjpzdHJpbmcpID0+IE51bWJlcihjaGFyKSkpXG5cbmxldCBmbGFzaENvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBydW5HcmlkKGdyaWQ6bnVtYmVyW11bXSwgc3RlcHM6bnVtYmVyKTpudW1iZXJbXVtde1xuICAgIGlmICghc3RlcHMpIHJldHVybiBncmlkO1xuXG4gICAgY29uc3QgZ3JpZENvcHkgPSBncmlkLm1hcCgocm93Om51bWJlcltdKSA9PiByb3cuc2xpY2UoKSk7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBncmlkQ29weS5sZW5ndGg7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGdyaWRDb3B5WzBdLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBncmlkQ29weVt5XVt4XSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHF1ZXVlID0gW107XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBncmlkQ29weS5sZW5ndGg7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGdyaWRDb3B5WzBdLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBpZiAoZ3JpZENvcHlbeV1beF0gPiA5KSBxdWV1ZS5wdXNoKHt5LCB4fSk7ICBcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGxldCBjdXIgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICBsZXQgdG9DaGVjayA9IGFkakNlbGxzKGN1ci55LCBjdXIueCwgZ3JpZENvcHkpXG4gICAgICAgIHRvQ2hlY2suZm9yRWFjaCgoY29vcmQ6Q29vcmQpID0+IHtcbiAgICAgICAgICAgIGlmIChncmlkQ29weVtjb29yZC55XVtjb29yZC54XSA9PT0gOSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goe3k6IGNvb3JkLnksIHg6IGNvb3JkLnh9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JpZENvcHlbY29vcmQueV1bY29vcmQueF0rKztcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBncmlkQ29weS5sZW5ndGg7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGdyaWRDb3B5WzBdLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBpZiAoZ3JpZENvcHlbeV1beF0gPiA5KSB7XG4gICAgICAgICAgICAgICAgZ3JpZENvcHlbeV1beF0gPSAwO1xuICAgICAgICAgICAgICAgIGZsYXNoQ291bnRlcisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydW5HcmlkKGdyaWRDb3B5LCBzdGVwcyAtIDEpO1xufVxuXG5mdW5jdGlvbiBhZGpDZWxscyh5Om51bWJlciwgeDpudW1iZXIsIGdyaWQ6bnVtYmVyW11bXSk6Q29vcmRbXSB7XG4gICAgY29uc3QgY29vcmRzOkNvb3JkW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAtMTsgaSA8IDI7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gLTE7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICAgIGNvb3Jkcy5wdXNoKHt5OiB5ICsgaSwgeDogeCArIGp9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb29yZHMuZmlsdGVyKChjb29yZDpDb29yZCkgPT4ge1xuICAgICAgICBpZiAoY29vcmQueCA9PT0geCAmJiBjb29yZC55ID09PSB5KSByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKGNvb3JkLnggPCAwIHx8XG4gICAgICAgICAgICBjb29yZC55IDwgMCB8fFxuICAgICAgICAgICAgY29vcmQueCA+IGdyaWQubGVuZ3RoIC0gMSB8fFxuICAgICAgICAgICAgY29vcmQueSA+IGdyaWQubGVuZ3RoIC0gMSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSk7XG59XG5cbmNvbnNvbGUubG9nKHJ1bkdyaWQoZ3JpZCwgMTAwKSk7XG5jb25zb2xlLmxvZyhcImZsYXNoZXM6XCIsIGZsYXNoQ291bnRlcik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9