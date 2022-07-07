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
/* harmony import */ var _tab_switching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-switching */ "./src/tab-switching.js");





function loadPage() {
  const content = document.getElementById('content');

  content.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])());

  const main = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('main', '', '');
  main.appendChild((0,_home_tab__WEBPACK_IMPORTED_MODULE_2__["default"])());

  content.appendChild(main);

  (0,_tab_switching__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);


/***/ }),

/***/ "./src/tab-switching.js":
/*!******************************!*\
  !*** ./src/tab-switching.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-tab */ "./src/home-tab.js");


function clearTab() {
  const tab = document.querySelector('main');

  tab.childNodes.forEach((child) => {
    tab.removeChild(child);
  });
}

function switchTab(e) {
  const tab = document.querySelector('main');

  // Remove current active link styling
  document.querySelector('.active').classList.remove('active');
  clearTab();

  const selectedTab = e.target;
  selectedTab.parentNode.classList.add('active');

  switch (selectedTab.id) {
    case 'home-link':
      tab.appendChild((0,_home_tab__WEBPACK_IMPORTED_MODULE_0__["default"])());
      break;
    case 'menu-link':
      break;
    case 'contact-link':
      break;
    default:
      break;
  }
}

function enableTabSwitching() {
  const menuLinks = document.querySelectorAll('.nav-menu li');

  menuLinks.forEach((link) => link.addEventListener('click', switchTab));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enableTabSwitching);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EseUNBQXlDLEtBQUs7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmdCOztBQUU3QztBQUNBLG1CQUFtQiwyREFBYTs7QUFFaEMsc0JBQXNCLDJEQUFhO0FBQ25DOztBQUVBLHVCQUF1QiwyREFBYTtBQUNwQyx3QkFBd0IsMkRBQWE7QUFDckMsNEJBQTRCLDJEQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZ0I7O0FBRTdDO0FBQ0EsaUJBQWlCLDJEQUFhOztBQUU5QixzQkFBc0IsMkRBQWE7QUFDbkMsa0JBQWtCLDJEQUFhO0FBQy9CO0FBQ0Esb0JBQW9CLDJEQUFhOztBQUVqQztBQUNBOztBQUVBLGtCQUFrQiwyREFBYTtBQUMvQixtQkFBbUIsMkRBQWE7QUFDaEMsdUJBQXVCLDJEQUFhO0FBQ3BDLG1CQUFtQiwyREFBYTtBQUNoQyx1QkFBdUIsMkRBQWE7QUFDcEMsc0JBQXNCLDJEQUFhO0FBQ25DLDBCQUEwQiwyREFBYTs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmtCO0FBQ1Q7QUFDRztBQUNVOztBQUVqRDtBQUNBOztBQUVBLHNCQUFzQixtREFBWTs7QUFFbEMsZUFBZSwyREFBYTtBQUM1QixtQkFBbUIscURBQWE7O0FBRWhDOztBQUVBLEVBQUUsMERBQWtCO0FBQ3BCOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZTs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixxREFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7O1VDdkNsQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQyxzREFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lLXRhYi5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3RhYi1zd2l0Y2hpbmcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgZWxlbVRleHQsIGVsZW1JZCwgLi4uZWxlbUNsYXNzZXMpIHtcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcblxuICBlbGVtLnRleHRDb250ZW50ID0gZWxlbVRleHQ7XG5cbiAgaWYgKGVsZW1JZCAhPT0gJycpIHtcbiAgICBlbGVtLmlkID0gZWxlbUlkO1xuICB9XG5cbiAgZWxlbUNsYXNzZXMuZm9yRWFjaCgoZWxlbUNsYXNzKSA9PiB7XG4gICAgaWYgKGVsZW1DbGFzcyAhPT0gJycpIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChlbGVtQ2xhc3MpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcblxuZnVuY3Rpb24gY3JlYXRlSG9tZVRhYigpIHtcbiAgY29uc3QgaG9tZUNhcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnJywgJycsICdob21lLWNhcmQnKTtcblxuICBjb25zdCBob21lQ2FyZEltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsICcnLCAnJywgJ2hvbWUtY2FyZC1pbWcnKTtcbiAgaG9tZUNhcmRJbWcuc3JjID0gJ2ltZy9jaGVmLmpwZyc7XG5cbiAgY29uc3QgaG9tZUNhcmRUZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsICcnLCAnaG9tZS1jYXJkLXRleHQnKTtcbiAgY29uc3QgaG9tZUNhcmRUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywgJ1dFIEhBVkUgVEhFIEJFU1QgQ0hFRlMhJywgJycpO1xuICBjb25zdCBob21lQ2FyZFBhcmFncmFwaCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgJ3AnLFxuICAgICdMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVvcyBzZXF1aSBvZGl0LCBudW1xdWFtIGxhYm9yZSBtb2RpIGluY2lkdW50IGNvbnNlY3RldHVyIHNhZXBlLicsXG4gICAgJydcbiAgKTtcblxuICBob21lQ2FyZFRleHQuYXBwZW5kQ2hpbGQoaG9tZUNhcmRUaXRsZSk7XG4gIGhvbWVDYXJkVGV4dC5hcHBlbmRDaGlsZChob21lQ2FyZFBhcmFncmFwaCk7XG5cbiAgaG9tZUNhcmQuYXBwZW5kQ2hpbGQoaG9tZUNhcmRJbWcpO1xuICBob21lQ2FyZC5hcHBlbmRDaGlsZChob21lQ2FyZFRleHQpO1xuXG4gIHJldHVybiBob21lQ2FyZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZVRhYjtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZS1lbGVtZW50XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgY29uc3QgbmF2QmFyID0gY3JlYXRlRWxlbWVudCgnbmF2JywgJycsICcnKTtcblxuICBjb25zdCBsb2dvV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnLCAnJywgJ2xvZ28td3JhcHBlcicpO1xuICBjb25zdCBsb2dvSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsICcnLCAnbG9nby1pbWcnKTtcbiAgbG9nb0ltZy5zcmMgPSAnaW1nL2xvZ28ucG5nJztcbiAgY29uc3QgbG9nb1RpdGxlID0gY3JlYXRlRWxlbWVudCgnaDEnLCAnUkVTVEFVUkFOVCcsICcnKTtcblxuICBsb2dvV3JhcHBlci5hcHBlbmRDaGlsZChsb2dvSW1nKTtcbiAgbG9nb1dyYXBwZXIuYXBwZW5kQ2hpbGQobG9nb1RpdGxlKTtcblxuICBjb25zdCBuYXZNZW51ID0gY3JlYXRlRWxlbWVudCgndWwnLCAnJywgJycsICduYXYtbWVudScpO1xuICBjb25zdCBob21lTGluayA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJycsICcnLCAnYWN0aXZlJyk7XG4gIGhvbWVMaW5rLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2EnLCAnSE9NRScsICdob21lLWxpbmsnKSk7XG4gIGNvbnN0IG1lbnVMaW5rID0gY3JlYXRlRWxlbWVudCgnbGknLCAnJywgJycpO1xuICBtZW51TGluay5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdhJywgJ01FTlUnLCAnbWVudS1saW5rJykpO1xuICBjb25zdCBjb250YWN0TGluayA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJycsICcnKTtcbiAgY29udGFjdExpbmsuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnYScsICdDT05UQUNUJywgJ2NvbnRhY3QtbGluaycpKTtcblxuICBuYXZNZW51LmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgbmF2TWVudS5hcHBlbmRDaGlsZChtZW51TGluayk7XG4gIG5hdk1lbnUuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xuXG4gIG5hdkJhci5hcHBlbmRDaGlsZChsb2dvV3JhcHBlcik7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChuYXZNZW51KTtcblxuICByZXR1cm4gbmF2QmFyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZCYXI7IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgY3JlYXRlTmF2QmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCBjcmVhdGVIb21lVGFiIGZyb20gJy4vaG9tZS10YWInO1xuaW1wb3J0IGVuYWJsZVRhYlN3aXRjaGluZyBmcm9tICcuL3RhYi1zd2l0Y2hpbmcnO1xuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG5cbiAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoJ21haW4nLCAnJywgJycpO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVUYWIoKSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuICBlbmFibGVUYWJTd2l0Y2hpbmcoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7XG4iLCJpbXBvcnQgY3JlYXRlSG9tZVRhYiBmcm9tICcuL2hvbWUtdGFiJztcblxuZnVuY3Rpb24gY2xlYXJUYWIoKSB7XG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICB0YWIuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIHRhYi5yZW1vdmVDaGlsZChjaGlsZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUYWIoZSkge1xuICBjb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgLy8gUmVtb3ZlIGN1cnJlbnQgYWN0aXZlIGxpbmsgc3R5bGluZ1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGNsZWFyVGFiKCk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRUYWIgPSBlLnRhcmdldDtcbiAgc2VsZWN0ZWRUYWIucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICBzd2l0Y2ggKHNlbGVjdGVkVGFiLmlkKSB7XG4gICAgY2FzZSAnaG9tZS1saW5rJzpcbiAgICAgIHRhYi5hcHBlbmRDaGlsZChjcmVhdGVIb21lVGFiKCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWVudS1saW5rJzpcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NvbnRhY3QtbGluayc6XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5hYmxlVGFiU3dpdGNoaW5nKCkge1xuICBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LW1lbnUgbGknKTtcblxuICBtZW51TGlua3MuZm9yRWFjaCgobGluaykgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRhYikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbmFibGVUYWJTd2l0Y2hpbmc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcblxubG9hZFBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=