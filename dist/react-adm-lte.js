(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var MyLink = function MyLink(_ref) {
  var href = _ref.href,
      children = _ref.children,
      onClick = _ref.onClick,
      className = _ref.className;

  var url = typeof href === 'string' && href.length > 0 ? href : '#';
  var click = function click() {};

  if (url.indexOf('http') === 0 || url.indexOf('www.') === 0) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { className: className, href: url },
      children
    );
  }

  if (url.indexOf('#') === 0) {
    click = function click(event) {
      if (url === '#') {
        event.preventDefault();
      }

      if (typeof onClick === 'function') {
        onClick(event);
      }
    };
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'a',
    { className: className, href: '#', onClick: click },
    children
  );
};

MyLink.propTypes = {
  href: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  className: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object, __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string]),
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = MyLink;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dropdown__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DropdownToggle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DropdownMenu__ = __webpack_require__(5);







var GenericDropdown = function GenericDropdown(props) {
  var className = props.className,
      open = props.open,
      onToggle = props.onToggle,
      children = props.children;
  var iconClass = props.iconClass,
      labelClass = props.labelClass,
      label = props.label;
  var header = props.header,
      footer = props.footer,
      onClickFooter = props.onClickFooter;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__Dropdown__["a" /* default */],
    { className: className, open: open, onToggle: onToggle },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__DropdownToggle__["a" /* default */],
      { onToggle: onToggle },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: iconClass }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: labelClass },
        label
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__DropdownMenu__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'header' },
        header
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'menu' },
          children
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'footer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__utils_Link__["a" /* default */],
          { onClick: onClickFooter },
          footer
        )
      )
    )
  );
};

GenericDropdown.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  open: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  iconClass: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  labelClass: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  label: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number, __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string]),
  onToggle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  header: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  footer: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  onClickFooter: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = GenericDropdown;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.state = { eventRef: null };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var ref = function ref(event) {
        var _props = _this2.props,
            onToggle = _props.onToggle,
            open = _props.open;


        if (open && typeof onToggle === 'function' && _this2.dom !== event.target && !_this2.dom.contains(event.target)) {
          onToggle();
        }
      };

      this.setState({ eventRef: ref });
      document.addEventListener('click', ref);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.state.eventRef);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children,
          open = _props2.open;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        {
          ref: function ref(dom) {
            return _this3.dom = dom;
          },
          className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('dropdown', className, { open: open }) },
        children
      );
    }
  }]);

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Dropdown.propTypes = {
  onToggle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  open: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node,
  className: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
};

/* harmony default export */ __webpack_exports__["a"] = Dropdown;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var DropdownMenu = function DropdownMenu(_ref) {
  var children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: 'dropdown-menu' },
    children
  );
};

DropdownMenu.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = DropdownMenu;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Link__ = __webpack_require__(1);




var DropdownToggle = function DropdownToggle(_ref) {
  var children = _ref.children,
      onToggle = _ref.onToggle;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__utils_Link__["a" /* default */],
    { href: '#', onClick: onToggle, className: 'dropdown-toggle' },
    children
  );
};

DropdownToggle.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node,
  onToggle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = DropdownToggle;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ControlSidebar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ControlSidebarBackground__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavTab__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tab__ = __webpack_require__(14);





/* harmony default export */ __webpack_exports__["a"] = {
  ControlSidebar: __WEBPACK_IMPORTED_MODULE_0__ControlSidebar__["a" /* default */],
  ControlSidebarBackground: __WEBPACK_IMPORTED_MODULE_1__ControlSidebarBackground__["a" /* default */],
  NavTab: __WEBPACK_IMPORTED_MODULE_2__NavTab__["a" /* default */],
  Tab: __WEBPACK_IMPORTED_MODULE_3__Tab__["a" /* default */]
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.toggleClasses(this.props);

      window.document.body.classList.add(this.props.skin);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.toggleClasses(nextProps);

      window.document.body.classList.remove(this.props.skin);
      window.document.body.classList.add(nextProps.skin);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _props = this.props,
          skin = _props.skin,
          boxed = _props.boxed,
          fixed = _props.fixed;
      var _props2 = this.props,
          topNavigation = _props2.topNavigation,
          sidebarCollapse = _props2.sidebarCollapse,
          sidebarMini = _props2.sidebarMini;


      var classes = {
        boxed: boxed,
        fixed: fixed,
        topNavigation: topNavigation,
        sidebarCollapse: sidebarCollapse,
        sidebarMini: sidebarMini
      };

      window.document.body.classList.remove(skin);

      this.removeClasses(classes);
    }
  }, {
    key: 'toggleClasses',
    value: function toggleClasses(props) {
      var clsList = this.getClasses(props);
      var body = window.document.body;

      Object.keys(clsList).forEach(function (cls) {
        if (clsList[cls] === true) {
          body.classList.add(cls);
        } else {
          body.classList.remove(cls);
        }
      });
    }
  }, {
    key: 'removeClasses',
    value: function removeClasses(props) {
      var clsList = this.getClasses(props);
      var body = window.document.body;

      Object.keys(clsList).forEach(function (cls) {
        body.classList.remove(cls, clsList[cls]);
      });
    }
  }, {
    key: 'getClasses',
    value: function getClasses(props) {
      return {
        'layout-top-nav': props.topNavigation,
        'layout-boxed': props.boxed,
        'fixed': props.fixed,
        'sidebar-collapse': props.sidebarCollapse,
        'sidebar-mini': props.sidebarMini
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'wrapper' },
        this.props.children
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Layout.propTypes = {
  skin: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  topNavigation: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  boxed: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  fixed: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  sidebarCollapse: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  sidebarMini: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = Layout;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MainHeader__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Logo__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LogoText__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navbar__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavbarMenu__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SidebarToggle__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ControlSidebarToggle__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Messages__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__MessageItem__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Notifications__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__NotificationItem__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Tasks__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__TaskItem__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__User__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__UserHeader__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__UserBody__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__UserBodyItem__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__UserFooter__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__UserFooterItem__ = __webpack_require__(32);




















/* harmony default export */ __webpack_exports__["a"] = {
  MainHeader: __WEBPACK_IMPORTED_MODULE_0__MainHeader__["a" /* default */],
  Logo: __WEBPACK_IMPORTED_MODULE_1__Logo__["a" /* default */],
  LogoText: __WEBPACK_IMPORTED_MODULE_2__LogoText__["a" /* default */],
  Navbar: __WEBPACK_IMPORTED_MODULE_3__Navbar__["a" /* default */],
  NavbarMenu: __WEBPACK_IMPORTED_MODULE_4__NavbarMenu__["a" /* default */],
  SidebarToggle: __WEBPACK_IMPORTED_MODULE_5__SidebarToggle__["a" /* default */],
  ControlSidebarToggle: __WEBPACK_IMPORTED_MODULE_6__ControlSidebarToggle__["a" /* default */],
  Messages: __WEBPACK_IMPORTED_MODULE_7__Messages__["a" /* default */],
  MessageItem: __WEBPACK_IMPORTED_MODULE_8__MessageItem__["a" /* default */],
  Notifications: __WEBPACK_IMPORTED_MODULE_9__Notifications__["a" /* default */],
  NotificationItem: __WEBPACK_IMPORTED_MODULE_10__NotificationItem__["a" /* default */],
  Tasks: __WEBPACK_IMPORTED_MODULE_11__Tasks__["a" /* default */],
  TaskItem: __WEBPACK_IMPORTED_MODULE_12__TaskItem__["a" /* default */],
  User: __WEBPACK_IMPORTED_MODULE_13__User__["a" /* default */],
  UserHeader: __WEBPACK_IMPORTED_MODULE_14__UserHeader__["a" /* default */],
  UserBody: __WEBPACK_IMPORTED_MODULE_15__UserBody__["a" /* default */],
  UserBodyItem: __WEBPACK_IMPORTED_MODULE_16__UserBodyItem__["a" /* default */],
  UserFooter: __WEBPACK_IMPORTED_MODULE_17__UserFooter__["a" /* default */],
  UserFooterItem: __WEBPACK_IMPORTED_MODULE_18__UserFooterItem__["a" /* default */]
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MainSidebar__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserPanel__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchForm__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Menu__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Item__ = __webpack_require__(34);






/* harmony default export */ __webpack_exports__["a"] = {
  MainSidebar: __WEBPACK_IMPORTED_MODULE_0__MainSidebar__["a" /* default */],
  UserPanel: __WEBPACK_IMPORTED_MODULE_1__UserPanel__["a" /* default */],
  SearchForm: __WEBPACK_IMPORTED_MODULE_2__SearchForm__["a" /* default */],
  Menu: __WEBPACK_IMPORTED_MODULE_3__Menu__["a" /* default */],
  Item: __WEBPACK_IMPORTED_MODULE_4__Item__["a" /* default */]
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);



var ControlSidebar = function ControlSidebar(_ref) {
  var children = _ref.children,
      open = _ref.open;

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('control-sidebar control-sidebar-dark', {
    'control-sidebar-open': open
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'aside',
    { className: classes },
    children
  );
};

ControlSidebar.propTypes = {
  open: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element
};

/* harmony default export */ __webpack_exports__["a"] = ControlSidebar;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var ControlSidebarBackground = function ControlSidebarBackground() {
  var styles = {
    position: 'fixed',
    height: 'auto'
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'control-sidebar-bg', style: styles });
};

/* harmony default export */ __webpack_exports__["a"] = ControlSidebarBackground;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var NavTab = function NavTab(_ref) {
  var children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: 'nav nav-tabs nav-justified control-sidebar-tabs' },
    children
  );
};

NavTab.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = NavTab;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Link__ = __webpack_require__(1);




var Tab = function Tab(_ref) {
  var active = _ref.active,
      iconClass = _ref.iconClass,
      onClick = _ref.onClick;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    { className: active ? 'active' : '' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__utils_Link__["a" /* default */],
      { onClick: onClick },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: iconClass })
    )
  );
};

Tab.propTypes = {
  active: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  iconClass: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = Tab;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Link__ = __webpack_require__(1);




var ControlSidebarToggle = function ControlSidebarToggle(_ref) {
  var href = _ref.href,
      onToggle = _ref.onToggle;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__utils_Link__["a" /* default */],
      { href: href, onClick: onToggle },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-gears' })
    )
  );
};

ControlSidebarToggle.propTypes = {
  href: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  onToggle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func
};

/* harmony default export */ __webpack_exports__["a"] = ControlSidebarToggle;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Link__ = __webpack_require__(1);




var Logo = function Logo(_ref) {
  var href = _ref.href,
      onClick = _ref.onClick,
      children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__utils_Link__["a" /* default */],
    { href: href, onClick: onClick, className: 'logo' },
    children
  );
};

Logo.propTypes = {
  href: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = Logo;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);



var LogoText = function LogoText(_ref) {
  var isMini = _ref.isMini,
      isLarge = _ref.isLarge,
      title = _ref.title,
      boldTitle = _ref.boldTitle;

  var className = {
    'logo-mini': isMini,
    'logo-lg': isLarge
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className) },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'b',
      null,
      boldTitle
    ),
    title
  );
};

LogoText.propTypes = {
  isMini: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  isLarge: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  boldTitle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
};

/* harmony default export */ __webpack_exports__["a"] = LogoText;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var MainHeader = function MainHeader(_ref) {
  var children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'header',
    { className: 'main-header' },
    children
  );
};

MainHeader.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = MainHeader;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Link__ = __webpack_require__(1);




var MessageItem = function MessageItem(_ref) {
  var href = _ref.href,
      imageUrl = _ref.imageUrl,
      title = _ref.title,
      time = _ref.time,
      message = _ref.message,
      onClick = _ref.onClick;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__utils_Link__["a" /* default */],
      { href: href, onClick: onClick },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'pull-left' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: imageUrl, className: 'img-circle', alt: 'User Image' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h4',
        null,
        title,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'small',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-clock-o' }),
          ' ',
          time
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        message
      )
    )
  );
};

MessageItem.propTypes = {
  imageUrl: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  time: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  message: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  href: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func
};

/* harmony default export */ __webpack_exports__["a"] = MessageItem;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GenericDropdown__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Messages = function Messages(props) {
  var open = props.open,
      label = props.label,
      header = props.header,
      footer = props.footer,
      children = props.children;
  var onToggle = props.onToggle,
      onClickFooter = props.onClickFooter;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__GenericDropdown__["a" /* default */],
    _extends({ open: open, label: label, onToggle: onToggle, header: header, footer: footer, onClickFooter: onClickFooter }, {
      iconClass: 'fa fa-envelope-o',
      labelClass: 'label label-success',
      className: 'messages-menu'
    }),
    children
  );
};

Messages.propTypes = {
  open: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool.isRequired,
  label: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number, __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string]).isRequired,
  onToggle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  header: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  footer: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  onClickFooter: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = Messages;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var NavbarMenu = function NavbarMenu(_ref) {
  var children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'nav',
    { className: 'navbar navbar-static-top' },
    children
  );
};

NavbarMenu.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = NavbarMenu;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var NavbarMenu = function NavbarMenu(_ref) {
  var children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'navbar-custom-menu' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      { className: 'navbar-nav nav' },
      children
    )
  );
};

NavbarMenu.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = NavbarMenu;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Link__ = __webpack_require__(1);




var icon = function icon(cn) {
  if (typeof cn === 'string' && cn.length > 0) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: cn });
  }

  return null;
};

var NotificationItem = function NotificationItem(_ref) {
  var title = _ref.title,
      iconClass = _ref.iconClass,
      href = _ref.href,
      onClick = _ref.onClick;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__utils_Link__["a" /* default */],
      { href: href, onClick: onClick },
      icon(iconClass),
      ' ',
      title
    )
  );
};

NotificationItem.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  iconClass: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  href: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func
};

/* harmony default export */ __webpack_exports__["a"] = NotificationItem;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GenericDropdown__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Notifications = function Notifications(props) {
  var open = props.open,
      label = props.label,
      header = props.header,
      footer = props.footer,
      children = props.children;
  var onToggle = props.onToggle,
      onClickFooter = props.onClickFooter;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__GenericDropdown__["a" /* default */],
    _extends({ open: open, label: label, onToggle: onToggle, header: header, footer: footer, onClickFooter: onClickFooter }, {
      iconClass: 'fa fa-bell-o',
      labelClass: 'label label-warning',
      className: 'notifications-menu'
    }),
    children
  );
};

Notifications.propTypes = {
  open: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool.isRequired,
  label: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number, __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string]).isRequired,
  onToggle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  header: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  footer: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  onClickFooter: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = Notifications;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Link__ = __webpack_require__(1);



var SiderbarToggle = function SiderbarToggle(_ref) {
  var onToggle = _ref.onToggle,
      srOnly = _ref.srOnly;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__utils_Link__["a" /* default */],
    { className: 'sidebar-toggle', onClick: onToggle },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { className: 'sr-only' },
      srOnly
    )
  );
};

SiderbarToggle.propTypes = {
  onToggle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  srOnly: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
};

/* harmony default export */ __webpack_exports__["a"] = SiderbarToggle;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Link__ = __webpack_require__(1);





var TaskItem = function TaskItem(_ref) {
  var title = _ref.title,
      progress = _ref.progress,
      progressClass = _ref.progressClass,
      completedText = _ref.completedText,
      href = _ref.href,
      onClick = _ref.onClick;

  var width = progress + '%';
  var pcn = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('progress-bar', progressClass);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__utils_Link__["a" /* default */],
      { href: href, onClick: onClick },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h3',
        null,
        title,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'small',
          { className: 'pull-right' },
          progress,
          '%'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'progress xs' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: pcn,
            style: { width: width },
            role: 'progressbar',
            'aria-valuenow': progress,
            'aria-valuemin': '0',
            'aria-valuemax': '100' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'sr-only' },
            progress,
            '% ',
            completedText
          )
        )
      )
    )
  );
};

var stringOrNumber = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string, __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number]).isRequired;

TaskItem.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  progress: stringOrNumber,
  progressClass: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  href: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  completedText: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = TaskItem;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GenericDropdown__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Tasks = function Tasks(props) {
  var open = props.open,
      label = props.label,
      header = props.header,
      footer = props.footer,
      children = props.children;
  var onToggle = props.onToggle,
      onClickFooter = props.onClickFooter;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__GenericDropdown__["a" /* default */],
    _extends({ open: open, label: label, onToggle: onToggle, header: header, footer: footer, onClickFooter: onClickFooter }, {
      iconClass: 'fa fa-flag-o',
      labelClass: 'label label-danger',
      className: 'tasks-menu'
    }),
    children
  );
};

Tasks.propTypes = {
  open: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool.isRequired,
  label: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number, __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string]).isRequired,
  onToggle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  header: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  footer: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  onClickFooter: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = Tasks;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dropdown__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DropdownToggle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DropdownMenu__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var User = function (_Component) {
  _inherits(User, _Component);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          open = _props.open,
          onToggle = _props.onToggle;
      var _props2 = this.props,
          imageUrl = _props2.imageUrl,
          label = _props2.label;
      var children = this.props.children;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__Dropdown__["a" /* default */],
        { open: open, onToggle: onToggle, className: 'user user-menu' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__DropdownToggle__["a" /* default */],
          { onToggle: onToggle },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: imageUrl, className: 'user-image', alt: 'User Image' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'hidden-xs' },
            label
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__DropdownMenu__["a" /* default */],
          null,
          children
        )
      );
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

User.propTypes = {
  open: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  imageUrl: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  label: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  onToggle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = User;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var UserBody = function UserBody(_ref) {
  var children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    { className: 'user-body' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      children
    )
  );
};

UserBody.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = UserBody;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Link__ = __webpack_require__(1);




var UserBodyItem = function UserBodyItem(_ref) {
  var href = _ref.href,
      onClick = _ref.onClick,
      children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'col-xs-4 text-center' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__utils_Link__["a" /* default */],
      {
        href: href,
        onClick: onClick },
      children
    )
  );
};

UserBodyItem.propTypes = {
  href: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = UserBodyItem;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var UserFooter = function UserFooter(_ref) {
  var children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    { className: 'user-footer' },
    children
  );
};

UserFooter.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = UserFooter;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Link__ = __webpack_require__(1);





var UserFooterItem = function UserFooterItem(props) {
  var children = props.children,
      left = props.left,
      right = props.right;
  var href = props.href,
      onClick = props.onClick;


  var cn = __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
    'pull-left': left && !right,
    'pull-right': right && !left
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: cn },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__utils_Link__["a" /* default */],
      {
        className: 'btn btn-flat btn-default',
        href: href,
        onClick: onClick },
      children
    )
  );
};

UserFooterItem.propTypes = {
  left: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  right: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  href: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = UserFooterItem;

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var UserHeader = function UserHeader(_ref) {
  var imageUrl = _ref.imageUrl,
      title = _ref.title,
      description = _ref.description;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    { className: 'user-header' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: imageUrl, className: 'img-circle', alt: 'User Image' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      title,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'small',
        null,
        description
      )
    )
  );
};

UserHeader.propTypes = {
  imageUrl: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = UserHeader;

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Link__ = __webpack_require__(1);





// -------------------- ITEM
var SidebarMenuItem = function SidebarMenuItem(props) {
  var isTreeview = props.isTreeview,
      header = props.header,
      active = props.active;
  var title = props.title,
      iconClass = props.iconClass;
  var href = props.href,
      onClick = props.onClick;
  var label = props.label,
      labelClassName = props.labelClassName;
  var children = props.children;


  if (header) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: 'header' },
      title
    );
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ treeview: isTreeview, active: active }) },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__utils_Link__["a" /* default */],
      { href: href, onClick: onClick },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(iconClass) }),
      isTreeview ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        null,
        title
      ) : title,
      (isTreeview || label) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'pull-right-container' },
        !label && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-angle-left pull-right' }),
        label && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('label pull-right', labelClassName) },
          label
        )
      )
    ),
    children
  );
};

SidebarMenuItem.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  iconClass: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  href: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  active: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  isTreeview: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  header: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element,
  label: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  labelClassName: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
};

/* harmony default export */ __webpack_exports__["a"] = SidebarMenuItem;

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var MainSidebar = function MainSidebar(_ref) {
  var children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'aside',
    { className: 'main-sidebar' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'sidebar' },
      children
    )
  );
};

MainSidebar.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = MainSidebar;

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);



var SidebarMenu = function SidebarMenu(_ref) {
  var isRoot = _ref.isRoot,
      active = _ref.active,
      children = _ref.children;

  var cn = {
    'sidebar-menu': isRoot,
    'treeview-menu': !isRoot,
    active: active
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(cn) },
    children
  );
};

SidebarMenu.propTypes = {
  active: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  isRoot: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = SidebarMenu;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var SearchForm = function SearchForm(_ref) {
  var value = _ref.value,
      placeholder = _ref.placeholder,
      onSubmit = _ref.onSubmit,
      onChange = _ref.onChange;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'form',
    { action: '#', method: 'get', onSubmit: onSubmit, className: 'sidebar-form' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'input-group' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
        type: 'text',
        className: 'form-control',
        onChange: onChange,
        value: value,
        placeholder: placeholder }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'input-group-btn' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { type: 'submit', className: 'btn btn-flat' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-search' })
        )
      )
    )
  );
};

SearchForm.propTypes = {
  value: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  placeholder: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  onSubmit: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  onChange: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = SearchForm;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);



var UserPanel = function UserPanel(_ref) {
  var imageUrl = _ref.imageUrl,
      title = _ref.title,
      statusText = _ref.statusText,
      statusClass = _ref.statusClass;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'user-panel' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'pull-left image' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: imageUrl, className: 'img-circle', alt: 'User Image' })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'pull-left info' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        title
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: '#' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(['fa', 'fa-circle'], statusClass) }),
        statusText
      )
    )
  );
};

UserPanel.propTypes = {
  imageUrl: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  statusText: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  statusClass: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
};

/* harmony default export */ __webpack_exports__["a"] = UserPanel;

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Layout__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MainHeader__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MainSidebar__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ControlSidebar__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Layout__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponents", function() { return __WEBPACK_IMPORTED_MODULE_1__components_MainHeader__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MainSidebarComponents", function() { return __WEBPACK_IMPORTED_MODULE_2__components_MainSidebar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ControlSidebarComponents", function() { return __WEBPACK_IMPORTED_MODULE_3__components_ControlSidebar__["a"]; });
// Layout


// Main Header


// Main Sidebar


// Control Sidebar










/***/ })
/******/ ])));