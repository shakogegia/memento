(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[186],{1254:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.default=void 0;var o=r(n(434)),i=r(n(7071)),a=r(n(7867)),s=r(n(7294)),l=r(n(5697)),u=n(989),c=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="memento-1",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?c():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.className,r=e.placeholder,a=(0,i.default)(e,["config","className","placeholder"]),l="disqus-comment-count"+(n?" "+n:"");return s.default.createElement("span",(0,o.default)({className:l,"data-disqus-identifier":t.identifier,"data-disqus-url":t.url},a),r)},t}(s.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string,className:l.default.string}},4294:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.default=void 0;var o=r(n(434)),i=r(n(7071)),a=r(n(7867)),s=r(n(7294)),l=r(n(5697)),u=function(e){function t(){return e.apply(this,arguments)||this}(0,a.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){var e=this.props,t=(e.commentId,e.showMedia,e.showParentComment,(0,i.default)(e,["commentId","showMedia","showParentComment"]));return s.default.createElement("iframe",(0,o.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},t))},t}(s.default.Component);t.default=u,u.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},u.propTypes={commentId:l.default.oneOfType([l.default.number,l.default.string]).isRequired,width:l.default.number,height:l.default.number,showMedia:l.default.bool,showParentComment:l.default.bool}},2605:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.default=void 0;var o=r(n(434)),i=r(n(7071)),a=r(n(7867)),s=r(n(7294)),l=r(n(5697)),u=n(989),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="memento-1",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,u.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,u.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(r){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);var t=window.document.querySelector('[id^="dsq-app"]');if(t){var n=window.document.getElementById(t.id);n.parentNode.removeChild(n)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return s.default.createElement("div",(0,o.default)({id:"disqus_thread"},t))},t}(s.default.Component);t.default=c,c.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string})}},8200:function(e,t,n){"use strict";var r=n(4836);var o=r(n(2605));t.h$=o.default,r(n(1254)).default,r(n(4294)).default,o.default},989:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var s=this,l=function(){r=null,n||e.apply(s,i)},u=n&&!r;window.clearTimeout(r),r=setTimeout(l,t),u&&e.apply(s,i)}},t.isReactElement=a,t.shallowComparison=function e(t,n){var r,i=new Set(Object.keys(t).concat(Object.keys(n))),s=(r=[]).concat.apply(r,(0,o.default)(i)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!a(t[r]))return!0;return!1}));return 0!==s.length};var o=r(n(861)),i=r(n(7294));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},4001:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(1597),o=n(7294),i=n(5414);function a(e){var t=e.title,n=void 0===t?null:t,a=e.description,l=void 0===a?null:a,u=e.image,c=void 0===u?null:u,d=e.article,p=void 0!==d&&d,f=e.pathname,m=void 0===f?null:f,h=(0,r.useStaticQuery)(s).site.siteMetadata,g=h.defaultTitle,y=h.titleTemplate,w=h.defaultDescription,v=h.siteUrl,x=h.defaultImage,b=(h.twitterUsername,{title:n||g,description:l||w,image:""+v+(c||x),url:""+v+m});return o.createElement(i.q,{title:b.title,titleTemplate:y},o.createElement("meta",{name:"description",content:b.description}),o.createElement("meta",{name:"image",content:b.image}),b.url&&o.createElement("meta",{property:"og:url",content:b.url}),!p?null:o.createElement("meta",{property:"og:type",content:"article"}),b.title&&o.createElement("meta",{property:"og:title",content:b.title}),b.description&&o.createElement("meta",{property:"og:description",content:b.description}),b.image&&o.createElement("meta",{property:"og:image",content:b.image}),o.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),b.title&&o.createElement("meta",{name:"twitter:title",content:b.title}),b.description&&o.createElement("meta",{name:"twitter:description",content:b.description}),b.image&&o.createElement("meta",{name:"twitter:image",content:b.image}))}var s="1185941742"},3618:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(2102),o=n(7294),i=n(2659),a=n(4001),s=n(8200);function l(e){var t,n,l=e.data,u=l.site,c=l.mdx,d=e.pageContext;d.next,d.prev;return o.createElement(i.Z,null,o.createElement(a.Z,{title:c.frontmatter.title,description:c.excerpt,image:null===(t=c.frontmatter.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n?void 0:n.fluid.src,pathname:"/"+c.frontmatter.slug,article:!0}),o.createElement("div",{className:"max-w-3xl m-auto mt-8"},o.createElement("h3",{className:"text-3xl max-w-lg mx-auto text-center font-semibold IliaDuospace transition-colors dark:text-gray-200"},c.frontmatter.title),o.createElement("div",{className:"iAWriterDuospace prose max-w-none mt-16 prose-lg break-words text-gray-500 transition-colors dark:text-gray-300 dark:prose-a:text-gray-200 dark:prose-strong:text-gray-200 dark:prose-blockquote:text-gray-200 dark:prose-headings:text-gray-200"},o.createElement(r.MDXRenderer,null,c.body)),o.createElement("div",{className:"mt-14"},o.createElement("em",{className:"font-extralight italic text-gray-400"},"Published on ",c.frontmatter.date)),o.createElement("div",{className:"my-20"},o.createElement("div",{className:"w-full border-t border-gray-100 transition-colors dark:border-gray-600"})),o.createElement("div",{className:"mt-10 mb-20"},o.createElement(s.h$,{config:{url:u.siteMetadata.siteUrl+"/"+c.frontmatter.slug,identifier:"/"+c.frontmatter.slug,title:c.frontmatter.title}}))))}},2102:function(e,t,n){var r=n(2632);e.exports={MDXRenderer:r}},2632:function(e,t,n){var r=n(861),o=n(3515),i=n(8416),a=n(7071),s=["scope","children"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=n(7294),d=n(4983).mdx,p=n(6948).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,i=a(e,s),l=p(t),f=c.useMemo((function(){if(!n)return null;var e=u({React:c,mdx:d},l),t=Object.keys(e),i=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(t,[""+n])).apply(void 0,[{}].concat(r(i)))}),[n,t]);return c.createElement(f,u({},i))}},3405:function(e,t,n){var r=n(3897);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,n){var r=n(6015),o=n(9617);function i(t,n,a){return o()?(e.exports=i=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,n){var r=n(3405),o=n(9498),i=n(6116),a=n(2281);e.exports=function(e){return r(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-post-tsx-851887636c3d91d15433.js.map