/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/day12/input.txt":
/*!*****************************!*\
  !*** ./src/day12/input.txt ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("XW-ed\ncc-tk\neq-ed\nns-eq\ncc-ed\nLA-kl\nII-tk\nLA-end\nend-II\nSQ-kl\ncc-kl\nXW-eq\ned-LA\nXW-tk\ncc-II\ntk-LA\neq-II\nSQ-start\nLA-start\nXW-end\ned-tk\neq-JR\nstart-kl\ned-II\nSQ-tk");

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
  !*** ./src/day12/02.ts ***!
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var text = __webpack_require__(/*! ./input.txt */ "./src/day12/input.txt");
var Graph = /** @class */ (function () {
    function Graph() {
        this.adjacencyList = {};
    }
    Graph.prototype.addVertex = function (vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    };
    Graph.prototype.addEdge = function (v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    };
    Graph.prototype.findPaths = function (start) {
        var allPossPaths = [];
        var startingPath = [];
        var startingVisited = {};
        var adjList = this.adjacencyList;
        function helper(current, pathSoFar, visited, doubleVis) {
            var pathCopy = __spreadArray(__spreadArray([], pathSoFar, true), [current], false);
            var visitedCopy = __assign({}, visited);
            var doubleVisit = doubleVis ? doubleVis : false;
            if (current.charAt(0) === current.charAt(0).toLowerCase()) {
                if (visitedCopy[current])
                    doubleVisit = true;
                visitedCopy[current] = 1;
            }
            // base case
            if (current === "end") {
                allPossPaths.push(pathCopy);
                return null;
            }
            var toVisit = [];
            adjList[current].forEach(function (dest) {
                if (!visitedCopy[dest])
                    toVisit.push(dest);
                else if (visitedCopy[dest] && !doubleVisit && dest !== start)
                    toVisit.push(dest);
            });
            if (!toVisit.length)
                return null;
            toVisit.forEach(function (dest) {
                helper(dest, pathCopy, visitedCopy, doubleVisit);
            });
        }
        helper(start, startingPath, startingVisited);
        return allPossPaths;
    };
    return Graph;
}());
var inputList = text.default.split("\n");
var caveGraph = new Graph();
inputList.forEach(function (line) {
    var vertexes = line.split("-");
    vertexes.forEach(function (vertex) {
        caveGraph.addVertex(vertex);
    });
    caveGraph.addEdge(vertexes[0], vertexes[1]);
});
console.log(inputList);
console.log("caveGraph:", caveGraph);
console.log("caveGraph.findPaths('start'):", caveGraph.findPaths('start'));


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7WUFDcEQsQ0FBQyxDQUFDO1FBQ04sQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQztRQUU1QyxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7QUFFRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDMUMsSUFBTSxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUU5QixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBVztJQUMxQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNoQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBYTtRQUMzQixTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztJQUNGLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZlbnQyMDIxLy4vc3JjL2RheTEyL2lucHV0LnR4dCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS8uL3NyYy9kYXkxMi8wMi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIlhXLWVkXFxuY2MtdGtcXG5lcS1lZFxcbm5zLWVxXFxuY2MtZWRcXG5MQS1rbFxcbklJLXRrXFxuTEEtZW5kXFxuZW5kLUlJXFxuU1Eta2xcXG5jYy1rbFxcblhXLWVxXFxuZWQtTEFcXG5YVy10a1xcbmNjLUlJXFxudGstTEFcXG5lcS1JSVxcblNRLXN0YXJ0XFxuTEEtc3RhcnRcXG5YVy1lbmRcXG5lZC10a1xcbmVxLUpSXFxuc3RhcnQta2xcXG5lZC1JSVxcblNRLXRrXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCB0ZXh0ID0gcmVxdWlyZSgnLi9pbnB1dC50eHQnKTtcbmV4cG9ydCB7fVxuXG5pbnRlcmZhY2UgR3JhcGgge1xuICAgIGFkamFjZW5jeUxpc3Q6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nW11cbiAgICB9XG59XG5cbmNsYXNzIEdyYXBoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hZGphY2VuY3lMaXN0ID0ge31cbiAgICB9XG4gICAgYWRkVmVydGV4KHZlcnRleDpzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFkamFjZW5jeUxpc3RbdmVydGV4XSkgdGhpcy5hZGphY2VuY3lMaXN0W3ZlcnRleF0gPSBbXVxuICAgIH1cbiAgICBhZGRFZGdlKHYxOnN0cmluZywgdjI6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWRqYWNlbmN5TGlzdFt2MV0ucHVzaCh2Mik7XG4gICAgICAgIHRoaXMuYWRqYWNlbmN5TGlzdFt2Ml0ucHVzaCh2MSk7XG4gICAgfVxuICAgIGZpbmRQYXRocyhzdGFydDpzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgYWxsUG9zc1BhdGhzOnN0cmluZ1tdW10gPSBbXTtcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdQYXRoOnN0cmluZ1tdID0gW107XG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nVmlzaXRlZDp7W2tleTpzdHJpbmddOm51bWJlcn0gPSB7fVxuICAgICAgICBjb25zdCBhZGpMaXN0ID0gdGhpcy5hZGphY2VuY3lMaXN0O1xuXG4gICAgICAgIGZ1bmN0aW9uIGhlbHBlcihjdXJyZW50OnN0cmluZywgcGF0aFNvRmFyOnN0cmluZ1tdLCB2aXNpdGVkOmFueSwgZG91YmxlVmlzPzpib29sZWFuKTpudWxsIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhDb3B5ID0gWy4uLnBhdGhTb0ZhciwgY3VycmVudF07XG4gICAgICAgICAgICBjb25zdCB2aXNpdGVkQ29weSA9IHsuLi52aXNpdGVkfTtcbiAgICAgICAgICAgIGxldCBkb3VibGVWaXNpdCA9IGRvdWJsZVZpcyA/IGRvdWJsZVZpcyA6IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudC5jaGFyQXQoMCkgPT09IGN1cnJlbnQuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICBpZih2aXNpdGVkQ29weVtjdXJyZW50XSkgZG91YmxlVmlzaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZpc2l0ZWRDb3B5W2N1cnJlbnRdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGJhc2UgY2FzZVxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IFwiZW5kXCIpIHtcbiAgICAgICAgICAgICAgICBhbGxQb3NzUGF0aHMucHVzaChwYXRoQ29weSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRvVmlzaXQ6c3RyaW5nW10gPSBbXTtcbiAgICAgICAgICAgIGFkakxpc3RbY3VycmVudF0uZm9yRWFjaCgoZGVzdDpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXZpc2l0ZWRDb3B5W2Rlc3RdKSB0b1Zpc2l0LnB1c2goZGVzdClcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2aXNpdGVkQ29weVtkZXN0XSAmJiAhZG91YmxlVmlzaXQgJiYgZGVzdCAhPT0gc3RhcnQpIHRvVmlzaXQucHVzaChkZXN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmICghdG9WaXNpdC5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICB0b1Zpc2l0LmZvckVhY2goKGRlc3Q6c3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgaGVscGVyKGRlc3QsIHBhdGhDb3B5LCB2aXNpdGVkQ29weSwgZG91YmxlVmlzaXQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGhlbHBlcihzdGFydCwgc3RhcnRpbmdQYXRoLCBzdGFydGluZ1Zpc2l0ZWQpXG5cbiAgICAgICAgcmV0dXJuIGFsbFBvc3NQYXRocztcbiAgICB9XG59XG5cbmNvbnN0IGlucHV0TGlzdCA9IHRleHQuZGVmYXVsdC5zcGxpdChcIlxcblwiKVxuY29uc3QgY2F2ZUdyYXBoID0gbmV3IEdyYXBoKCk7XG5cbmlucHV0TGlzdC5mb3JFYWNoKChsaW5lOnN0cmluZykgPT4ge1xuICAgIGNvbnN0IHZlcnRleGVzID0gbGluZS5zcGxpdChcIi1cIilcbiAgICB2ZXJ0ZXhlcy5mb3JFYWNoKCh2ZXJ0ZXg6c3RyaW5nKSA9PiB7XG4gICAgICAgIGNhdmVHcmFwaC5hZGRWZXJ0ZXgodmVydGV4KTtcbiAgICB9KVxuICAgIGNhdmVHcmFwaC5hZGRFZGdlKHZlcnRleGVzWzBdLCB2ZXJ0ZXhlc1sxXSk7XG59KVxuXG5jb25zb2xlLmxvZyhpbnB1dExpc3QpO1xuY29uc29sZS5sb2coXCJjYXZlR3JhcGg6XCIsIGNhdmVHcmFwaCk7XG5jb25zb2xlLmxvZyhcImNhdmVHcmFwaC5maW5kUGF0aHMoJ3N0YXJ0Jyk6XCIsIGNhdmVHcmFwaC5maW5kUGF0aHMoJ3N0YXJ0JykpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==