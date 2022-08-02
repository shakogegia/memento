/*! For license information please see commons-d96c025f81a08b7253fc.js.LICENSE.txt */
(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[351],{6494:function(e){"use strict";e.exports=Object.assign},929:function(e){var t;t=function(){return e={352:function(e){function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=function(){"use strict";var e,t={time:300,padding:40,offset:40,keyboard:!0,cubicBezier:"cubic-bezier(.2, 0, .1, 1)",background:"var(--bg-color-80, rgba(255, 255, 255, .98))",zIndex:1e6,beforeShow:void 0,afterShow:void 0,beforeHide:void 0,afterHide:void 0},r={};function i(e){var t=r[e];if(t){if("function"!=typeof t)throw"config.".concat(e," must be a function!");Reflect.apply(t,r,[r])}}function a(e){switch(o(e)){case"undefined":throw"You need to pass an element!";case"string":return document.querySelectorAll(e);case"object":return e}}function c(e){var t=e.length;if(t)for(var n=0;n<t;n++)s(e[n]);else s(e)}function s(e){e.src&&!e.classList.contains("lightense-target")&&(e.classList.add("lightense-target"),e.addEventListener("click",(function(o){if(r.keyboard&&(o.metaKey||o.ctrlKey))return window.open(e.src,"_blank");!function(e){if(r.target=e,r.target.classList.contains("lightense-open"))return d();i("beforeShow"),r.scrollY=window.scrollY,function(e,t,n){e.addEventListener(t,(function r(o){Reflect.apply(n,this,o),e.removeEventListener(t,r)}))}(r.target,"transitionend",(function(){i("afterShow")}));var o=new Image;o.onload=function(){!function(e){var n=e.width,o=e.height,i=window.pageYOffset||document.documentElement.scrollTop||0,a=window.pageXOffset||document.documentElement.scrollLeft||0,c=r.target.getBoundingClientRect(),s=n/c.width,u=window.innerWidth||document.documentElement.clientWidth||0,l=window.innerHeight||document.documentElement.clientHeight||0,f=r.target.getAttribute("data-lightense-padding")||r.target.getAttribute("data-padding")||r.padding,d=u>f?u-f:u-t.padding,p=l>f?l-f:l-t.padding,m=n/o,h=d/p;r.scaleFactor=n<d&&o<p?s:m<h?p/o*s:d/n*s;var g=u/2,y=i+l/2,b=c.left+a+c.width/2,v=c.top+i+c.height/2;r.translateX=Math.round(g-b),r.translateY=Math.round(y-v)}(this),function(){r.target.classList.add("lightense-open"),r.wrap=document.createElement("div"),r.wrap.className="lightense-wrap",setTimeout((function(){r.target.style.transform="scale("+r.scaleFactor+")"}),20),r.target.parentNode.insertBefore(r.wrap,r.target),r.wrap.appendChild(r.target),setTimeout((function(){r.wrap.style.transform="translate3d("+r.translateX+"px, "+r.translateY+"px, 0)"}),20);var e={cubicBezier:r.target.getAttribute("data-lightense-cubic-bezier")||r.cubicBezier,background:r.target.getAttribute("data-lightense-background")||r.target.getAttribute("data-background")||r.background,zIndex:r.target.getAttribute("data-lightense-z-index")||r.zIndex},t=n(n({},r),e);u("lightense-images-css-computed","\n    :root {\n      --lightense-z-index: ".concat(t.zIndex-1,";\n      --lightense-backdrop: ").concat(t.background,";\n      --lightense-duration: ").concat(t.time,"ms;\n      --lightense-timing-func: ").concat(t.cubicBezier,";\n    }")),r.container.style.visibility="visible",setTimeout((function(){r.container.style.opacity="1"}),20)}(),window.addEventListener("keyup",m,!1),window.addEventListener("scroll",p,!1),r.container.addEventListener("click",d,!1)},o.src=r.target.src}(this)}),!1))}function u(e,t){var n=document.head||document.getElementsByTagName("head")[0];document.getElementById(e)&&document.getElementById(e).remove();var r=document.createElement("style");r.id=e,r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t)),n.appendChild(r)}function l(){u("lightense-images-css","\n:root {\n  --lightense-z-index: ".concat(r.zIndex-1,";\n  --lightense-backdrop: ").concat(r.background,";\n  --lightense-duration: ").concat(r.time,"ms;\n  --lightense-timing-func: ").concat(r.cubicBezier,";\n}\n\n.lightense-backdrop {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: calc(var(--lightense-z-index) - 1);\n  padding: 0;\n  margin: 0;\n  transition: opacity var(--lightense-duration) ease;\n  cursor: zoom-out;\n  opacity: 0;\n  background-color: var(--lightense-backdrop);\n  visibility: hidden;\n}\n\n@supports (-webkit-backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    -webkit-backdrop-filter: blur(30px);\n  }\n}\n\n@supports (backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    backdrop-filter: blur(30px);\n  }\n}\n\n.lightense-wrap {\n  position: relative;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  z-index: var(--lightense-z-index);\n  pointer-events: none;\n}\n\n.lightense-target {\n  cursor: zoom-in;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  pointer-events: auto;\n}\n\n.lightense-open {\n  cursor: zoom-out;\n}\n\n.lightense-transitioning {\n  pointer-events: none;\n}"))}function f(){null===document.querySelector(".lightense-backdrop")?(r.container=document.createElement("div"),r.container.className="lightense-backdrop",document.body.appendChild(r.container)):r.container=document.querySelector(".lightense-backdrop")}function d(){i("beforeHide"),window.removeEventListener("keyup",m,!1),window.removeEventListener("scroll",p,!1),r.container.removeEventListener("click",d,!1),r.target.classList.remove("lightense-open"),r.wrap.style.transform="",r.target.style.transform="",r.target.classList.add("lightense-transitioning"),r.container.style.opacity="",setTimeout((function(){i("afterHide"),r.container.style.visibility="",r.container.style.backgroundColor="",r.wrap.parentNode.replaceChild(r.target,r.wrap),r.target.classList.remove("lightense-transitioning")}),r.time)}function p(){Math.abs(r.scrollY-window.scrollY)>=r.offset&&d()}function m(e){e.preventDefault(),27===e.keyCode&&d()}return function(o){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=a(o),r=n(n({},t),i),l(),f(),c(e)}}();e.exports=i}},t={},n=function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(352),n;var e,t,n},e.exports=t()},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(!i(e[s],a[s]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!i(s.value[1],a.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!i(e[u[s]],a[u[s]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return he}});var r,o,i,a,c=n(5697),s=n.n(c),u=n(4839),l=n.n(u),f=n(2993),d=n.n(f),p=n(7294),m=n(6494),h=n.n(m),g="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",O="http-equiv",k="innerHTML",x="itemprop",A="name",C="property",S="rel",j="src",L="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",N="defer",M="encodeSpecialCharacters",z="onChangeClientState",R="titleTemplate",B=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],_="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=J(e,v.TITLE),n=J(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,I);return t||r||void 0},X=function(e){return J(e,z)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===S&&"canonical"===e[n].toLowerCase()||s===S&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==k&&c!==T&&c!==x||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=h()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;se(v.BODY,r),se(v.HTML,o),ce(f,d);var p={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,i),metaTags:ue(v.META,a),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,l)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),se(v.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(_),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(_):n.getAttribute(_)!==a.join(",")&&n.setAttribute(_,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(_,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[_]=!0,o=fe(n,r),[p.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case y:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[_]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===k||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),p.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===k||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(g,n,r),htmlAttributes:de(y,o,r),link:de(v.LINK,i,r),meta:de(v.META,a,r),noscript:de(v.NOSCRIPT,c,r),script:de(v.SCRIPT,s,r),style:de(v.STYLE,u,r),title:de(v.TITLE,{title:f,titleAttributes:d},r)}},me=l()((function(e){return{baseTag:$([E,L],e),bodyAttributes:Z(g,e),defer:J(e,N),encode:J(e,M),htmlAttributes:Z(y,e),linkTags:G(v.LINK,[S,E],e),metaTags:G(v.META,[A,w,O,C,x],e),noscriptTags:G(v.NOSCRIPT,[k],e),onChangeClientState:X(e),scriptTags:G(v.SCRIPT,[j,k],e),styleTags:G(v.STYLE,[T],e),title:V(e),titleAttributes:Z(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),he=(o=me,a=i=function(e){function t(){return Y(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return F({},o,((t={})[r.type]=a,t.titleAttributes=F({},i),t));case v.BODY:return F({},o,{bodyAttributes:F({},i)});case v.HTML:return F({},o,{htmlAttributes:F({},i)})}return F({},o,((n={})[r.type]=F({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(o,r)},q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(p.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},2659:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),o=n(6377);function i(){return r.createElement("footer",{className:"bottom-0 mt-10 text-center w-full py-4 px-6 DMIliaUNI"},r.createElement("small",{className:"text-gray-500"},"© მემენტო 2022."))}var a=n(1597),c=n(6199);function s(){return r.createElement("header",{className:"w-full"},r.createElement("nav",{className:"container mx-auto md:max-w-5xl flex items-center justify-between p-6"},r.createElement(a.Link,{to:"/",className:"DMIliaUNI text-xl dark:text-gray-100"},"მემენტო"),r.createElement("ul",{className:"flex DMIliaUNI md:space-x-3"},r.createElement(u,{className:"hidden sm:mr-4 sm:block",onClick:function(){return function(e,t){void 0===t&&(t=!0);window.dispatchEvent(new KeyboardEvent("keydown",{key:e,metaKey:t}))}("?")}},r.createElement(c.uFR,{className:"text-xl color"})))))}function u(e){return r.createElement("button",{className:(0,o.Z)("outline-none text-xl transition-colors text-gray-500 dark:text-gray-300",e.className),onClick:e.onClick},e.children)}var l=n(5414),f=n(929),d=n.n(f);function p(e){var t=e.children,n=e.className;return(0,r.useEffect)((function(){d()("img:not(.no-lightense)",{keyboard:!0})}),[]),r.createElement("div",{className:"h-vh min-h-full transition-colors dark:bg-gray-900"},r.createElement(l.q,null,r.createElement("meta",{charSet:"UTF-8"}),r.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),r.createElement("meta",{name:"theme-color",content:"#000000"}),r.createElement("script",{type:"module",src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"}),r.createElement("script",{noModule:!0,src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"})),r.createElement(s,null),r.createElement("main",{className:(0,o.Z)("container mx-auto max-w-5xl px-6",n)},t),r.createElement(i,null))}}}]);
//# sourceMappingURL=commons-d96c025f81a08b7253fc.js.map