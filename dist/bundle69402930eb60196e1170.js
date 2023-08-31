/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createNav = function createNav() {
  var container = document.getElementById('container');
  var nav = document.createElement('nav');
  nav.classList.add('nav');
  var navLinks = document.createElement('div');
  navLinks.classList.add('nav__links');
  var home = document.createElement('a');
  home.classList.add('nav__link');
  home.textContent = 'home';
  var menu = document.createElement('a');
  menu.classList.add('nav__link');
  menu.textContent = 'menu';
  var contact = document.createElement('a');
  contact.classList.add('nav__link', 'nav__link--span');
  contact.textContent = 'contact';
  container.appendChild(nav);
  nav.appendChild(navLinks);
  navLinks.append(home, menu, contact);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/nav */ "./src/modules/nav.js");


var createContact = function createContact() {
  (0,_modules_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var container = document.getElementById('container');
  var contact = document.createElement('section');
  contact.classList.add('contact', 'section');
  var wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  var title = document.createElement('h2');
  title.classList.add('contact__title');
  title.textContent = 'nocturne';
  var header = document.createElement('h3');
  header.classList.add('contact__header');
  header.textContent = 'contact';
  var infoBox = document.createElement('div');
  infoBox.classList.add('contact__box');
  var info1 = document.createElement('div');
  info1.classList.add('contact__box-single');
  info1.innerHTML = "<h3 class=\"contact__box-header\">contact us</h3>\n    <p class=\"contact__box-info\">+48 123 321 123</p>\n    <p class=\"contact__box-info\">contact@nocturne.com</p>";
  var info2 = document.createElement('div');
  info2.classList.add('contact__box-single');
  info2.innerHTML = "<h3 class=\"contact__box-header\">address</h3>\n    <p class=\"contact__box-info\">180 Livingston St</p>\n    <p class=\"contact__box-info\">Brooklyn, NY</p>";
  var info3 = document.createElement('div');
  info3.classList.add('contact__box-single', 'contact__box-single--span');
  info3.innerHTML = "<h3 class=\"contact__box-header\">hours</h3>\n    <p class=\"contact__box-info\">Tuesday: closed</p>\n    <p class=\"contact__box-info\">Tuesday: 12:00 - 22:00</p>\n    <p class=\"contact__box-info\">Wednesday: 12:00 - 22:00</p>\n    <p class=\"contact__box-info\">Thursday: 12:00 - 22:00</p>\n    <p class=\"contact__box-info\">Friday: 12:00 - 23:30</p>\n    <p class=\"contact__box-info\">Saturday: 12:00 - 23:30</p>\n    <p class=\"contact__box-info\">Sunday: 12:00 - 23:30</p>";
  container.appendChild(contact);
  contact.appendChild(wrapper);
  wrapper.append(title, header, infoBox);
  infoBox.append(info1, info2, info3);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/nav */ "./src/modules/nav.js");


var createHome = function createHome() {
  (0,_modules_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var container = document.getElementById('container');
  var header = document.createElement('header');
  header.classList.add('header');
  var headerTextsBox = document.createElement('div');
  headerTextsBox.classList.add('header__texts');
  var subtitle = document.createElement('span');
  subtitle.classList.add('header__texts-subtitle');
  subtitle.textContent = 'grill restaurant';
  var title = document.createElement('h1');
  title.classList.add('header__texts-title');
  title.textContent = 'nocturne';
  container.appendChild(header);
  header.appendChild(headerTextsBox);
  headerTextsBox.appendChild(subtitle);
  headerTextsBox.appendChild(title);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/nav */ "./src/modules/nav.js");
/* harmony import */ var _assets_burger_bgc_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/burger-bgc.jpg */ "./src/assets/burger-bgc.jpg");



var createMenu = function createMenu() {
  (0,_modules_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var container = document.getElementById('container');
  var menu = document.createElement('section');
  menu.classList.add('menu', 'section');
  var wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  var title = document.createElement('h2');
  title.classList.add('menu__title');
  title.textContent = 'nocturne';
  var header = document.createElement('h3');
  header.classList.add('menu__header');
  header.textContent = 'menu';
  var dishes = document.createElement('div');
  dishes.classList.add('menu__dishes');
  var dish1 = document.createElement('div');
  dish1.classList.add('menu__dish');
  dish1.innerHTML = "<img src=\"images/burger-bgc.jpg\" alt=\"\" class=\"menu__dish-img\">\n    <p class=\"menu__dish-text\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sequi amet assumenda corrupti eum pariatur ea possimus, nesciunt deserunt natus?</p>";
  var dish2 = document.createElement('div');
  dish2.classList.add('menu__dish');
  dish2.innerHTML = "<img src=\"images/burger-bgc.jpg\" alt=\"\" class=\"menu__dish-img menu__dish-img--right\">\n    <p class=\"menu__dish-text\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sequi amet assumenda corrupti eum pariatur ea possimus, nesciunt deserunt natus?</p>";
  var dish3 = document.createElement('div');
  dish3.classList.add('menu__dish');
  dish3.innerHTML = "<img src=\"images/burger-bgc.jpg\" alt=\"\" class=\"menu__dish-img\">\n    <p class=\"menu__dish-text\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sequi amet assumenda corrupti eum pariatur ea possimus, nesciunt deserunt natus?</p>";
  var dish4 = document.createElement('div');
  dish4.classList.add('menu__dish');
  dish4.innerHTML = "<img src=\"images/burger-bgc.jpg\" alt=\"\" class=\"menu__dish-img menu__dish-img--right\">\n    <p class=\"menu__dish-text\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sequi amet assumenda corrupti eum pariatur ea possimus, nesciunt deserunt natus?</p>";
  container.appendChild(menu);
  menu.appendChild(wrapper);
  wrapper.append(title, header, dishes);
  dishes.append(dish1, dish2, dish3, dish4);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bbq-bgc.jpg */ "./src/assets/bbq-bgc.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n}\n\nbody {\n  background-color: #2b2b2b;\n  font-family: \"Nanum Myeongjo\", serif;\n  color: #e4e3d6;\n  display: flex;\n  flex-direction: column;\n}\n\n.wrapper {\n  max-width: 1200px;\n  margin: 0 auto;\n  background-color: rgba(228, 227, 214, 0.95);\n  padding-inline: 100px;\n  padding-block: 30px;\n  border-radius: 30px;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);\n  animation: appear 0.8s ease-in-out;\n}\n@media only screen and (max-width: 1023px) {\n  .wrapper {\n    padding-inline: 70px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .wrapper {\n    padding-inline: 40px;\n  }\n}\n\n.container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  transition: 0.5s;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n}\n.nav__links {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n@media only screen and (max-width: 576px) {\n  .nav__links {\n    gap: 5px;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.nav__link {\n  text-align: center;\n  font-size: 30px;\n  color: #e4e3d6;\n  text-decoration: none;\n  padding: 10px;\n  transition: scale 0.3s;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n@media only screen and (max-width: 576px) {\n  .nav__link {\n    font-size: 25px;\n  }\n}\n@media only screen and (max-width: 576px) {\n  .nav__link--span {\n    grid-column: span 2;\n  }\n}\n.nav__link:hover {\n  scale: 1.1;\n}\n\n.header {\n  justify-content: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: appear 0.8s ease-in-out;\n}\n.header__texts {\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n.header__texts-title {\n  text-align: center;\n  font-size: 150px;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n@media only screen and (max-width: 1023px) {\n  .header__texts-title {\n    font-size: 120px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .header__texts-title {\n    font-size: 80px;\n  }\n}\n@media only screen and (max-width: 576px) {\n  .header__texts-title {\n    font-size: 50px;\n  }\n}\n.header__texts-subtitle {\n  font-size: 40px;\n}\n@media only screen and (max-width: 1023px) {\n  .header__texts-subtitle {\n    font-size: 35px;\n  }\n}\n@media only screen and (max-width: 576px) {\n  .header__texts-subtitle {\n    font-size: 25px;\n  }\n}\n\n.section {\n  color: #272727;\n  padding: 30px;\n  margin-bottom: 40px;\n  overflow-y: scroll;\n}\n@media only screen and (max-width: 576px) {\n  .section {\n    padding: 20px;\n  }\n}\n\n.menu__header, .menu__title {\n  text-transform: uppercase;\n  text-align: center;\n}\n.menu__title {\n  font-size: 50px;\n  color: #7e6f19;\n}\n@media only screen and (max-width: 576px) {\n  .menu__title {\n    font-size: 30px;\n  }\n}\n.menu__header {\n  font-size: 35px;\n  font-style: italic;\n}\n@media only screen and (max-width: 576px) {\n  .menu__header {\n    font-size: 20px;\n  }\n}\n.menu__dishes {\n  margin-block: 65px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n.menu__dish {\n  display: flex;\n  gap: 30px;\n  align-items: center;\n}\n@media only screen and (max-width: 767px) {\n  .menu__dish {\n    gap: 10px;\n    flex-direction: column;\n  }\n}\n.menu__dish-text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  line-height: 1.2;\n}\n@media only screen and (max-width: 1279px) {\n  .menu__dish-text {\n    font-size: 26px;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .menu__dish-text {\n    font-size: 20px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .menu__dish-text {\n    font-size: 18px;\n  }\n}\n@media only screen and (max-width: 576px) {\n  .menu__dish-text {\n    font-size: 16px;\n  }\n}\n.menu__dish-img {\n  height: 260px;\n  object-fit: cover;\n  border-radius: 50px 0 0 50px;\n}\n@media only screen and (max-width: 1023px) {\n  .menu__dish-img {\n    height: 220px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .menu__dish-img {\n    border-radius: 50px 50px 0 50px;\n    width: 100%;\n    height: auto;\n  }\n}\n.menu__dish-img--right {\n  order: 2;\n  border-radius: 0 50px 50px 0;\n}\n@media only screen and (max-width: 767px) {\n  .menu__dish-img--right {\n    border-radius: 50px 50px 50px 0;\n    order: 0;\n  }\n}\n\n.contact__header, .contact__title {\n  text-transform: uppercase;\n  text-align: center;\n}\n.contact__title {\n  font-size: 50px;\n  color: #7e6f19;\n}\n@media only screen and (max-width: 576px) {\n  .contact__title {\n    font-size: 30px;\n  }\n}\n.contact__header {\n  font-size: 35px;\n  font-style: italic;\n}\n@media only screen and (max-width: 576px) {\n  .contact__header {\n    font-size: 20px;\n  }\n}\n.contact__box {\n  margin-block: 65px;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: minmax(200px, 400px) minmax(200px, 400px);\n  row-gap: 70px;\n}\n@media only screen and (max-width: 767px) {\n  .contact__box {\n    grid-template-columns: 1fr;\n  }\n}\n.contact__box-single {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-weight: 600;\n  letter-spacing: 1px;\n  line-height: 1.2;\n}\n.contact__box-single--span {\n  grid-column: span 2;\n}\n@media only screen and (max-width: 767px) {\n  .contact__box-single--span {\n    grid-column: auto;\n  }\n}\n.contact__box-header {\n  text-align: center;\n  font-size: 30px;\n  text-transform: uppercase;\n  position: relative;\n  margin-bottom: 20px;\n}\n.contact__box-header::after {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80%;\n  height: 3px;\n  background-color: #7e6f19;\n}\n.contact__box-info {\n  font-size: 22px;\n}\n\n@keyframes appear {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/_mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@use './mixins' as *;\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n}\r\n\r\nhtml {\r\n\tfont-size: 62.5%;\r\n\tscroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n\tbackground-color: rgb(43, 43, 43);\r\n\tfont-family: 'Nanum Myeongjo', serif;\r\n\tcolor: rgb(228, 227, 214);\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n.wrapper {\r\n\tmax-width: 1200px;\r\n\tmargin: 0 auto;\r\n\tbackground-color: rgba(228, 227, 214, 0.95);\r\n\tpadding-inline: 100px;\r\n\tpadding-block: 30px;\r\n\tborder-radius: 30px;\r\n\tbox-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);\r\n\tanimation: appear 0.8s ease-in-out;\r\n\r\n\t@include view(tablet) {\r\n\t\tpadding-inline: 70px;\r\n\t}\r\n\r\n\t@include view(mobile) {\r\n\t\tpadding-inline: 40px;\r\n\t}\r\n}\r\n\r\n.container {\r\n\tbackground-image: url(../assets/bbq-bgc.jpg);\r\n\tbackground-position: center;\r\n\tbackground-size: cover;\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tposition: relative;\r\n\ttransition: 0.5s;\r\n}\r\n\r\n.nav {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tpadding: 20px;\r\n\r\n\t&__links {\r\n\t\tdisplay: grid;\r\n\t\tgap: 10px;\r\n\t\tgrid-template-columns: 1fr 1fr 1fr;\r\n\r\n\t\t@include view(small-mobile) {\r\n\t\t\tgap: 5px;\r\n\t\t\tgrid-template-columns: 1fr 1fr;\r\n\t\t}\r\n\t}\r\n\r\n\t&__link {\r\n\t\ttext-align: center;\r\n\t\tfont-size: 30px;\r\n\t\tcolor: rgb(228, 227, 214);\r\n\t\ttext-decoration: none;\r\n\t\tpadding: 10px;\r\n\t\ttransition: scale 0.3s;\r\n\t\ttext-transform: uppercase;\r\n\t\tcursor: pointer;\r\n\r\n\t\t@include view(small-mobile) {\r\n\t\t\tfont-size: 25px;\r\n\t\t}\r\n\r\n\t\t&--span {\r\n\t\t\t@include view(small-mobile) {\r\n\t\t\t\tgrid-column: span 2;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\tscale: 1.1;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.header {\r\n\tjustify-content: center;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\tanimation: appear 0.8s ease-in-out;\r\n\r\n\t&__texts {\r\n\t\twidth: fit-content;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t&__texts-title {\r\n\t\ttext-align: center;\r\n\t\tfont-size: 150px;\r\n\t\tfont-weight: 400;\r\n\t\ttext-transform: uppercase;\r\n\r\n\t\t@include view(tablet) {\r\n\t\t\tfont-size: 120px;\r\n\t\t}\r\n\r\n\t\t@include view(mobile) {\r\n\t\t\tfont-size: 80px;\r\n\t\t}\r\n\r\n\t\t@include view(small-mobile) {\r\n\t\t\tfont-size: 50px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__texts-subtitle {\r\n\t\tfont-size: 40px;\r\n\r\n\t\t@include view(tablet) {\r\n\t\t\tfont-size: 35px;\r\n\t\t}\r\n\r\n\t\t@include view(small-mobile) {\r\n\t\t\tfont-size: 25px;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.section {\r\n\tcolor: rgb(39, 39, 39);\r\n\tpadding: 30px;\r\n\tmargin-bottom: 40px;\r\n\toverflow-y: scroll;\r\n\r\n\t@include view(small-mobile) {\r\n\t\tpadding: 20px;\r\n\t}\r\n}\r\n\r\n.menu {\r\n\t&__header, &__title {\r\n\t\ttext-transform: uppercase;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t&__title {\r\n\t\tfont-size: 50px;\r\n\t\tcolor: rgb(126, 111, 25);\r\n\r\n\t\t@include view(small-mobile) {\r\n\t\t\tfont-size: 30px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__header {\r\n\t\tfont-size: 35px;\r\n\t\tfont-style: italic;\r\n\r\n\t\t@include view(small-mobile) {\r\n\t\t\tfont-size: 20px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__dishes {\r\n\t\tmargin-block: 65px;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 40px;\r\n\t}\r\n\r\n\t&__dish {\r\n\t\tdisplay: flex;\r\n\t\tgap: 30px;\r\n\t\talign-items: center;\r\n\r\n\t\t@include view(mobile) {\r\n\t\t\tgap: 10px;\r\n\t\t\tflex-direction: column;\r\n\t\t}\r\n\t}\r\n\r\n\t&__dish-text {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tfont-size: 30px;\r\n\t\tline-height: 1.2;\r\n\r\n\t\t@include view(small-desktop) {\r\n\t\t\tfont-size: 26px;\r\n\t\t}\r\n\r\n\t\t@include view(tablet) {\r\n\t\t\tfont-size: 20px;\r\n\t\t}\r\n\r\n\t\t@include view(mobile) {\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\r\n\t\t@include view(small-mobile) {\r\n\t\t\tfont-size: 16px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__dish-img {\r\n\t\theight: 260px;\r\n\t\tobject-fit: cover;\r\n\t\tborder-radius: 50px 0 0 50px;\r\n\r\n\t\t@include view(tablet) {\r\n\t\t\theight: 220px;\r\n\t\t}\r\n\r\n\t\t@include view(mobile) {\r\n\t\t\tborder-radius: 50px 50px 0 50px;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: auto;\r\n\t\t}\r\n\r\n\t\t&--right {\r\n\t\t\torder: 2;\r\n\t\t\tborder-radius: 0 50px 50px 0;\r\n\r\n\t\t\t@include view(mobile) {\r\n\t\t\t\tborder-radius: 50px 50px 50px 0;\r\n\t\t\t\torder: 0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.contact {\r\n\t&__header, &__title {\r\n\t\ttext-transform: uppercase;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t&__title {\r\n\t\tfont-size: 50px;\r\n\t\tcolor: rgb(126, 111, 25);\r\n\r\n\t\t@include view(small-mobile) {\r\n\t\t\tfont-size: 30px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__header {\r\n\t\tfont-size: 35px;\r\n\t\tfont-style: italic;\r\n\r\n\t\t@include view(small-mobile) {\r\n\t\t\tfont-size: 20px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__box {\r\n\t\tmargin-block: 65px;\r\n\t\tdisplay: grid;\r\n\t\tjustify-content: center;\r\n\t\tgrid-template-columns: minmax(200px, 400px) minmax(200px, 400px);\r\n\t\trow-gap: 70px;\r\n\r\n\t\t@include view (mobile) {\r\n\t\t\tgrid-template-columns: 1fr;\r\n\t\t}\r\n\t}\r\n\r\n\t&__box-single {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tflex-direction: column;\r\n\t\tfont-weight: 600;\r\n\t\tletter-spacing: 1px;\r\n\t\tline-height: 1.2;\r\n\r\n\t\t&--span {\r\n\t\t\tgrid-column: span 2;\r\n\r\n\t\t\t@include view (mobile) {\r\n\t\t\t\tgrid-column: auto;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__box-header {\r\n\t\ttext-align: center;\r\n\t\tfont-size: 30px;\r\n\t\ttext-transform: uppercase;\r\n\t\tposition: relative;\r\n\t\tmargin-bottom: 20px;\r\n\r\n\t\t&::after {\r\n\t\t\tcontent: '';\r\n\t\t\tposition: absolute;\r\n\t\t\tbottom: -5px;\r\n\t\t\tleft: 50%;\r\n\t\t\ttransform: translateX(-50%);\r\n\t\t\twidth: 80%;\r\n\t\t\theight: 3px;\r\n\t\t\tbackground-color: rgb(126, 111, 25);\r\n\t\t}\r\n\t}\r\n\r\n\t&__box-info {\r\n\t\tfont-size: 22px;\r\n\t}\r\n}\r\n\r\n@keyframes appear {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}","@mixin view($breakpoint) {\r\n    @if $breakpoint == small-mobile {\r\n        @media only screen and (max-width: 576px) {\r\n          @content;\r\n        }\r\n      }\r\n\r\n    @if $breakpoint == mobile {\r\n      @media only screen and (max-width: 767px) {\r\n        @content;\r\n      }\r\n    }\r\n  \r\n    @if $breakpoint == tablet {\r\n      @media only screen and (max-width: 1023px) {\r\n        @content;\r\n      }\r\n    }\r\n  \r\n    @if $breakpoint == small-desktop {\r\n      @media only screen and (max-width: 1279px) {\r\n        @content;\r\n      }\r\n    }\r\n  \r\n    @if $breakpoint == desktop {\r\n      @media only screen and (max-width: 1440px) {\r\n        @content;\r\n      }\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/bbq-bgc.jpg":
/*!********************************!*\
  !*** ./src/assets/bbq-bgc.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/bbq-bgc.jpg";

/***/ }),

/***/ "./src/assets/burger-bgc.jpg":
/*!***********************************!*\
  !*** ./src/assets/burger-bgc.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/burger-bgc.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");




var container = document.getElementById('container');
(0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

var home = function home() {
  container.innerHTML = '';
  (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

var menu = function menu() {
  container.innerHTML = '';
  (0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

var contact = function contact() {
  container.innerHTML = '';
  (0,_pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

document.addEventListener('click', function (e) {
  var target = e.target.textContent;
  if (target === 'home') home();
  if (target === 'menu') menu();
  if (target === 'contact') contact();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle69402930eb60196e1170.js.map