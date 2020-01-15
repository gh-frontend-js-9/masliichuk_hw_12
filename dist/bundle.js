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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginView\", function() { return LoginView; });\nclass LoginView {\n\n  constructor() {\n    this.generateTemplate();\n  }\n\n   generateTemplate(){\n\n    this.loginBlock = document.createElement('div');\n\n    let h1 = document.createElement(\"h1\");\n    h1.innerText = 'Log in';\n    let member = document.createElement(\"a\");\n    member.innerText = 'Not a member?';\n    member.setAttribute('href', 'index.html?page=signup');\n    member.className = 'member-link';\n\n    this.loginForm = document.createElement('form');\n    this.loginForm.id = 'loginForm';\n\n    this.login = document.createElement('input');\n    this.login.setAttribute('placeholder', 'Email');\n\n    let br = document.createElement('br');\n\n    this.password = document.createElement('input');\n    this.password.setAttribute('placeholder', 'Password');\n    this.password.setAttribute('type', 'password');\n\n    this.btnSubmit = document.createElement('input');\n    this.btnSubmit.setAttribute('type', 'submit');\n    this.btnSubmit.setAttribute('value','Log in');\n    this.btnSubmit.className = 'btnSubmit';\n    this.btnSubmit.addEventListener( \"click\" , (e) => {\n      e.preventDefault();\n      login(this.login.value, this.password.value);\n    });\n\n    let forgotPass = document.createElement(\"a\");\n    forgotPass.innerText = 'Forgot password?';\n    forgotPass.setAttribute('href','index.html?page=resetpass');\n\n    this.loginForm.appendChild(this.login);\n    this.loginForm.appendChild(br);\n    this.loginForm.appendChild(this.password);\n    this.loginForm.appendChild(this.btnSubmit);\n\n\n    this.loginBlock.appendChild(h1);\n    this.loginBlock.appendChild(member);\n    this.loginBlock.appendChild(this.loginForm);\n    this.loginBlock.appendChild(forgotPass);\n  }\n}\n\nasync function login(email, pass) {\n\n  const url = 'http:/localhost:3000/api/users/login';\n  let response = await fetch(url,{\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n    },\n    body: `email=${email}&password=${pass}`\n  });\n\n  let responseText = await response.text();\n\n  if (response.ok) {\n    localStorage.setItem('token',response.headers.get('x-auth-token'));\n    location.href = 'messages.html?page=messages';\n  } else {\n    // alert(\"Ошибка HTTP: \" + response.status);\n    alert(responseText);\n  }\n}\n\n//# sourceURL=webpack:///./src/components/login/view/loginView.js?");

/***/ }),

/***/ "./src/components/messages/controller/messagesController.js":
/*!******************************************************************!*\
  !*** ./src/components/messages/controller/messagesController.js ***!
  \******************************************************************/
/*! exports provided: MessagesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessagesController\", function() { return MessagesController; });\n/* harmony import */ var _view_messagesView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/messagesView */ \"./src/components/messages/view/messagesView.js\");\n\n\nclass MessagesController {\n\n  constructor() {\n    this.view = new _view_messagesView__WEBPACK_IMPORTED_MODULE_0__[\"MessagesView\"]();\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/components/messages/controller/messagesController.js?");

/***/ }),

/***/ "./src/components/messages/view/messagesView.js":
/*!******************************************************!*\
  !*** ./src/components/messages/view/messagesView.js ***!
  \******************************************************/
/*! exports provided: MessagesView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessagesView\", function() { return MessagesView; });\nclass MessagesView {\n\n  constructor() {\n\n    this.token = localStorage.getItem('token');\n    this.generateThreads();\n  }\n\n  generateThreads(){\n\n    fetch('http:/localhost:3000/api/threads', {\n      method: 'GET',\n      headers: {\n        'x-access-token': this.token,\n      }\n    })\n        .then(response => {\n      return response.json();\n    }).then(threads => {\n      console.log(threads);\n\n      threads.forEach(thread => {\n        var threadBlock = this.createThread(thread);\n        threadBlock.addEventListener('click', () => {\n          document.getElementById('messages').innerHTML = '';\n          const messagesElements = this.generateMessages(thread._id);\n        });\n        document.getElementById('threads').append(threadBlock);\n      });\n\n    })\n\n  }\n\n  generateMessages(threadId) {\n\n    fetch('http:/localhost:3000/api/threads/messages/'+threadId, {\n      method: 'GET',\n      headers: {\n        'x-access-token': this.token,\n      }\n    })\n        .then(response => {\n          return response.json();\n        }).then(thread => {\n\n          console.log(thread);\n\n      thread.messages.forEach(message => {\n            var messageBlock = this.createMessage(message, thread);\n            document.getElementById('messages').append(messageBlock);\n          });\n\n    })\n\n  }\n\n  createMessage(message, thread){\n    var messageItem = document.createElement('div');\n    messageItem.className = 'message-item';\n\n    const messageUser = thread.users.filter(user => user._id === message.user)[0];\n    if (messageUser.me) {\n      messageItem.className = 'message-item right';\n    }\n\n    var flexContainer = document.createElement('div');\n    flexContainer.className = 'flex-container';\n\n    var profileIcon = document.createElement('div');\n    profileIcon.className = 'profile-icon';\n\n    var profileImgSrc = document.createElement('img');\n    profileImgSrc.src = 'images/profile-icon.png';\n\n    var div = document.createElement('div');\n\n    var messageSender = document.createElement('div');\n    messageSender.className = 'message-sender';\n    messageSender.innerText = message.body;\n\n    var dateMessage = document.createElement('div');\n    dateMessage.className = 'date-message';\n\n    var p = document.createElement('p');\n    p.innerText = message.created_at;\n\n\n    messageItem.appendChild(flexContainer);\n    flexContainer.appendChild(profileIcon);\n    flexContainer.appendChild(div);\n    profileIcon.appendChild(profileImgSrc);\n    div.appendChild(messageSender);\n    div.appendChild(dateMessage);\n    dateMessage.appendChild(p);\n\n    return messageItem;\n  }\n\n  createThread(thread){\n    var fullMessageItem = document.createElement('div');\n    fullMessageItem.className = 'full-message-item';\n\n    var headerProfile = document.createElement('div');\n    headerProfile.className = 'header-profile flex-container';\n\n    var headerProfileItem = document.createElement('div');\n    headerProfileItem.className = 'header-profile-item';\n\n    var profileIcon = document.createElement('div');\n    profileIcon.className = 'profile-icon';\n\n    var profileImg = document.createElement('img');\n    profileImg.src = 'images/profile-icon.png';\n\n    var userName = document.createElement('div');\n    userName.className = 'user-name';\n    const user = thread.users.filter(user => user.me === false)[0];\n    userName.innerText = user.name;\n\n    var dateMessage = document.createElement('div');\n    dateMessage.className = 'date-message';\n    dateMessage.innerText = thread.updated_at;\n\n    var userMessageItem = document.createElement('div');\n    userMessageItem.className = 'user-message-item';\n\n    var textUserMessageItem = document.createElement('p');\n    var lastMessage = 'No message yet';\n    if ( thread.last_message.body ) {\n      lastMessage = thread.last_message.body\n    }\n    textUserMessageItem.innerText = lastMessage;\n\n    fullMessageItem.appendChild(headerProfile);\n    headerProfile.appendChild(headerProfileItem);\n    headerProfileItem.appendChild(profileIcon);\n    profileIcon.appendChild(profileImg);\n    headerProfileItem.appendChild(userName);\n    headerProfile.appendChild(dateMessage);\n    fullMessageItem.appendChild(userMessageItem);\n    userMessageItem.appendChild(textUserMessageItem);\n\n    return fullMessageItem;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/messages/view/messagesView.js?");

/***/ }),

/***/ "./src/components/reset-password/controller/resetpassController.js":
/*!*************************************************************************!*\
  !*** ./src/components/reset-password/controller/resetpassController.js ***!
  \*************************************************************************/
/*! exports provided: ResetPassController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResetPassController\", function() { return ResetPassController; });\n/* harmony import */ var _view_resetpassView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../view/resetpassView */ \"./src/components/reset-password/view/resetpassView.js\");\n\n\nclass ResetPassController {\n\n  constructor() {\n    this.view = new _view_resetpassView__WEBPACK_IMPORTED_MODULE_0__[\"ResetPassView\"]();\n    this.render();\n  }\n\n  render(){\n    document.getElementById('app').append(this.view.resetPassBlock);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/reset-password/controller/resetpassController.js?");

/***/ }),

/***/ "./src/components/reset-password/view/resetpassView.js":
/*!*************************************************************!*\
  !*** ./src/components/reset-password/view/resetpassView.js ***!
  \*************************************************************/
/*! exports provided: ResetPassView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResetPassView\", function() { return ResetPassView; });\nclass ResetPassView {\n\n  constructor() {\n    this.generateTemplate();\n  }\n\n  generateTemplate(){\n\n    this.resetPassBlock = document.createElement('div');\n\n    let h1 = document.createElement(\"h1\");\n    let h4 = document.createElement('h4');\n    h1.innerText = 'Reset password';\n    h4.innerText = 'Please enter your new password';\n\n    this.resetPassForm = document.createElement('form');\n    this.resetPassForm.id = 'resetPassForm';\n\n    this.login = document.createElement('input');\n    this.login.setAttribute('placeholder', 'Email');\n\n    let br = document.createElement('br');\n    let br2 = document.createElement('br');\n\n    this.password = document.createElement('input');\n    this.password.setAttribute('placeholder', 'Password');\n    this.password.setAttribute('type', 'password');\n\n    this.resetPass = document.createElement('input');\n    this.resetPass.setAttribute('placeholder', 'Confirm password');\n    this.resetPass.setAttribute('type', 'password');\n\n\n    this.btnSubmit = document.createElement('input');\n    this.btnSubmit.setAttribute('type', 'submit');\n    this.btnSubmit.setAttribute('value','Reset');\n    this.btnSubmit.className = 'btnSubmit';\n    this.btnSubmit.addEventListener( \"click\" , (e) => {\n      e.preventDefault();\n      resetPass(this.login.value, this.password.value, this.resetPass.value);\n    });\n\n\n    this.resetPassForm.appendChild(this.login);\n    this.resetPassForm.appendChild(br);\n    this.resetPassForm.appendChild(this.password);\n    this.resetPassForm.appendChild(br2);\n    this.resetPassForm.appendChild(this.resetPass);\n    this.resetPassForm.appendChild(this.btnSubmit);\n\n\n    this.resetPassBlock.appendChild(h1);\n    this.resetPassBlock.appendChild(h4);\n    this.resetPassBlock.appendChild(this.resetPassForm);\n  }\n}\n\n\nasync function resetPass(email, pass, confPass) {\n  let response = await fetch('http:/localhost:3000/api/users/reset_password',{\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n    },\n    body: `email=${email}&password=${pass}&confirmationPassword=${confPass}`\n  });\n\n  let responseText = await response.text();\n\n  if (response.ok) {\n    localStorage.setItem('token',response.headers.get('x-auth-token'));\n    alert('Your password reseted');\n  } else {\n    // alert(\"Ошибка HTTP: \" + response.status);\n    alert(responseText);\n  }\n}\n\n//# sourceURL=webpack:///./src/components/reset-password/view/resetpassView.js?");

/***/ }),

/***/ "./src/components/sign-up/controller/signupController.js":
/*!***************************************************************!*\
  !*** ./src/components/sign-up/controller/signupController.js ***!
  \***************************************************************/
/*! exports provided: SignUpController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignUpController\", function() { return SignUpController; });\n/* harmony import */ var _view_signupView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../view/signupView */ \"./src/components/sign-up/view/signupView.js\");\n\n\n\nclass SignUpController {\n\n  constructor() {\n    this.view = new _view_signupView__WEBPACK_IMPORTED_MODULE_0__[\"SignUpView\"]();\n    this.render();\n  }\n\n  render(){\n    document.getElementById('app').append(this.view.signupBlock);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/sign-up/controller/signupController.js?");

/***/ }),

/***/ "./src/components/sign-up/view/signupView.js":
/*!***************************************************!*\
  !*** ./src/components/sign-up/view/signupView.js ***!
  \***************************************************/
/*! exports provided: SignUpView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignUpView\", function() { return SignUpView; });\nclass SignUpView {\n\n  constructor() {\n    this.generateTemplate();\n  }\n\n  generateTemplate(){\n\n    this.signupBlock = document.createElement('div');\n\n    let h1 = document.createElement(\"h1\");\n    h1.innerText = 'Sign Up';\n    let member = document.createElement(\"a\");\n    member.innerText = 'Existing member?';\n    member.setAttribute('href', 'index.html');\n    member.className = 'member-link';\n\n    this.signupForm = document.createElement('form');\n    this.signupForm.id = 'signupForm';\n\n    this.name = document.createElement('input');\n    this.name.setAttribute('placeholder', 'Name');\n    this.name.setAttribute('type', 'text');\n\n\n    this.login = document.createElement('input');\n    this.login.setAttribute('placeholder', 'Email');\n\n    let br = document.createElement('br');\n    let br2 = document.createElement('br');\n\n    this.password = document.createElement('input');\n    this.password.setAttribute('placeholder', 'Password');\n    this.password.setAttribute('type', 'password');\n\n\n    this.btnSubmit = document.createElement('input');\n    this.btnSubmit.setAttribute('type', 'submit');\n    this.btnSubmit.setAttribute('value','Sign up');\n    this.btnSubmit.className = 'btnSubmit';\n    this.btnSubmit.addEventListener( \"click\" , (e) => {\n      e.preventDefault();\n      signUp(this.login.value, this.password.value, this.name.value);\n    });\n\n    this.signupForm.appendChild(this.name);\n    this.signupForm.appendChild(br);\n    this.signupForm.appendChild(this.login);\n    this.signupForm.appendChild(br2);\n    this.signupForm.appendChild(this.password);\n    this.signupForm.appendChild(this.btnSubmit);\n\n\n    this.signupBlock.appendChild(h1);\n    this.signupBlock.appendChild(member);\n    this.signupBlock.appendChild(this.signupForm);\n  }\n}\n\n\nasync function signUp(email, pass, name) {\n  let response = await fetch('http:/localhost:3000/api/users',{\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n    },\n    body: `email=${email}&password=${pass}&name=${name}`\n  });\n\n  let responseText = await response.text();\n\n  if (response.ok) {\n    localStorage.setItem('token',response.headers.get('x-auth-token'));\n    alert('signed up');\n  } else {\n    // alert(\"Ошибка HTTP: \" + response.status);\n    alert(responseText);\n  }\n}\n\n//# sourceURL=webpack:///./src/components/sign-up/view/signupView.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/styles.scss */ \"./src/assets/styles/styles.scss\");\n/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_login_controller_loginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/controller/loginController */ \"./src/components/login/controller/loginController.js\");\n/* harmony import */ var _components_sign_up_controller_signupController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sign-up/controller/signupController */ \"./src/components/sign-up/controller/signupController.js\");\n/* harmony import */ var _components_reset_password_controller_resetpassController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/reset-password/controller/resetpassController */ \"./src/components/reset-password/controller/resetpassController.js\");\n/* harmony import */ var _components_messages_controller_messagesController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/messages/controller/messagesController */ \"./src/components/messages/controller/messagesController.js\");\n\n\n\n\n\n\n\nconst urlParams = new URLSearchParams(window.location.search);\nconst pageParam = urlParams.get('page');\n\nswitch (pageParam) {\n  case 'signup':\n    new _components_sign_up_controller_signupController__WEBPACK_IMPORTED_MODULE_2__[\"SignUpController\"]();\n    break;\n  case 'login':\n    new _components_login_controller_loginController__WEBPACK_IMPORTED_MODULE_1__[\"LoginController\"]();\n    break;\n  case 'resetpass':\n    new _components_reset_password_controller_resetpassController__WEBPACK_IMPORTED_MODULE_3__[\"ResetPassController\"]();\n    break;\n  case 'messages':\n    new _components_messages_controller_messagesController__WEBPACK_IMPORTED_MODULE_4__[\"MessagesController\"]();\n    break;\n  default:\n    new _components_login_controller_loginController__WEBPACK_IMPORTED_MODULE_1__[\"LoginController\"]();\n    break;\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });