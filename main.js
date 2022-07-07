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

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./src/create-element.js");


function createMenuTab(numMenuItems) {
  const menuWrapper = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', '', 'menu-wrapper');

  for (let i = 0; i < numMenuItems; i++) {
    const menuItem = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', '', 'menu-item');

    const menuItemImg = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('img', '', '', 'menu-item-img');
    menuItemImg.src = 'img/food.png';
    const menuItemTitle = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'FOOD', '');

    menuItem.appendChild(menuItemImg);
    menuItem.appendChild(menuItemTitle);

    menuWrapper.appendChild(menuItem);
  }

  return menuWrapper;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuTab);


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
/* harmony import */ var _menu_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-tab */ "./src/menu-tab.js");



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
        tab.appendChild((0,_menu_tab__WEBPACK_IMPORTED_MODULE_1__["default"])(8));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EseUNBQXlDLEtBQUs7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmdCOztBQUU3QztBQUNBLG1CQUFtQiwyREFBYTs7QUFFaEMsc0JBQXNCLDJEQUFhO0FBQ25DOztBQUVBLHVCQUF1QiwyREFBYTtBQUNwQyx3QkFBd0IsMkRBQWE7QUFDckMsNEJBQTRCLDJEQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZ0I7O0FBRTdDO0FBQ0Esc0JBQXNCLDJEQUFhOztBQUVuQyxrQkFBa0Isa0JBQWtCO0FBQ3BDLHFCQUFxQiwyREFBYTs7QUFFbEMsd0JBQXdCLDJEQUFhO0FBQ3JDO0FBQ0EsMEJBQTBCLDJEQUFhOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmdCOztBQUU3QztBQUNBLGlCQUFpQiwyREFBYTs7QUFFOUIsc0JBQXNCLDJEQUFhO0FBQ25DLGtCQUFrQiwyREFBYTtBQUMvQjtBQUNBLG9CQUFvQiwyREFBYTs7QUFFakM7QUFDQTs7QUFFQSxrQkFBa0IsMkRBQWE7QUFDL0IsbUJBQW1CLDJEQUFhO0FBQ2hDLHVCQUF1QiwyREFBYTtBQUNwQyxtQkFBbUIsMkRBQWE7QUFDaEMsdUJBQXVCLDJEQUFhO0FBQ3BDLHNCQUFzQiwyREFBYTtBQUNuQywwQkFBMEIsMkRBQWE7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JrQjtBQUNUO0FBQ0c7QUFDVTs7QUFFakQ7QUFDQTs7QUFFQSxzQkFBc0IsbURBQVk7O0FBRWxDLGVBQWUsMkRBQWE7QUFDNUIsbUJBQW1CLHFEQUFhOztBQUVoQzs7QUFFQSxFQUFFLDBEQUFrQjtBQUNwQjs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJlO0FBQ0E7O0FBRXZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFhO0FBQ3JDO0FBQ0E7QUFDQSx3QkFBd0IscURBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0IsRUFBQzs7Ozs7OztVQ2hEbEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tQzs7QUFFbkMsc0RBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS10YWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21lbnUtdGFiLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvdGFiLXN3aXRjaGluZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBlbGVtVGV4dCwgZWxlbUlkLCAuLi5lbGVtQ2xhc3Nlcykge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuXG4gIGVsZW0udGV4dENvbnRlbnQgPSBlbGVtVGV4dDtcblxuICBpZiAoZWxlbUlkICE9PSAnJykge1xuICAgIGVsZW0uaWQgPSBlbGVtSWQ7XG4gIH1cblxuICBlbGVtQ2xhc3Nlcy5mb3JFYWNoKChlbGVtQ2xhc3MpID0+IHtcbiAgICBpZiAoZWxlbUNsYXNzICE9PSAnJykge1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGVsZW1DbGFzcyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lVGFiKCkge1xuICBjb25zdCBob21lQ2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnLCAnJywgJ2hvbWUtY2FyZCcpO1xuXG4gIGNvbnN0IGhvbWVDYXJkSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsICcnLCAnaG9tZS1jYXJkLWltZycpO1xuICBob21lQ2FyZEltZy5zcmMgPSAnaW1nL2NoZWYuanBnJztcblxuICBjb25zdCBob21lQ2FyZFRleHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnJywgJycsICdob21lLWNhcmQtdGV4dCcpO1xuICBjb25zdCBob21lQ2FyZFRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCAnV0UgSEFWRSBUSEUgQkVTVCBDSEVGUyEnLCAnJyk7XG4gIGNvbnN0IGhvbWVDYXJkUGFyYWdyYXBoID0gY3JlYXRlRWxlbWVudChcbiAgICAncCcsXG4gICAgJ0xvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdW9zIHNlcXVpIG9kaXQsIG51bXF1YW0gbGFib3JlIG1vZGkgaW5jaWR1bnQgY29uc2VjdGV0dXIgc2FlcGUuJyxcbiAgICAnJ1xuICApO1xuXG4gIGhvbWVDYXJkVGV4dC5hcHBlbmRDaGlsZChob21lQ2FyZFRpdGxlKTtcbiAgaG9tZUNhcmRUZXh0LmFwcGVuZENoaWxkKGhvbWVDYXJkUGFyYWdyYXBoKTtcblxuICBob21lQ2FyZC5hcHBlbmRDaGlsZChob21lQ2FyZEltZyk7XG4gIGhvbWVDYXJkLmFwcGVuZENoaWxkKGhvbWVDYXJkVGV4dCk7XG5cbiAgcmV0dXJuIGhvbWVDYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lVGFiO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVUYWIobnVtTWVudUl0ZW1zKSB7XG4gIGNvbnN0IG1lbnVXcmFwcGVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsICcnLCAnbWVudS13cmFwcGVyJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1NZW51SXRlbXM7IGkrKykge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsICcnLCAnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBtZW51SXRlbUltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsICcnLCAnJywgJ21lbnUtaXRlbS1pbWcnKTtcbiAgICBtZW51SXRlbUltZy5zcmMgPSAnaW1nL2Zvb2QucG5nJztcbiAgICBjb25zdCBtZW51SXRlbVRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCAnRk9PRCcsICcnKTtcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtSW1nKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbVRpdGxlKTtcblxuICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfVxuXG4gIHJldHVybiBtZW51V3JhcHBlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudVRhYjtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZS1lbGVtZW50XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgY29uc3QgbmF2QmFyID0gY3JlYXRlRWxlbWVudCgnbmF2JywgJycsICcnKTtcblxuICBjb25zdCBsb2dvV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnLCAnJywgJ2xvZ28td3JhcHBlcicpO1xuICBjb25zdCBsb2dvSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsICcnLCAnbG9nby1pbWcnKTtcbiAgbG9nb0ltZy5zcmMgPSAnaW1nL2xvZ28ucG5nJztcbiAgY29uc3QgbG9nb1RpdGxlID0gY3JlYXRlRWxlbWVudCgnaDEnLCAnUkVTVEFVUkFOVCcsICcnKTtcblxuICBsb2dvV3JhcHBlci5hcHBlbmRDaGlsZChsb2dvSW1nKTtcbiAgbG9nb1dyYXBwZXIuYXBwZW5kQ2hpbGQobG9nb1RpdGxlKTtcblxuICBjb25zdCBuYXZNZW51ID0gY3JlYXRlRWxlbWVudCgndWwnLCAnJywgJycsICduYXYtbWVudScpO1xuICBjb25zdCBob21lTGluayA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJycsICcnLCAnYWN0aXZlJyk7XG4gIGhvbWVMaW5rLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2EnLCAnSE9NRScsICdob21lLWxpbmsnKSk7XG4gIGNvbnN0IG1lbnVMaW5rID0gY3JlYXRlRWxlbWVudCgnbGknLCAnJywgJycpO1xuICBtZW51TGluay5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdhJywgJ01FTlUnLCAnbWVudS1saW5rJykpO1xuICBjb25zdCBjb250YWN0TGluayA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJycsICcnKTtcbiAgY29udGFjdExpbmsuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnYScsICdDT05UQUNUJywgJ2NvbnRhY3QtbGluaycpKTtcblxuICBuYXZNZW51LmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgbmF2TWVudS5hcHBlbmRDaGlsZChtZW51TGluayk7XG4gIG5hdk1lbnUuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xuXG4gIG5hdkJhci5hcHBlbmRDaGlsZChsb2dvV3JhcHBlcik7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChuYXZNZW51KTtcblxuICByZXR1cm4gbmF2QmFyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZCYXI7IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgY3JlYXRlTmF2QmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCBjcmVhdGVIb21lVGFiIGZyb20gJy4vaG9tZS10YWInO1xuaW1wb3J0IGVuYWJsZVRhYlN3aXRjaGluZyBmcm9tICcuL3RhYi1zd2l0Y2hpbmcnO1xuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG5cbiAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoJ21haW4nLCAnJywgJycpO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVUYWIoKSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuICBlbmFibGVUYWJTd2l0Y2hpbmcoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7XG4iLCJpbXBvcnQgY3JlYXRlSG9tZVRhYiBmcm9tICcuL2hvbWUtdGFiJztcbmltcG9ydCBjcmVhdGVNZW51VGFiIGZyb20gJy4vbWVudS10YWInO1xuXG5mdW5jdGlvbiBjbGVhclRhYigpIHtcbiAgY29uc3QgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gIHRhYi5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGFiLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRhYi5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfSk7XG4gIH0sIDEwMCk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFRhYihlKSB7XG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAvLyBSZW1vdmUgY3VycmVudCBhY3RpdmUgbGluayBzdHlsaW5nXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgY2xlYXJUYWIoKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gZS50YXJnZXQ7XG4gICAgc2VsZWN0ZWRUYWIucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIHN3aXRjaCAoc2VsZWN0ZWRUYWIuaWQpIHtcbiAgICAgIGNhc2UgJ2hvbWUtbGluayc6XG4gICAgICAgIHRhYi5hcHBlbmRDaGlsZChjcmVhdGVIb21lVGFiKCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lbnUtbGluayc6XG4gICAgICAgIHRhYi5hcHBlbmRDaGlsZChjcmVhdGVNZW51VGFiKDgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjb250YWN0LWxpbmsnOlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSwgMTAwKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlVGFiU3dpdGNoaW5nKCkge1xuICBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LW1lbnUgbGknKTtcblxuICBtZW51TGlua3MuZm9yRWFjaCgobGluaykgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRhYikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbmFibGVUYWJTd2l0Y2hpbmc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcblxubG9hZFBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=