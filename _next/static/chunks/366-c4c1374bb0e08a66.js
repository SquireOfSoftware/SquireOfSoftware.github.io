(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{7960:function(e,t,n){"use strict";n.d(t,{s:function(){return E}});var r=n(655),o=n(7294),a=n(7646),i=n(5934),c=n(1706),u=n(8),s=n(8075),l=n(5948),f=n(6854),d=n(9585),p=n(2178),y=n(5451);function g(){var e=(0,d.B)(1),t={lead:void 0,follow:void 0,crossfadeOpacity:!1,preserveFollowOpacity:!1},n=(0,r.pi)({},t),o={},a={},i=!1,s=null,l=0;function g(n,o){var a=t.lead,u=t.follow;i=!0,s=null;var l=!1,f=function(){l=!0,a&&a.scheduleRender(),u&&u.scheduleRender()},g=function(){i=!1,s=(0,c.$B)().timestamp};return o=o&&(0,y.ev)(o,"crossfade"),function(e,t,n){void 0===n&&(n={});var r=(0,p.i)(e)?e:(0,d.B)(e);return(0,y.b8)("",r,t,n),{stop:function(){return r.stop()}}}(e,n,(0,r.pi)((0,r.pi)({},o),{onUpdate:f,onComplete:function(){l?g():(e.set(n),c.ZP.read(g)),f()}}))}function b(){var n,r,i=(0,c.$B)().timestamp,s=t.lead,d=t.follow;if(i!==l&&s){l=i;var p=s.getLatestValues();Object.assign(o,p);var y=d?d.getLatestValues():t.prevValues;Object.assign(a,y);var g=e.get(),b=null!==(n=p.opacity)&&void 0!==n?n:1,j=null!==(r=null===y||void 0===y?void 0:y.opacity)&&void 0!==r?r:1;t.crossfadeOpacity&&d?(o.opacity=(0,u.C)(!1!==d.isVisible?0:j,b,v(g)),a.opacity=t.preserveFollowOpacity?j:(0,u.C)(j,0,h(g))):d||(o.opacity=(0,u.C)(j,b,g)),function(e,t,n,r,o,a){for(var i=0;i<O;i++){var c="border"+m[i]+"Radius",s=w(r,c),l=w(n,c);if((void 0!==s||void 0!==l)&&(s||(s=0),l||(l=0),"number"===typeof s&&"number"===typeof l)){var d=Math.max((0,u.C)(s,l,a),0);e[c]=t[c]=d}}if(r.rotate||n.rotate){var p=(0,u.C)(r.rotate||0,n.rotate||0,a);e.rotate=t.rotate=p}!o&&n.backgroundColor&&r.backgroundColor&&(e.backgroundColor=t.backgroundColor=(0,f.R)(r.backgroundColor,n.backgroundColor)(a))}(o,a,p,y||{},Boolean(d),g)}}return{isActive:function(){return o&&(i||(0,c.$B)().timestamp===s)},fromLead:function(e){return g(0,e)},toLead:function(r){var o=0;return t.prevValues||t.follow?n.lead===t.follow&&n.follow===t.lead&&(o=1-e.get()):o=1,e.set(o),g(1,r)},reset:function(){return e.set(1)},stop:function(){return e.stop()},getCrossfadeState:function(e){return b(),e===t.lead?o:e===t.follow?a:void 0},setOptions:function(e){n=t,t=e,o={},a={}},getLatestValues:function(){return o}}}var v=b(0,.5,s.Bn),h=b(.5,.95,s.GE);function b(e,t,n){return function(r){return r<e?0:r>t?1:n((0,l.Y)(e,t,r))}}var m=["TopLeft","TopRight","BottomLeft","BottomRight"],O=m.length;function w(e,t){var n;return null!==(n=e[t])&&void 0!==n?n:e.borderRadius}function j(){var e,t,n,o=new Set,c={leadIsExiting:!1},u=(0,r.pi)({},c),s=g(),l=!1;return{add:function(e){e.setCrossfader(s),o.add(e),n&&(e.prevDragCursor=n),c.lead||(c.lead=e)},remove:function(e){o.delete(e)},getLead:function(){return c.lead},updateSnapshot:function(){if(c.lead){e=s.isActive()?s.getLatestValues():c.lead.getLatestValues(),t=c.lead.prevViewportBox;var r=i.o.get(c.lead);r&&r.isDragging&&(n=r.cursorProgress)}},clearSnapshot:function(){n=t=void 0},updateLeadAndFollow:function(){var t,n,i;u=(0,r.pi)({},c);for(var f=Array.from(o),d=f.length;d--;d>=0){var p=f[d];if(n&&(null!==i&&void 0!==i||(i=p)),null!==n&&void 0!==n||(n=p),n&&i)break}c.lead=n,c.follow=i,c.leadIsExiting=(null===(t=c.lead)||void 0===t?void 0:t.presence)===a.z.Exiting,s.setOptions({lead:n,follow:i,prevValues:e,crossfadeOpacity:(null===i||void 0===i?void 0:i.isPresenceRoot)||(null===n||void 0===n?void 0:n.isPresenceRoot)}),c.lead===u.follow||u.lead===c.lead&&u.leadIsExiting===c.leadIsExiting||(l=!0)},animate:function(e,n){var r;if(void 0===n&&(n=!1),e===c.lead){n?e.pointTo(c.lead):e.setVisibility(!0);var o={},i=null===(r=c.follow)||void 0===r?void 0:r.getProjectionParent();if(i&&(o.prevParent=i),e.presence===a.z.Entering?o.originBox=c.follow?c.follow.prevViewportBox:t:e.presence===a.z.Exiting&&(o.targetBox=function(){var e;return null===(e=c.follow)||void 0===e?void 0:e.getLayoutState().layout}()),l){l=!1;var u=e.getDefaultTransition();e.presence===a.z.Entering?s.toLead(u):s.fromLead(u)}e.notifyLayoutReady(o)}else n?c.lead&&e.pointTo(c.lead):e.setVisibility(!1)}}}var k=n(9823),S=n(3335),P=n(9148);var x=n(494),C=n(8839),E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.children=new Set,t.stacks=new Map,t.hasMounted=!1,t.updateScheduled=!1,t.renderScheduled=!1,t.syncContext=(0,r.pi)((0,r.pi)({},(0,x.V)()),{syncUpdate:function(e){return t.scheduleUpdate(e)},forceUpdate:function(){t.syncContext=(0,r.pi)({},t.syncContext),t.scheduleUpdate(!0)},register:function(e){return t.addChild(e)},remove:function(e){return t.removeChild(e)}}),t}return(0,r.ZT)(t,e),t.prototype.componentDidMount=function(){this.hasMounted=!0},t.prototype.componentDidUpdate=function(){this.startLayoutAnimation()},t.prototype.shouldComponentUpdate=function(){return this.renderScheduled=!0,!0},t.prototype.startLayoutAnimation=function(){var e=this;this.renderScheduled=this.updateScheduled=!1;var t=this.props.type;this.children.forEach((function(e){e.isPresent?e.presence!==a.z.Entering&&(e.presence=e.presence===a.z.Exiting?a.z.Entering:a.z.Present):e.presence=a.z.Exiting})),this.updateStacks();var n={layoutReady:function(n){void 0!==n.getLayoutId()?e.getStack(n).animate(n,"crossfade"===t):n.notifyLayoutReady()},parent:this.context.visualElement};this.children.forEach((function(t){return e.syncContext.add(t)})),this.syncContext.flush(n),this.stacks.forEach((function(e){return e.clearSnapshot()}))},t.prototype.updateStacks=function(){this.stacks.forEach((function(e){return e.updateLeadAndFollow()}))},t.prototype.scheduleUpdate=function(e){void 0===e&&(e=!1),!e&&this.updateScheduled||(this.updateScheduled=!0,this.children.forEach((function(e){!function(e){for(var t=!1,n={},r=0;r<P.r$.length;r++){var o="rotate"+P.r$[r];e.hasValue(o)&&0!==e.getStaticValue(o)&&(t=!0,n[o]=e.getStaticValue(o),e.setStaticValue(o,0))}if(t){for(var o in e.syncRender(),n)e.setStaticValue(o,n[o]);e.scheduleRender()}}(e),e.shouldResetTransform()&&e.resetTransform()})),this.children.forEach(C.x7),this.stacks.forEach((function(e){return e.updateSnapshot()})),!e&&this.renderScheduled||(this.renderScheduled=!0,this.forceUpdate()))},t.prototype.addChild=function(e){this.children.add(e),this.addToStack(e),e.presence=this.hasMounted?a.z.Entering:a.z.Present},t.prototype.removeChild=function(e){this.scheduleUpdate(),this.children.delete(e),this.removeFromStack(e)},t.prototype.addToStack=function(e){var t=this.getStack(e);null===t||void 0===t||t.add(e)},t.prototype.removeFromStack=function(e){var t=this.getStack(e);null===t||void 0===t||t.remove(e)},t.prototype.getStack=function(e){var t=e.getLayoutId();if(void 0!==t)return!this.stacks.has(t)&&this.stacks.set(t,j()),this.stacks.get(t)},t.prototype.render=function(){return o.createElement(k.WH.Provider,{value:this.syncContext},this.props.children)},t.contextType=S.v,t}(o.Component)},8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(8e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},2717:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),c=(a=n(1585))&&a.__esModule?a:{default:a},u=n(8e3),s=n(5850),l=n(5646);function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function y(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=p.length;u<s;u++){var l=p[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;"name"===l&&i||!d.has(f)?(d.add(f),r[l]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}var g=function(e){var t=e.children,n=i.useContext(u.AmpStateContext),r=i.useContext(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:y,headManager:r,inAmpMode:l.isInAmpMode(n)},t)};t.default=g},1585:function(e,t,n){"use strict";var r=n(3115),o=n(2553),a=n(2012),i=(n(450),n(9807)),c=n(7690),u=n(9828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},9008:function(e,t,n){e.exports=n(2717)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3115:function(e,t,n){var r=n(8164),o=n(7381),a=n(3585),i=n(5725);e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},542:function(e,t,n){"use strict";n.d(t,{ZP:function(){return le}});var r={};n.r(r),n.d(r,{addTrackers:function(){return J},default:function(){return ae},event:function(){return ee},exception:function(){return te},ga:function(){return Z},initialize:function(){return G},modalview:function(){return Y},outboundLink:function(){return re},pageview:function(){return Q},plugin:function(){return ne},send:function(){return W},set:function(){return K},testModeAPI:function(){return oe},timing:function(){return X}});var o=n(7294),a=n(5697),i=n.n(a);function c(e){console.warn("[react-ga]",e)}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O="_blank",w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,r,a=g(i);function i(){var e;d(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return m(h(e=a.call.apply(a,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,a=n.to,c=n.onClick,u=n.trackerNames,s={label:o},l=r!==O,f=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);l&&f?(t.preventDefault(),i.trackLink(s,(function(){window.location.href=a}),u)):i.trackLink(s,(function(){}),u),c&&c(t)})),e}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=l(l({},f(e,["to","target"])),{},{target:n,href:t,onClick:this.handleClick});return n===O&&(r.rel="".concat(r.rel?r.rel:""," noopener noreferrer").trim()),delete r.eventLabel,delete r.trackerNames,o.createElement("a",r)}}])&&p(t.prototype,n),r&&p(t,r),i}(o.Component);m(w,"trackLink",(function(){c("ga tracking not enabled")})),w.propTypes={eventLabel:i().string.isRequired,target:i().string,to:i().string,onClick:i().func,trackerNames:i().arrayOf(i().string)},w.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function j(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(c("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function k(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var S=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function P(e){return k(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(S)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}var x=!1;function C(e){console.info("[react-ga]",e)}var E=[],A={calls:E,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];E.push([].concat(t))},resetCalls:function(){E.length=0}};function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){return(L="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I="undefined"===typeof window||"undefined"===typeof document,N=!1,V=!0,q=!1,z=!0,B=!0,U=function(){var e;return q?A.ga.apply(A,arguments):!I&&(window.ga?(e=window).ga.apply(e,arguments):c("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function F(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||"";return(arguments.length>1?arguments[1]:void 0)&&(n=P(e)),t&&(n=j(n)),n}(e,V,B)}function $(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"===typeof o?(!z&&Array.isArray(e)||U.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){U.apply(void 0,T(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):c("ga command must be a string")}function H(e,t){e?t&&(t.debug&&!0===t.debug&&(N=!0),!1===t.titleCase&&(V=!1),!1===t.redactEmail&&(B=!1),t.useExistingGa)||(t&&t.gaOptions?U("create",e,t.gaOptions):U("create",e,"auto")):c("gaTrackingID is required in initialize()")}function J(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===L(e)?H(e.trackingId,e):c("All configs must be an object")})):H(e,t),!0}function G(e,t){if(t&&!0===t.testMode)q=!0;else{if(I)return;t&&!0===t.standardImplementation||function(e){if(!x){x=!0;var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,a,i,c,u,s=e&&e.onerror;n=window,r=document,o="script",a=t,i="ga",n.GoogleAnalyticsObject=i,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=r.createElement(o),u=r.getElementsByTagName(o)[0],c.async=1,c.src=a,c.onerror=s,u.parentNode.insertBefore(c,u)}}(t)}z=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,J(e,t)}function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(U.apply(void 0,t),N&&(C("called ga('arguments');"),C("with arguments: ".concat(JSON.stringify(t))))),window.ga}function K(e,t){e?"object"===L(e)?(0===Object.keys(e).length&&c("empty `fieldsObject` given to .set()"),$(t,"set",e),N&&(C("called ga('set', fieldsObject);"),C("with fieldsObject: ".concat(JSON.stringify(e))))):c("Expected `fieldsObject` arg to be an Object"):c("`fieldsObject` is required in .set()")}function W(e,t){$(t,"send",e),N&&(C("called ga('send', fieldObject);"),C("with fieldObject: ".concat(JSON.stringify(e))),C("with trackers: ".concat(JSON.stringify(t))))}function Q(e,t,n){if(e){var r=k(e);if(""!==r){var o={};if(n&&(o.title=n),$(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),N){C("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),C("with path: ".concat(r).concat(a))}}else c("path cannot be an empty string in .pageview()")}else c("path is required in .pageview()")}function Y(e,t){if(e){var n,r="/"===(n=k(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);$(t,"send","pageview",o),N&&(C("called ga('send', 'pageview', path);"),C("with path: ".concat(o)))}else c("modalName cannot be an empty string or a single / in .modalview()")}else c("modalName is required in .modalview(modalName)")}function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&"number"===typeof r){var i={hitType:"timing",timingCategory:F(t),timingVar:F(n),timingValue:r};o&&(i.timingLabel=F(o)),W(i,a)}else c("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,i=e.transport,u=_(e,["category","action","label","value","nonInteraction","transport"]),s=arguments.length>1?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:F(t),eventAction:F(n)};r&&(l.eventLabel=F(r)),"undefined"!==typeof o&&("number"!==typeof o?c("Expected `args.value` arg to be a Number."):l.eventValue=o),"undefined"!==typeof a&&("boolean"!==typeof a?c("`args.nonInteraction` must be a boolean."):l.nonInteraction=a),"undefined"!==typeof i&&("string"!==typeof i?c("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&c("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=i)),Object.keys(u).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){l[e]=u[e]})),Object.keys(u).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){l[e]=u[e]})),W(l,s)}else c("args.category AND args.action are required in event()")}function te(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=F(n)),"undefined"!==typeof r&&("boolean"!==typeof r?c("`args.fatal` must be a boolean."):o.exFatal=r),W(o,t)}var ne={require:function(e,t,n){if(e){var r=k(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==L(t))return void c("Expected `options` arg to be an Object");0===Object.keys(t).length&&c("Empty `options` given to .require()"),Z(o,r,t),N&&C("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else Z(o,r),N&&C("called ga('require', '".concat(r,"');"))}else c("`name` cannot be an empty string in .require()")}else c("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,a=new Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];if(1===a.length?n=a[0]:(r=a[0],n=a[1]),"string"!==typeof e)c("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)c("Expected `action` arg to be a String.");else{var u="".concat(e,":").concat(t);n=n||null,r&&n?(Z(u,r,n),N&&(C("called ga('".concat(u,"');")),C('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(Z(u,n),N&&(C("called ga('".concat(u,"');")),C("with payload: ".concat(JSON.stringify(n))))):(Z(u),N&&C("called ga('".concat(u,"');")))}}};function re(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:F(e.label)},o=!1,a=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(a),o||t()},W(r,n)}else c("args.label is required in outboundLink()");else c("hitCallback function is required")}var oe=A,ae={initialize:G,ga:Z,set:K,send:W,pageview:Q,modalview:Y,timing:X,event:ee,exception:te,plugin:ne,outboundLink:re,testModeAPI:A};function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}w.origTrackLink=w.trackLink,w.trackLink=re;var se=w,le=ce(ce({},r),{},{OutboundLink:se})}}]);