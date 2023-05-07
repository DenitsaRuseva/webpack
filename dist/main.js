/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let data = [\r\n    {\r\n        \"id\": 1560865205317,\r\n        \"text\": \"Buy eggs\",\r\n        \"completed\": false\r\n    },\r\n    {\r\n        \"id\": 1560865205318,\r\n        \"text\": \"Do 15 min exercise\",\r\n        \"completed\": false\r\n    }\r\n]\r\n\r\nfunction getAllTodos() {\r\n    return data\r\n}\r\n\r\nfunction addTodo(todo) {\r\n    data.push(todo)\r\n}\r\n\r\nfunction removeTodo(id) {\r\n    data = data.filter(function (item) {\r\n        return item.id !== id\r\n    })\r\n}\r\n\r\nfunction updateTodo(id, completed) {\r\n    const itemIndex = data.findIndex(function (value) {\r\n        return value.id === id\r\n    })\r\n    data[itemIndex].completed = completed\r\n}\r\n\r\nfunction renderTodos(todos) {\r\n    const renderedItemArray = todos.map(function (todo) {\r\n        const className = todo.completed ? 'completed' : ''\r\n        const completionClass = todo.completed ? 'checked' : ''\r\n        return `\r\n            <li data-id=\"${todo.id}\" class=\"${className}\">\r\n                <span class=\"custom-checkbox\">\r\n                    <img class=\"check\" src=\"./images/checkmark.svg\" width=\"22\" height=\"22\"></img>\r\n                    <input class=\"real-checkbox\" type=\"checkbox\" ${completionClass} />\r\n                </span>\r\n                <label>${todo.text}</label>\r\n                <span class=\"delete\"></span>\r\n            </li>\r\n        `\r\n    })\r\n    document.querySelector('.todo-list').innerHTML = renderedItemArray.join('')\r\n}\r\n\r\nfunction clearNewTodoInput() {\r\n    document.querySelector('.new-todo').value = ''\r\n}\r\n\r\nfunction getTodoId(element) {\r\n    return parseInt(\r\n        element.dataset.id\r\n        || element.parentNode.dataset.id\r\n        || element.parentNode.parentNode.dataset.id\r\n    , 10)\r\n}\r\n\r\nfunction onLoadEventHandler() {\r\n    renderTodos(getAllTodos())\r\n}\r\n\r\nfunction newTodoEventHandler(event) {\r\n    let text = event.target.value\r\n    addTodo({\r\n        id: Date.now(),\r\n        text: text,\r\n        completed: false\r\n    })\r\n    renderTodos(getAllTodos())\r\n    clearNewTodoInput()\r\n}\r\n\r\nfunction removeTodoEventHandler(event) {\r\n    const id = getTodoId(event.target)\r\n    removeTodo(id)\r\n    renderTodos(getAllTodos())\r\n}\r\n\r\nfunction toggleTodoEventListener(event) {\r\n    const id = getTodoId(event.target)\r\n    const isCompleted = event.target.checked\r\n    updateTodo(id, isCompleted)\r\n    renderTodos(getAllTodos())\r\n}\r\n\r\nwindow.addEventListener('load', onLoadEventHandler)\r\ndocument.addEventListener('change', function (event) {\r\n    if (event.target.classList.contains('new-todo')) {\r\n        newTodoEventHandler(event)\r\n    }\r\n})\r\ndocument.addEventListener('click', function (event) {\r\n    if (event.target.classList.contains('delete')) {\r\n        removeTodoEventHandler(event)\r\n    }\r\n    if (event.target.classList.contains('real-checkbox')) {\r\n        toggleTodoEventListener(event)\r\n    }\r\n})\n\n//# sourceURL=webpack://3-setting-up-application/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;