/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/day14/input.txt":
/*!*****************************!*\
  !*** ./src/day14/input.txt ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("KFVHFSSVNCSNHCPCNPVO\n\nKS -> O\nSP -> V\nOH -> F\nVC -> P\nBO -> S\nCV -> H\nFO -> N\nKV -> V\nOV -> B\nNB -> K\nFS -> F\nKB -> N\nHK -> C\nVP -> B\nSV -> S\nFP -> P\nBS -> B\nBP -> K\nOS -> K\nPB -> C\nHB -> H\nVN -> S\nFB -> C\nOC -> N\nOO -> F\nPC -> O\nFK -> K\nOP -> V\nBH -> C\nNP -> C\nKF -> H\nSK -> F\nHN -> O\nCB -> O\nSN -> N\nVF -> S\nKC -> H\nHF -> V\nNC -> P\nBN -> F\nKO -> C\nPS -> B\nHO -> S\nCH -> O\nKP -> K\nVK -> V\nBB -> V\nBF -> P\nCS -> K\nCN -> H\nPK -> C\nSH -> O\nBC -> H\nFN -> N\nBK -> N\nPN -> B\nPO -> O\nSC -> S\nNO -> S\nKN -> O\nVB -> C\nSF -> H\nFH -> C\nFF -> B\nVO -> S\nPH -> F\nCK -> B\nFC -> P\nVV -> F\nVH -> O\nOF -> O\nHP -> K\nCO -> V\nVS -> V\nSB -> F\nSS -> K\nCF -> O\nOK -> V\nON -> B\nNS -> H\nSO -> B\nNV -> V\nNH -> B\nNN -> K\nKH -> H\nFV -> B\nKK -> N\nOB -> F\nNK -> F\nCC -> S\nPP -> B\nPF -> H\nHC -> P\nPV -> F\nBV -> N\nNF -> N\nHV -> S\nHH -> C\nHS -> O\nCP -> O");

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
  !*** ./src/day14/02.ts ***!
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
var text = __webpack_require__(/*! ./input.txt */ "./src/day14/input.txt");
var start = text.default.split("\n")[0];
var STEPS = 40;
var refDict = {};
text.default.split("\n\n")[1].split("\n").forEach(function (line) {
    var arr = line.split(" -> ");
    refDict[arr[0]] = arr[1];
});
var initialPairCount = {};
Object.keys(refDict).forEach(function (pair) {
    initialPairCount[pair] = 0;
});
// Initial counts:
var startArr = start.split("");
for (var i = 0; i < startArr.length - 1; i++) {
    var pairKey = "".concat(startArr[i]).concat(startArr[i + 1]);
    initialPairCount[pairKey]++;
}
function mutateCounts(steps) {
    var pairCount = __assign({}, initialPairCount);
    var _loop_1 = function () {
        var newPairCount = {};
        Object.keys(refDict).forEach(function (pair) {
            newPairCount[pair] = 0;
        });
        Object.keys(refDict).forEach(function (key) {
            var resultingChar = refDict[key];
            if (!newPairCount["".concat(key[0]).concat(resultingChar)])
                newPairCount["".concat(key[0]).concat(resultingChar)] = pairCount[key];
            else
                newPairCount["".concat(key[0]).concat(resultingChar)] += pairCount[key];
            if (!newPairCount["".concat(resultingChar).concat(key[1])])
                newPairCount["".concat(resultingChar).concat(key[1])] = pairCount[key];
            else
                newPairCount["".concat(resultingChar).concat(key[1])] += pairCount[key];
        });
        pairCount = __assign({}, newPairCount);
        steps--;
    };
    while (steps) {
        _loop_1();
    }
    return pairCount;
}
var pairCounts = mutateCounts(STEPS);
var singleCharCounts = {};
Object.keys(refDict).forEach(function (pair) {
    var char = pair[0];
    if (!singleCharCounts[char])
        singleCharCounts[char] = pairCounts[pair];
    else
        singleCharCounts[char] += pairCounts[pair];
});
singleCharCounts[startArr[startArr.length - 1]]++; // Add last char (excluded from counting method, which counts the first of each pair).
var keys = Object.keys(singleCharCounts);
var max = keys.reduce(function (p, c) { return Math.max(p, singleCharCounts[c]); }, 0);
var min = keys.reduce(function (p, c) { return Math.min(p, singleCharCounts[c]); }, Infinity);
console.log("answer:", max - min);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLElBQUssV0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBaEMsQ0FBZ0MsRUFBRSxDQUFDLENBQUM7QUFDcEYsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQVEsRUFBRSxDQUFRLElBQUssV0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBaEMsQ0FBZ0MsRUFBRSxRQUFRLENBQUM7QUFDM0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS8uL3NyYy9kYXkxNC9pbnB1dC50eHQiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FkdmVudDIwMjEvLi9zcmMvZGF5MTQvMDIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJLRlZIRlNTVk5DU05IQ1BDTlBWT1xcblxcbktTIC0+IE9cXG5TUCAtPiBWXFxuT0ggLT4gRlxcblZDIC0+IFBcXG5CTyAtPiBTXFxuQ1YgLT4gSFxcbkZPIC0+IE5cXG5LViAtPiBWXFxuT1YgLT4gQlxcbk5CIC0+IEtcXG5GUyAtPiBGXFxuS0IgLT4gTlxcbkhLIC0+IENcXG5WUCAtPiBCXFxuU1YgLT4gU1xcbkZQIC0+IFBcXG5CUyAtPiBCXFxuQlAgLT4gS1xcbk9TIC0+IEtcXG5QQiAtPiBDXFxuSEIgLT4gSFxcblZOIC0+IFNcXG5GQiAtPiBDXFxuT0MgLT4gTlxcbk9PIC0+IEZcXG5QQyAtPiBPXFxuRksgLT4gS1xcbk9QIC0+IFZcXG5CSCAtPiBDXFxuTlAgLT4gQ1xcbktGIC0+IEhcXG5TSyAtPiBGXFxuSE4gLT4gT1xcbkNCIC0+IE9cXG5TTiAtPiBOXFxuVkYgLT4gU1xcbktDIC0+IEhcXG5IRiAtPiBWXFxuTkMgLT4gUFxcbkJOIC0+IEZcXG5LTyAtPiBDXFxuUFMgLT4gQlxcbkhPIC0+IFNcXG5DSCAtPiBPXFxuS1AgLT4gS1xcblZLIC0+IFZcXG5CQiAtPiBWXFxuQkYgLT4gUFxcbkNTIC0+IEtcXG5DTiAtPiBIXFxuUEsgLT4gQ1xcblNIIC0+IE9cXG5CQyAtPiBIXFxuRk4gLT4gTlxcbkJLIC0+IE5cXG5QTiAtPiBCXFxuUE8gLT4gT1xcblNDIC0+IFNcXG5OTyAtPiBTXFxuS04gLT4gT1xcblZCIC0+IENcXG5TRiAtPiBIXFxuRkggLT4gQ1xcbkZGIC0+IEJcXG5WTyAtPiBTXFxuUEggLT4gRlxcbkNLIC0+IEJcXG5GQyAtPiBQXFxuVlYgLT4gRlxcblZIIC0+IE9cXG5PRiAtPiBPXFxuSFAgLT4gS1xcbkNPIC0+IFZcXG5WUyAtPiBWXFxuU0IgLT4gRlxcblNTIC0+IEtcXG5DRiAtPiBPXFxuT0sgLT4gVlxcbk9OIC0+IEJcXG5OUyAtPiBIXFxuU08gLT4gQlxcbk5WIC0+IFZcXG5OSCAtPiBCXFxuTk4gLT4gS1xcbktIIC0+IEhcXG5GViAtPiBCXFxuS0sgLT4gTlxcbk9CIC0+IEZcXG5OSyAtPiBGXFxuQ0MgLT4gU1xcblBQIC0+IEJcXG5QRiAtPiBIXFxuSEMgLT4gUFxcblBWIC0+IEZcXG5CViAtPiBOXFxuTkYgLT4gTlxcbkhWIC0+IFNcXG5ISCAtPiBDXFxuSFMgLT4gT1xcbkNQIC0+IE9cIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHRleHQgPSByZXF1aXJlKCcuL2lucHV0LnR4dCcpO1xuZXhwb3J0IHt9XG5cbmNvbnN0IHN0YXJ0ID0gdGV4dC5kZWZhdWx0LnNwbGl0KFwiXFxuXCIpWzBdXG5jb25zdCBTVEVQUyA9IDQwO1xuXG5pbnRlcmZhY2UgRGljdCB7XG4gICAgW2luZGV4OnN0cmluZ106IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgQ291bnQge1xuICAgIFtpbmRleDpzdHJpbmddOiBudW1iZXI7XG59XG5cbmNvbnN0IHJlZkRpY3Q6RGljdCA9IHt9XG50ZXh0LmRlZmF1bHQuc3BsaXQoXCJcXG5cXG5cIilbMV0uc3BsaXQoXCJcXG5cIikuZm9yRWFjaCgobGluZTpzdHJpbmcpID0+IHtcbiAgICBsZXQgYXJyID0gbGluZS5zcGxpdChcIiAtPiBcIik7XG4gICAgcmVmRGljdFthcnJbMF1dID0gYXJyWzFdXG59KVxuXG5jb25zdCBpbml0aWFsUGFpckNvdW50OkNvdW50ID0ge31cbk9iamVjdC5rZXlzKHJlZkRpY3QpLmZvckVhY2goKHBhaXI6c3RyaW5nKSA9PiB7XG4gICAgaW5pdGlhbFBhaXJDb3VudFtwYWlyXSA9IDA7XG59KVxuXG4vLyBJbml0aWFsIGNvdW50czpcbmNvbnN0IHN0YXJ0QXJyID0gc3RhcnQuc3BsaXQoXCJcIik7XG5mb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0QXJyLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNvbnN0IHBhaXJLZXkgPSBgJHtzdGFydEFycltpXX0ke3N0YXJ0QXJyW2kgKyAxXX1gXG4gICAgaW5pdGlhbFBhaXJDb3VudFtwYWlyS2V5XSsrO1xufVxuXG5mdW5jdGlvbiBtdXRhdGVDb3VudHMoc3RlcHM6bnVtYmVyKSB7XG4gICAgbGV0IHBhaXJDb3VudCA9IHsuLi5pbml0aWFsUGFpckNvdW50fTtcbiAgICB3aGlsZSAoc3RlcHMpIHtcbiAgICAgICAgbGV0IG5ld1BhaXJDb3VudDpDb3VudCA9IHt9XG4gICAgICAgIE9iamVjdC5rZXlzKHJlZkRpY3QpLmZvckVhY2goKHBhaXI6c3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBuZXdQYWlyQ291bnRbcGFpcl0gPSAwO1xuICAgICAgICB9KSBcbiAgICAgICAgT2JqZWN0LmtleXMocmVmRGljdCkuZm9yRWFjaCgoa2V5OnN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0aW5nQ2hhciA9IHJlZkRpY3Rba2V5XTtcbiAgICAgICAgICAgIGlmICghbmV3UGFpckNvdW50W2Ake2tleVswXX0ke3Jlc3VsdGluZ0NoYXJ9YF0pIG5ld1BhaXJDb3VudFtgJHtrZXlbMF19JHtyZXN1bHRpbmdDaGFyfWBdID0gcGFpckNvdW50W2tleV07XG4gICAgICAgICAgICBlbHNlIG5ld1BhaXJDb3VudFtgJHtrZXlbMF19JHtyZXN1bHRpbmdDaGFyfWBdICs9IHBhaXJDb3VudFtrZXldO1xuICAgICAgICAgICAgaWYgKCFuZXdQYWlyQ291bnRbYCR7cmVzdWx0aW5nQ2hhcn0ke2tleVsxXX1gXSkgbmV3UGFpckNvdW50W2Ake3Jlc3VsdGluZ0NoYXJ9JHtrZXlbMV19YF0gPSBwYWlyQ291bnRba2V5XTtcbiAgICAgICAgICAgIGVsc2UgbmV3UGFpckNvdW50W2Ake3Jlc3VsdGluZ0NoYXJ9JHtrZXlbMV19YF0gKz0gcGFpckNvdW50W2tleV07XG4gICAgICAgIH0pXG4gICAgICAgIHBhaXJDb3VudCA9IHsuLi5uZXdQYWlyQ291bnR9XG4gICAgICAgIHN0ZXBzLS07XG4gICAgfVxuICAgIHJldHVybiBwYWlyQ291bnRcbn1cblxuY29uc3QgcGFpckNvdW50cyA9IG11dGF0ZUNvdW50cyhTVEVQUyk7XG5cbmNvbnN0IHNpbmdsZUNoYXJDb3VudHM6Q291bnQgPSB7fTtcbk9iamVjdC5rZXlzKHJlZkRpY3QpLmZvckVhY2goKHBhaXI6c3RyaW5nKSA9PiB7XG4gICAgY29uc3QgY2hhciA9IHBhaXJbMF07XG4gICAgaWYgKCFzaW5nbGVDaGFyQ291bnRzW2NoYXJdKSBzaW5nbGVDaGFyQ291bnRzW2NoYXJdID0gcGFpckNvdW50c1twYWlyXTtcbiAgICBlbHNlIHNpbmdsZUNoYXJDb3VudHNbY2hhcl0gKz0gcGFpckNvdW50c1twYWlyXTtcbn0pXG5zaW5nbGVDaGFyQ291bnRzW3N0YXJ0QXJyW3N0YXJ0QXJyLmxlbmd0aCAtIDFdXSsrOyAvLyBBZGQgbGFzdCBjaGFyIChleGNsdWRlZCBmcm9tIGNvdW50aW5nIG1ldGhvZCwgd2hpY2ggY291bnRzIHRoZSBmaXJzdCBvZiBlYWNoIHBhaXIpLlxuXG5jb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc2luZ2xlQ2hhckNvdW50cyk7XG5jb25zdCBtYXggPSBrZXlzLnJlZHVjZSgocDpudW1iZXIsIGM6c3RyaW5nKSA9PiBNYXRoLm1heChwLCBzaW5nbGVDaGFyQ291bnRzW2NdKSwgMClcbmNvbnN0IG1pbiA9IGtleXMucmVkdWNlKChwOm51bWJlciwgYzpzdHJpbmcpID0+IE1hdGgubWluKHAsIHNpbmdsZUNoYXJDb3VudHNbY10pLCBJbmZpbml0eSlcbmNvbnNvbGUubG9nKFwiYW5zd2VyOlwiLCBtYXggLSBtaW4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==