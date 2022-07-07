/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-tab.js":
/*!****************************!*\
  !*** ./src/contact-tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./src/create-element.js");


function createContactTab() {
  const contactCard = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', '', 'contact-card');

  const phone = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', '📱 +34 699 99 99 99', '');
  const mail = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', '📧 mail@mail.com', '');
  const map = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('iframe', '', '');
  map.src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6014.6174205803445!2d-3.00930357127834!3d41.084101103998584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd437a0902d3586d%3A0x92751c1ece50bce7!2s19242%20Hiendelaencina%2C%20Guadalajara!5e0!3m2!1sen!2ses!4v1657224312955!5m2!1sen!2ses';
  map.loading = 'lazy';
  map.referrerpolicy = 'no-referrer-when-downgrade';

  contactCard.appendChild(phone);
  contactCard.appendChild(mail);
  contactCard.appendChild(map);

  return contactCard;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactTab);


/***/ }),

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
/* harmony import */ var _contact_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-tab */ "./src/contact-tab.js");




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
        tab.appendChild((0,_contact_tab__WEBPACK_IMPORTED_MODULE_2__["default"])());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QtdGFiLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS10YWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21lbnUtdGFiLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvdGFiLXN3aXRjaGluZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RUYWIoKSB7XG4gIGNvbnN0IGNvbnRhY3RDYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsICcnLCAnY29udGFjdC1jYXJkJyk7XG5cbiAgY29uc3QgcGhvbmUgPSBjcmVhdGVFbGVtZW50KCdoMicsICfwn5OxICszNCA2OTkgOTkgOTkgOTknLCAnJyk7XG4gIGNvbnN0IG1haWwgPSBjcmVhdGVFbGVtZW50KCdoMicsICfwn5OnIG1haWxAbWFpbC5jb20nLCAnJyk7XG4gIGNvbnN0IG1hcCA9IGNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsICcnLCAnJyk7XG4gIG1hcC5zcmMgPVxuICAgICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ2MDE0LjYxNzQyMDU4MDM0NDUhMmQtMy4wMDkzMDM1NzEyNzgzNCEzZDQxLjA4NDEwMTEwMzk5ODU4NCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ZDQzN2EwOTAyZDM1ODZkJTNBMHg5Mjc1MWMxZWNlNTBiY2U3ITJzMTkyNDIlMjBIaWVuZGVsYWVuY2luYSUyQyUyMEd1YWRhbGFqYXJhITVlMCEzbTIhMXNlbiEyc2VzITR2MTY1NzIyNDMxMjk1NSE1bTIhMXNlbiEyc2VzJztcbiAgbWFwLmxvYWRpbmcgPSAnbGF6eSc7XG4gIG1hcC5yZWZlcnJlcnBvbGljeSA9ICduby1yZWZlcnJlci13aGVuLWRvd25ncmFkZSc7XG5cbiAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChtYWlsKTtcbiAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQobWFwKTtcblxuICByZXR1cm4gY29udGFjdENhcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3RUYWI7XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGVsZW1UZXh0LCBlbGVtSWQsIC4uLmVsZW1DbGFzc2VzKSB7XG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG5cbiAgZWxlbS50ZXh0Q29udGVudCA9IGVsZW1UZXh0O1xuXG4gIGlmIChlbGVtSWQgIT09ICcnKSB7XG4gICAgZWxlbS5pZCA9IGVsZW1JZDtcbiAgfVxuXG4gIGVsZW1DbGFzc2VzLmZvckVhY2goKGVsZW1DbGFzcykgPT4ge1xuICAgIGlmIChlbGVtQ2xhc3MgIT09ICcnKSB7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoZWxlbUNsYXNzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVUYWIoKSB7XG4gIGNvbnN0IGhvbWVDYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsICcnLCAnaG9tZS1jYXJkJyk7XG5cbiAgY29uc3QgaG9tZUNhcmRJbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnJywgJycsICdob21lLWNhcmQtaW1nJyk7XG4gIGhvbWVDYXJkSW1nLnNyYyA9ICdpbWcvY2hlZi5qcGcnO1xuXG4gIGNvbnN0IGhvbWVDYXJkVGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnLCAnJywgJ2hvbWUtY2FyZC10ZXh0Jyk7XG4gIGNvbnN0IGhvbWVDYXJkVGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsICdXRSBIQVZFIFRIRSBCRVNUIENIRUZTIScsICcnKTtcbiAgY29uc3QgaG9tZUNhcmRQYXJhZ3JhcGggPSBjcmVhdGVFbGVtZW50KFxuICAgICdwJyxcbiAgICAnTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1b3Mgc2VxdWkgb2RpdCwgbnVtcXVhbSBsYWJvcmUgbW9kaSBpbmNpZHVudCBjb25zZWN0ZXR1ciBzYWVwZS4nLFxuICAgICcnXG4gICk7XG5cbiAgaG9tZUNhcmRUZXh0LmFwcGVuZENoaWxkKGhvbWVDYXJkVGl0bGUpO1xuICBob21lQ2FyZFRleHQuYXBwZW5kQ2hpbGQoaG9tZUNhcmRQYXJhZ3JhcGgpO1xuXG4gIGhvbWVDYXJkLmFwcGVuZENoaWxkKGhvbWVDYXJkSW1nKTtcbiAgaG9tZUNhcmQuYXBwZW5kQ2hpbGQoaG9tZUNhcmRUZXh0KTtcblxuICByZXR1cm4gaG9tZUNhcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVUYWI7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcblxuZnVuY3Rpb24gY3JlYXRlTWVudVRhYihudW1NZW51SXRlbXMpIHtcbiAgY29uc3QgbWVudVdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnJywgJycsICdtZW51LXdyYXBwZXInKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU1lbnVJdGVtczsgaSsrKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnJywgJycsICdtZW51LWl0ZW0nKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsICcnLCAnbWVudS1pdGVtLWltZycpO1xuICAgIG1lbnVJdGVtSW1nLnNyYyA9ICdpbWcvZm9vZC5wbmcnO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsICdGT09EJywgJycpO1xuXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWcpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGUpO1xuXG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICB9XG5cbiAgcmV0dXJuIG1lbnVXcmFwcGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51VGFiO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlLWVsZW1lbnRcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuICBjb25zdCBuYXZCYXIgPSBjcmVhdGVFbGVtZW50KCduYXYnLCAnJywgJycpO1xuXG4gIGNvbnN0IGxvZ29XcmFwcGVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsICcnLCAnbG9nby13cmFwcGVyJyk7XG4gIGNvbnN0IGxvZ29JbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnJywgJycsICdsb2dvLWltZycpO1xuICBsb2dvSW1nLnNyYyA9ICdpbWcvbG9nby5wbmcnO1xuICBjb25zdCBsb2dvVGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMScsICdSRVNUQVVSQU5UJywgJycpO1xuXG4gIGxvZ29XcmFwcGVyLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuICBsb2dvV3JhcHBlci5hcHBlbmRDaGlsZChsb2dvVGl0bGUpO1xuXG4gIGNvbnN0IG5hdk1lbnUgPSBjcmVhdGVFbGVtZW50KCd1bCcsICcnLCAnJywgJ25hdi1tZW51Jyk7XG4gIGNvbnN0IGhvbWVMaW5rID0gY3JlYXRlRWxlbWVudCgnbGknLCAnJywgJycsICdhY3RpdmUnKTtcbiAgaG9tZUxpbmsuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnYScsICdIT01FJywgJ2hvbWUtbGluaycpKTtcbiAgY29uc3QgbWVudUxpbmsgPSBjcmVhdGVFbGVtZW50KCdsaScsICcnLCAnJyk7XG4gIG1lbnVMaW5rLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2EnLCAnTUVOVScsICdtZW51LWxpbmsnKSk7XG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gY3JlYXRlRWxlbWVudCgnbGknLCAnJywgJycpO1xuICBjb250YWN0TGluay5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdhJywgJ0NPTlRBQ1QnLCAnY29udGFjdC1saW5rJykpO1xuXG4gIG5hdk1lbnUuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICBuYXZNZW51LmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbiAgbmF2TWVudS5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG5cbiAgbmF2QmFyLmFwcGVuZENoaWxkKGxvZ29XcmFwcGVyKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xuXG4gIHJldHVybiBuYXZCYXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdkJhcjsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCBjcmVhdGVOYXZCYXIgZnJvbSAnLi9uYXZiYXInO1xuaW1wb3J0IGNyZWF0ZUhvbWVUYWIgZnJvbSAnLi9ob21lLXRhYic7XG5pbXBvcnQgZW5hYmxlVGFiU3dpdGNoaW5nIGZyb20gJy4vdGFiLXN3aXRjaGluZyc7XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhcigpKTtcblxuICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudCgnbWFpbicsICcnLCAnJyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZVRhYigpKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIGVuYWJsZVRhYlN3aXRjaGluZygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTtcbiIsImltcG9ydCBjcmVhdGVIb21lVGFiIGZyb20gJy4vaG9tZS10YWInO1xuaW1wb3J0IGNyZWF0ZU1lbnVUYWIgZnJvbSAnLi9tZW51LXRhYic7XG5pbXBvcnQgY3JlYXRlQ29udGFjdFRhYiBmcm9tICcuL2NvbnRhY3QtdGFiJztcblxuZnVuY3Rpb24gY2xlYXJUYWIoKSB7XG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICB0YWIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRhYi5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB0YWIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH0pO1xuICB9LCAxMDApO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUYWIoZSkge1xuICBjb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgLy8gUmVtb3ZlIGN1cnJlbnQgYWN0aXZlIGxpbmsgc3R5bGluZ1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGNsZWFyVGFiKCk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICBjb25zdCBzZWxlY3RlZFRhYiA9IGUudGFyZ2V0O1xuICAgIHNlbGVjdGVkVGFiLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICBzd2l0Y2ggKHNlbGVjdGVkVGFiLmlkKSB7XG4gICAgICBjYXNlICdob21lLWxpbmsnOlxuICAgICAgICB0YWIuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZVRhYigpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZW51LWxpbmsnOlxuICAgICAgICB0YWIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudVRhYig4KSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY29udGFjdC1saW5rJzpcbiAgICAgICAgdGFiLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RUYWIoKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LCAxMDApO1xufVxuXG5mdW5jdGlvbiBlbmFibGVUYWJTd2l0Y2hpbmcoKSB7XG4gIGNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbWVudSBsaScpO1xuXG4gIG1lbnVMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVGFiKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVuYWJsZVRhYlN3aXRjaGluZztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xuXG5sb2FkUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==