webpackJsonp([1],{219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=(n.n(i),n(9)),a=n(27),o=n(25),s=n(230),l=n(242),c=n(268),p=n(271),A=n(243),u=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),m=n(274),d=n(276),f=n(277),h=n(278),g=function(e){function t(t){var n=e.call(this,t)||this;return n.lock=!1,n.state={loading:!0,teamList:[]},n}return u(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.setPageview("/team");var t=o.a.API_PATH_TEAM+"?lang="+this.props.lang+"&key="+o.a.API_KEY;a.a.Get(t).then(function(t){e.lock||e.setState({teamList:t,loading:!1})})},t.prototype.componentWillUnmount=function(){this.lock=!0},t.prototype.render=function(){var e=this.props,t=e.i18n,n=e.lang,a=this.state,o=a.loading,u=a.teamList;return i.createElement("div",{className:m.team},i.createElement("div",{className:m.header},i.createElement("div",{className:m.content},i.createElement(l.a,null,i.createElement(s.a,null,i.createElement("p",{className:m.title},t.TEAM_PAGE_TITLE))))),i.createElement("div",{className:m["core-team"]},i.createElement("div",{className:m.content},i.createElement(l.a,null,i.createElement(s.a,null,i.createElement("h2",null,t.TEAM_PAGE_CORE_TEAM))),i.createElement("div",{className:m.team},u.map(function(e){if("CoreTeam"===e.type){var t={name:"zh-CN"===n?e.zhName:e.enName,description:"zh-CN"===n?e.zhDescription:e.enDescription,position:"zh-CN"===n?e.zhPosition:e.enPosition,picture:e.photo};return i.createElement(c.a,{key:Math.random(),data:t,type:"coreTeam"})}return null}),o?i.createElement(A.a,{text:t.NEWS_PAGE_LOADING}):null))),i.createElement("div",{className:m["our-partners"]},i.createElement("div",{className:m.content},i.createElement(l.a,null,i.createElement(s.a,null,i.createElement(p.a,{title:t.TEAM_PAGE_ITEM_TITLE}))),i.createElement("div",{className:m.images},i.createElement(r.b,{to:"http://www.digitalfinancegroup.net",target:"_blank"},i.createElement("img",{src:d})),i.createElement(r.b,{to:"https://www.okex.com/",target:"_blank"},i.createElement("img",{src:f})),i.createElement(r.b,{to:"https://ripiocredit.network/",target:"_blank"},i.createElement("img",{src:h}))))),i.createElement("div",{className:m.advisors},i.createElement("div",{className:m.content},i.createElement(l.a,null,i.createElement(s.a,null,i.createElement("h2",null,t.TEAM_PAGE_ADVISORS))),i.createElement("div",{className:m.team},u.map(function(e){if("Advisors"===e.type){var t={name:"zh-CN"===n?e.zhName:e.enName,description:"zh-CN"===n?e.zhDescription:e.enDescription,position:"zh-CN"===n?e.zhPosition:e.enPosition,picture:e.photo};return i.createElement(c.a,{key:Math.random(),data:t,type:"Advisors"})}return null}),o?i.createElement(A.a,{text:t.NEWS_PAGE_LOADING}):null))))},t}(i.Component);t.default=g},228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=!("undefined"===typeof window||!window.document||!window.document.createElement),e.exports=t.default},229:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!==typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=r;var a=n(0),o=(i(a),n(2)),s=i(o);t.nameShape=s.default.oneOfType([s.default.string,s.default.shape({enter:s.default.string,leave:s.default.string,active:s.default.string}),s.default.shape({enter:s.default.string,enterActive:s.default.string,leave:s.default.string,leaveActive:s.default.string,appear:s.default.string,appearActive:s.default.string})])},230:function(e,t,n){"use strict";var i=n(0),r=(n.n(i),n(231)),a=n.n(r),o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),s=function(e){function t(t){return e.call(this,t)||this}return o(t,e),t.prototype.render=function(){return i.createElement(a.a,{component:"div",className:"react-container",transitionName:"slide-in",transitionAppear:!0,transitionAppearTimeout:1500,transitionEnterTimeout:1500,transitionLeaveTimeout:1500},this.props.children)},t}(i.Component);t.a=s},231:function(e,t,n){"use strict";e.exports=n(232)},232:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(0),c=i(l),p=n(2),A=i(p),u=n(233),m=i(u),d=n(236),f=i(d),h=n(229),g=(h.nameShape.isRequired,A.default.bool,A.default.bool,A.default.bool,(0,h.transitionTimeout)("Appear"),(0,h.transitionTimeout)("Enter"),(0,h.transitionTimeout)("Leave"),{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}),C=function(e){function t(){var n,i,o;r(this,t);for(var s=arguments.length,l=Array(s),p=0;p<s;p++)l[p]=arguments[p];return n=i=a(this,e.call.apply(e,[this].concat(l))),i._wrapChild=function(e){return c.default.createElement(f.default,{name:i.props.transitionName,appear:i.props.transitionAppear,enter:i.props.transitionEnter,leave:i.props.transitionLeave,appearTimeout:i.props.transitionAppearTimeout,enterTimeout:i.props.transitionEnterTimeout,leaveTimeout:i.props.transitionLeaveTimeout},e)},o=n,a(i,o)}return o(t,e),t.prototype.render=function(){return c.default.createElement(m.default,s({},this.props,{childFactory:this._wrapChild}))},t}(c.default.Component);C.displayName="CSSTransitionGroup",C.propTypes={},C.defaultProps=g,t.default=C,e.exports=t.default},233:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(234),c=i(l),p=n(0),A=i(p),u=n(2),m=i(u),d=n(1),f=(i(d),n(235)),h=(m.default.any,m.default.func,m.default.node,{component:"span",childFactory:function(e){return e}}),g=function(e){function t(n,i){r(this,t);var o=a(this,e.call(this,n,i));return o.performAppear=function(e,t){o.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(o._handleDoneAppearing.bind(o,e,t)):o._handleDoneAppearing(e,t)},o._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete o.currentlyTransitioningKeys[e];var n=(0,f.getChildMapping)(o.props.children);n&&n.hasOwnProperty(e)||o.performLeave(e,t)},o.performEnter=function(e,t){o.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(o._handleDoneEntering.bind(o,e,t)):o._handleDoneEntering(e,t)},o._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete o.currentlyTransitioningKeys[e];var n=(0,f.getChildMapping)(o.props.children);n&&n.hasOwnProperty(e)||o.performLeave(e,t)},o.performLeave=function(e,t){o.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(o._handleDoneLeaving.bind(o,e,t)):o._handleDoneLeaving(e,t)},o._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete o.currentlyTransitioningKeys[e];var n=(0,f.getChildMapping)(o.props.children);n&&n.hasOwnProperty(e)?o.keysToEnter.push(e):o.setState(function(t){var n=s({},t.children);return delete n[e],{children:n}})},o.childRefs=Object.create(null),o.state={children:(0,f.getChildMapping)(n.children)},o}return o(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,f.getChildMapping)(e.children),n=this.state.children;this.setState({children:(0,f.mergeChildMappings)(n,t)});for(var i in t){var r=n&&n.hasOwnProperty(i);!t[i]||r||this.currentlyTransitioningKeys[i]||this.keysToEnter.push(i)}for(var a in n){var o=t&&t.hasOwnProperty(a);!n[a]||o||this.currentlyTransitioningKeys[a]||this.keysToLeave.push(a)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach(function(t){return e.performEnter(t,e.childRefs[t])});var n=this.keysToLeave;this.keysToLeave=[],n.forEach(function(t){return e.performLeave(t,e.childRefs[t])})},t.prototype.render=function(){var e=this,t=[];for(var n in this.state.children)!function(n){var i=e.state.children[n];if(i){var r="string"!==typeof i.ref,a=e.props.childFactory(i),o=function(t){e.childRefs[n]=t};a===i&&r&&(o=(0,c.default)(i.ref,o)),t.push(A.default.cloneElement(a,{key:n,ref:o}))}}(n);var i=s({},this.props);return delete i.transitionLeave,delete i.transitionName,delete i.transitionAppear,delete i.transitionEnter,delete i.childFactory,delete i.transitionLeaveTimeout,delete i.transitionEnterTimeout,delete i.transitionAppearTimeout,delete i.component,A.default.createElement(this.props.component,i,t)},t}(A.default.Component);g.displayName="TransitionGroup",g.propTypes={},g.defaultProps=h,t.default=g,e.exports=t.default},234:function(e,t){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(t=t.filter(function(e){return null!=e}),0!==t.length)return 1===t.length?t[0]:t.reduce(function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}})}},235:function(e,t,n){"use strict";function i(e){if(!e)return e;var t={};return a.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e}),t}function r(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var i={},r=[];for(var a in e)t.hasOwnProperty(a)?r.length&&(i[a]=r,r=[]):r.push(a);var o=void 0,s={};for(var l in t){if(i.hasOwnProperty(l))for(o=0;o<i[l].length;o++){var c=i[l][o];s[i[l][o]]=n(c)}s[l]=n(l)}for(o=0;o<r.length;o++)s[r[o]]=n(r[o]);return s}t.__esModule=!0,t.getChildMapping=i,t.mergeChildMappings=r;var a=n(0)},236:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return x.length?x.forEach(function(n){return e.addEventListener(n,t,!1)}):setTimeout(t,0),function(){x.length&&x.forEach(function(n){return e.removeEventListener(n,t,!1)})}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=n(237),p=i(c),A=n(239),u=i(A),m=n(240),d=i(m),f=n(241),h=n(0),g=i(h),C=n(2),E=i(C),y=n(51),v=n(229),x=[];f.transitionEnd&&x.push(f.transitionEnd),f.animationEnd&&x.push(f.animationEnd);var B=(E.default.node,v.nameShape.isRequired,E.default.bool,E.default.bool,E.default.bool,E.default.number,E.default.number,E.default.number,function(e){function t(){var n,i,o;r(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return n=i=a(this,e.call.apply(e,[this].concat(l))),i.componentWillAppear=function(e){i.props.appear?i.transition("appear",e,i.props.appearTimeout):e()},i.componentWillEnter=function(e){i.props.enter?i.transition("enter",e,i.props.enterTimeout):e()},i.componentWillLeave=function(e){i.props.leave?i.transition("leave",e,i.props.leaveTimeout):e()},o=n,a(i,o)}return o(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var i=(0,y.findDOMNode)(this);if(!i)return void(t&&t());var r=this.props.name[e]||this.props.name+"-"+e,a=this.props.name[e+"Active"]||r+"-active",o=null,l=void 0;(0,p.default)(i,r),this.queueClassAndNode(a,i);var c=function(e){e&&e.target!==i||(clearTimeout(o),l&&l(),(0,u.default)(i,r),(0,u.default)(i,a),l&&l(),t&&t())};n?(o=setTimeout(c,n),this.transitionTimeouts.push(o)):f.transitionEnd&&(l=s(i,c))},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,d.default)(function(){return n.flushClassNameAndNodeQueue()}))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,p.default)(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=l({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,g.default.cloneElement(g.default.Children.only(this.props.children),e)},t}(g.default.Component));B.displayName="CSSTransitionGroupChild",B.propTypes={},t.default=B,e.exports=t.default},237:function(e,t,n){"use strict";function i(e,t){e.classList?e.classList.add(t):(0,a.default)(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=n(238),a=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports=t.default},238:function(e,t,n){"use strict";function i(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},239:function(e,t,n){"use strict";function i(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=i(e.className,t):e.setAttribute("class",i(e.className&&e.className.baseVal||"",t))}},240:function(e,t,n){"use strict";function i(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-A)),i=setTimeout(e,n);return A=t,i}Object.defineProperty(t,"__esModule",{value:!0});var r=n(228),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=["","webkit","moz","o","ms"],s="clearTimeout",l=i,c=void 0,p=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};a.default&&o.some(function(e){var t=p(e,"request");if(t in window)return s=p(e,"cancel"),l=function(e){return window[t](e)}});var A=(new Date).getTime();c=function(e){return l(e)},c.cancel=function(e){window[s]&&"function"===typeof window[s]&&window[s](e)},t.default=c,e.exports=t.default},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var i=n(228),r=function(e){return e&&e.__esModule?e:{default:e}}(i),a="transform",o=void 0,s=void 0,l=void 0,c=void 0,p=void 0,A=void 0,u=void 0,m=void 0,d=void 0,f=void 0,h=void 0;if(r.default){var g=function(){for(var e=document.createElement("div").style,t={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},n=Object.keys(t),i=void 0,r=void 0,a="",o=0;o<n.length;o++){var s=n[o];if(s+"TransitionProperty"in e){a="-"+s.toLowerCase(),i=t[s]("TransitionEnd"),r=t[s]("AnimationEnd");break}}return!i&&"transitionProperty"in e&&(i="transitionend"),!r&&"animationName"in e&&(r="animationend"),e=null,{animationEnd:r,transitionEnd:i,prefix:a}}();o=g.prefix,t.transitionEnd=s=g.transitionEnd,t.animationEnd=l=g.animationEnd,t.transform=a=o+"-"+a,t.transitionProperty=c=o+"-transition-property",t.transitionDuration=p=o+"-transition-duration",t.transitionDelay=u=o+"-transition-delay",t.transitionTiming=A=o+"-transition-timing-function",t.animationName=m=o+"-animation-name",t.animationDuration=d=o+"-animation-duration",t.animationTiming=f=o+"-animation-delay",t.animationDelay=h=o+"-animation-timing-function"}t.transform=a,t.transitionProperty=c,t.transitionTiming=A,t.transitionDelay=u,t.transitionDuration=p,t.transitionEnd=s,t.animationName=m,t.animationDuration=d,t.animationTiming=f,t.animationDelay=h,t.animationEnd=l,t.default={transform:a,end:s,property:c,timing:A,delay:u,duration:p}},242:function(e,t,n){"use strict";var i=n(0),r=(n.n(i),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}()),a=function(e){function t(t){var n=e.call(this,t)||this;return n.DOMElement={},n.state={init:!1},n.handleScroll=n.handleScroll.bind(n),n}return r(t,e),t.prototype.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll),setTimeout(this.handleScroll)},t.prototype.handleScroll=function(){var e=window.scrollY;window.navigator.userAgent.indexOf("Trident/7.0")>=0&&(e=document.documentElement.scrollTop);var t=this.DOMElement.myRef;this.DOMElement.myRef&&window.innerHeight+e>t.offsetTop&&this.setState({init:!0})},t.prototype.render=function(){var e=this;return i.createElement("span",{ref:function(t){e.DOMElement.myRef=t}},this.state.init?this.props.children:null)},t}(i.Component);t.a=a},243:function(e,t,n){"use strict";var i=n(0),r=(n.n(i),n(26)),a=n.n(r),o=n(244),s={loop:!0,autoplay:!0,animationData:o};t.a=function(e){var t=e.text;return i.createElement("div",{style:{margin:"0 auto",color:"#2dabe2"}},i.createElement(a.a,{options:s,height:60,width:60}),i.createElement("p",null,t))}},244:function(e,t){e.exports={v:"4.7.1",fr:24,ip:0,op:20,w:560,h:420,nm:"\u5408\u6210 1",ddd:0,assets:[],layers:[{ddd:0,ind:2,ty:4,nm:"2",ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[280,210,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{ty:"st",c:{a:0,k:[.2156863,.3686275,.7568627,1]},o:{a:0,k:100},w:{a:0,k:6},lc:1,lj:1,ml:4,nm:"\u63cf\u8fb9 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"\u53d8\u6362"}],nm:"\u5f62\u72b6 2",np:2,cix:2,ix:1,mn:"ADBE Vector Group"},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-82.5,-27],[-24,39],[67.5,-48]],c:!1}},nm:"\u8def\u5f84 1",mn:"ADBE Vector Shape - Group"},{ty:"st",c:{a:0,k:[.2156863,.3686275,.7568627,1]},o:{a:0,k:100},w:{a:0,k:6},lc:1,lj:1,ml:4,nm:"\u63cf\u8fb9 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"\u53d8\u6362"}],nm:"\u5f62\u72b6 1",np:3,cix:2,ix:2,mn:"ADBE Vector Group"},{ty:"tm",s:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:26,s:[0],e:[21]},{t:29}],ix:1},e:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:20,s:[0],e:[86]},{t:29}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:3,nm:"\u4fee\u526a\u8def\u5f84 1",mn:"ADBE Vector Filter - Trim"}],ip:0,op:240,st:0,bm:0,sr:1},{ddd:0,ind:3,ty:4,nm:"3",ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[280,210,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[169.516,169.516]},p:{a:0,k:[0,0]},nm:"\u692d\u5706\u8def\u5f84 1",mn:"ADBE Vector Shape - Ellipse"},{ty:"st",c:{a:0,k:[.2156863,.3686275,.7568627,1]},o:{a:0,k:100},w:{a:0,k:6},lc:1,lj:1,ml:4,nm:"\u63cf\u8fb9 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[-.031,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[101.786,101.786],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"\u53d8\u6362"}],nm:"\u692d\u5706 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group"},{ty:"tm",s:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:0,s:[100],e:[80]},{t:2}],ix:1},e:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:20,s:[100],e:[80]},{t:23}],ix:2},o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:2,s:[0],e:[-360]},{t:20}],ix:3},m:1,ix:2,nm:"\u4fee\u526a\u8def\u5f84 1",mn:"ADBE Vector Filter - Trim"}],ip:0,op:240,st:0,bm:0,sr:1}]}},268:function(e,t,n){"use strict";var i=n(0),r=(n.n(i),n(25)),a=n(269);t.a=function(e){var t=e.data,n=e.type;return i.createElement("div",{className:"coreTeam"===n?a["team-item"]+" "+a.core:a["team-item"]+" "+a.advisors},i.createElement("div",{className:a.main},i.createElement("img",{src:""+r.a.IMAGE_URL+t.picture}),i.createElement("h4",null,t.name),"coreTeam"===n?i.createElement("p",{className:a.position},t.position):null,i.createElement("p",null,t.description)))}},269:function(e,t,n){var i=n(270);"string"===typeof i&&(i=[[e.i,i,""]]);var r={};r.transform=void 0;n(215)(i,r);i.locals&&(e.exports=i.locals)},270:function(e,t,n){t=e.exports=n(214)(!0),t.push([e.i,".team-item_37g3Uhtz{color:#fff;text-align:center;width:20%;float:left;height:300px}.team-item_37g3Uhtz.core_2npds6Oy:last-child img{max-width:120px;padding:10px 0}.team-item_37g3Uhtz .main_31jBzP_n{padding:0 10px}.team-item_37g3Uhtz.advisors_38rE95Oq{width:16.66%;float:left;height:330px}.team-item_37g3Uhtz.advisors_38rE95Oq img{max-width:120px;height:113px}.team-item_37g3Uhtz h4{font-family:Rockwell;font-size:1.1rem;color:#2dabe3;margin:10px 0;width:100%}.team-item_37g3Uhtz.advisors_38rE95Oq h4{color:#1a4684;margin:10px 0 20px}.team-item_37g3Uhtz p{color:#888;text-align:center;font-size:.85rem;font-family:Helvetica Neue,Arial;line-height:20px;width:100%}.team-item_37g3Uhtz p.position_DH_GVVz0{margin-bottom:10px;color:#333}@media screen and (max-width:600px){.team-item_37g3Uhtz{width:100%;height:100%!important}.team-item_37g3Uhtz.advisors_38rE95Oq{width:100%}}","",{version:3,sources:["/Users/lianmeng/Desktop/projects/exchange-union/src/scss/team-item.scss"],names:[],mappings:"AAAA,oBACE,WAAY,AACZ,kBAAmB,AACnB,UAAW,AACX,WAAY,AACZ,YAAc,CAAE,AAChB,iDACE,gBAAiB,AACjB,cAAgB,CAAE,AACpB,mCACE,cAAgB,CAAE,AACpB,sCACE,aAAc,AACd,WAAY,AACZ,YAAc,CAAE,AAChB,0CACE,gBAAiB,AACjB,YAAc,CAAE,AACpB,uBACE,qBAAwB,AACxB,iBAAkB,AAClB,cAAe,AACf,cAAsB,AACtB,UAAY,CAAE,AAChB,yCACE,cAAe,AACf,kBAAsB,CAAE,AAC1B,sBACE,WAAY,AACZ,kBAAmB,AACnB,iBAAmB,AACnB,iCAAqC,AACrC,iBAAkB,AAClB,UAAY,CAAE,AAChB,wCACE,mBAAoB,AACpB,UAAY,CAAE,AAElB,oCACE,oBACE,WAAY,AACZ,qBAAwB,CAAE,AAC1B,sCACE,UAAY,CAAE,CAAE",file:"team-item.scss",sourcesContent:['.team-item {\n  color: #fff;\n  text-align: center;\n  width: 20%;\n  float: left;\n  height: 300px; }\n  .team-item.core:last-child img {\n    max-width: 120px;\n    padding: 10px 0; }\n  .team-item .main {\n    padding: 0 10px; }\n  .team-item.advisors {\n    width: 16.66%;\n    float: left;\n    height: 330px; }\n    .team-item.advisors img {\n      max-width: 120px;\n      height: 113px; }\n  .team-item h4 {\n    font-family: "Rockwell";\n    font-size: 1.1rem;\n    color: #2dabe3;\n    margin: 10px 0 10px 0;\n    width: 100%; }\n  .team-item.advisors h4 {\n    color: #1a4684;\n    margin: 10px 0 20px 0; }\n  .team-item p {\n    color: #888;\n    text-align: center;\n    font-size: 0.85rem;\n    font-family: "Helvetica Neue", Arial;\n    line-height: 20px;\n    width: 100%; }\n  .team-item p.position {\n    margin-bottom: 10px;\n    color: #333; }\n\n@media screen and (max-width: 600px) {\n  .team-item {\n    width: 100%;\n    height: 100% !important; }\n    .team-item.advisors {\n      width: 100%; } }\n'],sourceRoot:""}]),t.locals={"team-item":"team-item_37g3Uhtz",core:"core_2npds6Oy",main:"main_31jBzP_n",advisors:"advisors_38rE95Oq",position:"position_DH_GVVz0"}},271:function(e,t,n){"use strict";var i=n(0),r=(n.n(i),n(272));t.a=function(e){var t=e.title;return i.createElement("h2",{className:r.title},t)}},272:function(e,t,n){var i=n(273);"string"===typeof i&&(i=[[e.i,i,""]]);var r={};r.transform=void 0;n(215)(i,r);i.locals&&(e.exports=i.locals)},273:function(e,t,n){t=e.exports=n(214)(!0),t.push([e.i,".title_1orOj2y1{padding-bottom:15px;position:relative}.title_1orOj2y1 span{padding:0!important;position:absolute;border-bottom:2px solid #ccc;width:120px;bottom:0;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}","",{version:3,sources:["/Users/lianmeng/Desktop/projects/exchange-union/src/scss/page-title.scss"],names:[],mappings:"AAAA,gBACE,oBAAqB,AACrB,iBAAmB,CAAE,AACrB,qBACE,oBAAsB,AACtB,kBAAmB,AACnB,6BAA8B,AAC9B,YAAa,AACb,SAAU,AACV,SAAU,AACV,uCAAyC,AACrC,mCAAqC,AACjC,8BAAiC,CAAE",file:"page-title.scss",sourcesContent:[".title {\n  padding-bottom: 15px;\n  position: relative; }\n  .title span {\n    padding: 0 !important;\n    position: absolute;\n    border-bottom: 2px #ccc solid;\n    width: 120px;\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n"],sourceRoot:""}]),t.locals={title:"title_1orOj2y1"}},274:function(e,t,n){var i=n(275);"string"===typeof i&&(i=[[e.i,i,""]]);var r={};r.transform=void 0;n(215)(i,r);i.locals&&(e.exports=i.locals)},275:function(e,t,n){t=e.exports=n(214)(!0),t.push([e.i,".team_2Es_Tguo .content_3tBjPc7R{width:100%;max-width:85rem;margin:0 auto;text-align:center;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.team_2Es_Tguo .header_2H5At4H9{background:url("+n(216)+") top no-repeat;background-size:cover;font-size:4.5rem;color:#fff;font-family:Rockwell;padding:120px 0}.team_2Es_Tguo .header_2H5At4H9 .title_3lVSTRaP{padding:0 40px}.team_2Es_Tguo h2{width:100%;text-align:center;font-size:2.5rem;color:#fff;padding:4.2rem 0;color:#458ed6;font-weight:400}.team_2Es_Tguo .core-team_2A7-kgC3{padding:40px 0;width:100%;text-align:center}.team_2Es_Tguo .core-team_2A7-kgC3 .team_2Es_Tguo{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.team_2Es_Tguo .advisors_2WmDDf5R,.team_2Es_Tguo .our-partners_kzbhCoLp{padding:40px 0;width:100%;text-align:center}.team_2Es_Tguo .our-partners_kzbhCoLp{background-color:#253e61;padding-bottom:120px}.team_2Es_Tguo .our-partners_kzbhCoLp h2{color:#fff}.team_2Es_Tguo .our-partners_kzbhCoLp img{max-height:60px}.team_2Es_Tguo .our-partners_kzbhCoLp .images_1FQvWNLt{text-align:center}.team_2Es_Tguo .our-partners_kzbhCoLp .images_1FQvWNLt a{display:inline-block;background:#fff;border-radius:4px;padding:1rem 2rem;margin:0 40px}.team_2Es_Tguo .our-partners_kzbhCoLp .images_1FQvWNLt img{-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s}.team_2Es_Tguo .our-partners_kzbhCoLp .images_1FQvWNLt img:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05)}@media screen and (max-width:1000px){.our-partners_kzbhCoLp a{margin:20px!important}}","",{version:3,sources:["/Users/lianmeng/Desktop/projects/exchange-union/src/scss/team.scss"],names:[],mappings:"AAAA,iCACE,WAAY,AACZ,gBAAiB,AACjB,cAAe,AACf,kBAAmB,AACnB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAAE,AAEnC,gCACE,uDAAoE,AACpE,sBAAuB,AACvB,iBAAkB,AAClB,WAAY,AACZ,qBAAwB,AACxB,eAAyB,CAAE,AAC3B,gDACE,cAAgB,CAAE,AAEtB,kBACE,WAAY,AACZ,kBAAmB,AACnB,iBAAkB,AAClB,WAAa,AACb,iBAAkB,AAClB,cAAe,AACf,eAAiB,CAAE,AAErB,mCACE,eAAgB,AAChB,WAAY,AACZ,iBAAmB,CAAE,AACrB,kDACE,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,mBAAoB,AACxB,mBAAoB,AAChB,eAAgB,AACpB,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,0BAA2B,AACvB,oBAAsB,CAAE,AAOhC,wEAJE,eAAgB,AAChB,WAAY,AACZ,iBAAmB,CAOK,AAL1B,sCAIE,yBAA0B,AAC1B,oBAAsB,CAAE,AACxB,yCACE,UAAa,CAAE,AACjB,0CACE,eAAiB,CAAE,AACrB,uDACE,iBAAmB,CAAE,AACrB,yDACE,qBAAsB,AACtB,gBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,aAAe,CAAE,AACnB,2DACE,2BAA6B,AAC7B,sBAAwB,AACxB,kBAAqB,CAAE,AACvB,iEACE,8BAA+B,AAC3B,0BAA2B,AACvB,qBAAuB,CAAE,AAEzC,qCACE,yBACE,qBAAwB,CAAE,CAAE",file:"team.scss",sourcesContent:['.team .content {\n  width: 100%;\n  max-width: 85rem;\n  margin: 0 auto;\n  text-align: center;\n  padding: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.team .header {\n  background: url("../resources/img/banner.png") top center no-repeat;\n  background-size: cover;\n  font-size: 4.5rem;\n  color: #fff;\n  font-family: "Rockwell";\n  padding: 120px 0 120px 0; }\n  .team .header .title {\n    padding: 0 40px; }\n\n.team h2 {\n  width: 100%;\n  text-align: center;\n  font-size: 2.5rem;\n  color: white;\n  padding: 4.2rem 0;\n  color: #458ed6;\n  font-weight: 400; }\n\n.team .core-team {\n  padding: 40px 0;\n  width: 100%;\n  text-align: center; }\n  .team .core-team .team {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-line-pack: center;\n        align-content: center; }\n\n.team .advisors {\n  padding: 40px 0;\n  width: 100%;\n  text-align: center; }\n\n.team .our-partners {\n  padding: 40px 0;\n  width: 100%;\n  text-align: center;\n  background-color: #253e61;\n  padding-bottom: 120px; }\n  .team .our-partners h2 {\n    color: white; }\n  .team .our-partners img {\n    max-height: 60px; }\n  .team .our-partners .images {\n    text-align: center; }\n    .team .our-partners .images a {\n      display: inline-block;\n      background: white;\n      border-radius: 4px;\n      padding: 1rem 2rem;\n      margin: 0 40px; }\n    .team .our-partners .images img {\n      -webkit-transition: all 0.2s;\n      -o-transition: all 0.2s;\n      transition: all 0.2s; }\n      .team .our-partners .images img:hover {\n        -webkit-transform: scale(1.05);\n            -ms-transform: scale(1.05);\n                transform: scale(1.05); }\n\n@media screen and (max-width: 1000px) {\n  .our-partners a {\n    margin: 20px !important; } }\n'],sourceRoot:""}]),t.locals={team:"team_2Es_Tguo",content:"content_3tBjPc7R",header:"header_2H5At4H9",title:"title_3lVSTRaP","core-team":"core-team_2A7-kgC3",advisors:"advisors_2WmDDf5R","our-partners":"our-partners_kzbhCoLp",images:"images_1FQvWNLt"}},276:function(e,t){e.exports="data:image/png;base64,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"},277:function(e,t,n){e.exports=n.p+"static/media/okex.37933c90.png"},278:function(e,t,n){e.exports=n.p+"static/media/ripioCredit.7427f332.png"}});