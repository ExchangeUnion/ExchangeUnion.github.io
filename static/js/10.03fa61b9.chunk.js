webpackJsonp([10],{

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_icon_close__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(9);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var style = __webpack_require__(281);
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound(props) {
        var _this = _super.call(this, props) || this;
        _this.onClose = _this.onClose.bind(_this);
        return _this;
    }
    NotFound.prototype.componentDidMount = function () {
        document.body.classList.add('error');
    };
    NotFound.prototype.onClose = function () {
        this.props.history.push('/');
    };
    NotFound.prototype.componentWillUnmount = function () {
        document.body.classList.remove('error');
    };
    NotFound.prototype.render = function () {
        var i18n = this.props.i18n;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.notFound },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.content },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.title },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, i18n.NOT_FOUND_PAGE_TITLE),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, i18n.NOT_FOUND_PAGE_EXPRESSION),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, i18n.NOT_FOUND_PAGE_DESCRIPTION)),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.text, dangerouslySetInnerHTML: { __html: i18n.NOT_FOUND_PAGE_TEXT1_NORMAL } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "javascript:;", className: style.close, onClick: this.onClose },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__resources_icon_close__["a" /* default */], { color: "#fff" })))));
    };
    NotFound = __decorate([
        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["g" /* withRouter */]
    ], NotFound);
    return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (NotFound);


/***/ }),

/***/ 281:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"notFound":"notFound_2mKpEIzC","content":"content_2NQ8SYtl","title":"title_2GeZ0rPF","text":"text_1EGEXQYS","close":"close_1fpqHA3I"};

/***/ })

});