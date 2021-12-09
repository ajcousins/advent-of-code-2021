/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/day09/input_test.txt":
/*!**********************************!*\
  !*** ./src/day09/input_test.txt ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("2199943210\n3987894921\n9856789892\n8767896789\n9899965678");

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
  !*** ./src/day09/02.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
var text = __webpack_require__(/*! ./input_test.txt */ "./src/day09/input_test.txt");
var grid = text.default.split("\n").map(function (row) { return row.split("").map(function (digit) { return Number(digit); }); });
console.log(grid);
var lowPoints = [];
for (var y = 0; y < grid.length; y++) {
    for (var x = 0; x < grid[0].length; x++) {
        var current = grid[y][x];
        var up = y === 0 ? 10 : grid[y - 1][x];
        var left = x === 0 ? 10 : grid[y][x - 1];
        var right = x === grid[0].length - 1 ? 10 : grid[y][x + 1];
        var down = y === grid.length - 1 ? 10 : grid[y + 1][x];
        current < Math.min(up, left, right, down) && (lowPoints.push({ x: x, y: y }));
    }
}
console.log("lowPoints:", lowPoints);
function sumNeighbours(cur, from, checked) {
    // define this location
    var current = grid[cur.y][cur.x];
    var up = cur.y === 0 ? 10 : grid[cur.y - 1][cur.x];
    var left = cur.x === 0 ? 10 : grid[cur.y][cur.x - 1];
    var right = cur.x === grid[0].length - 1 ? 10 : grid[cur.y][cur.x + 1];
    var down = cur.y === grid.length - 1 ? 10 : grid[cur.y + 1][cur.x];
    // if everything around me has been checked, then return 0;
    // if (checked.)
    var neighbours = [];
    if (cur.y > 0)
        neighbours.push({ x: cur.x, y: cur.y - 1 });
    else if (cur.y < grid.length - 1)
        neighbours.push({ x: cur.x, y: cur.y + 1 });
    if (cur.x > 0)
        neighbours.push({ x: cur.x + 1, y: cur.y });
    else if (cur.x < grid[0].length - 1)
        neighbours.push({ x: cur.x - 1, y: cur.y });
    console.log("cur:", cur, "neighbours:", neighbours);
    var toCheckNext = [];
    return 0;
}
var basinSizes = [];
lowPoints.forEach(function (lowPoint) {
    basinSizes.push(sumNeighbours(lowPoint));
});
console.log("basinSizes:", basinSizes);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXJFLDJEQUEyRDtJQUMzRCxnQkFBZ0I7SUFFaEIsSUFBTSxVQUFVLEdBQVcsRUFBRTtJQUM3QixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ3BELElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7UUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM1RSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ3BELElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7UUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBS3BELElBQU0sV0FBVyxHQUFXLEVBQUU7SUFHOUIsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBRUQsSUFBTSxVQUFVLEdBQVksRUFBRTtBQUU5QixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBYztJQUM3QixVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmVudDIwMjEvLi9zcmMvZGF5MDkvaW5wdXRfdGVzdC50eHQiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FkdmVudDIwMjEvLi9zcmMvZGF5MDkvMDIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyMTk5OTQzMjEwXFxuMzk4Nzg5NDkyMVxcbjk4NTY3ODk4OTJcXG44NzY3ODk2Nzg5XFxuOTg5OTk2NTY3OFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgdGV4dCA9IHJlcXVpcmUoJy4vaW5wdXRfdGVzdC50eHQnKTtcbmV4cG9ydCB7fVxuXG5jb25zdCBncmlkID0gdGV4dC5kZWZhdWx0LnNwbGl0KFwiXFxuXCIpLm1hcCgocm93OnN0cmluZykgPT4gcm93LnNwbGl0KFwiXCIpLm1hcCgoZGlnaXQpID0+IE51bWJlcihkaWdpdCkpKTtcblxuY29uc29sZS5sb2coZ3JpZCk7XG5cbmludGVyZmFjZSBDb29yZCB7XG4gICAgeDpudW1iZXIsIFxuICAgIHk6bnVtYmVyXG59XG5cbmNvbnN0IGxvd1BvaW50czpDb29yZFtdID0gW107XG5cbmZvciAobGV0IHkgPSAwOyB5IDwgZ3JpZC5sZW5ndGg7IHkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgZ3JpZFswXS5sZW5ndGg7IHgrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gZ3JpZFt5XVt4XTtcbiAgICAgICAgY29uc3QgdXAgPSB5ID09PSAwID8gMTAgOiBncmlkW3kgLSAxXVt4XTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHggPT09IDAgPyAxMCA6IGdyaWRbeV1beCAtIDFdO1xuICAgICAgICBjb25zdCByaWdodCA9IHggPT09IGdyaWRbMF0ubGVuZ3RoIC0gMSA/IDEwIDogZ3JpZFt5XVt4ICsgMV07XG4gICAgICAgIGNvbnN0IGRvd24gPSB5ID09PSBncmlkLmxlbmd0aCAtIDEgPyAxMCA6IGdyaWRbeSArIDFdW3hdO1xuICAgICAgICBcbiAgICAgICAgY3VycmVudCA8IE1hdGgubWluKHVwLCBsZWZ0LCByaWdodCwgZG93bikgJiYgKGxvd1BvaW50cy5wdXNoKHt4LCB5fSkpO1xuICAgIH1cbn1cblxuY29uc29sZS5sb2coXCJsb3dQb2ludHM6XCIsIGxvd1BvaW50cyk7XG5cblxuZnVuY3Rpb24gc3VtTmVpZ2hib3VycyhjdXI6Q29vcmQsIGZyb20/OkNvb3JkLCBjaGVja2VkPzpDb29yZFtdKSB7XG4gICAgLy8gZGVmaW5lIHRoaXMgbG9jYXRpb25cbiAgICBjb25zdCBjdXJyZW50ID0gZ3JpZFtjdXIueV1bY3VyLnhdO1xuICAgIGNvbnN0IHVwID0gY3VyLnkgPT09IDAgPyAxMCA6IGdyaWRbY3VyLnkgLSAxXVtjdXIueF07XG4gICAgY29uc3QgbGVmdCA9IGN1ci54ID09PSAwID8gMTAgOiBncmlkW2N1ci55XVtjdXIueCAtIDFdO1xuICAgIGNvbnN0IHJpZ2h0ID0gY3VyLnggPT09IGdyaWRbMF0ubGVuZ3RoIC0gMSA/IDEwIDogZ3JpZFtjdXIueV1bY3VyLnggKyAxXTtcbiAgICBjb25zdCBkb3duID0gY3VyLnkgPT09IGdyaWQubGVuZ3RoIC0gMSA/IDEwIDogZ3JpZFtjdXIueSArIDFdW2N1ci54XTtcblxuICAgIC8vIGlmIGV2ZXJ5dGhpbmcgYXJvdW5kIG1lIGhhcyBiZWVuIGNoZWNrZWQsIHRoZW4gcmV0dXJuIDA7XG4gICAgLy8gaWYgKGNoZWNrZWQuKVxuXG4gICAgY29uc3QgbmVpZ2hib3VyczpDb29yZFtdID0gW11cbiAgICBpZiAoY3VyLnkgPiAwKSBuZWlnaGJvdXJzLnB1c2goe3g6IGN1ci54LCB5OiBjdXIueSAtIDF9KTtcbiAgICBlbHNlIGlmIChjdXIueSA8IGdyaWQubGVuZ3RoIC0gMSkgbmVpZ2hib3Vycy5wdXNoKHt4OiBjdXIueCwgeTogY3VyLnkgKyAxfSk7XG4gICAgaWYgKGN1ci54ID4gMCkgbmVpZ2hib3Vycy5wdXNoKHt4OiBjdXIueCArIDEsIHk6IGN1ci55fSk7XG4gICAgZWxzZSBpZiAoY3VyLnggPCBncmlkWzBdLmxlbmd0aCAtIDEpIG5laWdoYm91cnMucHVzaCh7eDogY3VyLnggLSAxLCB5OiBjdXIueX0pO1xuICAgIGNvbnNvbGUubG9nKFwiY3VyOlwiLCBjdXIsIFwibmVpZ2hib3VyczpcIiwgbmVpZ2hib3Vycyk7XG4gICAgXG5cblxuXG4gICAgY29uc3QgdG9DaGVja05leHQ6Q29vcmRbXSA9IFtdXG5cblxuICAgIHJldHVybiAwO1xufVxuXG5jb25zdCBiYXNpblNpemVzOm51bWJlcltdID0gW11cblxubG93UG9pbnRzLmZvckVhY2goKGxvd1BvaW50OkNvb3JkKSA9PiB7XG4gICAgYmFzaW5TaXplcy5wdXNoKHN1bU5laWdoYm91cnMobG93UG9pbnQpKVxufSlcblxuY29uc29sZS5sb2coXCJiYXNpblNpemVzOlwiLCBiYXNpblNpemVzKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=