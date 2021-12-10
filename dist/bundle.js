/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/day10/input_test.txt":
/*!**********************************!*\
  !*** ./src/day10/input_test.txt ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("[({(<(())[]>[[{[]{<()<>>\n[(()[<>])]({[<{<<[]>>(\n{([(<{}[<>[]}>{[]{[(<()>\n(((({<>}<{<{<>}{[]{[]{}\n[[<[([]))<([[{}[[()]]]\n[{[{({}]{}}([{[{{{}}([]\n{<[[]]>}<{[{[{[]{()[[[]\n[<(<(<(<{}))><([]([]()\n<{([([[(<>()){}]>(<<{{\n<{([{{}}[<[[[<>{}]]]>[]]");

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
  !*** ./src/day10/02.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
var text = __webpack_require__(/*! ./input_test.txt */ "./src/day10/input_test.txt");
var lines = text.default.split("\n").map(function (row) { return row.split(""); });
var parsed = lines.map(function (line) {
    var stack = [];
    for (var i = 0; i < line.length; i++) {
        if (line[i] === "(" || line[i] === "[" || line[i] === "{" || line[i] === "<") {
            stack.push(line[i]);
        }
        else if (line[i] === ")" && stack[stack.length - 1] !== "(") {
            return 3;
        }
        else if (line[i] === "]" && stack[stack.length - 1] !== "[") {
            return 57;
        }
        else if (line[i] === "}" && stack[stack.length - 1] !== "{") {
            return 1197;
        }
        else if (line[i] === ">" && stack[stack.length - 1] !== "<") {
            return 25137;
        }
        else
            stack.pop();
    }
    return stack;
});
var results = parsed;
console.log("results:", results);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsSUFBSSxZQUFZLEdBQUcsb0JBQW9CLEdBQUcsVUFBVSxNQUFNLE1BQU0sRUFBRSxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksaUJBQWlCLFdBQVcsRUFBRSxHQUFHLElBQUksR0FBRyxNQUFNLE1BQU0sT0FBTyxFQUFFLEVBQUUsRUFBRSxHQUFHLGtCQUFrQixnQkFBZ0IsYUFBYSxPQUFPLElBQUksTUFBTSxTQUFTLFFBQVE7Ozs7OztVQ0F4UTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7QUNOQSxJQUFNLElBQUksR0FBRyxtQkFBTyxDQUFDLG9EQUFrQixDQUFDLENBQUM7QUFHekMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBVSxJQUFLLFVBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQWIsQ0FBYSxDQUFDO0FBRXpFLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFhO0lBQ25DLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUVqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNsQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDMUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjthQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDM0QsT0FBTyxDQUFDO1NBQ1g7YUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQzNELE9BQU8sRUFBRTtTQUNaO2FBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUMzRCxPQUFPLElBQUk7U0FDZDthQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDM0QsT0FBTyxLQUFLO1NBQ2Y7O1lBQU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyxLQUFLO0FBQ2hCLENBQUMsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHLE1BQU07QUFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZlbnQyMDIxLy4vc3JjL2RheTEwL2lucHV0X3Rlc3QudHh0Iiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxLy4vc3JjL2RheTEwLzAyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiWyh7KDwoKCkpW10+W1t7W117PCgpPD4+XFxuWygoKVs8Pl0pXSh7Wzx7PDxbXT4+KFxcbnsoWyg8e31bPD5bXX0+e1tde1soPCgpPlxcbigoKCh7PD59PHs8ezw+fXtbXXtbXXt9XFxuW1s8WyhbXSkpPChbW3t9W1soKV1dXVxcblt7W3soe31de319KFt7W3t7e319KFtdXFxuezxbW11dPn08e1t7W3tbXXsoKVtbW11cXG5bPCg8KDwoPHt9KSk+PChbXShbXSgpXFxuPHsoWyhbWyg8PigpKXt9XT4oPDx7e1xcbjx7KFt7e319WzxbW1s8Pnt9XV1dPltdXVwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgdGV4dCA9IHJlcXVpcmUoJy4vaW5wdXRfdGVzdC50eHQnKTtcbmV4cG9ydCB7fVxuXG5jb25zdCBsaW5lcyA9IHRleHQuZGVmYXVsdC5zcGxpdChcIlxcblwiKS5tYXAoKHJvdzpzdHJpbmcpID0+IHJvdy5zcGxpdChcIlwiKSlcblxuY29uc3QgcGFyc2VkID0gbGluZXMubWFwKChsaW5lOnN0cmluZ1tdKSA9PiB7XG4gICAgY29uc3Qgc3RhY2sgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGluZVtpXSA9PT0gXCIoXCIgfHwgbGluZVtpXSA9PT0gXCJbXCIgfHwgbGluZVtpXSA9PT0gXCJ7XCIgfHwgbGluZVtpXSA9PT0gXCI8XCIpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobGluZVtpXSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGluZVtpXSA9PT0gXCIpXCIgJiYgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09IFwiKFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gM1xuICAgICAgICB9IGVsc2UgaWYgKGxpbmVbaV0gPT09IFwiXVwiICYmIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdICE9PSBcIltcIikge1xuICAgICAgICAgICAgcmV0dXJuIDU3XG4gICAgICAgIH0gZWxzZSBpZiAobGluZVtpXSA9PT0gXCJ9XCIgJiYgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09IFwie1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gMTE5N1xuICAgICAgICB9IGVsc2UgaWYgKGxpbmVbaV0gPT09IFwiPlwiICYmIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdICE9PSBcIjxcIikge1xuICAgICAgICAgICAgcmV0dXJuIDI1MTM3XG4gICAgICAgIH0gZWxzZSBzdGFjay5wb3AoKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YWNrXG59KVxuXG5jb25zdCByZXN1bHRzID0gcGFyc2VkXG5cbmNvbnNvbGUubG9nKFwicmVzdWx0czpcIiwgcmVzdWx0cyk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==