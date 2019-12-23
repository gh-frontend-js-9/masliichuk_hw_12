/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/styles/styles.scss":
/*!***************************************!*\
  !*** ./src/assets/styles/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/styles/styles.scss?");

/***/ }),

/***/ "./src/components/login/controller/loginController.js":
/*!************************************************************!*\
  !*** ./src/components/login/controller/loginController.js ***!
  \************************************************************/
/*! exports provided: LoginController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginController\", function() { return LoginController; });\n/* harmony import */ var _view_loginView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../view/loginView */ \"./src/components/login/view/loginView.js\");\n\n\nclass LoginController {\n\n  constructor() {\n    this.view = new _view_loginView__WEBPACK_IMPORTED_MODULE_0__[\"LoginView\"]();\n    this.render();\n  }\n\n  render(){\n    document.getElementById('app').append(this.view.loginBlock);\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/components/login/controller/loginController.js?");

/***/ }),

/***/ "./src/components/login/view/loginView.js":
/*!************************************************!*\
  !*** ./src/components/login/view/loginView.js ***!
  \************************************************/
/*! exports provided: LoginView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginView\", function() { return LoginView; });\nclass LoginView {\n\n  constructor() {\n    this.generateTemplate();\n  }\n\n  generateTemplate(){\n\n    this.loginBlock = document.createElement('div');\n\n    let h1 = document.createElement(\"h1\");\n    h1.innerText = 'Log in';\n\n    let member = document.createElement(\"a\");\n    member.innerText = 'Not a member?';\n    member.setAttribute('href', 'http://google.com');\n    member.className = 'member-link';\n\n    this.loginForm = document.createElement('form');\n    this.loginForm.id = 'loginForm';\n\n    this.login = document.createElement('input');\n    this.login.setAttribute('placeholder', 'Email');\n\n    let br = document.createElement('br');\n\n    this.password = document.createElement('input');\n    this.password.setAttribute('placeholder', 'Password');\n    this.password.setAttribute('type', 'password');\n\n    this.btnSubmit = document.createElement('input');\n    this.btnSubmit.setAttribute('type', 'submit');\n    this.btnSubmit.setAttribute('value','Log in');\n    this.btnSubmit.className = 'btnSubmit';\n\n    let forgotPass = document.createElement(\"a\");\n    forgotPass.innerText = 'Forgot password?';\n    forgotPass.setAttribute('href','http://google.com');\n\n\n\n\n\n    this.loginForm.appendChild(this.login);\n    this.loginForm.appendChild(br);\n    this.loginForm.appendChild(this.password);\n    this.loginForm.appendChild(this.btnSubmit);\n\n\n    this.loginBlock.appendChild(h1);\n    this.loginBlock.appendChild(member);\n    this.loginBlock.appendChild(this.loginForm);\n    this.loginBlock.appendChild(forgotPass);\n  }\n}\n\n//# sourceURL=webpack:///./src/components/login/view/loginView.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/styles.scss */ \"./src/assets/styles/styles.scss\");\n/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_login_controller_loginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/controller/loginController */ \"./src/components/login/controller/loginController.js\");\n\n\n\n\nnew _components_login_controller_loginController__WEBPACK_IMPORTED_MODULE_1__[\"LoginController\"]();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });