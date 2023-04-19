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

eval("const homeContentDiv = document.getElementById('content');\n\nconst homeHeroText = document.createElement('div');\nhomeHeroText.className = 'home-hero-text'; \nhomeHeroText.innerText = 'OH MY GOD, WHY IS THIS SO DELICIOUS?';\n\nconst homeImg = document.createElement('img');\nhomeImg.className = 'home-img';\nhomeImg.src = '../src/food.jpg';\nhomeImg.alt = 'Sauce being spooned over a salmon cutlet';\n\nconst homeMainText = document.createElement('div');\nhomeMainText.className = 'home-main-text';\nhomeMainText.innerText = `are u ready? to eat? prepare... your body... your mind... \nu never had food this good. EAT PRAY LOVE AND EAT AGAIN.`;\n\nhomeContentDiv.appendChild(homeHeroText);\nhomeContentDiv.appendChild(homeImg);\nhomeContentDiv.appendChild(homeMainText);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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