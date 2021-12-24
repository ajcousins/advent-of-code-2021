/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/day16/input_test.txt":
/*!**********************************!*\
  !*** ./src/day16/input_test.txt ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("A0016C880162017C3686B18A3D4780");

/***/ }),

/***/ "./src/lib/hexToBin.ts":
/*!*****************************!*\
  !*** ./src/lib/hexToBin.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToBin": () => (/* binding */ hexToBin)
/* harmony export */ });
var hexToBin = {
    "0": "0000",
    "1": "0001",
    "2": "0010",
    "3": "0011",
    "4": "0100",
    "5": "0101",
    "6": "0110",
    "7": "0111",
    "8": "1000",
    "9": "1001",
    "A": "1010",
    "B": "1011",
    "C": "1100",
    "D": "1101",
    "E": "1110",
    "F": "1111",
};



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
  !*** ./src/day16/02.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var hexToBin = (__webpack_require__(/*! ../lib/hexToBin */ "./src/lib/hexToBin.ts").hexToBin);
var text = __webpack_require__(/*! ./input_test.txt */ "./src/day16/input_test.txt");
var charArr = text.default.split("");
var binInput = charArr.map(function (char) { return hexToBin[char]; }).join("");
console.log(binInput);
// const output:Packet[] = [];
function parseBin(bin, packetCount) {
    if (bin.length < 11)
        return null;
    var input = __spreadArray([], bin.split(""), true);
    var version = parseInt(input.slice(0, 3).join(""), 2);
    var typeID = parseInt(input.slice(3, 6).join(""), 2);
    input.splice(0, 6);
    // Literal value
    if (typeID === 4) {
        var bitArr = [];
        while (true) {
            bitArr.push(input.slice(1, 5).join(""));
            if (input[0] === "0") {
                input.splice(0, 5);
                return { version: version, typeID: typeID, binLength: (bitArr.length * 5) + 6, payload: parseInt(bitArr.join(""), 2) };
            }
            input.splice(0, 5);
        }
    }
    // Operator packet
    else {
        var lengthTypeID = input.shift();
        if (lengthTypeID === "0") {
            var subPackBinLength = parseInt(input.splice(0, 15).join(""), 2);
            var packetArr = [];
            while (subPackBinLength > 0) {
                var result = parseBin(input.slice(0, subPackBinLength).join(""));
                packetArr.push(result);
                subPackBinLength -= result.binLength;
                input.splice(0, result.binLength);
            }
            var binLength = packetArr.reduce(function (a, b) { return a + b.binLength; }, 0) + 22;
            return { version: version, typeID: typeID, children: packetArr, binLength: binLength };
        }
        else {
            var numberOfSubPackets = parseInt(input.splice(0, 11).join(""), 2);
            var packetArr = [];
            while (numberOfSubPackets > 0) {
                var result = parseBin(input.join(""));
                input.splice(0, result.binLength);
                packetArr.push(result);
                numberOfSubPackets--;
            }
            var binLength = packetArr.reduce(function (a, b) { return a + b.binLength; }, 0) + 18;
            return { version: version, typeID: typeID, children: packetArr, binLength: binLength };
        }
    }
}
parseBin(binInput);
console.log("output:", parseBin(binInput));

// const versionSum = output.reduce((p:number, c:Packet) => c.version + p, 0)
// console.log("versionSum:", versionSum);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDRCxJQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkUsSUFBTSxTQUFTLEdBQUcsRUFBRTtZQUVwQixPQUFPLGtCQUFrQixHQUFHLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNsQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QixrQkFBa0IsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQWYsQ0FBZSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUV0RSxPQUFPLEVBQUMsT0FBTyxXQUFFLE1BQU0sVUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsYUFBQztTQUUzRDtLQUNKO0FBQ0wsQ0FBQztBQUNELFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVuQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7QUFFM0MsNkVBQTZFO0FBQzdFLDBDQUEwQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmVudDIwMjEvLi9zcmMvZGF5MTYvaW5wdXRfdGVzdC50eHQiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS8uL3NyYy9saWIvaGV4VG9CaW4udHMiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FkdmVudDIwMjEvLi9zcmMvZGF5MTYvMDIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJBMDAxNkM4ODAxNjIwMTdDMzY4NkIxOEEzRDQ3ODBcIjsiLCJpbnRlcmZhY2UgSGFzaCB7XG4gICAgW2tleTpzdHJpbmddOiBzdHJpbmc7XG59XG5cbmNvbnN0IGhleFRvQmluOkhhc2ggPSB7XG4gICAgXCIwXCI6IFwiMDAwMFwiLFxuICAgIFwiMVwiOiBcIjAwMDFcIixcbiAgICBcIjJcIjogXCIwMDEwXCIsXG4gICAgXCIzXCI6IFwiMDAxMVwiLFxuICAgIFwiNFwiOiBcIjAxMDBcIixcbiAgICBcIjVcIjogXCIwMTAxXCIsXG4gICAgXCI2XCI6IFwiMDExMFwiLFxuICAgIFwiN1wiOiBcIjAxMTFcIixcbiAgICBcIjhcIjogXCIxMDAwXCIsXG4gICAgXCI5XCI6IFwiMTAwMVwiLFxuICAgIFwiQVwiOiBcIjEwMTBcIixcbiAgICBcIkJcIjogXCIxMDExXCIsXG4gICAgXCJDXCI6IFwiMTEwMFwiLFxuICAgIFwiRFwiOiBcIjExMDFcIixcbiAgICBcIkVcIjogXCIxMTEwXCIsXG4gICAgXCJGXCI6IFwiMTExMVwiLFxufVxuXG5leHBvcnQgeyBoZXhUb0JpbiB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCB7IGhleFRvQmluIH0gPSByZXF1aXJlKCcuLi9saWIvaGV4VG9CaW4nKTtcblxuY29uc3QgdGV4dCA9IHJlcXVpcmUoJy4vaW5wdXRfdGVzdC50eHQnKTtcbmV4cG9ydCB7fVxuXG5cblxuaW50ZXJmYWNlIFBhY2tldCB7XG4gICAgdmVyc2lvbjogbnVtYmVyO1xuICAgIHR5cGVJRDogbnVtYmVyO1xuICAgIHBheWxvYWQ/OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgY2hpbGRyZW4/OiBQYWNrZXRbXTtcbiAgICBiaW5MZW5ndGg/OiBudW1iZXI7XG59XG5cblxuXG5jb25zdCBjaGFyQXJyID0gdGV4dC5kZWZhdWx0LnNwbGl0KFwiXCIpO1xuXG5jb25zdCBiaW5JbnB1dCA9IGNoYXJBcnIubWFwKChjaGFyOnN0cmluZykgPT4gaGV4VG9CaW5bY2hhcl0pLmpvaW4oXCJcIik7XG5jb25zb2xlLmxvZyhiaW5JbnB1dCk7XG5cbi8vIGNvbnN0IG91dHB1dDpQYWNrZXRbXSA9IFtdO1xuXG5mdW5jdGlvbiBwYXJzZUJpbihiaW46c3RyaW5nLCBwYWNrZXRDb3VudD86bnVtYmVyKTpQYWNrZXQge1xuICAgIGlmIChiaW4ubGVuZ3RoIDwgMTEpIHJldHVybiBudWxsO1xuICAgIGxldCBpbnB1dCA9IFsuLi5iaW4uc3BsaXQoXCJcIildXG4gICAgbGV0IHZlcnNpb24gPSBwYXJzZUludChpbnB1dC5zbGljZSgwLCAzKS5qb2luKFwiXCIpLCAyKTtcbiAgICBsZXQgdHlwZUlEID0gcGFyc2VJbnQoaW5wdXQuc2xpY2UoMywgNikuam9pbihcIlwiKSwgMik7XG4gICAgaW5wdXQuc3BsaWNlKDAsIDYpO1xuXG4gICAgLy8gTGl0ZXJhbCB2YWx1ZVxuICAgIGlmICh0eXBlSUQgPT09IDQpIHtcbiAgICAgICAgY29uc3QgYml0QXJyID0gW11cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGJpdEFyci5wdXNoKGlucHV0LnNsaWNlKDEsIDUpLmpvaW4oXCJcIikpXG4gICAgICAgICAgICBpZiAoaW5wdXRbMF0gPT09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuc3BsaWNlKDAsIDUpO1xuICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt2ZXJzaW9uLCB0eXBlSUQsIGJpbkxlbmd0aDogKGJpdEFyci5sZW5ndGggKiA1KSArIDYsIHBheWxvYWQ6IHBhcnNlSW50KGJpdEFyci5qb2luKFwiXCIpLCAyKX1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQuc3BsaWNlKDAsIDUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3BlcmF0b3IgcGFja2V0XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aFR5cGVJRCA9IGlucHV0LnNoaWZ0KCk7XG4gICAgICAgIGlmIChsZW5ndGhUeXBlSUQgPT09IFwiMFwiKSB7XG4gICAgICAgICAgICBsZXQgc3ViUGFja0Jpbkxlbmd0aCA9IHBhcnNlSW50KGlucHV0LnNwbGljZSgwLCAxNSkuam9pbihcIlwiKSwgMik7XG4gICAgICAgICAgICBjb25zdCBwYWNrZXRBcnIgPSBbXVxuXG4gICAgICAgICAgICB3aGlsZSAoc3ViUGFja0Jpbkxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcGFyc2VCaW4oaW5wdXQuc2xpY2UoMCwgc3ViUGFja0Jpbkxlbmd0aCkuam9pbihcIlwiKSlcbiAgICAgICAgICAgICAgICBwYWNrZXRBcnIucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHN1YlBhY2tCaW5MZW5ndGggLT0gcmVzdWx0LmJpbkxlbmd0aDtcbiAgICAgICAgICAgICAgICBpbnB1dC5zcGxpY2UoMCwgcmVzdWx0LmJpbkxlbmd0aClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJpbkxlbmd0aCA9IHBhY2tldEFyci5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLmJpbkxlbmd0aCwgMCkgKyAyMjtcblxuICAgICAgICAgICAgcmV0dXJuIHt2ZXJzaW9uLCB0eXBlSUQsIGNoaWxkcmVuOiBwYWNrZXRBcnIsIGJpbkxlbmd0aH1cblxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBudW1iZXJPZlN1YlBhY2tldHMgPSBwYXJzZUludChpbnB1dC5zcGxpY2UoMCwgMTEpLmpvaW4oXCJcIiksIDIpO1xuICAgICAgICAgICAgY29uc3QgcGFja2V0QXJyID0gW11cblxuICAgICAgICAgICAgd2hpbGUgKG51bWJlck9mU3ViUGFja2V0cyA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcGFyc2VCaW4oaW5wdXQuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc3BsaWNlKDAsIHJlc3VsdC5iaW5MZW5ndGgpO1xuICAgICAgICAgICAgICAgIHBhY2tldEFyci5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZTdWJQYWNrZXRzLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBiaW5MZW5ndGggPSBwYWNrZXRBcnIucmVkdWNlKChhLCBiKSA9PiBhICsgYi5iaW5MZW5ndGgsIDApICsgMTg7XG5cbiAgICAgICAgICAgIHJldHVybiB7dmVyc2lvbiwgdHlwZUlELCBjaGlsZHJlbjogcGFja2V0QXJyLCBiaW5MZW5ndGh9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cbnBhcnNlQmluKGJpbklucHV0KTtcblxuY29uc29sZS5sb2coXCJvdXRwdXQ6XCIsIHBhcnNlQmluKGJpbklucHV0KSk7XG5cbi8vIGNvbnN0IHZlcnNpb25TdW0gPSBvdXRwdXQucmVkdWNlKChwOm51bWJlciwgYzpQYWNrZXQpID0+IGMudmVyc2lvbiArIHAsIDApXG4vLyBjb25zb2xlLmxvZyhcInZlcnNpb25TdW06XCIsIHZlcnNpb25TdW0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==