webpackJsonp([1],{

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_http_help__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_config__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_custom_transition__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_scroll__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_team_item__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_title__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_loading__ = __webpack_require__(240);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var style = __webpack_require__(272);
var dfgImg = __webpack_require__(273);
var okexImg = __webpack_require__(274);
var ripioImg = __webpack_require__(275);
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team(props) {
        var _this = _super.call(this, props) || this;
        _this.lock = false;
        _this.state = {
            loading: true,
            teamList: []
        };
        return _this;
    }
    Team.prototype.componentDidMount = function () {
        var _this = this;
        this.props.setPageview('/team');
        var url = __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].API_PATH_TEAM + "?lang=" + this.props.lang + "&key=" + __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].API_KEY;
        __WEBPACK_IMPORTED_MODULE_2__utils_http_help__["a" /* HttpHelp */].Get(url).then(function (res) {
            if (!_this.lock) {
                _this.setState({
                    teamList: res,
                    loading: false
                });
            }
        });
    };
    Team.prototype.componentWillUnmount = function () {
        this.lock = true;
    };
    Team.prototype.render = function () {
        var _a = this.props, i18n = _a.i18n, lang = _a.lang;
        var _b = this.state, loading = _b.loading, teamList = _b.teamList;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.team },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.header },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.content },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_scroll__["a" /* default */], null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__components_custom_transition__["a" /* default */], null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: style.title }, i18n.TEAM_PAGE_TITLE))))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style['core-team'] },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.content },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_scroll__["a" /* default */], null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__components_custom_transition__["a" /* default */], null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, i18n.TEAM_PAGE_CORE_TEAM))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.team },
                        teamList.map(function (item) {
                            if (item.type === 'CoreTeam') {
                                var dataItem = {
                                    name: lang === 'zh-CN' ? item.zhName : item.enName,
                                    description: lang === 'zh-CN' ? item.zhDescription : item.enDescription,
                                    position: lang === 'zh-CN' ? item.zhPosition : item.enPosition,
                                    picture: item.photo
                                };
                                return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__components_team_item__["a" /* default */], { key: Math.random(), data: dataItem, type: "coreTeam" }));
                            }
                            return null;
                        }),
                        loading ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_loading__["a" /* default */], { text: i18n.NEWS_PAGE_LOADING }) : null))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style['our-partners'] },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.content },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_scroll__["a" /* default */], null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__components_custom_transition__["a" /* default */], null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_page_title__["a" /* default */], { title: i18n.TEAM_PAGE_ITEM_TITLE }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.images },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], { to: "http://www.digitalfinancegroup.net", target: '_blank' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: dfgImg })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], { to: "https://www.okex.com/", target: '_blank' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: okexImg })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], { to: "https://ripiocredit.network/", target: '_blank' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: ripioImg }))))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.advisors },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.content },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_scroll__["a" /* default */], null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__components_custom_transition__["a" /* default */], null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, i18n.TEAM_PAGE_ADVISORS))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.team },
                        teamList.map(function (item) {
                            if (item.type === 'Advisors') {
                                var dataItem = {
                                    name: lang === 'zh-CN' ? item.zhName : item.enName,
                                    description: lang === 'zh-CN' ? item.zhDescription : item.enDescription,
                                    position: lang === 'zh-CN' ? item.zhPosition : item.enPosition,
                                    picture: item.photo
                                };
                                return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__components_team_item__["a" /* default */], { key: Math.random(), data: dataItem, type: "Advisors" }));
                            }
                            return null;
                        }),
                        loading ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_loading__["a" /* default */], { text: i18n.NEWS_PAGE_LOADING }) : null)))));
    };
    return Team;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Team);


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CustomTransition = /** @class */ (function (_super) {
    __extends(CustomTransition, _super);
    function CustomTransition(props) {
        return _super.call(this, props) || this;
    }
    CustomTransition.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default.a, { component: "div", className: "react-container", transitionName: "slide-in", transitionAppear: true, transitionAppearTimeout: 1500, transitionEnterTimeout: 1500, transitionLeaveTimeout: 1500 }, this.props.children));
    };
    return CustomTransition;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (CustomTransition);


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



module.exports = __webpack_require__(228);


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(229);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(232);

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(225);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';


CSSTransitionGroup.propTypes =  false ? propTypes : {};
CSSTransitionGroup.defaultProps = defaultProps;

exports.default = CSSTransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(230);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(1);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(231);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

         false ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes =  false ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 230:
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(0);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addClass = __webpack_require__(233);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(235);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(236);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(237);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(51);

var _PropTypes = __webpack_require__(225);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


CSSTransitionGroupChild.propTypes =  false ? propTypes : {};

exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(234);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}
module.exports = exports['default'];

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(224);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf = void 0;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM2.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}

/* https://github.com/component/raf */
var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);

  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};
compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};
exports.default = compatRaf;
module.exports = exports['default'];

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(224);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Scroll = /** @class */ (function (_super) {
    __extends(Scroll, _super);
    function Scroll(props) {
        var _this = _super.call(this, props) || this;
        _this.DOMElement = {};
        _this.state = {
            init: false
        };
        _this.handleScroll = _this.handleScroll.bind(_this);
        return _this;
    }
    Scroll.prototype.componentDidMount = function () {
        window.addEventListener('scroll', this.handleScroll);
        setTimeout(this.handleScroll);
    };
    Scroll.prototype.handleScroll = function () {
        var bodyScrollTop = window.scrollY;
        if (window.navigator.userAgent.indexOf('Trident/7.0') >= 0) {
            bodyScrollTop = document.documentElement.scrollTop;
        }
        var ele = this.DOMElement.myRef;
        if (!this.DOMElement.myRef) {
            return;
        }
        if (window.innerHeight + bodyScrollTop > ele.offsetTop) {
            this.setState({
                init: true
            });
        }
    };
    Scroll.prototype.render = function () {
        var _this = this;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { ref: function (dom) { _this.DOMElement.myRef = dom; } }, this.state.init
            ? this.props.children
            : null));
    };
    return Scroll;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Scroll);


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forceCheck = exports.lazyload = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(51);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _event = __webpack_require__(243);

var _scrollParent = __webpack_require__(244);

var _scrollParent2 = _interopRequireDefault(_scrollParent);

var _debounce = __webpack_require__(245);

var _debounce2 = _interopRequireDefault(_debounce);

var _throttle = __webpack_require__(246);

var _throttle2 = _interopRequireDefault(_throttle);

var _decorator = __webpack_require__(247);

var _decorator2 = _interopRequireDefault(_decorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * react-lazyload
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var defaultBoundingClientRect = { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
var LISTEN_FLAG = 'data-lazyload-listened';
var listeners = [];
var pending = [];

// try to handle passive events
var passiveEventSupported = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      passiveEventSupported = true;
    }
  });
  window.addEventListener('test', null, opts);
} catch (e) {}
// if they are supported, setup the optional params
// IMPORTANT: FALSE doubles as the default CAPTURE value!
var passiveEvent = passiveEventSupported ? { capture: false, passive: true } : false;

/**
 * Check if `component` is visible in overflow container `parent`
 * @param  {node} component React component
 * @param  {node} parent    component's scroll parent
 * @return {bool}
 */
var checkOverflowVisible = function checkOverflowVisible(component, parent) {
  var node = _reactDom2.default.findDOMNode(component);

  var parentTop = void 0;
  var parentHeight = void 0;

  try {
    var _parent$getBoundingCl = parent.getBoundingClientRect();

    parentTop = _parent$getBoundingCl.top;
    parentHeight = _parent$getBoundingCl.height;
  } catch (e) {
    parentTop = defaultBoundingClientRect.top;
    parentHeight = defaultBoundingClientRect.height;
  }

  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;

  // calculate top and height of the intersection of the element's scrollParent and viewport
  var intersectionTop = Math.max(parentTop, 0); // intersection's top relative to viewport
  var intersectionHeight = Math.min(windowInnerHeight, parentTop + parentHeight) - intersectionTop; // height

  // check whether the element is visible in the intersection
  var top = void 0;
  var height = void 0;

  try {
    var _node$getBoundingClie = node.getBoundingClientRect();

    top = _node$getBoundingClie.top;
    height = _node$getBoundingClie.height;
  } catch (e) {
    top = defaultBoundingClientRect.top;
    height = defaultBoundingClientRect.height;
  }

  var offsetTop = top - intersectionTop; // element's top relative to intersection

  var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset]; // Be compatible with previous API

  return offsetTop - offsets[0] <= intersectionHeight && offsetTop + height + offsets[1] >= 0;
};

/**
 * Check if `component` is visible in document
 * @param  {node} component React component
 * @return {bool}
 */
var checkNormalVisible = function checkNormalVisible(component) {
  var node = _reactDom2.default.findDOMNode(component);

  // If this element is hidden by css rules somehow, it's definitely invisible
  if (!(node.offsetWidth || node.offsetHeight || node.getClientRects().length)) return false;

  var top = void 0;
  var elementHeight = void 0;

  try {
    var _node$getBoundingClie2 = node.getBoundingClientRect();

    top = _node$getBoundingClie2.top;
    elementHeight = _node$getBoundingClie2.height;
  } catch (e) {
    top = defaultBoundingClientRect.top;
    elementHeight = defaultBoundingClientRect.height;
  }

  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;

  var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset]; // Be compatible with previous API

  return top - offsets[0] <= windowInnerHeight && top + elementHeight + offsets[1] >= 0;
};

/**
 * Detect if element is visible in viewport, if so, set `visible` state to true.
 * If `once` prop is provided true, remove component as listener after checkVisible
 *
 * @param  {React} component   React component that respond to scroll and resize
 */
var checkVisible = function checkVisible(component) {
  var node = _reactDom2.default.findDOMNode(component);
  if (!node) {
    return;
  }

  var parent = (0, _scrollParent2.default)(node);
  var isOverflow = component.props.overflow && parent !== node.ownerDocument && parent !== document && parent !== document.documentElement;
  var visible = isOverflow ? checkOverflowVisible(component, parent) : checkNormalVisible(component);
  if (visible) {
    // Avoid extra render if previously is visible
    if (!component.visible) {
      if (component.props.once) {
        pending.push(component);
      }

      component.visible = true;
      component.forceUpdate();
    }
  } else if (!(component.props.once && component.visible)) {
    component.visible = false;
    if (component.props.unmountIfInvisible) {
      component.forceUpdate();
    }
  }
};

var purgePending = function purgePending() {
  pending.forEach(function (component) {
    var index = listeners.indexOf(component);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  });

  pending = [];
};

var lazyLoadHandler = function lazyLoadHandler() {
  for (var i = 0; i < listeners.length; ++i) {
    var listener = listeners[i];
    checkVisible(listener);
  }
  // Remove `once` component in listeners
  purgePending();
};

// Depending on component's props
var delayType = void 0;
var finalLazyLoadHandler = null;

var LazyLoad = function (_Component) {
  _inherits(LazyLoad, _Component);

  function LazyLoad(props) {
    _classCallCheck(this, LazyLoad);

    var _this = _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).call(this, props));

    _this.visible = false;
    return _this;
  }

  _createClass(LazyLoad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof process !== 'undefined' && "production" !== 'production') {
        if (_react2.default.Children.count(this.props.children) > 1) {
          console.warn('[react-lazyload] Only one child is allowed to be passed to `LazyLoad`.');
        }

        if (this.props.wheel) {
          // eslint-disable-line
          console.warn('[react-lazyload] Props `wheel` is not supported anymore, try set `overflow` for lazy loading in overflow containers.');
        }

        // Warn the user if placeholder and height is not specified and the rendered height is 0
        if (!this.props.placeholder && this.props.height === undefined && _reactDom2.default.findDOMNode(this).offsetHeight === 0) {
          console.warn('[react-lazyload] Please add `height` props to <LazyLoad> for better performance.');
        }
      }

      // It's unlikely to change delay type on the fly, this is mainly
      // designed for tests
      var needResetFinalLazyLoadHandler = false;
      if (this.props.debounce !== undefined && delayType === 'throttle') {
        console.warn('[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously');
        needResetFinalLazyLoadHandler = true;
      } else if (delayType === 'debounce' && this.props.debounce === undefined) {
        console.warn('[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously');
        needResetFinalLazyLoadHandler = true;
      }

      if (needResetFinalLazyLoadHandler) {
        (0, _event.off)(window, 'scroll', finalLazyLoadHandler, passiveEvent);
        (0, _event.off)(window, 'resize', finalLazyLoadHandler, passiveEvent);
        finalLazyLoadHandler = null;
      }

      if (!finalLazyLoadHandler) {
        if (this.props.debounce !== undefined) {
          finalLazyLoadHandler = (0, _debounce2.default)(lazyLoadHandler, typeof this.props.debounce === 'number' ? this.props.debounce : 300);
          delayType = 'debounce';
        } else if (this.props.throttle !== undefined) {
          finalLazyLoadHandler = (0, _throttle2.default)(lazyLoadHandler, typeof this.props.throttle === 'number' ? this.props.throttle : 300);
          delayType = 'throttle';
        } else {
          finalLazyLoadHandler = lazyLoadHandler;
        }
      }

      if (this.props.overflow) {
        var parent = (0, _scrollParent2.default)(_reactDom2.default.findDOMNode(this));
        if (parent && typeof parent.getAttribute === 'function') {
          var listenerCount = 1 + +parent.getAttribute(LISTEN_FLAG);
          if (listenerCount === 1) {
            parent.addEventListener('scroll', finalLazyLoadHandler, passiveEvent);
          }
          parent.setAttribute(LISTEN_FLAG, listenerCount);
        }
      } else if (listeners.length === 0 || needResetFinalLazyLoadHandler) {
        var _props = this.props,
            scroll = _props.scroll,
            resize = _props.resize;


        if (scroll) {
          (0, _event.on)(window, 'scroll', finalLazyLoadHandler, passiveEvent);
        }

        if (resize) {
          (0, _event.on)(window, 'resize', finalLazyLoadHandler, passiveEvent);
        }
      }

      listeners.push(this);
      checkVisible(this);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return this.visible;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.overflow) {
        var parent = (0, _scrollParent2.default)(_reactDom2.default.findDOMNode(this));
        if (parent && typeof parent.getAttribute === 'function') {
          var listenerCount = +parent.getAttribute(LISTEN_FLAG) - 1;
          if (listenerCount === 0) {
            parent.removeEventListener('scroll', finalLazyLoadHandler, passiveEvent);
            parent.removeAttribute(LISTEN_FLAG);
          } else {
            parent.setAttribute(LISTEN_FLAG, listenerCount);
          }
        }
      }

      var index = listeners.indexOf(this);
      if (index !== -1) {
        listeners.splice(index, 1);
      }

      if (listeners.length === 0) {
        (0, _event.off)(window, 'resize', finalLazyLoadHandler, passiveEvent);
        (0, _event.off)(window, 'scroll', finalLazyLoadHandler, passiveEvent);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.visible ? this.props.children : this.props.placeholder ? this.props.placeholder : _react2.default.createElement('div', { style: { height: this.props.height }, className: 'lazyload-placeholder' });
    }
  }]);

  return LazyLoad;
}(_react.Component);

LazyLoad.propTypes = {
  once: _propTypes2.default.bool,
  height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  offset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
  overflow: _propTypes2.default.bool,
  resize: _propTypes2.default.bool,
  scroll: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  throttle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  debounce: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  placeholder: _propTypes2.default.node,
  unmountIfInvisible: _propTypes2.default.bool
};

LazyLoad.defaultProps = {
  once: false,
  offset: 0,
  overflow: false,
  resize: false,
  scroll: true,
  unmountIfInvisible: false
};

var lazyload = exports.lazyload = _decorator2.default;
exports.default = LazyLoad;
exports.forceCheck = lazyLoadHandler;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(242)))

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_lottie__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_lottie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_lottie__);


var loadingAnimationData = __webpack_require__(241);
var loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimationData
};
/* harmony default export */ __webpack_exports__["a"] = (function (_a) {
    var text = _a.text;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { margin: '0 auto', color: '#2dabe2' } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_lottie___default.a, { options: loadingOptions, height: 60, width: 60 }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, text)));
});;


/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = {"v":"4.7.1","fr":24,"ip":0,"op":20,"w":560,"h":420,"nm":"合成 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":2,"ty":4,"nm":"2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[280,210,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"st","c":{"a":0,"k":[0.2156863,0.3686275,0.7568627,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":6},"lc":1,"lj":1,"ml":4,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 2","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-82.5,-27],[-24,39],[67.5,-48]],"c":false}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"st","c":{"a":0,"k":[0.2156863,0.3686275,0.7568627,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":6},"lc":1,"lj":1,"ml":4,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":26,"s":[0],"e":[21]},{"t":29}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":20,"s":[0],"e":[86]},{"t":29}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim"}],"ip":0,"op":240,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[280,210,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[169.516,169.516]},"p":{"a":0,"k":[0,0]},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0.2156863,0.3686275,0.7568627,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":6},"lc":1,"lj":1,"ml":4,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[-0.031,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[101.786,101.786],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"椭圆 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[100],"e":[80]},{"t":2}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":20,"s":[100],"e":[80]},{"t":23}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":2,"s":[0],"e":[-360]},{"t":20}],"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim"}],"ip":0,"op":240,"st":0,"bm":0,"sr":1}]}

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = on;
exports.off = off;
function on(el, eventName, callback, opts) {
  opts = opts || false;
  if (el.addEventListener) {
    el.addEventListener(eventName, callback, opts);
  } else if (el.attachEvent) {
    el.attachEvent("on" + eventName, function (e) {
      callback.call(el, e || window.event);
    });
  }
}

function off(el, eventName, callback, opts) {
  opts = opts || false;
  if (el.removeEventListener) {
    el.removeEventListener(eventName, callback, opts);
  } else if (el.detachEvent) {
    el.detachEvent("on" + eventName, callback);
  }
}

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @fileOverview Find scroll parent
 */

exports.default = function (node) {
  if (!node) {
    return document.documentElement;
  }

  var excludeStaticParent = node.style.position === 'absolute';
  var overflowRegex = /(scroll|auto)/;
  var parent = node;

  while (parent) {
    if (!parent.parentNode) {
      return node.ownerDocument || document.documentElement;
    }

    var style = window.getComputedStyle(parent);
    var position = style.position;
    var overflow = style.overflow;
    var overflowX = style['overflow-x'];
    var overflowY = style['overflow-y'];

    if (position === 'static' && excludeStaticParent) {
      parent = parent.parentNode;
      continue;
    }

    if (overflowRegex.test(overflow) && overflowRegex.test(overflowX) && overflowRegex.test(overflowY)) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return node.ownerDocument || node.documentElement || document.documentElement;
};

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
function debounce(func, wait, immediate) {
  var timeout = void 0;
  var args = void 0;
  var context = void 0;
  var timestamp = void 0;
  var result = void 0;

  var later = function later() {
    var last = +new Date() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) {
          context = null;
          args = null;
        }
      }
    }
  };

  return function debounced() {
    context = this;
    args = arguments;
    timestamp = +new Date();

    var callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }

    if (callNow) {
      result = func.apply(context, args);
      context = null;
      args = null;
    }

    return result;
  };
}

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = throttle;
/*eslint-disable */
function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last, deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date(),
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(239);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function lazyload(WrappedComponent) {
    return function (_Component) {
      _inherits(LazyLoadDecorated, _Component);

      function LazyLoadDecorated() {
        _classCallCheck(this, LazyLoadDecorated);

        var _this = _possibleConstructorReturn(this, (LazyLoadDecorated.__proto__ || Object.getPrototypeOf(LazyLoadDecorated)).call(this));

        _this.displayName = 'LazyLoad' + getDisplayName(WrappedComponent);
        return _this;
      }

      _createClass(LazyLoadDecorated, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            _index2.default,
            options,
            _react2.default.createElement(WrappedComponent, this.props)
          );
        }
      }]);

      return LazyLoadDecorated;
    }(_react.Component);
  };
};

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_lazyload__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_lazyload__);



var style = __webpack_require__(269);
/* harmony default export */ __webpack_exports__["a"] = (function (_a) {
    var data = _a.data, type = _a.type;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: type === 'coreTeam' ? style['team-item'] + " " + style.core : style['team-item'] + " " + style.advisors },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.main },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_lazyload___default.a, { height: 200 },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "" + __WEBPACK_IMPORTED_MODULE_1__utils_config__["a" /* default */].IMAGE_URL + data.picture })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", null, data.name),
            type === 'coreTeam'
                ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: style.position }, data.position)
                : null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, data.description))));
});;


/***/ }),

/***/ 269:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"team-item":"team-item_37g3Uhtz","core":"core_2npds6Oy","main":"main_31jBzP_n","advisors":"advisors_38rE95Oq","position":"position_DH_GVVz0"};

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var style = __webpack_require__(271);
/* harmony default export */ __webpack_exports__["a"] = (function (_a) {
    var title = _a.title;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { className: style.title }, title));
});;


/***/ }),

/***/ 271:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"title_1orOj2y1"};

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"team":"team_2Es_Tguo","content":"content_3tBjPc7R","header":"header_2H5At4H9","title":"title_3lVSTRaP","core-team":"core-team_2A7-kgC3","advisors":"advisors_2WmDDf5R","our-partners":"our-partners_kzbhCoLp","images":"images_1FQvWNLt"};

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/okex.37933c90.png";

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ripioCredit.7427f332.png";

/***/ })

});