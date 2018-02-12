webpackJsonp([2],{215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=(n.n(r),n(227)),i=n(239),a=n(27),l=n(25),u=n(241),s=n(266),c=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),p=n(267),f=n(268),d=[1,2,3,4,5],m=[1,2,3,4,5,6,7,8],h=function(e){function t(t){var n=e.call(this,t)||this;return n.lock=!1,n.state={loading:!0,exchangeData:[],tokenData:[],transparencyData:[]},n.formatData=n.formatData.bind(n),n.formatNumber=n.formatNumber.bind(n),n}return c(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.setPageview("/xuc");var t=l.a.API_PATH_EXCHANGE+"?lang="+this.props.lang+"&key="+l.a.API_KEY;a.a.Get(t).then(function(t){e.lock||e.setState({exchangeData:t,loading:!1})});var n=l.a.API_PATH_TOKEN+"?lang="+this.props.lang+"&key="+l.a.API_KEY;a.a.Get(n).then(function(t){e.lock||e.setState({tokenData:t})});var r=l.a.API_PATH_TRANSPARENCY+"?lang="+this.props.lang+"&key="+l.a.API_KEY;a.a.Get(r).then(function(t){e.lock||e.setState({transparencyData:t})})},t.prototype.formatNumber=function(e){return(e+"").split("").reverse().join("").split("000").join("000,").split("").reverse().join("")},t.prototype.formatData=function(){var e=this.state.exchangeData||[],t=[],n=[],r=[];return e.map(function(e){e.xuC_BTC&&t.push({title:e.title,logo:e.logo,link:e.xuC_BTC_Link}),e.xuC_ETH&&n.push({title:e.title,logo:e.logo,link:e.xuC_ETH_Link}),e.xuC_USDT&&r.push({title:e.title,logo:e.logo,link:e.xuC_USDT_Link})}),{BTCData:t,ETHData:n,USDTData:r}},t.prototype.componentWillUnmount=function(){this.lock=!0},t.prototype.render=function(){var e=this,t=this.props,n=t.i18n,a=t.lang,l=this.state,c=l.loading,h=l.tokenData,E=l.transparencyData,_=this.formatData();return r.createElement("div",{className:p.xuc},r.createElement("div",{className:p.header},r.createElement("div",{className:p.content},r.createElement(i.a,null,r.createElement(o.a,null,r.createElement("p",{className:p.text+" "+p.title},r.createElement("span",null,n.XUC_PAGE_TITLE_XUC),r.createElement("br",null),n.XUC_PAGE_SUB_TITLE))))),r.createElement("div",{className:p.overview},r.createElement("div",{className:p.content},r.createElement(i.a,null,r.createElement(o.a,null,r.createElement("p",{className:p.titleBlue},n.XUC_PAGE_PART1_TITLE))),r.createElement("div",{className:p.svg},r.createElement("div",null,r.createElement("p",null,n.XUC_PAGE_PART1_TOP_SCRIPTION),r.createElement("div",{className:p.subtitle},r.createElement("h3",null,n.XUC_PAGE_PART1_SUBTITLE),r.createElement("span",null,n.XUC_PAGE_PART1_DESCRIPTION),r.createElement("ul",null,r.createElement("li",null,n.XUC_PAGE_PART1_DESCRIPTION_ROLE1),r.createElement("li",null,n.XUC_PAGE_PART1_DESCRIPTION_ROLE2),r.createElement("li",null,n.XUC_PAGE_PART1_DESCRIPTION_ROLE3),r.createElement("li",null,r.createElement("span",null,n.XUC_PAGE_PART1_Functionaries),r.createElement("ul",null,r.createElement("li",null,n.XUC_PAGE_PART1_Functionaries_PART1),r.createElement("li",null,n.XUC_PAGE_PART1_Functionaries_GET),r.createElement("li",null,n.XUC_PAGE_PART1_Functionaries_PART3)))))),r.createElement("div",null,r.createElement("img",{src:f}),r.createElement("p",{className:p.info},r.createElement("span",null,n.XUC_PAGE_PART1_TOKEN_STANDARD),r.createElement("a",{href:"https://coinmarketcap.com/currencies/exchange-union/",target:"_blank"},n.XUC_PAGE_PART1_TOKEN_SUPPLY),r.createElement("a",{href:"https://coinmarketcap.com/currencies/exchange-union/",target:"_blank"},n.XUC_PAGE_PART1_TOKEN_CIRCULATINGSUPPLY),r.createElement("a",{href:"https://etherscan.io/token/0xc324a2f6b05880503444451b8b27e6f9e63287cb",target:"_blank"},n.XUC_PAGE_PART1_TOKEN_CONTRACT)))))),r.createElement("div",{className:p.part2},r.createElement("div",{className:p.content},r.createElement(i.a,null,r.createElement(o.a,null,r.createElement("p",{className:p.title},n.XUC_PAGE_PART2_TITLE))),r.createElement("div",{className:p.tablemod},r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,d.map(function(e,t){return r.createElement("td",{key:e},n["XUC_PAGE_PART2_TABLE_THEAD_TEXT"+e])}))),r.createElement("tbody",null,m.map(function(e,t){return r.createElement("tr",{key:e},d.map(function(t,o){return r.createElement("td",{key:t},n["XUC_PAGE_PART2_TABLE_TR"+e+"_TEXT"+t])}))})),r.createElement("tfoot",null,r.createElement("tr",null,d.map(function(e,t){return r.createElement("td",{key:e},n["XUC_PAGE_PART2_TABLE_TFOOT_TEXT"+e])})))),r.createElement("p",{className:p.note},n.XUC_PAGE_PART2_TABLE_NOTE)),r.createElement("div",{className:p.store},r.createElement("h3",null,n.XUC_PAGE_PART2_STORE_TITLE1,r.createElement("p",null,r.createElement("span",null,n.XUC_PAGE_PART2_STORE_TITLE3),n.XUC_PAGE_PART2_STORE_TITLE4),n.XUC_PAGE_PART2_STORE_TITLE2),0===h.length?r.createElement(u.a,{text:n.NEWS_PAGE_LOADING}):h.map(function(t,o){var i;return"1"===t.rand?i=p.firstPillar:"2"===t.rand?i=p.secondPillar:"3"===t.rand&&(i=p.thirdPillar),r.createElement("dl",{className:i,key:t.rand},r.createElement("dt",null,n.XUC_PAGE_PART2_STORE_ITEM1_TEXT1),r.createElement("dd",null,r.createElement("i",{style:{width:"100%"}}),r.createElement("span",null,n.XUC_PAGE_PART2_STORE_ITEM1_TEXT2,e.formatNumber(t.quantity))))})))),r.createElement("div",{className:p.part3},r.createElement("div",{className:p.content},r.createElement(i.a,null,r.createElement(o.a,null,r.createElement("p",{className:p.title},n.XUC_PAGE_PART3_TITLE))),r.createElement("p",{className:p.des},n.XUC_PAGE_PART3_DESCRIPTION),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,d.map(function(e,t){return r.createElement("td",{key:e},n["XUC_PAGE_PART3_TABLE_THEAD_TEXT"+e])}))),r.createElement("tbody",null,0===E.length?r.createElement("tr",null,r.createElement("td",{colSpan:5},r.createElement(u.a,{text:n.NEWS_PAGE_LOADING}))):E.map(function(t,n){return r.createElement("tr",{key:t.id},r.createElement("td",null,t.address),r.createElement("td",null,new Date(t.time).toDateString()),r.createElement("td",null,e.formatNumber(t.txHash)),r.createElement("td",null,0===t.reason?"-":t.reason),r.createElement("td",null,0===t.amount?"-":t.amount))}))))),r.createElement("div",{className:p.overview},r.createElement("div",{className:p.content},r.createElement(i.a,null,r.createElement(o.a,null,r.createElement("p",{className:p.titleGrey},n.XUC_PAGE_GET_TITLE))),r.createElement("div",{className:p.links},r.createElement("p",null,n.XUC_PAGE_GET_XUCBTC),_.BTCData.map(function(e){return r.createElement(s.a,{key:Math.random(),data:e})}),c?r.createElement(u.a,{text:n.NEWS_PAGE_LOADING}):null),r.createElement("div",{className:p.links},r.createElement("p",null,n.XUC_PAGE_GET_XUCETH),_.ETHData.map(function(e){return r.createElement(s.a,{key:Math.random(),data:e})}),c?r.createElement(u.a,{text:n.NEWS_PAGE_LOADING}):null),r.createElement("div",{className:p.links},r.createElement("p",null,n.XUC_PAGE_GET_XUCUSDT),_.USDTData.map(function(e){return r.createElement(s.a,{key:Math.random(),data:e})}),c?r.createElement(u.a,{text:n.NEWS_PAGE_LOADING}):null)),r.createElement("div",{className:p.content},"zh-CN"===a?r.createElement("p",{className:p.call},n.XUC_PAGE_PART3_PHONE):null)))},t}(r.Component);t.default=h},225:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=!("undefined"===typeof window||!window.document||!window.document.createElement),e.exports=t.default},226:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!==typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=o;var i=n(0),a=(r(i),n(2)),l=r(a);t.nameShape=l.default.oneOfType([l.default.string,l.default.shape({enter:l.default.string,leave:l.default.string,active:l.default.string}),l.default.shape({enter:l.default.string,enterActive:l.default.string,leave:l.default.string,leaveActive:l.default.string,appear:l.default.string,appearActive:l.default.string})])},227:function(e,t,n){"use strict";var r=n(0),o=(n.n(r),n(228)),i=n.n(o),a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=function(e){function t(t){return e.call(this,t)||this}return a(t,e),t.prototype.render=function(){return r.createElement(i.a,{component:"div",className:"react-container",transitionName:"slide-in",transitionAppear:!0,transitionAppearTimeout:1500,transitionEnterTimeout:1500,transitionLeaveTimeout:1500},this.props.children)},t}(r.Component);t.a=l},228:function(e,t,n){"use strict";e.exports=n(229)},229:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(0),s=r(u),c=n(2),p=r(c),f=n(230),d=r(f),m=n(233),h=r(m),E=n(226),_=(E.nameShape.isRequired,p.default.bool,p.default.bool,p.default.bool,(0,E.transitionTimeout)("Appear"),(0,E.transitionTimeout)("Enter"),(0,E.transitionTimeout)("Leave"),{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}),v=function(e){function t(){var n,r,a;o(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=r=i(this,e.call.apply(e,[this].concat(u))),r._wrapChild=function(e){return s.default.createElement(h.default,{name:r.props.transitionName,appear:r.props.transitionAppear,enter:r.props.transitionEnter,leave:r.props.transitionLeave,appearTimeout:r.props.transitionAppearTimeout,enterTimeout:r.props.transitionEnterTimeout,leaveTimeout:r.props.transitionLeaveTimeout},e)},a=n,i(r,a)}return a(t,e),t.prototype.render=function(){return s.default.createElement(d.default,l({},this.props,{childFactory:this._wrapChild}))},t}(s.default.Component);v.displayName="CSSTransitionGroup",v.propTypes={},v.defaultProps=_,t.default=v,e.exports=t.default},230:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(231),s=r(u),c=n(0),p=r(c),f=n(2),d=r(f),m=n(1),h=(r(m),n(232)),E=(d.default.any,d.default.func,d.default.node,{component:"span",childFactory:function(e){return e}}),_=function(e){function t(n,r){o(this,t);var a=i(this,e.call(this,n,r));return a.performAppear=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(a._handleDoneAppearing.bind(a,e,t)):a._handleDoneAppearing(e,t)},a._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performEnter=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(a._handleDoneEntering.bind(a,e,t)):a._handleDoneEntering(e,t)},a._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performLeave=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(a._handleDoneLeaving.bind(a,e,t)):a._handleDoneLeaving(e,t)},a._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)?a.keysToEnter.push(e):a.setState(function(t){var n=l({},t.children);return delete n[e],{children:n}})},a.childRefs=Object.create(null),a.state={children:(0,h.getChildMapping)(n.children)},a}return a(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,h.getChildMapping)(e.children),n=this.state.children;this.setState({children:(0,h.mergeChildMappings)(n,t)});for(var r in t){var o=n&&n.hasOwnProperty(r);!t[r]||o||this.currentlyTransitioningKeys[r]||this.keysToEnter.push(r)}for(var i in n){var a=t&&t.hasOwnProperty(i);!n[i]||a||this.currentlyTransitioningKeys[i]||this.keysToLeave.push(i)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach(function(t){return e.performEnter(t,e.childRefs[t])});var n=this.keysToLeave;this.keysToLeave=[],n.forEach(function(t){return e.performLeave(t,e.childRefs[t])})},t.prototype.render=function(){var e=this,t=[];for(var n in this.state.children)!function(n){var r=e.state.children[n];if(r){var o="string"!==typeof r.ref,i=e.props.childFactory(r),a=function(t){e.childRefs[n]=t};i===r&&o&&(a=(0,s.default)(r.ref,a)),t.push(p.default.cloneElement(i,{key:n,ref:a}))}}(n);var r=l({},this.props);return delete r.transitionLeave,delete r.transitionName,delete r.transitionAppear,delete r.transitionEnter,delete r.childFactory,delete r.transitionLeaveTimeout,delete r.transitionEnterTimeout,delete r.transitionAppearTimeout,delete r.component,p.default.createElement(this.props.component,r,t)},t}(p.default.Component);_.displayName="TransitionGroup",_.propTypes={},_.defaultProps=E,t.default=_,e.exports=t.default},231:function(e,t){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(t=t.filter(function(e){return null!=e}),0!==t.length)return 1===t.length?t[0]:t.reduce(function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}})}},232:function(e,t,n){"use strict";function r(e){if(!e)return e;var t={};return i.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e}),t}function o(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var r={},o=[];for(var i in e)t.hasOwnProperty(i)?o.length&&(r[i]=o,o=[]):o.push(i);var a=void 0,l={};for(var u in t){if(r.hasOwnProperty(u))for(a=0;a<r[u].length;a++){var s=r[u][a];l[r[u][a]]=n(s)}l[u]=n(u)}for(a=0;a<o.length;a++)l[o[a]]=n(o[a]);return l}t.__esModule=!0,t.getChildMapping=r,t.mergeChildMappings=o;var i=n(0)},233:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){return g.length?g.forEach(function(n){return e.addEventListener(n,t,!1)}):setTimeout(t,0),function(){g.length&&g.forEach(function(n){return e.removeEventListener(n,t,!1)})}}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(234),c=r(s),p=n(236),f=r(p),d=n(237),m=r(d),h=n(238),E=n(0),_=r(E),v=n(2),y=r(v),T=n(51),b=n(226),g=[];h.transitionEnd&&g.push(h.transitionEnd),h.animationEnd&&g.push(h.animationEnd);var A=(y.default.node,b.nameShape.isRequired,y.default.bool,y.default.bool,y.default.bool,y.default.number,y.default.number,y.default.number,function(e){function t(){var n,r,a;o(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=r=i(this,e.call.apply(e,[this].concat(u))),r.componentWillAppear=function(e){r.props.appear?r.transition("appear",e,r.props.appearTimeout):e()},r.componentWillEnter=function(e){r.props.enter?r.transition("enter",e,r.props.enterTimeout):e()},r.componentWillLeave=function(e){r.props.leave?r.transition("leave",e,r.props.leaveTimeout):e()},a=n,i(r,a)}return a(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var r=(0,T.findDOMNode)(this);if(!r)return void(t&&t());var o=this.props.name[e]||this.props.name+"-"+e,i=this.props.name[e+"Active"]||o+"-active",a=null,u=void 0;(0,c.default)(r,o),this.queueClassAndNode(i,r);var s=function(e){e&&e.target!==r||(clearTimeout(a),u&&u(),(0,f.default)(r,o),(0,f.default)(r,i),u&&u(),t&&t())};n?(a=setTimeout(s,n),this.transitionTimeouts.push(a)):h.transitionEnd&&(u=l(r,s))},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,m.default)(function(){return n.flushClassNameAndNodeQueue()}))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,c.default)(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=u({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,_.default.cloneElement(_.default.Children.only(this.props.children),e)},t}(_.default.Component));A.displayName="CSSTransitionGroupChild",A.propTypes={},t.default=A,e.exports=t.default},234:function(e,t,n){"use strict";function r(e,t){e.classList?e.classList.add(t):(0,i.default)(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(235),i=function(e){return e&&e.__esModule?e:{default:e}}(o);e.exports=t.default},235:function(e,t,n){"use strict";function r(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},236:function(e,t,n){"use strict";function r(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=r(e.className,t):e.setAttribute("class",r(e.className&&e.className.baseVal||"",t))}},237:function(e,t,n){"use strict";function r(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-p)),r=setTimeout(e,n);return p=t,r}Object.defineProperty(t,"__esModule",{value:!0});var o=n(225),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=["","webkit","moz","o","ms"],l="clearTimeout",u=r,s=void 0,c=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};i.default&&a.some(function(e){var t=c(e,"request");if(t in window)return l=c(e,"cancel"),u=function(e){return window[t](e)}});var p=(new Date).getTime();s=function(e){return u(e)},s.cancel=function(e){window[l]&&"function"===typeof window[l]&&window[l](e)},t.default=s,e.exports=t.default},238:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var r=n(225),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i="transform",a=void 0,l=void 0,u=void 0,s=void 0,c=void 0,p=void 0,f=void 0,d=void 0,m=void 0,h=void 0,E=void 0;if(o.default){var _=function(){for(var e=document.createElement("div").style,t={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},n=Object.keys(t),r=void 0,o=void 0,i="",a=0;a<n.length;a++){var l=n[a];if(l+"TransitionProperty"in e){i="-"+l.toLowerCase(),r=t[l]("TransitionEnd"),o=t[l]("AnimationEnd");break}}return!r&&"transitionProperty"in e&&(r="transitionend"),!o&&"animationName"in e&&(o="animationend"),e=null,{animationEnd:o,transitionEnd:r,prefix:i}}();a=_.prefix,t.transitionEnd=l=_.transitionEnd,t.animationEnd=u=_.animationEnd,t.transform=i=a+"-"+i,t.transitionProperty=s=a+"-transition-property",t.transitionDuration=c=a+"-transition-duration",t.transitionDelay=f=a+"-transition-delay",t.transitionTiming=p=a+"-transition-timing-function",t.animationName=d=a+"-animation-name",t.animationDuration=m=a+"-animation-duration",t.animationTiming=h=a+"-animation-delay",t.animationDelay=E=a+"-animation-timing-function"}t.transform=i,t.transitionProperty=s,t.transitionTiming=p,t.transitionDelay=f,t.transitionDuration=c,t.transitionEnd=l,t.animationName=d,t.animationDuration=m,t.animationTiming=h,t.animationDelay=E,t.animationEnd=u,t.default={transform:i,end:l,property:s,timing:p,delay:f,duration:c}},239:function(e,t,n){"use strict";var r=n(0),o=(n.n(r),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),i=function(e){function t(t){var n=e.call(this,t)||this;return n.DOMElement={},n.state={init:!1},n.handleScroll=n.handleScroll.bind(n),n}return o(t,e),t.prototype.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll),setTimeout(this.handleScroll)},t.prototype.handleScroll=function(){var e=window.scrollY;window.navigator.userAgent.indexOf("Trident/7.0")>=0&&(e=document.documentElement.scrollTop);var t=this.DOMElement.myRef;this.DOMElement.myRef&&window.innerHeight+e>t.offsetTop&&this.setState({init:!0})},t.prototype.render=function(){var e=this;return r.createElement("span",{ref:function(t){e.DOMElement.myRef=t}},this.state.init?this.props.children:null)},t}(r.Component);t.a=i},240:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(51),p=r(c),f=n(2),d=r(f),m=n(244),h=n(245),E=r(h),_=n(246),v=r(_),y=n(247),T=r(y),b=n(248),g=r(b),A={top:0,right:0,bottom:0,left:0,width:0,height:0},w="data-lazyload-listened",P=[],k=[],O=!1;try{var N=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,N)}catch(e){}var C=!!O&&{capture:!1,passive:!0},x=function(e,t){var n=p.default.findDOMNode(e),r=void 0,o=void 0;try{var i=t.getBoundingClientRect();r=i.top,o=i.height}catch(e){r=A.top,o=A.height}var a=window.innerHeight||document.documentElement.clientHeight,l=Math.max(r,0),u=Math.min(a,r+o)-l,s=void 0,c=void 0;try{var f=n.getBoundingClientRect();s=f.top,c=f.height}catch(e){s=A.top,c=A.height}var d=s-l,m=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return d-m[0]<=u&&d+c+m[1]>=0},D=function(e){var t=p.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var o=t.getBoundingClientRect();n=o.top,r=o.height}catch(e){n=A.top,r=A.height}var i=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=i&&n+r+a[1]>=0},L=function(e){var t=p.default.findDOMNode(e);if(t){var n=(0,E.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?x(e,n):D(e))?e.visible||(e.props.once&&k.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},R=function(){k.forEach(function(e){var t=P.indexOf(e);-1!==t&&P.splice(t,1)}),k=[]},G=function(){for(var e=0;e<P.length;++e){var t=P[e];L(t)}R()},S=void 0,M=null,U=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){var e=!1;if(void 0!==this.props.debounce&&"throttle"===S?(console.warn("[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously"),e=!0):"debounce"===S&&void 0===this.props.debounce&&(console.warn("[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously"),e=!0),e&&((0,m.off)(window,"scroll",M,C),(0,m.off)(window,"resize",M,C),M=null),M||(void 0!==this.props.debounce?(M=(0,v.default)(G,"number"===typeof this.props.debounce?this.props.debounce:300),S="debounce"):void 0!==this.props.throttle?(M=(0,T.default)(G,"number"===typeof this.props.throttle?this.props.throttle:300),S="throttle"):M=G),this.props.overflow){var t=(0,E.default)(p.default.findDOMNode(this));if(t&&"function"===typeof t.getAttribute){var n=+t.getAttribute(w)+1;1===n&&t.addEventListener("scroll",M,C),t.setAttribute(w,n)}}else if(0===P.length||e){var r=this.props,o=r.scroll,i=r.resize;o&&(0,m.on)(window,"scroll",M,C),i&&(0,m.on)(window,"resize",M,C)}P.push(this),L(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,E.default)(p.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(w)-1;0===t?(e.removeEventListener("scroll",M,C),e.removeAttribute(w)):e.setAttribute(w,t)}}var n=P.indexOf(this);-1!==n&&P.splice(n,1),0===P.length&&((0,m.off)(window,"resize",M,C),(0,m.off)(window,"scroll",M,C))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:s.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(u.Component);U.propTypes={once:d.default.bool,height:d.default.oneOfType([d.default.number,d.default.string]),offset:d.default.oneOfType([d.default.number,d.default.arrayOf(d.default.number)]),overflow:d.default.bool,resize:d.default.bool,scroll:d.default.bool,children:d.default.node,throttle:d.default.oneOfType([d.default.number,d.default.bool]),debounce:d.default.oneOfType([d.default.number,d.default.bool]),placeholder:d.default.node,unmountIfInvisible:d.default.bool},U.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=g.default;t.default=U,t.forceCheck=G}).call(t,n(243))},241:function(e,t,n){"use strict";var r=n(0),o=(n.n(r),n(26)),i=n.n(o),a=n(242),l={loop:!0,autoplay:!0,animationData:a};t.a=function(e){var t=e.text;return r.createElement("div",{style:{margin:"0 auto",color:"#2dabe2"}},r.createElement(i.a,{options:l,height:60,width:60}),r.createElement("p",null,t))}},242:function(e,t){e.exports={v:"4.7.1",fr:24,ip:0,op:20,w:560,h:420,nm:"\u5408\u6210 1",ddd:0,assets:[],layers:[{ddd:0,ind:2,ty:4,nm:"2",ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[280,210,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{ty:"st",c:{a:0,k:[.2156863,.3686275,.7568627,1]},o:{a:0,k:100},w:{a:0,k:6},lc:1,lj:1,ml:4,nm:"\u63cf\u8fb9 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"\u53d8\u6362"}],nm:"\u5f62\u72b6 2",np:2,cix:2,ix:1,mn:"ADBE Vector Group"},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-82.5,-27],[-24,39],[67.5,-48]],c:!1}},nm:"\u8def\u5f84 1",mn:"ADBE Vector Shape - Group"},{ty:"st",c:{a:0,k:[.2156863,.3686275,.7568627,1]},o:{a:0,k:100},w:{a:0,k:6},lc:1,lj:1,ml:4,nm:"\u63cf\u8fb9 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"\u53d8\u6362"}],nm:"\u5f62\u72b6 1",np:3,cix:2,ix:2,mn:"ADBE Vector Group"},{ty:"tm",s:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:26,s:[0],e:[21]},{t:29}],ix:1},e:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:20,s:[0],e:[86]},{t:29}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:3,nm:"\u4fee\u526a\u8def\u5f84 1",mn:"ADBE Vector Filter - Trim"}],ip:0,op:240,st:0,bm:0,sr:1},{ddd:0,ind:3,ty:4,nm:"3",ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[280,210,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[169.516,169.516]},p:{a:0,k:[0,0]},nm:"\u692d\u5706\u8def\u5f84 1",mn:"ADBE Vector Shape - Ellipse"},{ty:"st",c:{a:0,k:[.2156863,.3686275,.7568627,1]},o:{a:0,k:100},w:{a:0,k:6},lc:1,lj:1,ml:4,nm:"\u63cf\u8fb9 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[-.031,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[101.786,101.786],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"\u53d8\u6362"}],nm:"\u692d\u5706 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group"},{ty:"tm",s:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:0,s:[100],e:[80]},{t:2}],ix:1},e:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:20,s:[100],e:[80]},{t:23}],ix:2},o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:2,s:[0],e:[-360]},{t:20}],ix:3},m:1,ix:2,nm:"\u4fee\u526a\u8def\u5f84 1",mn:"ADBE Vector Filter - Trim"}],ip:0,op:240,st:0,bm:0,sr:1}]}},243:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(p===clearTimeout)return clearTimeout(e);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function a(){h&&d&&(h=!1,d.length?m=d.concat(m):E=-1,m.length&&l())}function l(){if(!h){var e=o(a);h=!0;for(var t=m.length;t;){for(d=m,m=[];++E<t;)d&&d[E].run();E=-1,t=m.length}d=null,h=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function s(){}var c,p,f=e.exports={};!function(){try{c="function"===typeof setTimeout?setTimeout:n}catch(e){c=n}try{p="function"===typeof clearTimeout?clearTimeout:r}catch(e){p=r}}();var d,m=[],h=!1,E=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new u(e,t)),1!==m.length||h||o(l)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=s,f.addListener=s,f.once=s,f.off=s,f.removeListener=s,f.removeAllListeners=s,f.emit=s,f.prependListener=s,f.prependOnceListener=s,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},244:function(e,t,n){"use strict";function r(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})}function o(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.on=r,t.off=o},245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(r),i=o.position,a=o.overflow,l=o["overflow-x"],u=o["overflow-y"];if("static"===i&&t)r=r.parentNode;else{if(n.test(a)&&n.test(l)&&n.test(u))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},246:function(e,t,n){"use strict";function r(e,t,n){var r=void 0,o=void 0,i=void 0,a=void 0,l=void 0,u=function u(){var s=+new Date-a;s<t&&s>=0?r=setTimeout(u,t-s):(r=null,n||(l=e.apply(i,o),r||(i=null,o=null)))};return function(){i=this,o=arguments,a=+new Date;var s=n&&!r;return r||(r=setTimeout(u,t)),s&&(l=e.apply(i,o),i=null,o=null),l}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},247:function(e,t,n){"use strict";function r(e,t,n){t||(t=250);var r,o;return function(){var i=n||this,a=+new Date,l=arguments;r&&a<r+t?(clearTimeout(o),o=setTimeout(function(){r=a,e.apply(i,l)},t)):(r=a,e.apply(i,l))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},248:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(240),p=r(c),f=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){o(this,r);var e=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+f(t),e}return a(r,n),l(r,[{key:"render",value:function(){return s.default.createElement(p.default,e,s.default.createElement(t,this.props))}}]),r}(u.Component)}}},266:function(e,t,n){"use strict";var r=n(0),o=(n.n(r),n(14)),i=(n.n(o),n(240)),a=n.n(i),l=n(25);t.a=function(e){var t=e.data;return r.createElement("a",{href:t.link,target:"_blank",onClick:function(){o.event({category:"XUC",action:"linkClick",label:t.title})}},r.createElement(a.a,{height:200},r.createElement("img",{style:{marginTop:"etherdelta"===t.title?"20px":"",marginBottom:"HitBTC"===t.title?"30px":""},alt:t.title,title:t.title,src:""+l.a.IMAGE_URL+t.logo})))}},267:function(e,t){e.exports={xuc:"xuc_3lp-am3y",content:"content_IcD1aKEj",call:"call_2udRpwWA",header:"header_2szUQyfy",title:"title_2htZ71W1",overview:"overview_3f_rqk4a",titleBlue:"titleBlue_2X3IgrBM",titleGrey:"titleGrey_16x69h8S",subtitle:"subtitle_2LzDqnzL",svg:"svg_2-uYHH0C",info:"info_32Ld6xMi",links:"links_1yZzBLGo",part2:"part2_2z-mZHL5",tablemod:"tablemod_2kDUbf3Q",note:"note_38kZ3Z2o",store:"store_1gNp5lbR",firstPillar:"firstPillar_2ygLfJTF",secondPillar:"secondPillar_1prEX4nD",thirdPillar:"thirdPillar_1DYfyiH9",part3:"part3_3rY9fnHY",des:"des_3Thkrsk6",text:"text_257R7xUz"}},268:function(e,t,n){e.exports=n.p+"static/media/overview.918d3832.png"}});