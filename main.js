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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContact() {\n    const contentDiv = document.getElementById('content');\n\n    const contactDiv = document.createElement('div');\n    contactDiv.className = 'contact-div';\n    contactDiv.innerText = `if you have any issue please do not hesitate to call...\n    you may call Mr. Chef directly...\n    PHONE: 666-666-6666\n    or you may email Mr. Chef....\n    EMAIL: iamthechef@chefmail.com\n    please visit our restaurant....\n    located in **********\n`\n    contentDiv.appendChild(contactDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\n    const contentDiv = document.getElementById('content');\n\n    const homeHeroText = document.createElement('div');\n    homeHeroText.className = 'home-hero-text'; \n    homeHeroText.innerText = 'OH MY GOD, WHY IS THIS SO DELICIOUS?';\n\n    const homeImg = document.createElement('img');\n    homeImg.className = 'home-img';\n    homeImg.src = '../src/food.jpg';\n    homeImg.alt = 'Sauce being spooned over a salmon cutlet';\n\n    const homeMainText = document.createElement('div');\n    homeMainText.className = 'home-main-text';\n    homeMainText.innerText = `are u ready? to eat? prepare... your body... your mind... \n    u never had food this good. EAT PRAY LOVE AND EAT AGAIN.`;\n\n    contentDiv.appendChild(homeHeroText);\n    contentDiv.appendChild(homeImg);\n    contentDiv.appendChild(homeMainText);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst homeTab = document.createElement('button');\nconst menuTab = document.createElement('button');\nconst contactTab = document.createElement('button');\nconst contentDiv = document.getElementById('content');\n\nfunction createHeader() {\n    const docBody = document.querySelector('body');\n\n    const header = document.createElement('header');\n    header.className = 'header';\n\n    homeTab.className = 'home-tab';\n    homeTab.innerText = 'home';\n\n    menuTab.className = 'menu-tab';\n    menuTab.innerText = 'menu';\n\n    contactTab.className = 'contact-tab';\n    contactTab.innerText = 'contact';\n\n    header.appendChild(homeTab);\n    header.appendChild(menuTab);\n    header.appendChild(contactTab);\n    docBody.prepend(header);\n}\n\nfunction switchTab() {\n    contentDiv.innerHTML = '';\n    if (this === menuTab) {\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    } else if (this === contactTab) {\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    } else {\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    }\n}\n\nhomeTab.addEventListener('click', switchTab);\nmenuTab.addEventListener('click', switchTab);\ncontactTab.addEventListener('click', switchTab);\n\ncreateHeader();\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu() {\n    const contentDiv = document.getElementById('content');\n\n    const menuList = document.createElement('ul');\n    menuList.className = 'menu-list'; \n\n    const menuItem1 = document.createElement('li');\n    menuItem1.className = 'menu-items';\n    menuItem1.innerText = `mystery pizzaaaa\n    we can't tell u the ingredients... good luck`;\n\n    const menuItem2 = document.createElement('li');\n    menuItem2.className = 'menu-items';\n    menuItem2.innerText = `saucy serpents\n    succulent serpentine snacks... suggest... satisfied slurping...`;\n\n    const menuItem3 = document.createElement('li');\n    menuItem3.className = 'menu-items';\n    menuItem3.innerText = `mug-o-glug\n    GLUG GLUG GLUG GLUG GLUG`;\n\n    menuList.appendChild(menuItem1);\n    menuList.appendChild(menuItem2);\n    menuList.appendChild(menuItem3);\n    contentDiv.appendChild(menuList);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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