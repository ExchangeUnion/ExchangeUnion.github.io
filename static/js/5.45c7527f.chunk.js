webpackJsonp([5],{245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=(n.n(i),n(12)),r=n(30),a=n(254),s=n(266),l=n(33),c=n(32),p=n(97),u=n(310),A=n(270),d=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),f=n(313),m=function(e){function t(t){var n=e.call(this,t)||this;return n.state={loading:!0,newsData:[]},n}return d(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.setPageview("/news");var t=r.a.API_PATH_PRESS+"?lang="+this.props.lang+"&key="+r.a.API_KEY;c.a.Get(t).then(function(t){e.setState({loading:!1,newsData:t})})},t.prototype.onFormantDate=function(e){var t=new Date(e);return{year:t.getFullYear(),month:l.a.formantMonth(t.getMonth()),day:t.getDate()}},t.prototype.render=function(){var e=this,t=this.props,n=t.i18n,r=t.lang;return i.createElement("div",{className:f.news},i.createElement("div",{className:f.header},i.createElement("div",{className:f.content},i.createElement(s.a,null,i.createElement(a.a,null,i.createElement("div",{className:f.title},n.NEWS_PAGE_TITLE,i.createElement("div",{className:f.subscribe},i.createElement("h4",null,n.NEWS_LETTER_FOOTER_TEXT),i.createElement(p.a,{i18n:n,lang:r}))))))),i.createElement("div",{className:f.link},i.createElement("div",{className:f.content},i.createElement(o.b,{to:"/news",className:f.active},n.NEWS_PAGE_PRESS_TEXT),i.createElement("a",{href:"http://blog.exchangeunion.com"},n.NEWS_PAGE_BLOG_TEXT))),i.createElement("div",{className:f.blog},i.createElement("div",{className:f.content},i.createElement("div",{className:f["blog-content"]},this.state.newsData.map(function(t){var n=e.onFormantDate(t.date),o={link:t.link,title:t.title,year:n.year,month:n.month,day:n.day,imageUrl:t.imageUrl,source:t.source};return i.createElement(u.a,{key:Math.random(),data:o})}),this.state.loading?i.createElement(A.a,{text:n.NEWS_PAGE_LOADING}):null))))},t}(i.Component);t.default=m},252:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=!("undefined"===typeof window||!window.document||!window.document.createElement),e.exports=t.default},253:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!==typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=o;var r=n(0),a=(i(r),n(1)),s=i(a);t.nameShape=s.default.oneOfType([s.default.string,s.default.shape({enter:s.default.string,leave:s.default.string,active:s.default.string}),s.default.shape({enter:s.default.string,enterActive:s.default.string,leave:s.default.string,leaveActive:s.default.string,appear:s.default.string,appearActive:s.default.string})])},254:function(e,t,n){"use strict";var i=n(0),o=(n.n(i),n(255)),r=n.n(o),a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),s=function(e){function t(t){return e.call(this,t)||this}return a(t,e),t.prototype.render=function(){return i.createElement(r.a,{component:"div",className:"react-container",transitionName:"slide-in",transitionAppear:!0,transitionAppearTimeout:1500,transitionEnterTimeout:1500,transitionLeaveTimeout:1500},this.props.children)},t}(i.Component);t.a=s},255:function(e,t,n){"use strict";e.exports=n(256)},256:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(0),c=i(l),p=n(1),u=i(p),A=n(257),d=i(A),f=n(260),m=i(f),h=n(253),g=(h.nameShape.isRequired,u.default.bool,u.default.bool,u.default.bool,(0,h.transitionTimeout)("Appear"),(0,h.transitionTimeout)("Enter"),(0,h.transitionTimeout)("Leave"),{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}),x=function(e){function t(){var n,i,a;o(this,t);for(var s=arguments.length,l=Array(s),p=0;p<s;p++)l[p]=arguments[p];return n=i=r(this,e.call.apply(e,[this].concat(l))),i._wrapChild=function(e){return c.default.createElement(m.default,{name:i.props.transitionName,appear:i.props.transitionAppear,enter:i.props.transitionEnter,leave:i.props.transitionLeave,appearTimeout:i.props.transitionAppearTimeout,enterTimeout:i.props.transitionEnterTimeout,leaveTimeout:i.props.transitionLeaveTimeout},e)},a=n,r(i,a)}return a(t,e),t.prototype.render=function(){return c.default.createElement(d.default,s({},this.props,{childFactory:this._wrapChild}))},t}(c.default.Component);x.displayName="CSSTransitionGroup",x.propTypes={},x.defaultProps=g,t.default=x,e.exports=t.default},257:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(258),c=i(l),p=n(0),u=i(p),A=n(1),d=i(A),f=n(2),m=(i(f),n(259)),h=(d.default.any,d.default.func,d.default.node,{component:"span",childFactory:function(e){return e}}),g=function(e){function t(n,i){o(this,t);var a=r(this,e.call(this,n,i));return a.performAppear=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(a._handleDoneAppearing.bind(a,e,t)):a._handleDoneAppearing(e,t)},a._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete a.currentlyTransitioningKeys[e];var n=(0,m.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performEnter=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(a._handleDoneEntering.bind(a,e,t)):a._handleDoneEntering(e,t)},a._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete a.currentlyTransitioningKeys[e];var n=(0,m.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performLeave=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(a._handleDoneLeaving.bind(a,e,t)):a._handleDoneLeaving(e,t)},a._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete a.currentlyTransitioningKeys[e];var n=(0,m.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)?a.keysToEnter.push(e):a.setState(function(t){var n=s({},t.children);return delete n[e],{children:n}})},a.childRefs=Object.create(null),a.state={children:(0,m.getChildMapping)(n.children)},a}return a(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,m.getChildMapping)(e.children),n=this.state.children;this.setState({children:(0,m.mergeChildMappings)(n,t)});for(var i in t){var o=n&&n.hasOwnProperty(i);!t[i]||o||this.currentlyTransitioningKeys[i]||this.keysToEnter.push(i)}for(var r in n){var a=t&&t.hasOwnProperty(r);!n[r]||a||this.currentlyTransitioningKeys[r]||this.keysToLeave.push(r)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach(function(t){return e.performEnter(t,e.childRefs[t])});var n=this.keysToLeave;this.keysToLeave=[],n.forEach(function(t){return e.performLeave(t,e.childRefs[t])})},t.prototype.render=function(){var e=this,t=[];for(var n in this.state.children)!function(n){var i=e.state.children[n];if(i){var o="string"!==typeof i.ref,r=e.props.childFactory(i),a=function(t){e.childRefs[n]=t};r===i&&o&&(a=(0,c.default)(i.ref,a)),t.push(u.default.cloneElement(r,{key:n,ref:a}))}}(n);var i=s({},this.props);return delete i.transitionLeave,delete i.transitionName,delete i.transitionAppear,delete i.transitionEnter,delete i.childFactory,delete i.transitionLeaveTimeout,delete i.transitionEnterTimeout,delete i.transitionAppearTimeout,delete i.component,u.default.createElement(this.props.component,i,t)},t}(u.default.Component);g.displayName="TransitionGroup",g.propTypes={},g.defaultProps=h,t.default=g,e.exports=t.default},258:function(e,t){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(t=t.filter(function(e){return null!=e}),0!==t.length)return 1===t.length?t[0]:t.reduce(function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}})}},259:function(e,t,n){"use strict";function i(e){if(!e)return e;var t={};return r.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e}),t}function o(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var i={},o=[];for(var r in e)t.hasOwnProperty(r)?o.length&&(i[r]=o,o=[]):o.push(r);var a=void 0,s={};for(var l in t){if(i.hasOwnProperty(l))for(a=0;a<i[l].length;a++){var c=i[l][a];s[i[l][a]]=n(c)}s[l]=n(l)}for(a=0;a<o.length;a++)s[o[a]]=n(o[a]);return s}t.__esModule=!0,t.getChildMapping=i,t.mergeChildMappings=o;var r=n(0)},260:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return v.length?v.forEach(function(n){return e.addEventListener(n,t,!1)}):setTimeout(t,0),function(){v.length&&v.forEach(function(n){return e.removeEventListener(n,t,!1)})}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=n(261),p=i(c),u=n(263),A=i(u),d=n(264),f=i(d),m=n(265),h=n(0),g=i(h),x=n(1),y=i(x),C=n(54),E=n(253),v=[];m.transitionEnd&&v.push(m.transitionEnd),m.animationEnd&&v.push(m.animationEnd);var w=(y.default.node,E.nameShape.isRequired,y.default.bool,y.default.bool,y.default.bool,y.default.number,y.default.number,y.default.number,function(e){function t(){var n,i,a;o(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return n=i=r(this,e.call.apply(e,[this].concat(l))),i.componentWillAppear=function(e){i.props.appear?i.transition("appear",e,i.props.appearTimeout):e()},i.componentWillEnter=function(e){i.props.enter?i.transition("enter",e,i.props.enterTimeout):e()},i.componentWillLeave=function(e){i.props.leave?i.transition("leave",e,i.props.leaveTimeout):e()},a=n,r(i,a)}return a(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var i=(0,C.findDOMNode)(this);if(!i)return void(t&&t());var o=this.props.name[e]||this.props.name+"-"+e,r=this.props.name[e+"Active"]||o+"-active",a=null,l=void 0;(0,p.default)(i,o),this.queueClassAndNode(r,i);var c=function(e){e&&e.target!==i||(clearTimeout(a),l&&l(),(0,A.default)(i,o),(0,A.default)(i,r),l&&l(),t&&t())};n?(a=setTimeout(c,n),this.transitionTimeouts.push(a)):m.transitionEnd&&(l=s(i,c))},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,f.default)(function(){return n.flushClassNameAndNodeQueue()}))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,p.default)(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=l({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,g.default.cloneElement(g.default.Children.only(this.props.children),e)},t}(g.default.Component));w.displayName="CSSTransitionGroupChild",w.propTypes={},t.default=w,e.exports=t.default},261:function(e,t,n){"use strict";function i(e,t){e.classList?e.classList.add(t):(0,r.default)(e)||(e.className=e.className+" "+t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=n(262),r=function(e){return e&&e.__esModule?e:{default:e}}(o);e.exports=t.default},262:function(e,t,n){"use strict";function i(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+e.className+" ").indexOf(" "+t+" ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},263:function(e,t,n){"use strict";e.exports=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}},264:function(e,t,n){"use strict";function i(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-u)),i=setTimeout(e,n);return u=t,i}Object.defineProperty(t,"__esModule",{value:!0});var o=n(252),r=function(e){return e&&e.__esModule?e:{default:e}}(o),a=["","webkit","moz","o","ms"],s="clearTimeout",l=i,c=void 0,p=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};r.default&&a.some(function(e){var t=p(e,"request");if(t in window)return s=p(e,"cancel"),l=function(e){return window[t](e)}});var u=(new Date).getTime();c=function(e){return l(e)},c.cancel=function(e){window[s]&&"function"===typeof window[s]&&window[s](e)},t.default=c,e.exports=t.default},265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var i=n(252),o=function(e){return e&&e.__esModule?e:{default:e}}(i),r="transform",a=void 0,s=void 0,l=void 0,c=void 0,p=void 0,u=void 0,A=void 0,d=void 0,f=void 0,m=void 0,h=void 0;if(o.default){var g=function(){for(var e=document.createElement("div").style,t={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},n=Object.keys(t),i=void 0,o=void 0,r="",a=0;a<n.length;a++){var s=n[a];if(s+"TransitionProperty"in e){r="-"+s.toLowerCase(),i=t[s]("TransitionEnd"),o=t[s]("AnimationEnd");break}}return!i&&"transitionProperty"in e&&(i="transitionend"),!o&&"animationName"in e&&(o="animationend"),e=null,{animationEnd:o,transitionEnd:i,prefix:r}}();a=g.prefix,t.transitionEnd=s=g.transitionEnd,t.animationEnd=l=g.animationEnd,t.transform=r=a+"-"+r,t.transitionProperty=c=a+"-transition-property",t.transitionDuration=p=a+"-transition-duration",t.transitionDelay=A=a+"-transition-delay",t.transitionTiming=u=a+"-transition-timing-function",t.animationName=d=a+"-animation-name",t.animationDuration=f=a+"-animation-duration",t.animationTiming=m=a+"-animation-delay",t.animationDelay=h=a+"-animation-timing-function"}t.transform=r,t.transitionProperty=c,t.transitionTiming=u,t.transitionDelay=A,t.transitionDuration=p,t.transitionEnd=s,t.animationName=d,t.animationDuration=f,t.animationTiming=m,t.animationDelay=h,t.animationEnd=l,t.default={transform:r,end:s,property:c,timing:u,delay:A,duration:p}},266:function(e,t,n){"use strict";var i=n(0),o=(n.n(i),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}()),r=function(e){function t(t){var n=e.call(this,t)||this;return n.DOMElement={},n.state={init:!1},n.handleScroll=n.handleScroll.bind(n),n}return o(t,e),t.prototype.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll),setTimeout(this.handleScroll)},t.prototype.handleScroll=function(){var e=window.scrollY;window.navigator.userAgent.indexOf("Trident/7.0")>=0&&(e=document.documentElement.scrollTop);var t=this.DOMElement.myRef;this.DOMElement.myRef&&window.innerHeight+e>t.offsetTop&&this.setState({init:!0})},t.prototype.render=function(){var e=this;return i.createElement("span",{ref:function(t){e.DOMElement.myRef=t}},this.state.init?this.props.children:null)},t}(i.Component);t.a=r},270:function(e,t,n){"use strict";var i=n(0),o=(n.n(i),n(31)),r=n.n(o),a=n(271),s={loop:!0,autoplay:!0,animationData:a};t.a=function(e){var t=e.text;return i.createElement("div",{style:{margin:"0 auto",color:"#2dabe2"}},i.createElement(r.a,{options:s,height:60,width:60}),i.createElement("p",null,t))}},271:function(e,t){e.exports={v:"4.7.1",fr:24,ip:0,op:20,w:560,h:420,nm:"\u5408\u6210 1",ddd:0,assets:[],layers:[{ddd:0,ind:2,ty:4,nm:"2",ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[280,210,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{ty:"st",c:{a:0,k:[.2156863,.3686275,.7568627,1]},o:{a:0,k:100},w:{a:0,k:6},lc:1,lj:1,ml:4,nm:"\u63cf\u8fb9 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"\u53d8\u6362"}],nm:"\u5f62\u72b6 2",np:2,cix:2,ix:1,mn:"ADBE Vector Group"},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-82.5,-27],[-24,39],[67.5,-48]],c:!1}},nm:"\u8def\u5f84 1",mn:"ADBE Vector Shape - Group"},{ty:"st",c:{a:0,k:[.2156863,.3686275,.7568627,1]},o:{a:0,k:100},w:{a:0,k:6},lc:1,lj:1,ml:4,nm:"\u63cf\u8fb9 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"\u53d8\u6362"}],nm:"\u5f62\u72b6 1",np:3,cix:2,ix:2,mn:"ADBE Vector Group"},{ty:"tm",s:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:26,s:[0],e:[21]},{t:29}],ix:1},e:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:20,s:[0],e:[86]},{t:29}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:3,nm:"\u4fee\u526a\u8def\u5f84 1",mn:"ADBE Vector Filter - Trim"}],ip:0,op:240,st:0,bm:0,sr:1},{ddd:0,ind:3,ty:4,nm:"3",ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[280,210,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[169.516,169.516]},p:{a:0,k:[0,0]},nm:"\u692d\u5706\u8def\u5f84 1",mn:"ADBE Vector Shape - Ellipse"},{ty:"st",c:{a:0,k:[.2156863,.3686275,.7568627,1]},o:{a:0,k:100},w:{a:0,k:6},lc:1,lj:1,ml:4,nm:"\u63cf\u8fb9 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[-.031,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[101.786,101.786],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"\u53d8\u6362"}],nm:"\u692d\u5706 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group"},{ty:"tm",s:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:0,s:[100],e:[80]},{t:2}],ix:1},e:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:20,s:[100],e:[80]},{t:23}],ix:2},o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:2,s:[0],e:[-360]},{t:20}],ix:3},m:1,ix:2,nm:"\u4fee\u526a\u8def\u5f84 1",mn:"ADBE Vector Filter - Trim"}],ip:0,op:240,st:0,bm:0,sr:1}]}},310:function(e,t,n){"use strict";var i=n(0),o=(n.n(i),n(12)),r=n(30),a=n(311);t.a=function(e){var t=e.data;return i.createElement("div",{className:a["blog-item"]},i.createElement(o.b,{to:t.link,target:"_blank"},i.createElement("img",{src:""+r.a.IMAGE_URL+t.imageUrl}),i.createElement("footer",null,i.createElement("div",{className:a.date},i.createElement("span",null,t.day),i.createElement("span",null,t.month," ",t.year)),i.createElement("div",{className:a.info},i.createElement("span",null,t.source),i.createElement("h4",null,t.title)))))}},311:function(e,t,n){var i=n(312);"string"===typeof i&&(i=[[e.i,i,""]]);var o={};o.transform=void 0;n(238)(i,o);i.locals&&(e.exports=i.locals)},312:function(e,t,n){t=e.exports=n(237)(!0),t.push([e.i,".blog-item_39KoCmJx{-ms-flex:31.4% 1;flex:31.4% 1;-ms-flex-positive:0;flex-grow:0;height:285px;margin:10px;-webkit-box-shadow:0 0 10px rgba(0,0,0,.5);box-shadow:0 0 10px rgba(0,0,0,.5);overflow:hidden}.blog-item_39KoCmJx:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transition:.4s;-o-transition:.4s;transition:.4s}.blog-item_39KoCmJx img{width:100%;height:180px}.blog-item_39KoCmJx .date_1gb0fkPW{width:35%;float:left;padding-top:20px}.blog-item_39KoCmJx .date_1gb0fkPW span{display:inline-block;width:100%;text-align:center;padding-bottom:5px;color:#999;font-size:1.1rem}.blog-item_39KoCmJx .info_2btdPyTG{width:65%;float:left;text-align:left}.blog-item_39KoCmJx .info_2btdPyTG span{display:inline-block;color:#999;font-size:.75rem}.blog-item_39KoCmJx .info_2btdPyTG h4{padding:5px 10px 0 0;color:#333;font-size:.9rem;font-weight:400}@media screen and (max-width:830px){.blog-item_39KoCmJx{width:100%!important;margin:20px;-ms-flex:auto!important;flex:auto!important;height:100%!important}.blog-item_39KoCmJx img{width:100%;height:100%}}","",{version:3,sources:["/Users/lianmeng/Desktop/projects/exchange-union/src/scss/blog-item.scss"],names:[],mappings:"AAAA,oBACE,iBAAkB,AACd,aAAc,AAClB,oBAAqB,AACjB,YAAa,AACjB,aAAc,AACd,YAAa,AACb,2CAAgD,AACxC,mCAAwC,AAChD,eAAiB,CAAE,AACnB,0BACE,8BAA+B,AAC3B,0BAA2B,AACvB,sBAAuB,AAC/B,uBAAyB,AACzB,kBAAoB,AACpB,cAAiB,CAAE,AACrB,wBACE,WAAY,AACZ,YAAc,CAAE,AAClB,mCACE,UAAW,AACX,WAAY,AACZ,gBAAkB,CAAE,AACpB,wCACE,qBAAsB,AACtB,WAAY,AACZ,kBAAmB,AACnB,mBAAoB,AACpB,WAAe,AACf,gBAAkB,CAAE,AACxB,mCACE,UAAW,AACX,WAAY,AACZ,eAAiB,CAAE,AACnB,wCACE,qBAAsB,AACtB,WAAe,AACf,gBAAmB,CAAE,AACvB,sCACE,qBAAsB,AACtB,WAAe,AACf,gBAAkB,AAClB,eAAoB,CAAE,AAE5B,oCACE,oBACE,qBAAuB,AACvB,YAAa,AACb,wBAA0B,AACtB,oBAAsB,AAC1B,qBAAwB,CAAE,AAC1B,wBACE,WAAY,AACZ,WAAa,CAAE,CAAE",file:"blog-item.scss",sourcesContent:[".blog-item {\n  -ms-flex: 31.4% 1;\n      flex: 31.4% 1;\n  -ms-flex-positive: 0;\n      flex-grow: 0;\n  height: 285px;\n  margin: 10px;\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  overflow: hidden; }\n  .blog-item:hover {\n    -webkit-transform: scale(1.05);\n        -ms-transform: scale(1.05);\n            transform: scale(1.05);\n    -webkit-transition: 0.4s;\n    -o-transition: 0.4s;\n    transition: 0.4s; }\n  .blog-item img {\n    width: 100%;\n    height: 180px; }\n  .blog-item .date {\n    width: 35%;\n    float: left;\n    padding-top: 20px; }\n    .blog-item .date span {\n      display: inline-block;\n      width: 100%;\n      text-align: center;\n      padding-bottom: 5px;\n      color: #999999;\n      font-size: 1.1rem; }\n  .blog-item .info {\n    width: 65%;\n    float: left;\n    text-align: left; }\n    .blog-item .info span {\n      display: inline-block;\n      color: #999999;\n      font-size: 0.75rem; }\n    .blog-item .info h4 {\n      padding: 5px 10px 0 0;\n      color: #333333;\n      font-size: 0.9rem;\n      font-weight: normal; }\n\n@media screen and (max-width: 830px) {\n  .blog-item {\n    width: 100% !important;\n    margin: 20px;\n    -ms-flex: auto !important;\n        flex: auto !important;\n    height: 100% !important; }\n    .blog-item img {\n      width: 100%;\n      height: 100%; } }\n"],sourceRoot:""}]),t.locals={"blog-item":"blog-item_39KoCmJx",date:"date_1gb0fkPW",info:"info_2btdPyTG"}},313:function(e,t,n){var i=n(314);"string"===typeof i&&(i=[[e.i,i,""]]);var o={};o.transform=void 0;n(238)(i,o);i.locals&&(e.exports=i.locals)},314:function(e,t,n){t=e.exports=n(237)(!0),t.push([e.i,".news_3ETDY-Tn .content_Ad0emkLA{width:100%;max-width:65rem;margin:0 auto}.news_3ETDY-Tn .header_2ICpze7F{background:url("+n(315)+") top no-repeat;font-size:3rem;color:#fff;font-family:Rockwell;padding:120px 0;padding:110px 0}.news_3ETDY-Tn .header_2ICpze7F .title_3i1xpJam{padding:0 40px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.news_3ETDY-Tn .header_2ICpze7F .subscribe_2oJ1TNto{-ms-flex:0 1 auto;flex:0 1 auto;width:330px}.news_3ETDY-Tn .header_2ICpze7F .subscribe_2oJ1TNto h4{font-size:1.25rem;margin-bottom:15px}.news_3ETDY-Tn .link_3X_1XHcG{height:60px}.news_3ETDY-Tn .link_3X_1XHcG a{width:50%;float:left;text-align:center;line-height:60px;color:#333;font-size:1.25rem;border-bottom:2px solid #ccc}.news_3ETDY-Tn .link_3X_1XHcG a.active_3l9Tv9_c,.news_3ETDY-Tn .link_3X_1XHcG a:hover{border-bottom:2px solid #2dabe2;color:#2dabe2}.news_3ETDY-Tn .blog_3vV2UO8-{padding:40px 0;width:100%;text-align:center}.news_3ETDY-Tn .blog_3vV2UO8- .blog-content_2S1Op99k{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start;margin:0 -10px}.news_3ETDY-Tn .loading_2-w5VHVF{margin:0 auto;color:#2dabe2}@media screen and (max-width:830px){.text_1xtDiaoJ p{padding:0 20px!important;width:100%!important;text-align:center!important}.text_1xtDiaoJ img{margin:0 auto}.blog_3vV2UO8- .blog-content_2S1Op99k{margin:0!important}}@media screen and (min-width:1920px){.news_3ETDY-Tn .header_2ICpze7F{background-size:100% 100%}}","",{version:3,sources:["/Users/lianmeng/Desktop/projects/exchange-union/src/scss/news.scss"],names:[],mappings:"AAAA,iCACE,WAAY,AACZ,gBAAiB,AACjB,aAAe,CAAE,AAEnB,gCACE,uDAAyE,AACzE,eAAgB,AAChB,WAAY,AACZ,qBAAwB,AACxB,gBAAyB,AACzB,eAAiB,CAAE,AACnB,gDACE,eAAgB,AAEhB,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,mBAAoB,AACxB,mBAAoB,AAChB,eAAgB,AACpB,sBAAuB,AACnB,8BAA+B,AACnC,sBAAuB,AACnB,mBAAoB,AACxB,0BAA2B,AACvB,oBAAsB,CAbR,AAcpB,oDACE,kBAAmB,AACf,cAAe,AACnB,WAAa,CAAE,AACf,uDACE,kBAAmB,AACnB,kBAAoB,CAAE,AAE5B,8BACE,WAAa,CAAE,AACf,gCACE,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,iBAAkB,AAClB,WAAe,AACf,kBAAmB,AACnB,4BAAiC,CAAE,AACnC,sFACE,gCAAiC,AACjC,aAAe,CAAE,AAEvB,8BACE,eAAgB,AAChB,WAAY,AACZ,iBAAmB,CAAE,AACrB,qDACE,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,mBAAoB,AACxB,mBAAoB,AAChB,eAAgB,AACpB,oBAAqB,AACjB,2BAA4B,AAChC,qBAAsB,AAClB,uBAAwB,AAC5B,yBAA0B,AACtB,yBAA0B,AAC9B,cAAgB,CAAE,AAEtB,iCACE,cAAe,AACf,aAAe,CAAE,AAEnB,oCACE,iBACE,yBAA2B,AAC3B,qBAAuB,AACvB,2BAA8B,CAAE,AAClC,mBACE,aAAe,CAAE,AACnB,sCACE,kBAAqB,CAAE,CAAE,AAE7B,qCACE,gCACE,yBAA2B,CAAE,CAAE",file:"news.scss",sourcesContent:['.news .content {\n  width: 100%;\n  max-width: 65rem;\n  margin: 0 auto; }\n\n.news .header {\n  background: url("../resources/img/news-banner.png") top center no-repeat;\n  font-size: 3rem;\n  color: #fff;\n  font-family: "Rockwell";\n  padding: 120px 0 120px 0;\n  padding: 110px 0; }\n  .news .header .title {\n    padding: 0 40px; }\n  .news .header .title {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-line-pack: center;\n        align-content: center; }\n  .news .header .subscribe {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    width: 330px; }\n    .news .header .subscribe h4 {\n      font-size: 1.25rem;\n      margin-bottom: 15px; }\n\n.news .link {\n  height: 60px; }\n  .news .link a {\n    width: 50%;\n    float: left;\n    text-align: center;\n    line-height: 60px;\n    color: #333333;\n    font-size: 1.25rem;\n    border-bottom: 2px #cccccc solid; }\n    .news .link a:hover, .news .link a.active {\n      border-bottom: 2px #2dabe2 solid;\n      color: #2dabe2; }\n\n.news .blog {\n  padding: 40px 0;\n  width: 100%;\n  text-align: center; }\n  .news .blog .blog-content {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n    -ms-flex-align: start;\n        align-items: flex-start;\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n    margin: 0 -10px; }\n\n.news .loading {\n  margin: 0 auto;\n  color: #2dabe2; }\n\n@media screen and (max-width: 830px) {\n  .text p {\n    padding: 0 20px !important;\n    width: 100% !important;\n    text-align: center !important; }\n  .text img {\n    margin: 0 auto; }\n  .blog .blog-content {\n    margin: 0 !important; } }\n\n@media screen and (min-width: 1920px) {\n  .news .header {\n    background-size: 100% 100%; } }\n'],sourceRoot:""}]),t.locals={news:"news_3ETDY-Tn",content:"content_Ad0emkLA",header:"header_2ICpze7F",title:"title_3i1xpJam",subscribe:"subscribe_2oJ1TNto",link:"link_3X_1XHcG",active:"active_3l9Tv9_c",blog:"blog_3vV2UO8-","blog-content":"blog-content_2S1Op99k",loading:"loading_2-w5VHVF",text:"text_1xtDiaoJ"}},315:function(e,t,n){e.exports=n.p+"static/media/news-banner.aa87f86e.png"}});