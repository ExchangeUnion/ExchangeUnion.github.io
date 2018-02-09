webpackJsonp([5],{219:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=(t.n(o),t(26)),a=t(229),i=t(241),s=t(28),A=t(87),l=t(242),c=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),p=t(285),d=t(286),u=function(e){function n(n){var t=e.call(this,n)||this;return t.state={isAcc:!1},t}return c(n,e),n.prototype.componentDidMount=function(){var e=this;fetch("https://cdn-images-1.medium.com/max/800/1*3-dUp6DsQHa0VaA9K_e8Bg.jpeg").then(function(){e.setState({isAcc:!0})}).catch(function(e){console.log(e)})},n.prototype.onFormantDate=function(e){var n=new Date(e);return{year:n.getFullYear(),month:s.a.formantMonth(n.getMonth()),day:n.getDate()}},n.prototype.render=function(){var e=this,n=this.props,t=n.i18n,s=n.lang,c=n.lastBlogPost,u=n.lastPressPost,f=n.blogLoading,m=n.pressLoading,B=this.state.isAcc;return o.createElement("div",{className:d.news},o.createElement("div",{className:d.header},o.createElement("div",{className:d.content},o.createElement(i.a,null,o.createElement(a.a,null,o.createElement("div",{className:d.title},o.createElement("p",{className:d.titleText},t.NEWS_PAGE_TITLE),o.createElement("div",{className:d.subscribe},o.createElement("h4",null,t.NEWS_LETTER_FOOTER_TEXT),o.createElement(A.a,{i18n:t,lang:s}))))))),o.createElement("div",{className:d.blog+" "+d.parts},o.createElement("div",{className:d.content},o.createElement("p",{className:d.title},t.NEWS_PAGE_BLOG_TITLE),o.createElement("div",{className:B?d.flexbox+" "+d.isAcc:d.flexbox},f?o.createElement(l.a,{text:t.NEWS_PAGE_LOADING}):c.map(function(e){return o.createElement("dl",{key:e.id},o.createElement("a",{href:e.link,target:"_blank"},o.createElement("dt",{style:{backgroundImage:"url("+(B?e.imageUrl:p)+")"}})),o.createElement("dd",null,o.createElement("a",{href:e.link,target:"_blank"},o.createElement("p",{className:d.subtitle},e.title),o.createElement("span",null,e.body)),o.createElement("a",{href:e.authorLink,target:"_blank"},o.createElement("div",{className:d.userInfo},o.createElement("img",{src:B?e.photo:null,alt:""}),o.createElement("p",null,o.createElement("span",null,e.author),o.createElement("span",null,new Date(e.postDate).toLocaleDateString()))))))})),o.createElement("div",{className:d.seeAll},o.createElement("a",{href:"http://blog.exchangeunion.com",target:"_blank"},t.NEWS_PAGE_BLOG_PART1_SEEALL)))),o.createElement("div",{className:d.press+" "+d.parts},o.createElement("div",{className:d.content},o.createElement("p",{className:d.title},t.NEWS_PAGE_PRESS_TITLE),o.createElement("div",{className:d.flexbox},m?o.createElement(l.a,{text:t.NEWS_PAGE_LOADING}):u.map(function(n){var t=e.onFormantDate(n.date);return o.createElement("dl",{key:n.id},o.createElement("a",{href:n.link,target:"__blank"},o.createElement("dt",{style:{backgroundImage:"url("+r.a.IMAGE_URL+n.imageUrl+")"}}),o.createElement("dd",null,o.createElement("div",{className:d.dateInfo},o.createElement("div",{className:d.date},o.createElement("span",null,t.day),o.createElement("span",null,t.month)),o.createElement("p",null,o.createElement("i",null,t.year))),o.createElement("span",null,n.title),o.createElement("div",{className:d.source},o.createElement("span",null,n.source)))))})))))},n}(o.Component);n.default=u},227:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=!("undefined"===typeof window||!window.document||!window.document.createElement),e.exports=n.default},228:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var n="transition"+e+"Timeout",t="transition"+e;return function(e){if(e[t]){if(null==e[n])return new Error(n+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!==typeof e[n])return new Error(n+" must be a number (in milliseconds)")}return null}}n.__esModule=!0,n.nameShape=void 0,n.transitionTimeout=r;var a=t(0),i=(o(a),t(2)),s=o(i);n.nameShape=s.default.oneOfType([s.default.string,s.default.shape({enter:s.default.string,leave:s.default.string,active:s.default.string}),s.default.shape({enter:s.default.string,enterActive:s.default.string,leave:s.default.string,leaveActive:s.default.string,appear:s.default.string,appearActive:s.default.string})])},229:function(e,n,t){"use strict";var o=t(0),r=(t.n(o),t(230)),a=t.n(r),i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),s=function(e){function n(n){return e.call(this,n)||this}return i(n,e),n.prototype.render=function(){return o.createElement(a.a,{component:"div",className:"react-container",transitionName:"slide-in",transitionAppear:!0,transitionAppearTimeout:1500,transitionEnterTimeout:1500,transitionLeaveTimeout:1500},this.props.children)},n}(o.Component);n.a=s},230:function(e,n,t){"use strict";e.exports=t(231)},231:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},A=t(0),l=o(A),c=t(2),p=o(c),d=t(232),u=o(d),f=t(235),m=o(f),B=t(228),h=(B.nameShape.isRequired,p.default.bool,p.default.bool,p.default.bool,(0,B.transitionTimeout)("Appear"),(0,B.transitionTimeout)("Enter"),(0,B.transitionTimeout)("Leave"),{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}),x=function(e){function n(){var t,o,i;r(this,n);for(var s=arguments.length,A=Array(s),c=0;c<s;c++)A[c]=arguments[c];return t=o=a(this,e.call.apply(e,[this].concat(A))),o._wrapChild=function(e){return l.default.createElement(m.default,{name:o.props.transitionName,appear:o.props.transitionAppear,enter:o.props.transitionEnter,leave:o.props.transitionLeave,appearTimeout:o.props.transitionAppearTimeout,enterTimeout:o.props.transitionEnterTimeout,leaveTimeout:o.props.transitionLeaveTimeout},e)},i=t,a(o,i)}return i(n,e),n.prototype.render=function(){return l.default.createElement(u.default,s({},this.props,{childFactory:this._wrapChild}))},n}(l.default.Component);x.displayName="CSSTransitionGroup",x.propTypes={},x.defaultProps=h,n.default=x,e.exports=n.default},232:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},A=t(233),l=o(A),c=t(0),p=o(c),d=t(2),u=o(d),f=t(1),m=(o(f),t(234)),B=(u.default.any,u.default.func,u.default.node,{component:"span",childFactory:function(e){return e}}),h=function(e){function n(t,o){r(this,n);var i=a(this,e.call(this,t,o));return i.performAppear=function(e,n){i.currentlyTransitioningKeys[e]=!0,n.componentWillAppear?n.componentWillAppear(i._handleDoneAppearing.bind(i,e,n)):i._handleDoneAppearing(e,n)},i._handleDoneAppearing=function(e,n){n.componentDidAppear&&n.componentDidAppear(),delete i.currentlyTransitioningKeys[e];var t=(0,m.getChildMapping)(i.props.children);t&&t.hasOwnProperty(e)||i.performLeave(e,n)},i.performEnter=function(e,n){i.currentlyTransitioningKeys[e]=!0,n.componentWillEnter?n.componentWillEnter(i._handleDoneEntering.bind(i,e,n)):i._handleDoneEntering(e,n)},i._handleDoneEntering=function(e,n){n.componentDidEnter&&n.componentDidEnter(),delete i.currentlyTransitioningKeys[e];var t=(0,m.getChildMapping)(i.props.children);t&&t.hasOwnProperty(e)||i.performLeave(e,n)},i.performLeave=function(e,n){i.currentlyTransitioningKeys[e]=!0,n.componentWillLeave?n.componentWillLeave(i._handleDoneLeaving.bind(i,e,n)):i._handleDoneLeaving(e,n)},i._handleDoneLeaving=function(e,n){n.componentDidLeave&&n.componentDidLeave(),delete i.currentlyTransitioningKeys[e];var t=(0,m.getChildMapping)(i.props.children);t&&t.hasOwnProperty(e)?i.keysToEnter.push(e):i.setState(function(n){var t=s({},n.children);return delete t[e],{children:t}})},i.childRefs=Object.create(null),i.state={children:(0,m.getChildMapping)(t.children)},i}return i(n,e),n.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},n.prototype.componentDidMount=function(){var e=this.state.children;for(var n in e)e[n]&&this.performAppear(n,this.childRefs[n])},n.prototype.componentWillReceiveProps=function(e){var n=(0,m.getChildMapping)(e.children),t=this.state.children;this.setState({children:(0,m.mergeChildMappings)(t,n)});for(var o in n){var r=t&&t.hasOwnProperty(o);!n[o]||r||this.currentlyTransitioningKeys[o]||this.keysToEnter.push(o)}for(var a in t){var i=n&&n.hasOwnProperty(a);!t[a]||i||this.currentlyTransitioningKeys[a]||this.keysToLeave.push(a)}},n.prototype.componentDidUpdate=function(){var e=this,n=this.keysToEnter;this.keysToEnter=[],n.forEach(function(n){return e.performEnter(n,e.childRefs[n])});var t=this.keysToLeave;this.keysToLeave=[],t.forEach(function(n){return e.performLeave(n,e.childRefs[n])})},n.prototype.render=function(){var e=this,n=[];for(var t in this.state.children)!function(t){var o=e.state.children[t];if(o){var r="string"!==typeof o.ref,a=e.props.childFactory(o),i=function(n){e.childRefs[t]=n};a===o&&r&&(i=(0,l.default)(o.ref,i)),n.push(p.default.cloneElement(a,{key:t,ref:i}))}}(t);var o=s({},this.props);return delete o.transitionLeave,delete o.transitionName,delete o.transitionAppear,delete o.transitionEnter,delete o.childFactory,delete o.transitionLeaveTimeout,delete o.transitionEnterTimeout,delete o.transitionAppearTimeout,delete o.component,p.default.createElement(this.props.component,o,n)},n}(p.default.Component);h.displayName="TransitionGroup",h.propTypes={},h.defaultProps=B,n.default=h,e.exports=n.default},233:function(e,n){e.exports=function(){for(var e=arguments.length,n=[],t=0;t<e;t++)n[t]=arguments[t];if(n=n.filter(function(e){return null!=e}),0!==n.length)return 1===n.length?n[0]:n.reduce(function(e,n){return function(){e.apply(this,arguments),n.apply(this,arguments)}})}},234:function(e,n,t){"use strict";function o(e){if(!e)return e;var n={};return a.Children.map(e,function(e){return e}).forEach(function(e){n[e.key]=e}),n}function r(e,n){function t(t){return n.hasOwnProperty(t)?n[t]:e[t]}e=e||{},n=n||{};var o={},r=[];for(var a in e)n.hasOwnProperty(a)?r.length&&(o[a]=r,r=[]):r.push(a);var i=void 0,s={};for(var A in n){if(o.hasOwnProperty(A))for(i=0;i<o[A].length;i++){var l=o[A][i];s[o[A][i]]=t(l)}s[A]=t(A)}for(i=0;i<r.length;i++)s[r[i]]=t(r[i]);return s}n.__esModule=!0,n.getChildMapping=o,n.mergeChildMappings=r;var a=t(0)},235:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function s(e,n){return w.length?w.forEach(function(t){return e.addEventListener(t,n,!1)}):setTimeout(n,0),function(){w.length&&w.forEach(function(t){return e.removeEventListener(t,n,!1)})}}n.__esModule=!0;var A=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},l=t(236),c=o(l),p=t(238),d=o(p),u=t(239),f=o(u),m=t(240),B=t(0),h=o(B),x=t(2),E=o(x),g=t(51),C=t(228),w=[];m.transitionEnd&&w.push(m.transitionEnd),m.animationEnd&&w.push(m.animationEnd);var _=(E.default.node,C.nameShape.isRequired,E.default.bool,E.default.bool,E.default.bool,E.default.number,E.default.number,E.default.number,function(e){function n(){var t,o,i;r(this,n);for(var s=arguments.length,A=Array(s),l=0;l<s;l++)A[l]=arguments[l];return t=o=a(this,e.call.apply(e,[this].concat(A))),o.componentWillAppear=function(e){o.props.appear?o.transition("appear",e,o.props.appearTimeout):e()},o.componentWillEnter=function(e){o.props.enter?o.transition("enter",e,o.props.enterTimeout):e()},o.componentWillLeave=function(e){o.props.leave?o.transition("leave",e,o.props.leaveTimeout):e()},i=t,a(o,i)}return i(n,e),n.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},n.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},n.prototype.transition=function(e,n,t){var o=(0,g.findDOMNode)(this);if(!o)return void(n&&n());var r=this.props.name[e]||this.props.name+"-"+e,a=this.props.name[e+"Active"]||r+"-active",i=null,A=void 0;(0,c.default)(o,r),this.queueClassAndNode(a,o);var l=function(e){e&&e.target!==o||(clearTimeout(i),A&&A(),(0,d.default)(o,r),(0,d.default)(o,a),A&&A(),n&&n())};t?(i=setTimeout(l,t),this.transitionTimeouts.push(i)):m.transitionEnd&&(A=s(o,l))},n.prototype.queueClassAndNode=function(e,n){var t=this;this.classNameAndNodeQueue.push({className:e,node:n}),this.rafHandle||(this.rafHandle=(0,f.default)(function(){return t.flushClassNameAndNodeQueue()}))},n.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,c.default)(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},n.prototype.render=function(){var e=A({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,h.default.cloneElement(h.default.Children.only(this.props.children),e)},n}(h.default.Component));_.displayName="CSSTransitionGroupChild",_.propTypes={},n.default=_,e.exports=n.default},236:function(e,n,t){"use strict";function o(e,n){e.classList?e.classList.add(n):(0,a.default)(e,n)||("string"===typeof e.className?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}Object.defineProperty(n,"__esModule",{value:!0}),n.default=o;var r=t(237),a=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports=n.default},237:function(e,n,t){"use strict";function o(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}Object.defineProperty(n,"__esModule",{value:!0}),n.default=o,e.exports=n.default},238:function(e,n,t){"use strict";function o(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,n){e.classList?e.classList.remove(n):"string"===typeof e.className?e.className=o(e.className,n):e.setAttribute("class",o(e.className&&e.className.baseVal||"",n))}},239:function(e,n,t){"use strict";function o(e){var n=(new Date).getTime(),t=Math.max(0,16-(n-p)),o=setTimeout(e,t);return p=n,o}Object.defineProperty(n,"__esModule",{value:!0});var r=t(227),a=function(e){return e&&e.__esModule?e:{default:e}}(r),i=["","webkit","moz","o","ms"],s="clearTimeout",A=o,l=void 0,c=function(e,n){return e+(e?n[0].toUpperCase()+n.substr(1):n)+"AnimationFrame"};a.default&&i.some(function(e){var n=c(e,"request");if(n in window)return s=c(e,"cancel"),A=function(e){return window[n](e)}});var p=(new Date).getTime();l=function(e){return A(e)},l.cancel=function(e){window[s]&&"function"===typeof window[s]&&window[s](e)},n.default=l,e.exports=n.default},240:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.animationEnd=n.animationDelay=n.animationTiming=n.animationDuration=n.animationName=n.transitionEnd=n.transitionDuration=n.transitionDelay=n.transitionTiming=n.transitionProperty=n.transform=void 0;var o=t(227),r=function(e){return e&&e.__esModule?e:{default:e}}(o),a="transform",i=void 0,s=void 0,A=void 0,l=void 0,c=void 0,p=void 0,d=void 0,u=void 0,f=void 0,m=void 0,B=void 0;if(r.default){var h=function(){for(var e=document.createElement("div").style,n={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},t=Object.keys(n),o=void 0,r=void 0,a="",i=0;i<t.length;i++){var s=t[i];if(s+"TransitionProperty"in e){a="-"+s.toLowerCase(),o=n[s]("TransitionEnd"),r=n[s]("AnimationEnd");break}}return!o&&"transitionProperty"in e&&(o="transitionend"),!r&&"animationName"in e&&(r="animationend"),e=null,{animationEnd:r,transitionEnd:o,prefix:a}}();i=h.prefix,n.transitionEnd=s=h.transitionEnd,n.animationEnd=A=h.animationEnd,n.transform=a=i+"-"+a,n.transitionProperty=l=i+"-transition-property",n.transitionDuration=c=i+"-transition-duration",n.transitionDelay=d=i+"-transition-delay",n.transitionTiming=p=i+"-transition-timing-function",n.animationName=u=i+"-animation-name",n.animationDuration=f=i+"-animation-duration",n.animationTiming=m=i+"-animation-delay",n.animationDelay=B=i+"-animation-timing-function"}n.transform=a,n.transitionProperty=l,n.transitionTiming=p,n.transitionDelay=d,n.transitionDuration=c,n.transitionEnd=s,n.animationName=u,n.animationDuration=f,n.animationTiming=m,n.animationDelay=B,n.animationEnd=A,n.default={transform:a,end:s,property:l,timing:p,delay:d,duration:c}},241:function(e,n,t){"use strict";var o=t(0),r=(t.n(o),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}()),a=function(e){function n(n){var t=e.call(this,n)||this;return t.DOMElement={},t.state={init:!1},t.handleScroll=t.handleScroll.bind(t),t}return r(n,e),n.prototype.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll),setTimeout(this.handleScroll)},n.prototype.handleScroll=function(){var e=window.scrollY;window.navigator.userAgent.indexOf("Trident/7.0")>=0&&(e=document.documentElement.scrollTop);var n=this.DOMElement.myRef;this.DOMElement.myRef&&window.innerHeight+e>n.offsetTop&&this.setState({init:!0})},n.prototype.render=function(){var e=this;return o.createElement("span",{ref:function(n){e.DOMElement.myRef=n}},this.state.init?this.props.children:null)},n}(o.Component);n.a=a},242:function(e,n,t){"use strict";var o=t(0),r=(t.n(o),t(25)),a=t.n(r),i=t(243),s={loop:!0,autoplay:!0,animationData:i};n.a=function(e){var n=e.text;return o.createElement("div",{style:{margin:"0 auto",color:"#2dabe2"}},o.createElement(a.a,{options:s,height:60,width:60}),o.createElement("p",null,n))}},243:function(e,n){e.exports={v:"4.7.1",fr:24,ip:0,op:20,w:560,h:420,nm:"\u5408\u6210 1",ddd:0,assets:[],layers:[{ddd:0,ind:2,ty:4,nm:"2",ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[280,210,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{ty:"st",c:{a:0,k:[.2156863,.3686275,.7568627,1]},o:{a:0,k:100},w:{a:0,k:6},lc:1,lj:1,ml:4,nm:"\u63cf\u8fb9 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"\u53d8\u6362"}],nm:"\u5f62\u72b6 2",np:2,cix:2,ix:1,mn:"ADBE Vector Group"},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-82.5,-27],[-24,39],[67.5,-48]],c:!1}},nm:"\u8def\u5f84 1",mn:"ADBE Vector Shape - Group"},{ty:"st",c:{a:0,k:[.2156863,.3686275,.7568627,1]},o:{a:0,k:100},w:{a:0,k:6},lc:1,lj:1,ml:4,nm:"\u63cf\u8fb9 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"\u53d8\u6362"}],nm:"\u5f62\u72b6 1",np:3,cix:2,ix:2,mn:"ADBE Vector Group"},{ty:"tm",s:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:26,s:[0],e:[21]},{t:29}],ix:1},e:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:20,s:[0],e:[86]},{t:29}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:3,nm:"\u4fee\u526a\u8def\u5f84 1",mn:"ADBE Vector Filter - Trim"}],ip:0,op:240,st:0,bm:0,sr:1},{ddd:0,ind:3,ty:4,nm:"3",ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[280,210,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[169.516,169.516]},p:{a:0,k:[0,0]},nm:"\u692d\u5706\u8def\u5f84 1",mn:"ADBE Vector Shape - Ellipse"},{ty:"st",c:{a:0,k:[.2156863,.3686275,.7568627,1]},o:{a:0,k:100},w:{a:0,k:6},lc:1,lj:1,ml:4,nm:"\u63cf\u8fb9 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[-.031,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[101.786,101.786],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"\u53d8\u6362"}],nm:"\u692d\u5706 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group"},{ty:"tm",s:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:0,s:[100],e:[80]},{t:2}],ix:1},e:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:20,s:[100],e:[80]},{t:23}],ix:2},o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:2,s:[0],e:[-360]},{t:20}],ix:3},m:1,ix:2,nm:"\u4fee\u526a\u8def\u5f84 1",mn:"ADBE Vector Filter - Trim"}],ip:0,op:240,st:0,bm:0,sr:1}]}},285:function(e,n){e.exports="data:image/gif;base64,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"},286:function(e,n,t){var o=t(287);"string"===typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;t(215)(o,r);o.locals&&(e.exports=o.locals)},287:function(e,n,t){n=e.exports=t(214)(!0),n.push([e.i,".news_3ETDY-Tn .content_Ad0emkLA{width:100%;max-width:85rem;margin:0 auto;text-align:center}.news_3ETDY-Tn .header_2ICpze7F{background:-webkit-radial-gradient(circle,#283e7c 0,#1a3359 100%) no-repeat 50%;background:-o-radial-gradient(circle,#283e7c 0,#1a3359 100%) no-repeat 50%;background:radial-gradient(circle,#283e7c 0,#1a3359 100%) no-repeat 50%;font-size:4.5rem;color:#fff;font-family:Rockwell;padding:120px 0;padding:110px 0}.news_3ETDY-Tn .header_2ICpze7F .title_3i1xpJam{padding:0 40px}.news_3ETDY-Tn .header_2ICpze7F .title_3i1xpJam .titleText_2rCkjzjq{font-size:4.5rem;padding-top:40px;line-height:4.5rem;padding-bottom:30px}.news_3ETDY-Tn .header_2ICpze7F .subscribe_2oJ1TNto{text-align:center}.news_3ETDY-Tn .header_2ICpze7F .subscribe_2oJ1TNto h4{font-size:1.25rem;margin-bottom:15px;font-size:14px}.news_3ETDY-Tn .parts_qTSnB0JM.blog_3vV2UO8-{background-color:#fff}.news_3ETDY-Tn .parts_qTSnB0JM.blog_3vV2UO8- a{color:#666}.news_3ETDY-Tn .parts_qTSnB0JM.blog_3vV2UO8- .title_3i1xpJam{color:#458ed6}.news_3ETDY-Tn .parts_qTSnB0JM.press_bLa42voA{background-color:#303847;padding-bottom:122px;color:#fff}.news_3ETDY-Tn .parts_qTSnB0JM.press_bLa42voA dt{background-size:cover}.news_3ETDY-Tn .parts_qTSnB0JM.press_bLa42voA a{color:#fff}.news_3ETDY-Tn .parts_qTSnB0JM.press_bLa42voA dl{height:448px}.news_3ETDY-Tn .parts_qTSnB0JM.press_bLa42voA .dateInfo_3-vNZYNS{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:center;align-content:center;height:75px}.news_3ETDY-Tn .parts_qTSnB0JM.press_bLa42voA .dateInfo_3-vNZYNS .date_32ehWxbl{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:center;align-content:center}.news_3ETDY-Tn .parts_qTSnB0JM.press_bLa42voA .dateInfo_3-vNZYNS .date_32ehWxbl span:first-child{font-size:36px;font-weight:400}.news_3ETDY-Tn .parts_qTSnB0JM.press_bLa42voA .dateInfo_3-vNZYNS .date_32ehWxbl span:last-child{font-size:24px;font-weight:300}.news_3ETDY-Tn .parts_qTSnB0JM.press_bLa42voA .dateInfo_3-vNZYNS>p{font-size:64px;line-height:75px;padding-left:20px}.news_3ETDY-Tn .parts_qTSnB0JM.press_bLa42voA .source_1HUYfGlU{text-align:right;padding-top:16px}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .title_3i1xpJam{font-size:2.5rem;padding:69px 0 80px}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .flexbox_CYO7c7S1{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .flexbox_CYO7c7S1.isAcc_1qsnUNfG dt{background-size:cover}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .flexbox_CYO7c7S1.isAcc_1qsnUNfG img{background-repeat:no-repeat;background-position:50%}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .flexbox_CYO7c7S1 dl{width:30%;line-height:34px}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .flexbox_CYO7c7S1 dl dt{background-position:50%;background-repeat:no-repeat;height:237px}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .flexbox_CYO7c7S1 dl dt img{width:100%;height:237px}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .flexbox_CYO7c7S1 dl dd{text-align:left;padding:3px}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .flexbox_CYO7c7S1 dl dd>p{word-break:break-all;padding:20px 0 10px;font-size:24px}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .flexbox_CYO7c7S1 dl dd span{font-size:16px}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .flexbox_CYO7c7S1 dl dd .userInfo_2JOIpP-7{height:50px;padding-top:13px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:center;align-content:center}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .flexbox_CYO7c7S1 dl dd .userInfo_2JOIpP-7 p{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:center;align-content:center;-ms-flex:1 1;flex:1 1;padding-left:20px;line-height:34px}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .flexbox_CYO7c7S1 dl dd img{width:50px;height:50px}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .seeAll_2SjFmM_A{padding:4.4rem 0}.news_3ETDY-Tn .parts_qTSnB0JM .content_Ad0emkLA .seeAll_2SjFmM_A a{font-size:18px;color:#73aafc;text-decoration:underline}.news_3ETDY-Tn .loading_2-w5VHVF{margin:0 auto;color:#2dabe2}@media screen and (max-width:500px){.news_3ETDY-Tn .content_Ad0emkLA>.title_3i1xpJam,.news_3ETDY-Tn .header_2ICpze7F .titleText_2rCkjzjq{font-size:2rem!important}.news_3ETDY-Tn .content_Ad0emkLA>.flexbox_CYO7c7S1{-ms-flex-direction:column!important;flex-direction:column!important;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 5px}.news_3ETDY-Tn .content_Ad0emkLA>.flexbox_CYO7c7S1 dl{width:100%!important;margin-bottom:3rem}}","",{version:3,sources:["/Users/lianmeng/Desktop/projects/exchange-union/src/scss/news.scss"],names:[],mappings:"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",file:"news.scss",sourcesContent:['.news .content {\n  width: 100%;\n  max-width: 85rem;\n  margin: 0 auto;\n  text-align: center; }\n\n.news .header {\n  background: -webkit-radial-gradient(circle, #283E7C 0%, #1A3359 100%) no-repeat center;\n  background: -o-radial-gradient(circle, #283E7C 0%, #1A3359 100%) no-repeat center;\n  background: radial-gradient(circle, #283E7C 0%, #1A3359 100%) no-repeat center;\n  font-size: 4.5rem;\n  color: #fff;\n  font-family: "Rockwell";\n  padding: 120px 0 120px 0;\n  padding: 110px 0; }\n  .news .header .title {\n    padding: 0 40px; }\n  .news .header .title .titleText {\n    font-size: 4.5rem;\n    padding-top: 40px;\n    line-height: 4.5rem;\n    padding-bottom: 30px; }\n  .news .header .subscribe {\n    text-align: center; }\n    .news .header .subscribe h4 {\n      font-size: 1.25rem;\n      margin-bottom: 15px;\n      font-size: 14px; }\n\n.news .parts.blog {\n  background-color: white; }\n  .news .parts.blog a {\n    color: #666666; }\n  .news .parts.blog .title {\n    color: #458ed6; }\n\n.news .parts.press {\n  background-color: #303847;\n  padding-bottom: 122px;\n  color: white; }\n  .news .parts.press dt {\n    background-size: cover; }\n  .news .parts.press a {\n    color: white; }\n  .news .parts.press dl {\n    height: 448px; }\n  .news .parts.press .dateInfo {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n    -ms-flex-align: stretch;\n        align-items: stretch;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    height: 75px; }\n    .news .parts.press .dateInfo .date {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n      .news .parts.press .dateInfo .date span:first-child {\n        font-size: 36px;\n        font-weight: 400; }\n      .news .parts.press .dateInfo .date span:last-child {\n        font-size: 24px;\n        font-weight: 300; }\n    .news .parts.press .dateInfo > p {\n      font-size: 64px;\n      line-height: 75px;\n      padding-left: 20px; }\n  .news .parts.press .source {\n    text-align: right;\n    padding-top: 16px; }\n\n.news .parts .content .title {\n  font-size: 2.5rem;\n  padding: 69px 0 80px 0; }\n\n.news .parts .content .flexbox {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: start;\n      align-items: flex-start;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n  .news .parts .content .flexbox.isAcc dt {\n    background-size: cover; }\n  .news .parts .content .flexbox.isAcc img {\n    background-repeat: no-repeat;\n    background-position: center; }\n  .news .parts .content .flexbox dl {\n    width: 30%;\n    line-height: 34px; }\n    .news .parts .content .flexbox dl dt {\n      background-position: center;\n      background-repeat: no-repeat;\n      height: 237px; }\n      .news .parts .content .flexbox dl dt img {\n        width: 100%;\n        height: 237px; }\n    .news .parts .content .flexbox dl dd {\n      text-align: left;\n      padding: 3px; }\n      .news .parts .content .flexbox dl dd > p {\n        word-break: break-all;\n        padding: 20px 0 10px 0;\n        font-size: 24px; }\n      .news .parts .content .flexbox dl dd span {\n        font-size: 16px; }\n      .news .parts .content .flexbox dl dd .userInfo {\n        height: 50px;\n        padding-top: 13px;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n        -ms-flex-line-pack: center;\n            align-content: center; }\n        .news .parts .content .flexbox dl dd .userInfo p {\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-direction: column;\n              flex-direction: column;\n          -ms-flex-wrap: nowrap;\n              flex-wrap: nowrap;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n          -ms-flex-align: stretch;\n              align-items: stretch;\n          -ms-flex-line-pack: center;\n              align-content: center;\n          -ms-flex: 1 1;\n              flex: 1 1;\n          padding-left: 20px;\n          line-height: 34px; }\n      .news .parts .content .flexbox dl dd img {\n        width: 50px;\n        height: 50px; }\n\n.news .parts .content .seeAll {\n  padding: 4.4rem 0; }\n  .news .parts .content .seeAll a {\n    font-size: 18px;\n    color: #73aafc;\n    text-decoration: underline; }\n\n.news .loading {\n  margin: 0 auto;\n  color: #2dabe2; }\n\n@media screen and (max-width: 500px) {\n  .news .header .titleText {\n    font-size: 2rem !important; }\n  .news .content > .title {\n    font-size: 2rem !important; }\n  .news .content > .flexbox {\n    -ms-flex-direction: column !important;\n        flex-direction: column !important;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 0 5px; }\n    .news .content > .flexbox dl {\n      width: 100% !important;\n      margin-bottom: 3rem; } }\n'],sourceRoot:""}]),n.locals={news:"news_3ETDY-Tn",content:"content_Ad0emkLA",header:"header_2ICpze7F",title:"title_3i1xpJam",titleText:"titleText_2rCkjzjq",subscribe:"subscribe_2oJ1TNto",parts:"parts_qTSnB0JM",blog:"blog_3vV2UO8-",press:"press_bLa42voA",dateInfo:"dateInfo_3-vNZYNS",date:"date_32ehWxbl",source:"source_1HUYfGlU",flexbox:"flexbox_CYO7c7S1",isAcc:"isAcc_1qsnUNfG",userInfo:"userInfo_2JOIpP-7",seeAll:"seeAll_2SjFmM_A",loading:"loading_2-w5VHVF"}}});