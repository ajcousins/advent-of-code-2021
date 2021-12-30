/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/day18/input_test.txt":
/*!**********************************!*\
  !*** ./src/day18/input_test.txt ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("");

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
  !*** ./src/day18/01.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
var text = __webpack_require__(/*! ./input_test.txt */ "./src/day18/input_test.txt");
console.log("Day 18");
var Node = /** @class */ (function () {
    function Node() {
        this.val = null;
        this.left = null;
        this.right = null;
    }
    return Node;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree(start) {
        this.root = null;
        this.startString = start;
        this.initiate(start);
    }
    BinaryTree.prototype.initiate = function (start) {
        console.log("Start here:", start);
        var cmds = start.split("");
        console.log(cmds);
        var root = new Node();
        this.root = root;
        for (var i = 0; i < cmds.length; i++) {
            if (cmds[i] === "[") {
                this.pushLeft(cmds.slice(i + 1), root.left);
            }
        }
    };
    BinaryTree.prototype.pushLeft = function (cmds, node) {
        console.log("pushLeft:", cmds);
        node = new Node();
        // left.left = newLeft;
        if (cmds[0] === "[") {
            this.pushLeft(cmds.slice(1), node);
        }
        else if (cmds[0] === "]") {
            // TO DO
        }
        else if (cmds[0] === ",") {
            // TO DO
        }
        else {
            // IS NUMBER
            console.log("Here", cmds[0]);
            node.val = Number(cmds[0]);
            console.log(node);
        }
    };
    return BinaryTree;
}());
// const firstTree = new BinaryTree();
// firstTree.root = new Node(null);
// firstTree.root.left = new Node(1);
// firstTree.root.right = new Node(2);
// console.log("firstTree:", firstTree);
var secondTree = new BinaryTree("[1,2]");
console.log("secondTree:", secondTree);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFFRCxzQ0FBc0M7QUFDdEMsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEMsd0NBQXdDO0FBRXhDLElBQU0sVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS8uL3NyYy9kYXkxOC9pbnB1dF90ZXN0LnR4dCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FkdmVudDIwMjEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hZHZlbnQyMDIxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWR2ZW50MjAyMS8uL3NyYy9kYXkxOC8wMS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIlwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgdGV4dCA9IHJlcXVpcmUoJy4vaW5wdXRfdGVzdC50eHQnKTtcbmV4cG9ydCB7fVxuXG5jb25zb2xlLmxvZyhcIkRheSAxOFwiKTtcblxuaW50ZXJmYWNlIE5vZGUge1xuICAgIHZhbDogbnVtYmVyIHwgbnVsbDtcbiAgICBsZWZ0OiBOb2RlO1xuICAgIHJpZ2h0OiBOb2RlO1xufVxuXG5pbnRlcmZhY2UgQmluYXJ5VHJlZSB7XG4gICAgcm9vdDogTm9kZTtcbiAgICBzdGFydFN0cmluZzogc3RyaW5nO1xufVxuXG5jbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52YWwgPSBudWxsO1xuICAgICAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIEJpbmFyeVRyZWUge1xuICAgIGNvbnN0cnVjdG9yKHN0YXJ0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yb290ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydFN0cmluZyA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmluaXRpYXRlKHN0YXJ0KTtcbiAgICB9XG4gICAgaW5pdGlhdGUoc3RhcnQ6IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0IGhlcmU6XCIsIHN0YXJ0KTtcbiAgICAgICAgY29uc3QgY21kcyA9IHN0YXJ0LnNwbGl0KFwiXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhjbWRzKTtcbiAgICAgICAgY29uc3Qgcm9vdCA9IG5ldyBOb2RlKCk7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3RcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY21kc1tpXSA9PT0gXCJbXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hMZWZ0KGNtZHMuc2xpY2UoaSArIDEpLCByb290LmxlZnQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVzaExlZnQoY21kczogc3RyaW5nW10sIG5vZGU6IE5vZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwdXNoTGVmdDpcIiwgY21kcyk7XG4gICAgICAgIG5vZGUgPSBuZXcgTm9kZSgpO1xuICAgICAgICAvLyBsZWZ0LmxlZnQgPSBuZXdMZWZ0O1xuICAgICAgICBpZiAoY21kc1swXSA9PT0gXCJbXCIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wdXNoTGVmdChjbWRzLnNsaWNlKDEpLCBub2RlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNtZHNbMF0gPT09IFwiXVwiKSB7XG4gICAgICAgICAgICAvLyBUTyBET1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNtZHNbMF0gPT09IFwiLFwiKSB7XG4gICAgICAgICAgICAvLyBUTyBET1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSVMgTlVNQkVSXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhlcmVcIiwgY21kc1swXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5vZGUudmFsID0gTnVtYmVyKGNtZHNbMF0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gY29uc3QgZmlyc3RUcmVlID0gbmV3IEJpbmFyeVRyZWUoKTtcbi8vIGZpcnN0VHJlZS5yb290ID0gbmV3IE5vZGUobnVsbCk7XG4vLyBmaXJzdFRyZWUucm9vdC5sZWZ0ID0gbmV3IE5vZGUoMSk7XG4vLyBmaXJzdFRyZWUucm9vdC5yaWdodCA9IG5ldyBOb2RlKDIpO1xuLy8gY29uc29sZS5sb2coXCJmaXJzdFRyZWU6XCIsIGZpcnN0VHJlZSk7XG5cbmNvbnN0IHNlY29uZFRyZWUgPSBuZXcgQmluYXJ5VHJlZShcIlsxLDJdXCIpO1xuXG5jb25zb2xlLmxvZyhcInNlY29uZFRyZWU6XCIsIHNlY29uZFRyZWUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9