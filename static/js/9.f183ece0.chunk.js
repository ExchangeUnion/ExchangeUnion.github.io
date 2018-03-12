webpackJsonp([9],{

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http_help__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resources_icon_close__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_config__ = __webpack_require__(25);
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




var style = __webpack_require__(280);
var successImg = __webpack_require__(87);
var SubscribeSuccess = /** @class */ (function (_super) {
    __extends(SubscribeSuccess, _super);
    function SubscribeSuccess(props) {
        var _this = _super.call(this, props) || this;
        _this.onClose = _this.onClose.bind(_this);
        return _this;
    }
    SubscribeSuccess.prototype.componentDidMount = function () {
        document.body.classList.add('subscribe-success');
        var url = __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].API_PATH_SUBSCRIBE_SUCCESS + "?lang=" + this.props.lang + "&key=" + __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].API_KEY;
        __WEBPACK_IMPORTED_MODULE_1__utils_http_help__["a" /* HttpHelp */].Post(url, {
            email: this.props.match.params.base,
            Category: __WEBPACK_IMPORTED_MODULE_3__utils_config__["a" /* default */].APP_CATEGORY
        }).then(function (res) {
            console.log(res);
        });
    };
    SubscribeSuccess.prototype.onClose = function () {
        document.body.classList.remove('subscribe-success');
        this.props.history.push('/');
    };
    SubscribeSuccess.prototype.render = function () {
        var i18n = this.props.i18n;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.success },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: style.content },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: successImg }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, i18n.NEWS_PAGE_SUBSCRIBE_SUCCESS),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: style.close, onClick: this.onClose },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__resources_icon_close__["a" /* default */], { color: "#fff" })))));
    };
    return SubscribeSuccess;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (SubscribeSuccess);


/***/ }),

/***/ 280:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"success":"success_2wfK7qYJ","close":"close_3e6QdpbW","content":"content_FFi46T_V"};

/***/ })

});