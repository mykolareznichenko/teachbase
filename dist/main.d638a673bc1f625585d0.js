/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chess/Board.js":
/*!****************************!*\
  !*** ./src/chess/Board.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpFunction_initialiseChessBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpFunction/initialiseChessBoard */ \"./src/helpFunction/initialiseChessBoard.js\");\n\n\nclass Board {\n   constructor() {\n      this.squares = (0,_helpFunction_initialiseChessBoard__WEBPACK_IMPORTED_MODULE_0__.default)()\n   }\n\n   getBoardState() {\n      console.log(this.squares)\n   }\n\n   makeMove(start, end) {\n      this.checkMove(start)\n      this.checkMove(end)\n      this.getBoardState()\n   }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n//# sourceURL=webpack://teachbase/./src/chess/Board.js?");

/***/ }),

/***/ "./src/chess/Game.js":
/*!***************************!*\
  !*** ./src/chess/Game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/chess/Board.js\");\n\n\nclass Game extends _Board__WEBPACK_IMPORTED_MODULE_0__.default {\n   constructor() {\n      super()\n      this.state = {\n         whiteFallenSoldiers: [],\n         blackFallenSoldiers: [],\n         player: 1,\n         sourceSelection: -1,\n         turn: 'white'\n      }\n   }\n\n   checkMove(i) {\n      const squares = this.squares.slice();\n\n      if (this.state.sourceSelection === -1) {\n         if (!squares[i] || squares[i].player !== this.state.player) {\n            console.log(\"Wrong selection. Choose player \" + this.state.player + \" pieces.\")\n         }\n         else {\n            console.log(\"Choose destination for the selected piece\")\n            this.state.sourceSelection = i\n         }\n      }\n\n      else if (this.state.sourceSelection > -1) {\n         if (squares[i] && squares[i].player === this.state.player) {\n            console.log(\"Wrong selection. Choose valid source and destination again.\")\n            this.state.sourceSelection = -1\n         }\n         else {\n\n            const squares = this.squares.slice();\n            const whiteFallenSoldiers = this.state.whiteFallenSoldiers.slice();\n            const blackFallenSoldiers = this.state.blackFallenSoldiers.slice();\n            const isDestEnemyOccupied = squares[i] ? true : false;\n            const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i, isDestEnemyOccupied);\n            const srcToDestPath = squares[this.state.sourceSelection].getSrcToDestPath(this.state.sourceSelection, i);\n            const isMoveLegal = this.isMoveLegal(srcToDestPath);\n\n            if (isMovePossible && isMoveLegal) {\n               if (squares[i] !== null) {\n                  if (squares[i].player === 1) {\n                     whiteFallenSoldiers.push(squares[i]);\n                  }\n                  else {\n                     blackFallenSoldiers.push(squares[i]);\n                  }\n               }\n               console.log(\"Moved!!!\")\n               squares[i] = squares[this.state.sourceSelection];\n               squares[this.state.sourceSelection] = null;\n               let player = this.state.player === 1 ? 2 : 1;\n               let turn = this.state.turn === 'white' ? 'black' : 'white';\n               this.state = {\n                  sourceSelection: -1,\n                  whiteFallenSoldiers: whiteFallenSoldiers,\n                  blackFallenSoldiers: blackFallenSoldiers,\n                  player: player,\n                  turn: turn\n               }\n               this.squares = squares\n            }\n            else {\n               console.log(\"Wrong selection. Choose valid source and destination again.\")\n               this.state.sourceSelection = -1\n            }\n         }\n      }\n   }\n\n   isMoveLegal(srcToDestPath) {\n      let isLegal = true;\n      for (let i = 0; i < srcToDestPath.length; i++) {\n         if (this.squares[srcToDestPath[i]] !== null) {\n            isLegal = false;\n         }\n      }\n      return isLegal;\n   }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://teachbase/./src/chess/Game.js?");

/***/ }),

/***/ "./src/helpFunction/initialiseChessBoard.js":
/*!**************************************************!*\
  !*** ./src/helpFunction/initialiseChessBoard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pieces_Pawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces/Pawn */ \"./src/pieces/Pawn.js\");\n/* harmony import */ var _pieces_Rook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pieces/Rook */ \"./src/pieces/Rook.js\");\n/* harmony import */ var _pieces_Knight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pieces/Knight */ \"./src/pieces/Knight.js\");\n/* harmony import */ var _pieces_Bishop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pieces/Bishop */ \"./src/pieces/Bishop.js\");\n/* harmony import */ var _pieces_Queen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pieces/Queen */ \"./src/pieces/Queen.js\");\n/* harmony import */ var _pieces_King__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pieces/King */ \"./src/pieces/King.js\");\n\n\n\n\n\n\n\n\nfunction initialiseChessBoard() {\n   const squares = Array(64).fill(null);\n\n   for (let i = 8; i < 16; i++) {\n      squares[i] = new _pieces_Pawn__WEBPACK_IMPORTED_MODULE_0__.default(2);\n      squares[i + 40] = new _pieces_Pawn__WEBPACK_IMPORTED_MODULE_0__.default(1);\n   }\n   squares[0] = new _pieces_Rook__WEBPACK_IMPORTED_MODULE_1__.default(2);\n   squares[7] = new _pieces_Rook__WEBPACK_IMPORTED_MODULE_1__.default(2);\n   squares[56] = new _pieces_Rook__WEBPACK_IMPORTED_MODULE_1__.default(1);\n   squares[63] = new _pieces_Rook__WEBPACK_IMPORTED_MODULE_1__.default(1);\n\n   squares[1] = new _pieces_Knight__WEBPACK_IMPORTED_MODULE_2__.default(2);\n   squares[6] = new _pieces_Knight__WEBPACK_IMPORTED_MODULE_2__.default(2);\n   squares[57] = new _pieces_Knight__WEBPACK_IMPORTED_MODULE_2__.default(1);\n   squares[62] = new _pieces_Knight__WEBPACK_IMPORTED_MODULE_2__.default(1);\n\n   squares[2] = new _pieces_Bishop__WEBPACK_IMPORTED_MODULE_3__.default(2);\n   squares[5] = new _pieces_Bishop__WEBPACK_IMPORTED_MODULE_3__.default(2);\n   squares[58] = new _pieces_Bishop__WEBPACK_IMPORTED_MODULE_3__.default(1);\n   squares[61] = new _pieces_Bishop__WEBPACK_IMPORTED_MODULE_3__.default(1);\n\n   squares[3] = new _pieces_Queen__WEBPACK_IMPORTED_MODULE_4__.default(2);\n   squares[4] = new _pieces_King__WEBPACK_IMPORTED_MODULE_5__.default(2);\n\n   squares[59] = new _pieces_Queen__WEBPACK_IMPORTED_MODULE_4__.default(1);\n   squares[60] = new _pieces_King__WEBPACK_IMPORTED_MODULE_5__.default(1);\n\n   return squares;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialiseChessBoard);\n\n//# sourceURL=webpack://teachbase/./src/helpFunction/initialiseChessBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chess_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chess/Game */ \"./src/chess/Game.js\");\n\n\nconst newGame = new _chess_Game__WEBPACK_IMPORTED_MODULE_0__.default()\nnewGame.makeMove(52, 36)\nnewGame.makeMove(12, 28)\nnewGame.makeMove(61, 34)\nnewGame.makeMove(8, 16)\nnewGame.makeMove(59, 45)\nnewGame.makeMove(16, 24)\nnewGame.makeMove(45, 13)\nnewGame.makeMove(24, 32)\n\n//# sourceURL=webpack://teachbase/./src/index.js?");

/***/ }),

/***/ "./src/pieces/Bishop.js":
/*!******************************!*\
  !*** ./src/pieces/Bishop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ \"./src/pieces/Piece.js\");\n\n\nclass Bishop extends _Piece__WEBPACK_IMPORTED_MODULE_0__.default {\n   constructor(player) {\n      super(player);\n   }\n\n   isMovePossible(src, dest) {\n      return (Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0);\n   }\n\n   getSrcToDestPath(src, dest) {\n      let path = [], pathStart, pathEnd, incrementBy;\n      if (src > dest) {\n         pathStart = dest;\n         pathEnd = src;\n      }\n      else {\n         pathStart = src;\n         pathEnd = dest;\n      }\n      if (Math.abs(src - dest) % 9 === 0) {\n         incrementBy = 9;\n         pathStart += 9;\n      }\n      else {\n         incrementBy = 7;\n         pathStart += 7;\n      }\n\n      for (let i = pathStart; i < pathEnd; i += incrementBy) {\n         path.push(i);\n      }\n      return path;\n   }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bishop);\n\n//# sourceURL=webpack://teachbase/./src/pieces/Bishop.js?");

/***/ }),

/***/ "./src/pieces/King.js":
/*!****************************!*\
  !*** ./src/pieces/King.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ \"./src/pieces/Piece.js\");\n\n\nclass King extends _Piece__WEBPACK_IMPORTED_MODULE_0__.default {\n   constructor(player) {\n      super(player);\n   }\n\n   isMovePossible(src, dest) {\n      return (src - 9 === dest ||\n         src - 8 === dest ||\n         src - 7 === dest ||\n         src + 1 === dest ||\n         src + 9 === dest ||\n         src + 8 === dest ||\n         src + 7 === dest ||\n         src - 1 === dest);\n   }\n\n   getSrcToDestPath(src, dest) {\n      return [];\n   }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (King);\n\n//# sourceURL=webpack://teachbase/./src/pieces/King.js?");

/***/ }),

/***/ "./src/pieces/Knight.js":
/*!******************************!*\
  !*** ./src/pieces/Knight.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ \"./src/pieces/Piece.js\");\n\n\nclass Knight extends _Piece__WEBPACK_IMPORTED_MODULE_0__.default {\n   constructor(player) {\n      super(player);\n   }\n\n   isMovePossible(src, dest) {\n      return (src - 17 === dest ||\n         src - 10 === dest ||\n         src + 6 === dest ||\n         src + 15 === dest ||\n         src - 15 === dest ||\n         src - 6 === dest ||\n         src + 10 === dest ||\n         src + 17 === dest);\n   }\n\n   getSrcToDestPath() {\n      return [];\n   }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Knight);\n\n//# sourceURL=webpack://teachbase/./src/pieces/Knight.js?");

/***/ }),

/***/ "./src/pieces/Pawn.js":
/*!****************************!*\
  !*** ./src/pieces/Pawn.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ \"./src/pieces/Piece.js\");\n\n\nclass Pawn extends _Piece__WEBPACK_IMPORTED_MODULE_0__.default {\n   constructor(player) {\n      super(player);\n      this.initialPositions = {\n         1: [48, 49, 50, 51, 52, 53, 54, 55],\n         2: [8, 9, 10, 11, 12, 13, 14, 15]\n      }\n   }\n\n   isMovePossible(src, dest, isDestEnemyOccupied) {\n\n      if (this.player === 1) {\n         if ((dest === src - 8 && !isDestEnemyOccupied) || (dest === src - 16 && this.initialPositions[1].indexOf(src) !== -1)) {\n            return true;\n         }\n         else if (isDestEnemyOccupied && (dest === src - 9 || dest === src - 7)) {\n            return true;\n         }\n      }\n      else if (this.player === 2) {\n         if ((dest === src + 8 && !isDestEnemyOccupied) || (dest === src + 16 && this.initialPositions[2].indexOf(src) !== -1)) {\n            return true;\n         }\n         else if (isDestEnemyOccupied && (dest === src + 9 || dest === src + 7)) {\n            return true;\n         }\n      }\n      return false;\n   }\n\n   getSrcToDestPath(src, dest) {\n      if (dest === src - 16) {\n         return [src - 8];\n      }\n      else if (dest === src + 16) {\n         return [src + 8];\n      }\n      return [];\n   }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pawn);\n\n//# sourceURL=webpack://teachbase/./src/pieces/Pawn.js?");

/***/ }),

/***/ "./src/pieces/Piece.js":
/*!*****************************!*\
  !*** ./src/pieces/Piece.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Piece {\n   constructor(player) {\n      this.player = player;\n   }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Piece);\n\n//# sourceURL=webpack://teachbase/./src/pieces/Piece.js?");

/***/ }),

/***/ "./src/pieces/Queen.js":
/*!*****************************!*\
  !*** ./src/pieces/Queen.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ \"./src/pieces/Piece.js\");\n\n\nclass Queen extends _Piece__WEBPACK_IMPORTED_MODULE_0__.default {\n   constructor(player) {\n      super(player);\n   }\n\n   isMovePossible(src, dest) {\n      let mod = src % 8;\n      let diff = 8 - mod;\n\n      return (Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0) ||\n         (Math.abs(src - dest) % 8 === 0 || (dest >= (src - mod) && dest < (src + diff)));\n   }\n\n   getSrcToDestPath(src, dest) {\n      let path = [], pathStart, pathEnd, incrementBy;\n      if (src > dest) {\n         pathStart = dest;\n         pathEnd = src;\n      }\n      else {\n         pathStart = src;\n         pathEnd = dest;\n      }\n      if (Math.abs(src - dest) % 8 === 0) {\n         incrementBy = 8;\n         pathStart += 8;\n      }\n      else if (Math.abs(src - dest) % 9 === 0) {\n         incrementBy = 9;\n         pathStart += 9;\n      }\n      else if (Math.abs(src - dest) % 7 === 0) {\n         incrementBy = 7;\n         pathStart += 7;\n      }\n      else {\n         incrementBy = 1;\n         pathStart += 1;\n      }\n\n      for (let i = pathStart; i < pathEnd; i += incrementBy) {\n         path.push(i);\n      }\n      return path;\n   }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Queen);\n\n//# sourceURL=webpack://teachbase/./src/pieces/Queen.js?");

/***/ }),

/***/ "./src/pieces/Rook.js":
/*!****************************!*\
  !*** ./src/pieces/Rook.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ \"./src/pieces/Piece.js\");\n\n\nclass Rook extends _Piece__WEBPACK_IMPORTED_MODULE_0__.default {\n   constructor(player) {\n      super(player);\n   }\n\n   isMovePossible(src, dest) {\n      let mod = src % 8;\n      let diff = 8 - mod;\n      return (Math.abs(src - dest) % 8 === 0 || (dest >= (src - mod) && dest < (src + diff)));\n   }\n\n   getSrcToDestPath(src, dest) {\n      let path = [], pathStart, pathEnd, incrementBy;\n      if (src > dest) {\n         pathStart = dest;\n         pathEnd = src;\n      }\n      else {\n         pathStart = src;\n         pathEnd = dest;\n      }\n      if (Math.abs(src - dest) % 8 === 0) {\n         incrementBy = 8;\n         pathStart += 8;\n      }\n      else {\n         incrementBy = 1;\n         pathStart += 1;\n      }\n\n      for (let i = pathStart; i < pathEnd; i += incrementBy) {\n         path.push(i);\n      }\n      return path;\n   }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rook);\n\n//# sourceURL=webpack://teachbase/./src/pieces/Rook.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;