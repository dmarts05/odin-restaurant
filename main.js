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

  tab.classList.add('fade');

  setTimeout(() => {
    tab.childNodes.forEach((child) => {
      tab.removeChild(child);
    });
  }, 100);
}

function switchTab(e) {
  const tab = document.querySelector('main');

  // Remove current active link styling
  document.querySelector('.active').classList.remove('active');
  clearTab();

  setTimeout(() => {
    tab.classList.remove('fade');
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
  }, 100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EseUNBQXlDLEtBQUs7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmdCOztBQUU3QztBQUNBLG1CQUFtQiwyREFBYTs7QUFFaEMsc0JBQXNCLDJEQUFhO0FBQ25DOztBQUVBLHVCQUF1QiwyREFBYTtBQUNwQyx3QkFBd0IsMkRBQWE7QUFDckMsNEJBQTRCLDJEQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZ0I7O0FBRTdDO0FBQ0EsaUJBQWlCLDJEQUFhOztBQUU5QixzQkFBc0IsMkRBQWE7QUFDbkMsa0JBQWtCLDJEQUFhO0FBQy9CO0FBQ0Esb0JBQW9CLDJEQUFhOztBQUVqQztBQUNBOztBQUVBLGtCQUFrQiwyREFBYTtBQUMvQixtQkFBbUIsMkRBQWE7QUFDaEMsdUJBQXVCLDJEQUFhO0FBQ3BDLG1CQUFtQiwyREFBYTtBQUNoQyx1QkFBdUIsMkRBQWE7QUFDcEMsc0JBQXNCLDJEQUFhO0FBQ25DLDBCQUEwQiwyREFBYTs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmtCO0FBQ1Q7QUFDRztBQUNVOztBQUVqRDtBQUNBOztBQUVBLHNCQUFzQixtREFBWTs7QUFFbEMsZUFBZSwyREFBYTtBQUM1QixtQkFBbUIscURBQWE7O0FBRWhDOztBQUVBLEVBQUUsMERBQWtCO0FBQ3BCOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZTs7QUFFdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IscURBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7VUM5Q2xDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUM7O0FBRW5DLHNEQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWUtdGFiLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvdGFiLXN3aXRjaGluZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBlbGVtVGV4dCwgZWxlbUlkLCAuLi5lbGVtQ2xhc3Nlcykge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuXG4gIGVsZW0udGV4dENvbnRlbnQgPSBlbGVtVGV4dDtcblxuICBpZiAoZWxlbUlkICE9PSAnJykge1xuICAgIGVsZW0uaWQgPSBlbGVtSWQ7XG4gIH1cblxuICBlbGVtQ2xhc3Nlcy5mb3JFYWNoKChlbGVtQ2xhc3MpID0+IHtcbiAgICBpZiAoZWxlbUNsYXNzICE9PSAnJykge1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGVsZW1DbGFzcyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lVGFiKCkge1xuICBjb25zdCBob21lQ2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnLCAnJywgJ2hvbWUtY2FyZCcpO1xuXG4gIGNvbnN0IGhvbWVDYXJkSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsICcnLCAnaG9tZS1jYXJkLWltZycpO1xuICBob21lQ2FyZEltZy5zcmMgPSAnaW1nL2NoZWYuanBnJztcblxuICBjb25zdCBob21lQ2FyZFRleHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnJywgJycsICdob21lLWNhcmQtdGV4dCcpO1xuICBjb25zdCBob21lQ2FyZFRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCAnV0UgSEFWRSBUSEUgQkVTVCBDSEVGUyEnLCAnJyk7XG4gIGNvbnN0IGhvbWVDYXJkUGFyYWdyYXBoID0gY3JlYXRlRWxlbWVudChcbiAgICAncCcsXG4gICAgJ0xvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdW9zIHNlcXVpIG9kaXQsIG51bXF1YW0gbGFib3JlIG1vZGkgaW5jaWR1bnQgY29uc2VjdGV0dXIgc2FlcGUuJyxcbiAgICAnJ1xuICApO1xuXG4gIGhvbWVDYXJkVGV4dC5hcHBlbmRDaGlsZChob21lQ2FyZFRpdGxlKTtcbiAgaG9tZUNhcmRUZXh0LmFwcGVuZENoaWxkKGhvbWVDYXJkUGFyYWdyYXBoKTtcblxuICBob21lQ2FyZC5hcHBlbmRDaGlsZChob21lQ2FyZEltZyk7XG4gIGhvbWVDYXJkLmFwcGVuZENoaWxkKGhvbWVDYXJkVGV4dCk7XG5cbiAgcmV0dXJuIGhvbWVDYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lVGFiO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlLWVsZW1lbnRcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuICBjb25zdCBuYXZCYXIgPSBjcmVhdGVFbGVtZW50KCduYXYnLCAnJywgJycpO1xuXG4gIGNvbnN0IGxvZ29XcmFwcGVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsICcnLCAnbG9nby13cmFwcGVyJyk7XG4gIGNvbnN0IGxvZ29JbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnJywgJycsICdsb2dvLWltZycpO1xuICBsb2dvSW1nLnNyYyA9ICdpbWcvbG9nby5wbmcnO1xuICBjb25zdCBsb2dvVGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMScsICdSRVNUQVVSQU5UJywgJycpO1xuXG4gIGxvZ29XcmFwcGVyLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuICBsb2dvV3JhcHBlci5hcHBlbmRDaGlsZChsb2dvVGl0bGUpO1xuXG4gIGNvbnN0IG5hdk1lbnUgPSBjcmVhdGVFbGVtZW50KCd1bCcsICcnLCAnJywgJ25hdi1tZW51Jyk7XG4gIGNvbnN0IGhvbWVMaW5rID0gY3JlYXRlRWxlbWVudCgnbGknLCAnJywgJycsICdhY3RpdmUnKTtcbiAgaG9tZUxpbmsuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnYScsICdIT01FJywgJ2hvbWUtbGluaycpKTtcbiAgY29uc3QgbWVudUxpbmsgPSBjcmVhdGVFbGVtZW50KCdsaScsICcnLCAnJyk7XG4gIG1lbnVMaW5rLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2EnLCAnTUVOVScsICdtZW51LWxpbmsnKSk7XG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gY3JlYXRlRWxlbWVudCgnbGknLCAnJywgJycpO1xuICBjb250YWN0TGluay5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdhJywgJ0NPTlRBQ1QnLCAnY29udGFjdC1saW5rJykpO1xuXG4gIG5hdk1lbnUuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICBuYXZNZW51LmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbiAgbmF2TWVudS5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG5cbiAgbmF2QmFyLmFwcGVuZENoaWxkKGxvZ29XcmFwcGVyKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xuXG4gIHJldHVybiBuYXZCYXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdkJhcjsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCBjcmVhdGVOYXZCYXIgZnJvbSAnLi9uYXZiYXInO1xuaW1wb3J0IGNyZWF0ZUhvbWVUYWIgZnJvbSAnLi9ob21lLXRhYic7XG5pbXBvcnQgZW5hYmxlVGFiU3dpdGNoaW5nIGZyb20gJy4vdGFiLXN3aXRjaGluZyc7XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhcigpKTtcblxuICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudCgnbWFpbicsICcnLCAnJyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZVRhYigpKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIGVuYWJsZVRhYlN3aXRjaGluZygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTtcbiIsImltcG9ydCBjcmVhdGVIb21lVGFiIGZyb20gJy4vaG9tZS10YWInO1xuXG5mdW5jdGlvbiBjbGVhclRhYigpIHtcbiAgY29uc3QgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gIHRhYi5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGFiLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRhYi5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfSk7XG4gIH0sIDEwMCk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFRhYihlKSB7XG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAvLyBSZW1vdmUgY3VycmVudCBhY3RpdmUgbGluayBzdHlsaW5nXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgY2xlYXJUYWIoKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gZS50YXJnZXQ7XG4gICAgc2VsZWN0ZWRUYWIucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIHN3aXRjaCAoc2VsZWN0ZWRUYWIuaWQpIHtcbiAgICAgIGNhc2UgJ2hvbWUtbGluayc6XG4gICAgICAgIHRhYi5hcHBlbmRDaGlsZChjcmVhdGVIb21lVGFiKCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lbnUtbGluayc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY29udGFjdC1saW5rJzpcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sIDEwMCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZVRhYlN3aXRjaGluZygpIHtcbiAgY29uc3QgbWVudUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1tZW51IGxpJyk7XG5cbiAgbWVudUxpbmtzLmZvckVhY2goKGxpbmspID0+IGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUYWIpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZW5hYmxlVGFiU3dpdGNoaW5nO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSBcIi4vcGFnZS1sb2FkXCI7XG5cbmxvYWRQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9