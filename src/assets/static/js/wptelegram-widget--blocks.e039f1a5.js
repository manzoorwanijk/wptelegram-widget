/*! For license information please see wptelegram-widget--blocks.e039f1a5.js.LICENSE.txt */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=216)}({0:function(e,t){e.exports=window.React},1:function(e,t,n){"use strict";e.exports=n(132)},132:function(e,t,n){"use strict";n(133);var r=n(0),i=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),t.Fragment=o("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:u,props:o,_owner:a.current}}t.jsx=l,t.jsxs=l},133:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,t){for(var n,c,s=a(e),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))i.call(n,u)&&(s[u]=n[u]);if(r){c=r(n);for(var f=0;f<c.length;f++)o.call(n,c[f])&&(s[c[f]]=n[c[f]])}}return s}},18:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},19:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){var n;return t?null===(n=window[e])||void 0===n?void 0:n[t]:window[e]}},193:function(e,t){e.exports=window.wp.url},194:function(e,t){e.exports=window.wp.element},20:function(e,t){e.exports=window.wp.components},216:function(e,t,n){e.exports=n(332)},23:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return i}))},25:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},3:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));var r=n(44),i="",o=r.createI18n,a=(null===o||void 0===o?void 0:o())||r,c=function(e,t){i=t,a.setLocaleData(e,t)},s=function(e){return a.__(e,i)},l=function(){return"rtl"===document.documentElement.dir}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(43);function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(r.a)(e,t)}},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(19),i=n(59),o=n(74);function a(e){var t=Object(i.a)();return function(){var n,i=Object(r.a)(e);if(t){var a=Object(r.a)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Object(o.a)(this,n)}}},332:function(e,t,n){"use strict";n.r(t);var r=n(65),i=n(3),o=function(e,t,n){var r=t.filter((function(t){return null===e||void 0===e?void 0:e[t]})).map((function(t){return"".concat(t,'="').concat(e[t],'"')})),i=r.length?" "+r.join(" "):"";return"[".concat(n," ").concat(i,"]")},a=n(1),c=["widget_width","widget_height"],s=function(e){var t=e.attributes;return Object(a.jsx)(a.Fragment,{children:o(t,c,"wptelegram-ajax-widget")})},l=n(0),u=n(45),f=n(20);Object(r.registerBlockType)("wptelegram/widget-ajax-channel-feed",{title:Object(i.a)("Telegram Channel Ajax Feed"),icon:"format-aside",category:"wptelegram",attributes:{widget_width:{type:"string",default:"100%"},widget_height:{type:"string",default:"600"}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=e.className,o=t.widget_width,c=t.widget_height,b=Object(l.useCallback)((function(e){return n({widget_width:e})}),[n]),d=Object(l.useCallback)((function(e){return n({widget_height:e})}),[n]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.InspectorControls,{children:Object(a.jsxs)(f.PanelBody,{title:Object(i.a)("Widget Options"),children:[Object(a.jsx)(f.TextControl,{label:Object(i.a)("Widget Width"),value:o,onChange:b}),Object(a.jsx)(f.TextControl,{label:Object(i.a)("Widget Height"),value:c,onChange:d,type:"number"})]})}),Object(a.jsxs)("div",{className:r,children:[Object(a.jsxs)("label",{children:[Object(a.jsx)(f.Dashicon,{icon:"shortcode"}),Object(a.jsx)("span",{children:Object(i.a)("Telegram Channel Ajax Feed")})]}),Object(a.jsx)("code",{className:"widget-shortcode",children:Object(a.jsx)(s,{attributes:t})})]})]})},save:function(e){var t=e.attributes;return Object(a.jsx)("div",{children:Object(a.jsx)(s,{attributes:t})})}});var b=["author_photo","num_messages","widget_width"],d=function(e){var t=e.attributes;return Object(a.jsx)(a.Fragment,{children:o(t,b,"wptelegram-widget")})},p=[{label:"Auto",value:"auto"},{label:"Always show",value:"always_show"},{label:"Always hide",value:"always_hide"}];Object(r.registerBlockType)("wptelegram/widget-channel-feed",{title:Object(i.a)("Telegram Channel Feed"),icon:"format-aside",category:"wptelegram",attributes:{widget_width:{type:"string",default:"100"},author_photo:{type:"string",default:"auto"},num_messages:{type:"string",default:"5"}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=e.className,o=t.widget_width,c=t.author_photo,s=t.num_messages,b=Object(l.useCallback)((function(e){return n({author_photo:e})}),[n]),j=Object(l.useCallback)((function(e){return n({widget_width:e})}),[n]),g=Object(l.useCallback)((function(e){return n({num_messages:e})}),[n]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.InspectorControls,{children:Object(a.jsxs)(f.PanelBody,{title:Object(i.a)("Widget Options"),children:[Object(a.jsx)(f.TextControl,{label:Object(i.a)("Widget Width"),value:o,onChange:j,type:"number",min:"10",max:"100"}),Object(a.jsx)(f.RadioControl,{label:Object(i.a)("Author Photo"),selected:c,onChange:b,options:p}),Object(a.jsx)(f.TextControl,{label:Object(i.a)("Number of Messages"),value:s,onChange:g,type:"number",min:"1",max:"50"})]})}),Object(a.jsxs)("div",{className:r,children:[Object(a.jsxs)("label",{children:[Object(a.jsx)(f.Dashicon,{icon:"shortcode"}),Object(a.jsx)("span",{children:Object(i.a)("Telegram Channel Feed")})]}),Object(a.jsx)("code",{className:"widget-shortcode",children:Object(a.jsx)(d,{attributes:t})})]},"shortcode")]})},save:function(e){var t=e.attributes;return Object(a.jsx)("div",{children:Object(a.jsx)(d,{attributes:t})})}});var j=n(5),g=function(e){var t=e.fill,n=void 0===t?"#ffffff":t;return Object(a.jsx)(f.SVG,{width:"19px",height:"16px",viewBox:"0 0 19 16",children:Object(a.jsx)(f.G,{fill:"none",children:Object(a.jsx)(f.Path,{fill:n,d:"M0.465,6.638 L17.511,0.073 C18.078,-0.145 18.714,0.137 18.932,0.704 C19.009,0.903 19.026,1.121 18.981,1.33 L16.042,15.001 C15.896,15.679 15.228,16.111 14.549,15.965 C14.375,15.928 14.211,15.854 14.068,15.748 L8.223,11.443 C7.874,11.185 7.799,10.694 8.057,10.345 C8.082,10.311 8.109,10.279 8.139,10.249 L14.191,4.322 C14.315,4.201 14.317,4.002 14.195,3.878 C14.091,3.771 13.926,3.753 13.8,3.834 L5.602,9.138 C5.112,9.456 4.502,9.528 3.952,9.333 L0.486,8.112 C0.077,7.967 -0.138,7.519 0.007,7.11 C0.083,6.893 0.25,6.721 0.465,6.638 Z"})})})},h=function(e){var t=e.link,n=e.text,r=e.isEditing;return Object(a.jsx)(f.Button,{isLarge:!0,href:t,className:"join-link",icon:Object(a.jsx)(g,{}),target:r?"_blank":null,rel:"noopener noreferrer",children:n})},O=n(192),m=function(e){var t,n=e.setAttributes,r=e.attributes,o=r.alignment,c=r.link,s=r.text,b=(t="uiData",Object(O.a)("wptelegram_widget",t)),d=b.join_link_text,p=b.join_link_url;Object(l.useEffect)((function(){c||n({link:p}),s||n({text:d})}),[]);var j=Object(l.useCallback)((function(e){return n({link:e})}),[n]),g=Object(l.useCallback)((function(e){return n({text:e})}),[n]),h=Object(l.useCallback)((function(e){return n({alignment:e})}),[n]);return Object(a.jsxs)(l.Fragment,{children:[Object(a.jsx)(u.InspectorControls,{children:Object(a.jsxs)(f.PanelBody,{title:Object(i.a)("Button details"),children:[Object(a.jsx)(f.TextControl,{label:Object(i.a)("Channel Link"),value:c||"",onChange:j,type:"url"}),Object(a.jsx)(f.TextControl,{label:Object(i.a)("Button text"),value:s||"",onChange:g})]})},"controls"),Object(a.jsx)(u.BlockControls,{children:Object(a.jsx)(u.BlockAlignmentToolbar,{value:o,onChange:h})})]})};Object(r.registerBlockType)("wptelegram/widget-join-channel",{title:Object(i.a)("Join Telegram Channel"),icon:Object(a.jsx)(g,{fill:"#555d66"}),category:"wptelegram",attributes:{link:{type:"string"},text:{type:"string"},alignment:{type:"string",default:"center"}},getEditWrapperProps:function(e){var t=e.alignment;if(["left","center","right","wide","full"].includes(t))return{"data-align":t}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=e.className;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{attributes:t,setAttributes:n}),Object(a.jsx)("div",{className:r,children:Object(a.jsx)(h,Object(j.a)(Object(j.a)({},t),{},{isEditing:!0}))})]})},save:function(e){var t=e.attributes,n=t.alignment;return Object(a.jsx)("div",{className:"wp-block-wptelegram-widget-join-channel align"+n,children:Object(a.jsx)(h,Object(j.a)({},t))})}});var y={url:{type:"string",default:""},iframe_src:{type:"string",default:""},userpic:{type:"boolean",default:!0},alignment:{type:"string",default:"center"}},w=n(37),v=n(90),x=(n(19),n(74),n(30));function _(e,t){_=function(e,t){return new o(e,void 0,t)};var n=Object(v.a)(RegExp),r=RegExp.prototype,i=new WeakMap;function o(e,t,r){var o=n.call(this,e,t);return i.set(o,r||i.get(e)),o}function a(e,t){var n=i.get(t);return Object.keys(n).reduce((function(t,r){return t[r]=e[n[r]],t}),Object.create(null))}return Object(x.a)(o,n),o.prototype.exec=function(e){var t=r.exec.call(this,e);return t&&(t.groups=a(t,this)),t},o.prototype[Symbol.replace]=function(e,t){if("string"===typeof t){var n=i.get(this);return r[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+n[t]})))}if("function"===typeof t){var o=this;return r[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!==Object(w.a)(e[e.length-1])&&e.push(a(e,o)),t.apply(this,e)}))}return r[Symbol.replace].call(this,e,t)},_.apply(this,arguments)}var C=n(18),k=n(23),S=n(25),P=n(33),L=n(193),T={border:"2px solid #f71717"},R=function(e){var t=e.error,n=e.label,r=e.onChangeURL,o=e.onSubmit,c=e.url,s=t?T:null;return Object(a.jsx)(f.Placeholder,{icon:"wordpress-alt",label:n,className:"wp-block-embed-telegram",children:Object(a.jsxs)("form",{onSubmit:o,children:[Object(a.jsx)("input",{"aria-label":n,className:"components-placeholder__input",onChange:r,placeholder:"https://t.me/WPTelegram/102",style:s,type:"url",value:c||""}),Object(a.jsx)(f.Button,{isLarge:!0,type:"submit",children:Object(i.a)("Embed")})]})})},B=n(194),U=function(e){var t=e.userpic,n=e.toggleUserPic,r=e.showEditButton,o=e.switchBackToURLInput,c=e.alignment,s=e.changeAlignment;return Object(a.jsxs)(B.Fragment,{children:[Object(a.jsx)(u.InspectorControls,{children:Object(a.jsx)(f.PanelBody,{title:Object(i.a)("Options"),children:Object(a.jsx)(f.ToggleControl,{label:Object(i.a)("Author Photo"),checked:t,onChange:n})})}),Object(a.jsxs)(u.BlockControls,{children:[Object(a.jsx)(u.BlockAlignmentToolbar,{value:c,onChange:s}),Object(a.jsx)(f.ToolbarGroup,{children:r&&Object(a.jsx)(f.ToolbarButton,{className:"components-toolbar__control",title:Object(i.a)("Edit URL"),icon:"edit",onClick:o})})]})]})},E=window.wptelegram_widget.assets.message_view_url,N=function(e){Object(x.a)(n,e);var t=Object(P.a)(n);function n(e){var r;return Object(C.a)(this,n),(r=t.call(this,e)).iframe_ref=void 0,r.iframe_ref=Object(l.createRef)(),r.switchBackToURLInput=r.switchBackToURLInput.bind(Object(S.a)(r)),r.getIframeSrc=r.getIframeSrc.bind(Object(S.a)(r)),r.toggleUserPic=r.toggleUserPic.bind(Object(S.a)(r)),r.resizeIframe=r.resizeIframe.bind(Object(S.a)(r)),r.setUrl=r.setUrl.bind(Object(S.a)(r)),r.handleOnChangeURL=r.handleOnChangeURL.bind(Object(S.a)(r)),r.handleOnChangeAlign=r.handleOnChangeAlign.bind(Object(S.a)(r)),r.onLoad=r.onLoad.bind(Object(S.a)(r)),r.state={loading:!0,editingURL:!1,error:!1,url:r.props.attributes.url,userpic:r.props.attributes.userpic,iframe_height:null},r}return Object(k.a)(n,[{key:"toggleUserPic",value:function(){var e=!this.state.userpic,t=this.props.attributes.iframe_src;t=Object(L.addQueryArgs)(t,{userpic:e}),this.setState({userpic:e,loading:!0}),this.props.setAttributes({userpic:e,iframe_src:t})}},{key:"setUrl",value:function(e){e&&e.preventDefault();var t=this.state.url,n=_(/^(?:https?:\/\/)?t\.me\/([a-z][0-9_a-z]{3,30}[0-9a-z])\/([0-9]+)$/i,{username:1,message_id:2}),r=t.match(n);if(null===r)this.setState({error:!0});else{var i=this.getIframeSrc(r.groups),o=this.props.setAttributes;this.setState({loading:!0,editingURL:!1,error:!1}),o({url:t,iframe_src:i})}}},{key:"getIframeSrc",value:function(e){return E.replace("%username%",e.username).replace("%message_id%",e.message_id).replace("%userpic%","".concat(this.state.userpic))}},{key:"switchBackToURLInput",value:function(){this.setState({editingURL:!0})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeIframe)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeIframe)}},{key:"resizeIframe",value:function(){if(null!==this.iframe_ref.current&&"undefined"!==typeof this.iframe_ref.current.contentWindow){var e=this.iframe_ref.current.contentWindow.document.body.scrollHeight;e!==this.state.iframe_height&&this.setState({iframe_height:e})}}},{key:"handleOnChangeURL",value:function(e){this.setState({url:e.target.value})}},{key:"handleOnChangeAlign",value:function(e){this.resizeIframe(),this.props.setAttributes({alignment:e})}},{key:"onLoad",value:function(){this.setState({loading:!1}),this.resizeIframe()}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.editingURL,r=e.url,o=e.error,c=e.userpic,s=this.props.className,u=this.props.attributes,b=u.alignment,d=u.iframe_src,p=Object(i.a)("Telegram post URL");if(n||!d)return Object(a.jsx)(R,{label:p,error:o,url:r,onChangeURL:this.handleOnChangeURL,onSubmit:this.setUrl});var j=t?0:this.state.iframe_height;return Object(a.jsxs)(l.Fragment,{children:[Object(a.jsx)(U,{userpic:c,toggleUserPic:this.toggleUserPic,showEditButton:!0,switchBackToURLInput:this.switchBackToURLInput,alignment:b,changeAlignment:this.handleOnChangeAlign}),t&&Object(a.jsxs)("div",{className:"wp-block-embed is-loading",children:[Object(a.jsx)(f.Spinner,{}),Object(a.jsx)("p",{children:Object(i.a)("Loading\u2026")})]}),Object(a.jsx)("div",{className:s+" wptelegram-widget-message",children:Object(a.jsx)("div",{className:"wp-block-embed__content-wrapper",children:Object(a.jsx)(f.FocusableIframe,{iframeRef:this.iframe_ref,frameBorder:"0",scrolling:"no",src:d,onLoad:this.onLoad,height:j,children:"Your Browser Does Not Support iframes!"})})})]})}}]),n}(l.Component);Object(r.registerBlockType)("wptelegram/widget-single-post",{title:Object(i.a)("Telegram Single Post"),icon:"format-aside",category:"wptelegram",getEditWrapperProps:function(e){var t=e.alignment;if(["left","center","right","wide","full"].includes(t))return{"data-align":t}},attributes:y,edit:N,save:function(e){var t=e.attributes,n=t.alignment,r=t.iframe_src;return Object(a.jsx)("div",{className:"wp-block-wptelegram-widget-single-post wptelegram-widget-message align"+n,children:Object(a.jsx)("iframe",{title:"Telegram post",frameBorder:"0",scrolling:"no",src:r,children:"Your Browser Does Not Support iframes!"})})},deprecated:[{attributes:y,save:function(e){var t=e.attributes,n=t.alignment,r=t.iframe_src;return Object(a.jsx)("div",{className:"wp-block-wptelegram-widget-single-post wptelegram-widget-message align"+n,children:Object(a.jsx)("iframe",{frameBorder:"0",scrolling:"no",src:r,children:"Your Browser Does Not Support iframes!"})})}}]})},37:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},43:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return r}))},44:function(e,t){e.exports=window.wp.i18n},45:function(e,t){e.exports=window.wp.blockEditor},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(7);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},59:function(e,t,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}n.d(t,"a",(function(){return r}))},65:function(e,t){e.exports=window.wp.blocks},7:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(37),i=n(25);function o(e,t){return!t||"object"!==Object(r.a)(t)&&"function"!==typeof t?Object(i.a)(e):t}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(19),i=n(43);var o=n(59);function a(e,t,n){return(a=Object(o.a)()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&Object(i.a)(o,n.prototype),o}).apply(null,arguments)}function c(e){var t="function"===typeof Map?new Map:void 0;return(c=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return a(e,arguments,Object(r.a)(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Object(i.a)(o,e)})(e)}}});
//# sourceMappingURL=wptelegram-widget--blocks.e039f1a5.js.map