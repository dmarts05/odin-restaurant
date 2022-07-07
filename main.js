/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create-element.js":
/*!*******************************!*\
  !*** ./src/create-element.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createElement(type, elemText, elemId, ...elemClasses) {
  const elem = document.createElement(`${type}`);

  elem.textContent = elemText;

  if (elemId !== '') {
    elem.id = elemId;
  }

  elemClasses.forEach((elemClass) => {
    if (elemClass !== '') {
      elem.classList.add(elemClass);
    }
  });

  return elem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);


/***/ }),

/***/ "./src/home-tab.js":
/*!*************************!*\
  !*** ./src/home-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./src/create-element.js");


function createHomeTab() {
  const homeCard = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', '', 'home-card');

  const homeCardImg = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('img', '', '', 'home-card-img');
  homeCardImg.src = 'img/chef.jpg';

  const homeCardText = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', '', 'home-card-text');
  const homeCardTitle = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'WE HAVE THE BEST CHEFS!', '');
  const homeCardParagraph = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    'p',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sequi odit, numquam labore modi incidunt consectetur saepe.',
    ''
  );

  homeCardText.appendChild(homeCardTitle);
  homeCardText.appendChild(homeCardParagraph);

  homeCard.appendChild(homeCardImg);
  homeCard.appendChild(homeCardText);

  return homeCard;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomeTab);


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./src/create-element.js");


function createNavBar() {
  const navBar = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('nav', '', '');

  const logoWrapper = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', '', 'logo-wrapper');
  const logoImg = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('img', '', '', 'logo-img');
  logoImg.src = 'img/logo.png';
  const logoTitle = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', 'RESTAURANT', '');

  logoWrapper.appendChild(logoImg);
  logoWrapper.appendChild(logoTitle);

  const navMenu = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('ul', '', '', 'nav-menu');
  const homeLink = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('li', '', '', 'active');
  homeLink.appendChild((0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'HOME', 'home-link'));
  const menuLink = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('li', '', '');
  menuLink.appendChild((0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'MENU', 'menu-link'));
  const contactLink = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('li', '', '');
  contactLink.appendChild((0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'CONTACT', 'contact-link'));

  navMenu.appendChild(homeLink);
  navMenu.appendChild(menuLink);
  navMenu.appendChild(contactLink);

  navBar.appendChild(logoWrapper);
  navBar.appendChild(navMenu);

  return navBar;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavBar);

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./src/create-element.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _home_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-tab */ "./src/home-tab.js");




function loadPage() {
  const content = document.getElementById('content');

  content.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])());

  const main = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('main', '', '');
  main.appendChild((0,_home_tab__WEBPACK_IMPORTED_MODULE_2__["default"])());

  content.appendChild(main);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");


(0,_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EseUNBQXlDLEtBQUs7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmdCOztBQUU3QztBQUNBLG1CQUFtQiwyREFBYTs7QUFFaEMsc0JBQXNCLDJEQUFhO0FBQ25DOztBQUVBLHVCQUF1QiwyREFBYTtBQUNwQyx3QkFBd0IsMkRBQWE7QUFDckMsNEJBQTRCLDJEQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZ0I7O0FBRTdDO0FBQ0EsaUJBQWlCLDJEQUFhOztBQUU5QixzQkFBc0IsMkRBQWE7QUFDbkMsa0JBQWtCLDJEQUFhO0FBQy9CO0FBQ0Esb0JBQW9CLDJEQUFhOztBQUVqQztBQUNBOztBQUVBLGtCQUFrQiwyREFBYTtBQUMvQixtQkFBbUIsMkRBQWE7QUFDaEMsdUJBQXVCLDJEQUFhO0FBQ3BDLG1CQUFtQiwyREFBYTtBQUNoQyx1QkFBdUIsMkRBQWE7QUFDcEMsc0JBQXNCLDJEQUFhO0FBQ25DLDBCQUEwQiwyREFBYTs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9Ca0I7QUFDVDtBQUNHOztBQUV2QztBQUNBOztBQUVBLHNCQUFzQixtREFBWTs7QUFFbEMsZUFBZSwyREFBYTtBQUM1QixtQkFBbUIscURBQWE7O0FBRWhDO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDZnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUM7O0FBRW5DLHNEQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWUtdGFiLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBlbGVtVGV4dCwgZWxlbUlkLCAuLi5lbGVtQ2xhc3Nlcykge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuXG4gIGVsZW0udGV4dENvbnRlbnQgPSBlbGVtVGV4dDtcblxuICBpZiAoZWxlbUlkICE9PSAnJykge1xuICAgIGVsZW0uaWQgPSBlbGVtSWQ7XG4gIH1cblxuICBlbGVtQ2xhc3Nlcy5mb3JFYWNoKChlbGVtQ2xhc3MpID0+IHtcbiAgICBpZiAoZWxlbUNsYXNzICE9PSAnJykge1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGVsZW1DbGFzcyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lVGFiKCkge1xuICBjb25zdCBob21lQ2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnLCAnJywgJ2hvbWUtY2FyZCcpO1xuXG4gIGNvbnN0IGhvbWVDYXJkSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsICcnLCAnaG9tZS1jYXJkLWltZycpO1xuICBob21lQ2FyZEltZy5zcmMgPSAnaW1nL2NoZWYuanBnJztcblxuICBjb25zdCBob21lQ2FyZFRleHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnJywgJycsICdob21lLWNhcmQtdGV4dCcpO1xuICBjb25zdCBob21lQ2FyZFRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCAnV0UgSEFWRSBUSEUgQkVTVCBDSEVGUyEnLCAnJyk7XG4gIGNvbnN0IGhvbWVDYXJkUGFyYWdyYXBoID0gY3JlYXRlRWxlbWVudChcbiAgICAncCcsXG4gICAgJ0xvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdW9zIHNlcXVpIG9kaXQsIG51bXF1YW0gbGFib3JlIG1vZGkgaW5jaWR1bnQgY29uc2VjdGV0dXIgc2FlcGUuJyxcbiAgICAnJ1xuICApO1xuXG4gIGhvbWVDYXJkVGV4dC5hcHBlbmRDaGlsZChob21lQ2FyZFRpdGxlKTtcbiAgaG9tZUNhcmRUZXh0LmFwcGVuZENoaWxkKGhvbWVDYXJkUGFyYWdyYXBoKTtcblxuICBob21lQ2FyZC5hcHBlbmRDaGlsZChob21lQ2FyZEltZyk7XG4gIGhvbWVDYXJkLmFwcGVuZENoaWxkKGhvbWVDYXJkVGV4dCk7XG5cbiAgcmV0dXJuIGhvbWVDYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lVGFiO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlLWVsZW1lbnRcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuICBjb25zdCBuYXZCYXIgPSBjcmVhdGVFbGVtZW50KCduYXYnLCAnJywgJycpO1xuXG4gIGNvbnN0IGxvZ29XcmFwcGVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsICcnLCAnbG9nby13cmFwcGVyJyk7XG4gIGNvbnN0IGxvZ29JbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnJywgJycsICdsb2dvLWltZycpO1xuICBsb2dvSW1nLnNyYyA9ICdpbWcvbG9nby5wbmcnO1xuICBjb25zdCBsb2dvVGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMScsICdSRVNUQVVSQU5UJywgJycpO1xuXG4gIGxvZ29XcmFwcGVyLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuICBsb2dvV3JhcHBlci5hcHBlbmRDaGlsZChsb2dvVGl0bGUpO1xuXG4gIGNvbnN0IG5hdk1lbnUgPSBjcmVhdGVFbGVtZW50KCd1bCcsICcnLCAnJywgJ25hdi1tZW51Jyk7XG4gIGNvbnN0IGhvbWVMaW5rID0gY3JlYXRlRWxlbWVudCgnbGknLCAnJywgJycsICdhY3RpdmUnKTtcbiAgaG9tZUxpbmsuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnYScsICdIT01FJywgJ2hvbWUtbGluaycpKTtcbiAgY29uc3QgbWVudUxpbmsgPSBjcmVhdGVFbGVtZW50KCdsaScsICcnLCAnJyk7XG4gIG1lbnVMaW5rLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2EnLCAnTUVOVScsICdtZW51LWxpbmsnKSk7XG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gY3JlYXRlRWxlbWVudCgnbGknLCAnJywgJycpO1xuICBjb250YWN0TGluay5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdhJywgJ0NPTlRBQ1QnLCAnY29udGFjdC1saW5rJykpO1xuXG4gIG5hdk1lbnUuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICBuYXZNZW51LmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbiAgbmF2TWVudS5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG5cbiAgbmF2QmFyLmFwcGVuZENoaWxkKGxvZ29XcmFwcGVyKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xuXG4gIHJldHVybiBuYXZCYXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdkJhcjsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCBjcmVhdGVOYXZCYXIgZnJvbSAnLi9uYXZiYXInO1xuaW1wb3J0IGNyZWF0ZUhvbWVUYWIgZnJvbSAnLi9ob21lLXRhYic7XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhcigpKTtcblxuICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudCgnbWFpbicsICcnLCAnJyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZVRhYigpKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xuXG5sb2FkUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==