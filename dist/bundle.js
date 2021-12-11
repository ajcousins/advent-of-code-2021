/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/day11/input_test.txt":
/*!**********************************!*\
  !*** ./src/day11/input_test.txt ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("5483143223\n2745854711\n5264556173\n6141336146\n6357385478\n4167524645\n2176841721\n6882881134\n4846848554\n5283751526");

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
var text = __webpack_require__(/*! ./input_test.txt */ "./src/day11/input_test.txt");
/*
- Parse text into 2D array
- Create runGrid function which takes grid, number of steps and returns grid at end of steps
- Create a counter which is incremented at each flash
- Create the logic for runGrid function
    - During 1 step:
        - Iterate every cell:
            - Each cell increases by 1
            - If cell is greater than 9, increasing surrounding cells by 1
        - Iterate every cell:
            - Any cells greater than 9:
                - Increment flashes counter by 1
                - Set cell to 0
*/
var grid = text.default.split("\n")
    .map(function (row) { return row.split("").map(function (char) { return Number(char); }); });
console.log(grid);
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
    for (var y = 0; y < gridCopy.length; y++) {
        for (var x = 0; x < gridCopy[0].length; x++) {
            /*
            Then, any octopus with an energy level greater than 9 flashes. This
            increases the energy level of all adjacent octopuses by 1, including
            octopuses that are diagonally adjacent. If this causes an octopus to
            have an energy level greater than 9, it also flashes. This process
            continues as long as new octopuses keep having their energy level
            increased beyond 9. (An octopus can only flash at most once per step.)
            */
            if (gridCopy[y][x] > 9) {
                var toCheck = adjCells(y, x, gridCopy);
                for (var z = 0; z < toCheck.length; z++) {
                    gridCopy[toCheck[z].y][toCheck[z].x]++;
                }
            }
        }
    }
    for (var y = 0; y < gridCopy.length; y++) {
        for (var x = 0; x < gridCopy[0].length; x++) {
            if (gridCopy[y][x] > 9)
                gridCopy[y][x] = 0;
            flashCounter++;
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
console.log(runGrid(grid, 2));


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsd0hBQXdIOzs7Ozs7VUNBdkk7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTkEsSUFBTSxJQUFJLEdBQUcsbUJBQU8sQ0FBQyxvREFBa0IsQ0FBQyxDQUFDO0FBR3pDOzs7Ozs7Ozs7Ozs7O0VBYUU7QUFFRixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7S0FDaEMsR0FBRyxDQUFDLFVBQUMsR0FBVSxJQUFLLFVBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBVyxJQUFLLGFBQU0sQ0FBQyxJQUFJLENBQUMsRUFBWixDQUFZLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQztBQUUxRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxCLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztBQUVyQixTQUFTLE9BQU8sQ0FBQyxJQUFlLEVBQUUsS0FBWTtJQUMxQyxJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRXhCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFZLElBQUssVUFBRyxDQUFDLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBRXpELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQ3BCO0tBQ0o7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6Qzs7Ozs7OztjQU9FO1lBQ0YsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUM7Z0JBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNyQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDekM7YUFDSjtTQUNKO0tBQ0o7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0MsWUFBWSxFQUFFLENBQUM7U0FDbEI7S0FDSjtJQUVELE9BQU8sT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQVVELFNBQVMsUUFBUSxDQUFDLENBQVEsRUFBRSxDQUFRLEVBQUUsSUFBZTtJQUNqRCxJQUFNLE1BQU0sR0FBVyxFQUFFO0lBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7U0FDcEM7S0FDSjtJQUNELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQVc7UUFDN0IsSUFBSSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUs7UUFDaEQsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDWCxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDWCxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUN6QixLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFFLE9BQU8sS0FBSztRQUMzQyxPQUFPLElBQUk7SUFDZixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmVudDIwMjEvLi9zcmMvZGF5MTEvaW5wdXRfdGVzdC50eHQiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FkdmVudDIwMjEvLi9zcmMvZGF5MTEvMDEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI1NDgzMTQzMjIzXFxuMjc0NTg1NDcxMVxcbjUyNjQ1NTYxNzNcXG42MTQxMzM2MTQ2XFxuNjM1NzM4NTQ3OFxcbjQxNjc1MjQ2NDVcXG4yMTc2ODQxNzIxXFxuNjg4Mjg4MTEzNFxcbjQ4NDY4NDg1NTRcXG41MjgzNzUxNTI2XCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCB0ZXh0ID0gcmVxdWlyZSgnLi9pbnB1dF90ZXN0LnR4dCcpO1xuZXhwb3J0IHt9XG5cbi8qXG4tIFBhcnNlIHRleHQgaW50byAyRCBhcnJheVxuLSBDcmVhdGUgcnVuR3JpZCBmdW5jdGlvbiB3aGljaCB0YWtlcyBncmlkLCBudW1iZXIgb2Ygc3RlcHMgYW5kIHJldHVybnMgZ3JpZCBhdCBlbmQgb2Ygc3RlcHNcbi0gQ3JlYXRlIGEgY291bnRlciB3aGljaCBpcyBpbmNyZW1lbnRlZCBhdCBlYWNoIGZsYXNoXG4tIENyZWF0ZSB0aGUgbG9naWMgZm9yIHJ1bkdyaWQgZnVuY3Rpb25cbiAgICAtIER1cmluZyAxIHN0ZXA6XG4gICAgICAgIC0gSXRlcmF0ZSBldmVyeSBjZWxsOlxuICAgICAgICAgICAgLSBFYWNoIGNlbGwgaW5jcmVhc2VzIGJ5IDFcbiAgICAgICAgICAgIC0gSWYgY2VsbCBpcyBncmVhdGVyIHRoYW4gOSwgaW5jcmVhc2luZyBzdXJyb3VuZGluZyBjZWxscyBieSAxXG4gICAgICAgIC0gSXRlcmF0ZSBldmVyeSBjZWxsOlxuICAgICAgICAgICAgLSBBbnkgY2VsbHMgZ3JlYXRlciB0aGFuIDk6IFxuICAgICAgICAgICAgICAgIC0gSW5jcmVtZW50IGZsYXNoZXMgY291bnRlciBieSAxXG4gICAgICAgICAgICAgICAgLSBTZXQgY2VsbCB0byAwXG4qL1xuXG5jb25zdCBncmlkID0gdGV4dC5kZWZhdWx0LnNwbGl0KFwiXFxuXCIpXG4gICAgLm1hcCgocm93OnN0cmluZykgPT4gcm93LnNwbGl0KFwiXCIpLm1hcCgoY2hhcjpzdHJpbmcpID0+IE51bWJlcihjaGFyKSkpXG5cbmNvbnNvbGUubG9nKGdyaWQpO1xuXG5sZXQgZmxhc2hDb3VudGVyID0gMDtcblxuZnVuY3Rpb24gcnVuR3JpZChncmlkOm51bWJlcltdW10sIHN0ZXBzOm51bWJlcik6bnVtYmVyW11bXXtcbiAgICBpZiAoIXN0ZXBzKSByZXR1cm4gZ3JpZDtcblxuICAgIGNvbnN0IGdyaWRDb3B5ID0gZ3JpZC5tYXAoKHJvdzpudW1iZXJbXSkgPT4gcm93LnNsaWNlKCkpO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBncmlkQ29weS5sZW5ndGg7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGdyaWRDb3B5WzBdLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBncmlkQ29weVt5XVt4XSsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBncmlkQ29weS5sZW5ndGg7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGdyaWRDb3B5WzBdLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgVGhlbiwgYW55IG9jdG9wdXMgd2l0aCBhbiBlbmVyZ3kgbGV2ZWwgZ3JlYXRlciB0aGFuIDkgZmxhc2hlcy4gVGhpcyBcbiAgICAgICAgICAgIGluY3JlYXNlcyB0aGUgZW5lcmd5IGxldmVsIG9mIGFsbCBhZGphY2VudCBvY3RvcHVzZXMgYnkgMSwgaW5jbHVkaW5nIFxuICAgICAgICAgICAgb2N0b3B1c2VzIHRoYXQgYXJlIGRpYWdvbmFsbHkgYWRqYWNlbnQuIElmIHRoaXMgY2F1c2VzIGFuIG9jdG9wdXMgdG8gXG4gICAgICAgICAgICBoYXZlIGFuIGVuZXJneSBsZXZlbCBncmVhdGVyIHRoYW4gOSwgaXQgYWxzbyBmbGFzaGVzLiBUaGlzIHByb2Nlc3NcbiAgICAgICAgICAgIGNvbnRpbnVlcyBhcyBsb25nIGFzIG5ldyBvY3RvcHVzZXMga2VlcCBoYXZpbmcgdGhlaXIgZW5lcmd5IGxldmVsIFxuICAgICAgICAgICAgaW5jcmVhc2VkIGJleW9uZCA5LiAoQW4gb2N0b3B1cyBjYW4gb25seSBmbGFzaCBhdCBtb3N0IG9uY2UgcGVyIHN0ZXAuKVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChncmlkQ29weVt5XVt4XSA+IDkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9DaGVjayA9IGFkakNlbGxzKHksIHgsIGdyaWRDb3B5KSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IHRvQ2hlY2subGVuZ3RoOyB6KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENvcHlbdG9DaGVja1t6XS55XVt0b0NoZWNrW3pdLnhdKytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGdyaWRDb3B5Lmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZ3JpZENvcHlbMF0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGlmIChncmlkQ29weVt5XVt4XSA+IDkpIGdyaWRDb3B5W3ldW3hdID0gMDtcbiAgICAgICAgICAgIGZsYXNoQ291bnRlcisrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bkdyaWQoZ3JpZENvcHksIHN0ZXBzIC0gMSk7XG59XG5cblxuLy8gY29uc29sZS5sb2cocnVuR3JpZChncmlkLCAyKSk7XG5cbmludGVyZmFjZSBDb29yZCB7XG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlclxufVxuXG5mdW5jdGlvbiBhZGpDZWxscyh5Om51bWJlciwgeDpudW1iZXIsIGdyaWQ6bnVtYmVyW11bXSk6Q29vcmRbXSB7XG4gICAgY29uc3QgY29vcmRzOkNvb3JkW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAtMTsgaSA8IDI7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gLTE7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICAgIGNvb3Jkcy5wdXNoKHt5OiB5ICsgaSwgeDogeCArIGp9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb29yZHMuZmlsdGVyKChjb29yZDpDb29yZCkgPT4ge1xuICAgICAgICBpZiAoY29vcmQueCA9PT0geCAmJiBjb29yZC55ID09PSB5KSByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKGNvb3JkLnggPCAwIHx8XG4gICAgICAgICAgICBjb29yZC55IDwgMCB8fFxuICAgICAgICAgICAgY29vcmQueCA+IGdyaWQubGVuZ3RoIC0gMSB8fFxuICAgICAgICAgICAgY29vcmQueSA+IGdyaWQubGVuZ3RoIC0gMSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSk7XG59XG5cbmNvbnNvbGUubG9nKHJ1bkdyaWQoZ3JpZCwgMikpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==