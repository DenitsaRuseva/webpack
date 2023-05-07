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

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"getAllTodos\": () => (/* binding */ getAllTodos),\n/* harmony export */   \"removeTodo\": () => (/* binding */ removeTodo),\n/* harmony export */   \"updateTodo\": () => (/* binding */ updateTodo)\n/* harmony export */ });\n/* harmony import */ var _todos_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todos.json */ \"./src/todos.json\");\n\r\n\r\nlet data = _todos_json__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\nfunction getAllTodos() {\r\n    return data\r\n}\r\n\r\nfunction addTodo(todo) {\r\n    data.push(todo)\r\n}\r\n\r\nfunction removeTodo(id) {\r\n    data = data.filter(function (item) {\r\n        return item.id !== id\r\n    })\r\n}\r\n\r\nfunction updateTodo(id, completed) {\r\n    const itemIndex = data.findIndex(function (value) {\r\n        return value.id === id\r\n    })\r\n    data[itemIndex].completed = completed\r\n}\n\n//# sourceURL=webpack://3-setting-up-application/./src/js/data.js?");

/***/ }),

/***/ "./src/js/event-handllers.js":
/*!***********************************!*\
  !*** ./src/js/event-handllers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTodoEventHandler\": () => (/* binding */ newTodoEventHandler),\n/* harmony export */   \"onLoadEventHandler\": () => (/* binding */ onLoadEventHandler),\n/* harmony export */   \"removeTodoEventHandler\": () => (/* binding */ removeTodoEventHandler),\n/* harmony export */   \"toggleTodoEventListener\": () => (/* binding */ toggleTodoEventListener)\n/* harmony export */ });\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./src/js/ui.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/js/data.js\");\n\r\n\r\n\r\nfunction onLoadEventHandler() {\r\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)())\r\n}\r\n\r\nfunction newTodoEventHandler(event) {\r\n    let text = event.target.value\r\n    ;(0,_data_js__WEBPACK_IMPORTED_MODULE_1__.addTodo)({\r\n        id: Date.now(),\r\n        text: text,\r\n        completed: false\r\n    })\r\n    ;(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)())\r\n    ;(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.clearNewTodoInput)()\r\n}\r\n\r\nfunction removeTodoEventHandler(event) {\r\n    const id = (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.getTodoId)(event.target)\r\n    ;(0,_data_js__WEBPACK_IMPORTED_MODULE_1__.removeTodo)(id)\r\n    ;(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)())\r\n}\r\n\r\nfunction toggleTodoEventListener(event) {\r\n    const id = (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.getTodoId)(event.target)\r\n    const isCompleted = event.target.checked\r\n    ;(0,_data_js__WEBPACK_IMPORTED_MODULE_1__.updateTodo)(id, isCompleted)\r\n    ;(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)())\r\n}\n\n//# sourceURL=webpack://3-setting-up-application/./src/js/event-handllers.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _event_handllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-handllers */ \"./src/js/event-handllers.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', _event_handllers__WEBPACK_IMPORTED_MODULE_0__.onLoadEventHandler)\r\ndocument.addEventListener('change', function (event) {\r\n    if (event.target.classList.contains('new-todo')) {\r\n        (0,_event_handllers__WEBPACK_IMPORTED_MODULE_0__.newTodoEventHandler)(event)\r\n    }\r\n})\r\ndocument.addEventListener('click', function (event) {\r\n    if (event.target.classList.contains('delete')) {\r\n        (0,_event_handllers__WEBPACK_IMPORTED_MODULE_0__.removeTodoEventHandler)(event)\r\n    }\r\n    if (event.target.classList.contains('real-checkbox')) {\r\n        (0,_event_handllers__WEBPACK_IMPORTED_MODULE_0__.toggleTodoEventListener)(event)\r\n    }\r\n})\n\n//# sourceURL=webpack://3-setting-up-application/./src/js/index.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearNewTodoInput\": () => (/* binding */ clearNewTodoInput),\n/* harmony export */   \"getTodoId\": () => (/* binding */ getTodoId),\n/* harmony export */   \"renderTodos\": () => (/* binding */ renderTodos)\n/* harmony export */ });\nfunction renderTodos(todos) {\r\n    const renderedItemArray = todos.map(function (todo) {\r\n        const className = todo.completed ? 'completed' : ''\r\n        const completionClass = todo.completed ? 'checked' : ''\r\n        return `\r\n            <li data-id=\"${todo.id}\" class=\"${className}\">\r\n                <span class=\"custom-checkbox\">\r\n                    <img class=\"check\" src=\"./images/checkmark.svg\" width=\"22\" height=\"22\"></img>\r\n                    <input class=\"real-checkbox\" type=\"checkbox\" ${completionClass} />\r\n                </span>\r\n                <label>${todo.text}</label>\r\n                <span class=\"delete\"></span>\r\n            </li>\r\n        `\r\n    })\r\n    document.querySelector('.todo-list').innerHTML = renderedItemArray.join('')\r\n}\r\n\r\nfunction clearNewTodoInput() {\r\n    document.querySelector('.new-todo').value = ''\r\n}\r\n\r\nfunction getTodoId(element) {\r\n    return parseInt(\r\n        element.dataset.id\r\n        || element.parentNode.dataset.id\r\n        || element.parentNode.parentNode.dataset.id\r\n    , 10)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://3-setting-up-application/./src/js/ui.js?");

/***/ }),

/***/ "./src/todos.json":
/*!************************!*\
  !*** ./src/todos.json ***!
  \************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"id\":1560865205317,\"text\":\"Buy eggs\",\"completed\":false},{\"id\":1560865205318,\"text\":\"Do 15 min exercise\",\"completed\":false}]');\n\n//# sourceURL=webpack://3-setting-up-application/./src/todos.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;