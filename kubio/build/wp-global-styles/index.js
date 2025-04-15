(()=>{var e={9590:e=>{var t="undefined"!=typeof Element,o="function"==typeof Map,n="function"==typeof Set,s="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function r(e,l){if(e===l)return!0;if(e&&l&&"object"==typeof e&&"object"==typeof l){if(e.constructor!==l.constructor)return!1;var i,a,c,u;if(Array.isArray(e)){if((i=e.length)!=l.length)return!1;for(a=i;0!=a--;)if(!r(e[a],l[a]))return!1;return!0}if(o&&e instanceof Map&&l instanceof Map){if(e.size!==l.size)return!1;for(u=e.entries();!(a=u.next()).done;)if(!l.has(a.value[0]))return!1;for(u=e.entries();!(a=u.next()).done;)if(!r(a.value[1],l.get(a.value[0])))return!1;return!0}if(n&&e instanceof Set&&l instanceof Set){if(e.size!==l.size)return!1;for(u=e.entries();!(a=u.next()).done;)if(!l.has(a.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(l)){if((i=e.length)!=l.length)return!1;for(a=i;0!=a--;)if(e[a]!==l[a])return!1;return!0}if(e.constructor===RegExp)return e.source===l.source&&e.flags===l.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===l.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===l.toString();if((i=(c=Object.keys(e)).length)!==Object.keys(l).length)return!1;for(a=i;0!=a--;)if(!Object.prototype.hasOwnProperty.call(l,c[a]))return!1;if(t&&e instanceof Element)return!1;for(a=i;0!=a--;)if(("_owner"!==c[a]&&"__v"!==c[a]&&"__o"!==c[a]||!e.$$typeof)&&!r(e[c[a]],l[c[a]]))return!1;return!0}return e!=e&&l!=l}e.exports=function(e,t){try{return r(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},5251:(e,t,o)=>{"use strict";var n=o(9196),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var n,r={},c=null,u=null;for(n in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,n)&&!a.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:u,props:r,_owner:i.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},5893:(e,t,o)=>{"use strict";e.exports=o(5251)},9196:e=>{"use strict";e.exports=window.React}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";o.r(n),o.d(n,{GlobalStylesProvider:()=>Ge,GlobalStylesUI:()=>we,useGlobalStylesOutput:()=>Ne,useGlobalStylesReset:()=>v});const e=window.wp.components,t=window.wp.blocks,s=window.wp.i18n,r=window.wp.element,l=(0,r.forwardRef)((function({icon:e,size:t=24,...o},n){return(0,r.cloneElement)(e,{width:t,height:t,...o,ref:n})})),i=window.wp.primitives;var a=o(5893);const c=(0,a.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(i.Path,{d:"M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"})}),u=(0,a.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(i.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})}),d=window.kubio.constants,p=window.lodash;var h=o(9590),m=o.n(h);const x=window.wp.blockEditor,_="body",f=[{path:["color","palette"],valueKey:"color",cssVarInfix:"color",classes:[{classSuffix:"color",propertyName:"color"},{classSuffix:"background-color",propertyName:"background-color"},{classSuffix:"border-color",propertyName:"border-color"}]},{path:["color","gradients"],valueKey:"gradient",cssVarInfix:"gradient",classes:[{classSuffix:"gradient-background",propertyName:"background"}]},{path:["typography","fontSizes"],valueKey:"size",cssVarInfix:"font-size",classes:[{classSuffix:"font-size",propertyName:"font-size"}]},{path:["typography","fontFamilies"],valueKey:"fontFamily",cssVarInfix:"font-family",classes:[{classSuffix:"font-family",propertyName:"font-family"}]}],g={"color.background":"color","color.text":"color","elements.link.color.text":"color","color.gradient":"gradient","typography.fontSize":"font-size","typography.fontFamily":"font-family"};function b(e,t,o,n,s){const r=[(0,p.get)(e,["blocks",t,...o]),(0,p.get)(e,o)];for(const l of r)if(l){const r=["custom","theme","default"];for(const i of r){const r=l[i];if(r){const l=(0,p.find)(r,(e=>e[n]===s));if(l)return"slug"===n||b(e,t,o,"slug",l.slug)[n]===l[n]?l:void 0}}}}function y(e,t,o){if(!o||!(0,p.isString)(o))return o;let n;if(o.startsWith("var:"))n=o.slice(4).split("|");else{if(!o.startsWith("var(--wp--")||!o.endsWith(")"))return o;n=o.slice(10,-1).split("--")}const[s,...r]=n;return"preset"===s?function(e,t,o,[n,s]){const r=(0,p.find)(f,["cssVarInfix",n]);if(!r)return o;const l=b(e,t,r.path,"slug",s);if(l){const{valueKey:o}=r;return y(e,t,l[o])}return o}(e,t,o,r):"custom"===s?function(e,t,o,n){var s;const r=null!==(s=(0,p.get)(e,["blocks",t,"custom",...n]))&&void 0!==s?s:(0,p.get)(e,["custom",...n]);return r?y(e,t,r):o}(e,t,o,r):o}const k=t.__EXPERIMENTAL_PATHS_WITH_MERGE||d.__EXPERIMENTAL_PATHS_WITH_OVERRIDE,j={isGlobalStylesUserThemeJSON:!0,version:1},v=()=>{const{user:e,setUserConfig:t}=(0,r.useContext)(x.GlobalStylesContext);return[!!e&&!m()(e,j),(0,r.useCallback)((()=>t((()=>j))),[t])]};function S(e,t,o="all"){var n;const{merged:s,base:l,user:i,setUserConfig:a}=(0,r.useContext)(x.GlobalStylesContext),c=t?`settings.blocks.${t}.${e}`:`settings.${e}`,u=t=>{const n=t?`settings.blocks.${t}.${e}`:`settings.${e}`,r=t=>{const o=(0,p.get)(t,n);var s,r;return k[e]?null!==(s=null!==(r=null==o?void 0:o.custom)&&void 0!==r?r:null==o?void 0:o.theme)&&void 0!==s?s:null==o?void 0:o.default:o};let a;switch(o){case"all":a=r(s);break;case"user":a=r(i);break;case"base":a=r(l);break;default:throw"Unsupported source"}return a};return[null!==(n=u(t))&&void 0!==n?n:u(),t=>{a((o=>{const n=window.structuredClone(o),s=k[e]?c+".custom":c;return(0,p.set)(n,s,t),n}))}]}function C(e,t,o="all"){var n;const{merged:s,base:l,user:i,setUserConfig:a}=(0,r.useContext)(x.GlobalStylesContext),c=t?`styles.blocks.${t}.${e}`:`styles.${e}`;let u;switch(o){case"all":u=y(s.settings,t,null!==(n=(0,p.get)(i,c))&&void 0!==n?n:(0,p.get)(l,c));break;case"user":u=y(s.settings,t,(0,p.get)(i,c));break;case"base":u=y(l.settings,t,(0,p.get)(l,c));break;default:throw"Unsupported source"}return[u,o=>{a((n=>{const r=window.structuredClone(n);return(0,p.set)(r,c,function(e,t,o,n){if(!n)return n;const s=g[o],r=(0,p.find)(f,["cssVarInfix",s]);if(!r)return n;const{valueKey:l,path:i}=r,a=b(e,t,i,l,n);return a?`var:preset|${s}|${a.slug}`:n}(s.settings,t,e,o)),r}))}]}const E=["background","backgroundColor","color","linkColor","fontFamily","fontSize","fontStyle","fontWeight","lineHeight","textDecoration","textTransform","padding"];function w(e){if(!e)return E;const o=(0,t.getBlockType)(e);if(!o)return[];const n=[];return Object.keys(d.__EXPERIMENTAL_STYLE_PROPERTY).forEach((e=>{if(d.__EXPERIMENTAL_STYLE_PROPERTY[e].support)return d.__EXPERIMENTAL_STYLE_PROPERTY[e].requiresOptOut&&(0,p.has)(o.supports,d.__EXPERIMENTAL_STYLE_PROPERTY[e].support[0])&&!1!==(0,p.get)(o.supports,d.__EXPERIMENTAL_STYLE_PROPERTY[e].support)||(0,p.get)(o.supports,d.__EXPERIMENTAL_STYLE_PROPERTY[e].support,!1)?n.push(e):void 0})),n}function I(e){const[t]=S("color.palette.custom",e),[o]=S("color.palette.theme",e),[n]=S("color.palette.default",e),[l]=S("color.defaultPalette");return(0,r.useMemo)((()=>{const e=[];return o&&o.length&&e.push({name:(0,s._x)("Theme","Indicates this palette comes from the theme.","kubio"),colors:o}),l&&n&&n.length&&e.push({name:(0,s._x)("Default","Indicates this palette comes from WordPress.","kubio"),colors:n}),t&&t.length&&e.push({name:(0,s._x)("Custom","Indicates this palette is created by the user.","kubio"),colors:t}),e}),[t,o,n])}const P=()=>{const[t="serif"]=C("typography.fontFamily"),[o="black"]=C("color.text"),[n="blue"]=C("elements.link.color.text"),[s="white"]=C("color.background"),[r]=C("color.gradient");return(0,a.jsx)(e.Card,{className:"edit-site-global-styles-preview",style:{background:null!=r?r:s},children:(0,a.jsxs)(e.__experimentalHStack,{spacing:5,children:[(0,a.jsx)("div",{style:{fontFamily:t,fontSize:"80px",color:o},children:"Aa"}),(0,a.jsxs)(e.__experimentalVStack,{spacing:2,children:[(0,a.jsx)(e.ColorIndicator,{colorValue:o}),(0,a.jsx)(e.ColorIndicator,{colorValue:n})]})]})})},T=function({path:t,icon:o,children:n,isBack:s=!1,...r}){const i=(0,e.__experimentalUseNavigator)();return(0,a.jsxs)(e.__experimentalItem,{onClick:()=>i.push(t,{isBack:s}),...r,children:[o&&(0,a.jsxs)(e.__experimentalHStack,{justify:"flex-start",children:[(0,a.jsx)(e.FlexItem,{children:(0,a.jsx)(l,{icon:o,size:24})}),(0,a.jsx)(e.FlexItem,{children:n})]}),!o&&n]})},M=(0,a.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(i.Path,{d:"M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1.8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z"})}),R=(0,a.jsx)(i.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(i.Path,{d:"M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"})}),O=(0,a.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(i.Path,{d:"M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"})}),N=[];function L(e){return[V(e),B(e),F(e),G(e)].some(Boolean)}function V(e){const t=w(e);return S("border.color",e)[0]&&t.includes("borderColor")}function B(e){const t=w(e);return S("border.radius",e)[0]&&t.includes("borderRadius")}function F(e){const t=w(e);return S("border.style",e)[0]&&t.includes("borderStyle")}function G(e){const t=w(e);return S("border.width",e)[0]&&t.includes("borderWidth")}function z({name:t}){const[o]=C("border",t,"user"),n=e=>()=>!(null==o||!o[e]),r=e=>()=>e(void 0),l=e=>t=>{e(t||void 0)},i=(0,e.__experimentalUseCustomUnits)({availableUnits:S("spacing.units")[0]||["px","em","rem"]}),c=G(t),[u,d]=C("border.width",t),p=F(t),[h,m]=C("border.style",t),_=V(t),[f,g]=C("border.color",t),[b=N]=S("color.palette"),y=!S("color.custom")[0],k=!S("color.customGradient")[0],j=B(t),[v,E]=C("border.radius",t),w=e=>t=>{t&&!h&&m("solid"),e(t||void 0)};return(0,a.jsxs)(e.__experimentalToolsPanel,{label:(0,s.__)("Border","kubio"),resetAll:()=>{g(void 0),E(void 0),m(void 0),d(void 0)},children:[c&&(0,a.jsx)(e.__experimentalToolsPanelItem,{className:"single-column",hasValue:n("width"),label:(0,s.__)("Width","kubio"),onDeselect:r(d),isShownByDefault:!0,children:(0,a.jsx)(e.__experimentalUnitControl,{value:u,label:(0,s.__)("Width","kubio"),min:0,onChange:w(d),units:i})}),p&&(0,a.jsx)(e.__experimentalToolsPanelItem,{className:"single-column",hasValue:n("style"),label:(0,s.__)("Style","kubio"),onDeselect:r(m),isShownByDefault:!0,children:(0,a.jsx)(x.__experimentalBorderStyleControl,{value:h,onChange:l(m)})}),_&&(0,a.jsx)(e.__experimentalToolsPanelItem,{hasValue:n("color"),label:(0,s.__)("Color","kubio"),onDeselect:r(g),isShownByDefault:!0,children:(0,a.jsx)(x.__experimentalColorGradientControl,{label:(0,s.__)("Color","kubio"),colorValue:f,colors:b,gradients:void 0,disableCustomColors:y,disableCustomGradients:k,onColorChange:w(g),clearable:!1})}),j&&(0,a.jsx)(e.__experimentalToolsPanelItem,{hasValue:()=>{const e=null==o?void 0:o.radius;return"object"==typeof e?Object.entries(e).some(Boolean):!!e},label:(0,s.__)("Radius","kubio"),onDeselect:r(E),isShownByDefault:!0,children:(0,a.jsx)(x.__experimentalBorderRadiusControl,{values:v,onChange:l(E)})})]})}function A(e){const t=w(e);return t.includes("color")||t.includes("backgroundColor")||t.includes("background")||t.includes("linkColor")}const $=["horizontal","vertical"];function D(e){const t=H(e),o=W(e),n=U(e);return t||o||n}function H(e){const t=w(e),[o]=S("spacing.padding",e);return o&&t.includes("padding")}function W(e){const t=w(e),[o]=S("spacing.margin",e);return o&&t.includes("margin")}function U(e){const t=w(e),[o]=S("spacing.blockGap",e);return o&&t.includes("--wp--style--block-gap")}function X(e,t){if(!t)return e;const o={};return t.forEach((t=>{"vertical"===t&&(o.top=e.top,o.bottom=e.bottom),"horizontal"===t&&(o.left=e.left,o.right=e.right),o[t]=e[t]})),o}function Y(e){return e&&"string"==typeof e?{top:e,right:e,bottom:e,left:e}:e}function K({name:t}){const o=H(t),n=W(t),r=U(t),l=(0,e.__experimentalUseCustomUnits)({availableUnits:S("spacing.units",t)[0]||["%","px","em","rem","vw"]}),[i,c]=C("spacing.padding",t),u=Y(i),d=(0,x.__experimentalUseCustomSides)(t,"padding"),p=d&&d.some((e=>$.includes(e))),h=e=>{const t=X(e,d);c(t)},m=()=>h({}),[_,f]=C("spacing.margin",t),g=Y(_),b=(0,x.__experimentalUseCustomSides)(t,"margin"),y=b&&b.some((e=>$.includes(e))),k=e=>{const t=X(e,b);f(t)},j=()=>k({}),[v,E]=C("spacing.blockGap",t),w=()=>E(void 0);return(0,a.jsxs)(e.__experimentalToolsPanel,{label:(0,s.__)("Dimensions","kubio"),resetAll:()=>{m(),j(),w()},children:[o&&(0,a.jsx)(e.__experimentalToolsPanelItem,{hasValue:()=>!!u&&Object.keys(u).length,label:(0,s.__)("Padding","kubio"),onDeselect:m,isShownByDefault:!0,children:(0,a.jsx)(e.__experimentalBoxControl,{values:u,onChange:h,label:(0,s.__)("Padding","kubio"),sides:d,units:l,allowReset:!1,splitOnAxis:p})}),n&&(0,a.jsx)(e.__experimentalToolsPanelItem,{hasValue:()=>!!g&&Object.keys(g).length,label:(0,s.__)("Margin","kubio"),onDeselect:j,isShownByDefault:!0,children:(0,a.jsx)(e.__experimentalBoxControl,{values:g,onChange:k,label:(0,s.__)("Margin","kubio"),sides:b,units:l,allowReset:!1,splitOnAxis:y})}),r&&(0,a.jsx)(e.__experimentalToolsPanelItem,{hasValue:()=>!!v,label:(0,s.__)("Block spacing","kubio"),onDeselect:w,isShownByDefault:!0,children:(0,a.jsx)(e.__experimentalUnitControl,{label:(0,s.__)("Block spacing","kubio"),__unstableInputWidth:"80px",min:0,onChange:E,units:l,value:v})})]})}function q(e){const t=J(e),o=Z(e),n=Q(e),s=w(e);return t||o||n||s.includes("fontSize")}function J(e){const t=w(e);return S("typography.lineHeight",e)[0]&&t.includes("lineHeight")}function Z(e){const t=w(e),o=S("typography.fontStyle",e)[0]&&t.includes("fontStyle"),n=S("typography.fontWeight",e)[0]&&t.includes("fontWeight");return o||n}function Q(e){const t=w(e);return S("typography.letterSpacing",e)[0]&&t.includes("letterSpacing")}function ee({name:t,element:o}){const n=w(t),s="text"!==o&&o?`elements.${o}.`:"",[r]=S("typography.fontSizes",t),l=!S("typography.customFontSize",t)[0],[i]=S("typography.fontFamilies",t),c=S("typography.fontStyle",t)[0]&&n.includes("fontStyle"),u=S("typography.fontWeight",t)[0]&&n.includes("fontWeight"),d=J(t),p=Z(t),h=Q(t),[m,_]=C(s+"typography.fontFamily",t),[f,g]=C(s+"typography.fontSize",t),[b,y]=C(s+"typography.fontStyle",t),[k,j]=C(s+"typography.fontWeight",t),[v,E]=C(s+"typography.lineHeight",t),[I,P]=C(s+"typography.letterSpacing",t),[T]=C(s+"color.background",t),[M]=C(s+"color.gradient",t),[R]=C(s+"color.text",t),O="link"===o?{textDecoration:"underline"}:{};return(0,a.jsxs)(e.PanelBody,{className:"edit-site-typography-panel",initialOpen:!0,children:[(0,a.jsx)("div",{className:"edit-site-typography-panel__preview",style:{fontFamily:null!=m?m:"serif",background:null!=M?M:T,color:R,fontSize:f,fontStyle:b,fontWeight:k,letterSpacing:I,...O},children:"Aa"}),n.includes("fontFamily")&&(0,a.jsx)(x.__experimentalFontFamilyControl,{fontFamilies:i,value:m,onChange:_}),n.includes("fontSize")&&(0,a.jsx)(e.FontSizePicker,{value:f,onChange:g,fontSizes:r,disableCustomFontSizes:l}),d&&(0,a.jsx)(x.LineHeightControl,{value:v,onChange:E}),p&&(0,a.jsx)(x.__experimentalFontAppearanceControl,{value:{fontStyle:b,fontWeight:k},onChange:({fontStyle:e,fontWeight:t})=>{y(e),j(t)},hasFontStyles:c,hasFontWeights:u}),h&&(0,a.jsx)(x.__experimentalLetterSpacingControl,{value:I,onChange:P})]})}const te=function({name:t,parentMenu:o=""}){const n=q(t),r=A(t),l=L(t),i=D(t),c=l||i;return(0,a.jsxs)(e.__experimentalItemGroup,{children:[n&&(0,a.jsx)(T,{icon:M,path:o+"/typography",children:(0,s.__)("Typography","kubio")}),r&&(0,a.jsx)(T,{icon:R,path:o+"/colors",children:(0,s.__)("Colors","kubio")}),c&&(0,a.jsx)(T,{icon:O,path:o+"/layout",children:(0,s.__)("Layout","kubio")})]})},oe=function(){return(0,a.jsxs)(e.Card,{size:"small",children:[(0,a.jsx)(e.CardBody,{children:(0,a.jsx)(P,{})}),(0,a.jsx)(e.CardBody,{children:(0,a.jsx)(te,{})}),(0,a.jsx)(e.CardDivider,{}),(0,a.jsx)(e.CardBody,{children:(0,a.jsxs)(e.__experimentalItemGroup,{children:[(0,a.jsx)(e.__experimentalItem,{children:(0,s.__)("Customize the appearance of specific blocks for the whole site.","kubio")}),(0,a.jsx)(T,{path:"/blocks",children:(0,a.jsxs)(e.__experimentalHStack,{justify:"space-between",children:[(0,a.jsx)(e.FlexItem,{children:(0,s.__)("Blocks","kubio")}),(0,a.jsx)(e.FlexItem,{children:(0,a.jsx)(l,{icon:(0,s.isRTL)()?c:u})})]})})]})})]})},ne=function({back:t,title:o,description:n}){return(0,a.jsxs)(e.__experimentalVStack,{spacing:2,children:[(0,a.jsxs)(e.__experimentalHStack,{spacing:2,children:[(0,a.jsx)(e.__experimentalView,{children:(0,a.jsx)(T,{path:t,icon:(0,a.jsx)(l,{icon:(0,s.isRTL)()?u:c,variant:"muted"}),size:"small",isBack:!0,"aria-label":(0,s.__)("Navigate to the previous view","kubio")})}),(0,a.jsx)(e.__experimentalSpacer,{children:(0,a.jsx)(e.__experimentalHeading,{level:5,children:o})})]}),n&&(0,a.jsx)("p",{className:"edit-site-global-styles-header__description",children:n})]})};function se({block:t}){const o=q(t.name),n=A(t.name),s=L(t.name),r=D(t.name);return o||n||s||r?(0,a.jsx)(T,{path:"/blocks/"+t.name,children:(0,a.jsxs)(e.__experimentalHStack,{justify:"flex-start",children:[(0,a.jsx)(e.FlexItem,{children:(0,a.jsx)(x.BlockIcon,{icon:t.icon})}),(0,a.jsx)(e.FlexItem,{children:t.title})]})}):null}const re=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ne,{back:"/",title:(0,s.__)("Blocks","kubio"),description:(0,s.__)("Customize the appearance of specific blocks and for the whole site.","kubio")}),(0,t.getBlockTypes)().map((e=>(0,a.jsx)(se,{block:e},"menu-itemblock-"+e.name)))]})},le=function({name:e}){const o=(0,t.getBlockType)(e);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ne,{back:"/blocks",title:o.title}),(0,a.jsx)(te,{parentMenu:"/blocks/"+e,name:e})]})},ie=function({children:t}){return(0,a.jsx)(e.__experimentalHeading,{className:"edit-site-global-styles-subtitle",level:2,children:t})};function ae({name:t,parentMenu:o,element:n,label:r}){const l=!t,i="text"!==n&&n?`elements.${n}.`:"",c="link"===n?{textDecoration:"underline"}:{},[u]=C(i+"typography.fontFamily",t),[d]=C(i+"typography.fontStyle",t),[p]=C(i+"typography.fontWeight",t),[h]=C(i+"typography.letterSpacing",t),[m]=C(i+"color.background",t),[x]=C(i+"color.gradient",t),[_]=C(i+"color.text",t);return l?(0,a.jsx)(T,{path:o+"/typography/"+n,children:(0,a.jsxs)(e.__experimentalHStack,{justify:"flex-start",children:[(0,a.jsx)(e.FlexItem,{className:"edit-site-global-styles-screen-typography__indicator",style:{fontFamily:null!=u?u:"serif",background:null!=x?x:m,color:_,fontStyle:d,fontWeight:p,letterSpacing:h,...c},children:(0,s.__)("Aa","kubio")}),(0,a.jsx)(e.FlexItem,{children:r})]})}):null}const ce=function({name:t}){const o=void 0===t?"":"/blocks/"+t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ne,{back:o||"/",title:(0,s.__)("Typography","kubio"),description:(0,s.__)("Manage the typography settings for different elements.","kubio")}),!t&&(0,a.jsx)("div",{className:"edit-site-global-styles-screen-typography",children:(0,a.jsxs)(e.__experimentalVStack,{spacing:3,children:[(0,a.jsx)(ie,{children:(0,s.__)("Elements","kubio")}),(0,a.jsxs)(e.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,children:[(0,a.jsx)(ae,{name:t,parentMenu:o,element:"text",label:(0,s.__)("Text","kubio")}),(0,a.jsx)(ae,{name:t,parentMenu:o,element:"link",label:(0,s.__)("Links","kubio")})]})]})}),!!t&&(0,a.jsx)(ee,{name:t,element:"text"})]})},ue={text:{description:(0,s.__)("Manage the fonts used on the site.","kubio"),title:(0,s.__)("Text","kubio")},link:{description:(0,s.__)("Manage the fonts and typography used on the links.","kubio"),title:(0,s.__)("Links","kubio")}},de=function({name:e,element:t}){const o=void 0===e?"/typography":"/blocks/"+e+"/typography";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ne,{back:o,title:ue[t].title,description:ue[t].description}),(0,a.jsx)(ee,{name:e,element:t})]})},pe=[],he=function({name:t}){const[o]=S("color.palette.custom"),[n]=S("color.palette.theme"),[l]=S("color.palette.default"),[i]=S("color.defaultPalette",t),c=(0,r.useMemo)((()=>[...o||pe,...n||pe,...l&&i?l:pe]),[o,n,l,i]),u=t?"/blocks/"+t+"/colors/palette":"/colors/palette",d=c.length>0?(0,s.sprintf)(// Translators: %d: Number of palette colors.
// Translators: %d: Number of palette colors.
(0,s._n)("%d color","%d colors",c.length,"kubio"),c.length):(0,s.__)("Add custom colors","kubio");return(0,a.jsxs)(e.__experimentalVStack,{spacing:3,children:[(0,a.jsx)(ie,{children:(0,s.__)("Palette","kubio")}),(0,a.jsx)(e.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,children:(0,a.jsx)(T,{path:u,children:(0,a.jsxs)(e.__experimentalHStack,{isReversed:0===c.length,children:[(0,a.jsx)(e.FlexBlock,{children:(0,a.jsx)(e.__experimentalZStack,{isLayered:!1,offset:-8,children:c.slice(0,5).map((({color:t})=>(0,a.jsx)(e.ColorIndicator,{colorValue:t},t)))})}),(0,a.jsx)(e.FlexItem,{children:d})]})})})]})};function me({name:t,parentMenu:o}){const n=w(t),r=n.includes("backgroundColor")||n.includes("background"),[l]=C("color.background",t),[i]=C("color.gradient",t);return r?(0,a.jsx)(T,{path:o+"/colors/background",children:(0,a.jsxs)(e.__experimentalHStack,{justify:"flex-start",children:[(0,a.jsx)(e.FlexItem,{children:(0,a.jsx)(e.ColorIndicator,{colorValue:null!=i?i:l})}),(0,a.jsx)(e.FlexItem,{children:(0,s.__)("Background","kubio")})]})}):null}function xe({name:t,parentMenu:o}){const n=w(t).includes("color"),[r]=C("color.text",t);return n?(0,a.jsx)(T,{path:o+"/colors/text",children:(0,a.jsxs)(e.__experimentalHStack,{justify:"flex-start",children:[(0,a.jsx)(e.FlexItem,{children:(0,a.jsx)(e.ColorIndicator,{colorValue:r})}),(0,a.jsx)(e.FlexItem,{children:(0,s.__)("Text","kubio")})]})}):null}function _e({name:t,parentMenu:o}){const n=w(t).includes("linkColor"),[r]=C("elements.link.color.text",t);return n?(0,a.jsx)(T,{path:o+"/colors/link",children:(0,a.jsxs)(e.__experimentalHStack,{justify:"flex-start",children:[(0,a.jsx)(e.FlexItem,{children:(0,a.jsx)(e.ColorIndicator,{colorValue:r})}),(0,a.jsx)(e.FlexItem,{children:(0,s.__)("Links","kubio")})]})}):null}const fe=function({name:t}){const o=void 0===t?"":"/blocks/"+t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ne,{back:o||"/",title:(0,s.__)("Colors","kubio"),description:(0,s.__)("Manage palettes and the default color of different global elements on the site.","kubio")}),(0,a.jsx)("div",{className:"edit-site-global-styles-screen-colors",children:(0,a.jsxs)(e.__experimentalVStack,{spacing:10,children:[(0,a.jsx)(he,{name:t}),(0,a.jsxs)(e.__experimentalVStack,{spacing:3,children:[(0,a.jsx)(ie,{children:(0,s.__)("Elements","kubio")}),(0,a.jsxs)(e.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,children:[(0,a.jsx)(me,{name:t,parentMenu:o}),(0,a.jsx)(xe,{name:t,parentMenu:o}),(0,a.jsx)(_e,{name:t,parentMenu:o})]})]})]})})]})};function ge({name:t}){const[o,n]=S("color.palette.theme",t),[r]=S("color.palette.theme",t,"base"),[l,i]=S("color.palette.default",t),[c]=S("color.palette.default",t,"base"),[u,d]=S("color.palette.custom",t),[p]=S("color.defaultPalette",t);return(0,a.jsxs)(e.__experimentalVStack,{className:"edit-site-global-styles-color-palette-panel",spacing:10,children:[!!o&&!!o.length&&(0,a.jsx)(e.__experimentalPaletteEdit,{canReset:o!==r,canOnlyChangeValues:!0,colors:o,onChange:n,paletteLabel:(0,s.__)("Theme","kubio")}),!!l&&!!l.length&&!!p&&(0,a.jsx)(e.__experimentalPaletteEdit,{canReset:l!==c,canOnlyChangeValues:!0,colors:l,onChange:i,paletteLabel:(0,s.__)("Default","kubio")}),(0,a.jsx)(e.__experimentalPaletteEdit,{colors:u,onChange:d,paletteLabel:(0,s.__)("Custom","kubio"),emptyMessage:(0,s.__)("Custom colors are empty! Add some colors to create your own color palette.","kubio"),slugPrefix:"custom-"})]})}function be({name:t}){const[o,n]=S("color.gradients.theme",t),[r]=S("color.gradients.theme",t,"base"),[l,i]=S("color.gradients.default",t),[c]=S("color.gradients.default",t,"base"),[u,d]=S("color.gradients.custom",t),[h]=S("color.defaultGradients",t),[m]=S("color.duotone")||[];return(0,a.jsxs)(e.__experimentalVStack,{className:"edit-site-global-styles-gradient-palette-panel",spacing:10,children:[!!o&&!!o.length&&(0,a.jsx)(e.__experimentalPaletteEdit,{canReset:o!==r,canOnlyChangeValues:!0,gradients:o,onChange:n,paletteLabel:(0,s.__)("Theme","kubio")}),!!l&&!!l.length&&!!h&&(0,a.jsx)(e.__experimentalPaletteEdit,{canReset:l!==c,canOnlyChangeValues:!0,gradients:l,onChange:i,paletteLabel:(0,s.__)("Default","kubio")}),(0,a.jsx)(e.__experimentalPaletteEdit,{gradients:u,onChange:d,paletteLabel:(0,s.__)("Custom","kubio"),emptyMessage:(0,s.__)("Custom gradients are empty! Add some gradients to create your own palette.","kubio"),slugPrefix:"custom-"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(ie,{children:(0,s.__)("Duotone","kubio")}),(0,a.jsx)(e.__experimentalSpacer,{margin:3}),(0,a.jsx)(e.DuotonePicker,{duotonePalette:m,disableCustomDuotone:!0,disableCustomColors:!0,clearable:!1,onChange:p.noop})]})]})}const ye=function({name:t}){const[o,n]=(0,r.useState)("solid"),l=void 0===t?"":"/blocks/"+t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ne,{back:l+"/colors",title:(0,s.__)("Palette","kubio"),description:(0,s.__)("Palettes are used to provide default color options for blocks and various design tools. Here you can edit the colors with their labels.","kubio")}),(0,a.jsxs)(e.__experimentalToggleGroupControl,{className:"edit-site-screen-color-palette-toggle",value:o,onChange:n,label:(0,s.__)("Select palette type","kubio"),hideLabelFromVision:!0,isBlock:!0,children:[(0,a.jsx)(e.__experimentalToggleGroupControlOption,{value:"solid",label:(0,s.__)("Solid","kubio")}),(0,a.jsx)(e.__experimentalToggleGroupControlOption,{value:"gradient",label:(0,s.__)("Gradient","kubio")})]}),"solid"===o&&(0,a.jsx)(ge,{name:t}),"gradient"===o&&(0,a.jsx)(be,{name:t})]})},ke=function({name:e}){const t=void 0===e?"":"/blocks/"+e,o=w(e),[n]=S("color.palette",e),[l]=S("color.gradients",e),[i]=S("color.custom",e),[c]=S("color.customGradient",e),u=I(e),d=function(e){const[t]=S("color.gradients.custom",e),[o]=S("color.gradients.theme",e),[n]=S("color.gradients.default",e),[l]=S("color.defaultGradients");return(0,r.useMemo)((()=>{const e=[];return o&&o.length&&e.push({name:(0,s._x)("Theme","Indicates this palette comes from the theme.","kubio"),gradients:o}),l&&n&&n.length&&e.push({name:(0,s._x)("Default","Indicates this palette comes from WordPress.","kubio"),gradients:n}),t&&t.length&&e.push({name:(0,s._x)("Custom","Indicates this palette is created by the user.","kubio"),gradients:t}),e}),[t,o,n])}(e),[p]=S("color.background",e),h=o.includes("backgroundColor")&&p&&(n.length>0||i),m=o.includes("background")&&(l.length>0||c),[_,f]=C("color.background",e),[g]=C("color.background",e,"user"),[b,y]=C("color.gradient",e),[k]=C("color.gradient",e,"user");if(!h&&!m)return null;let j={};h&&(j={colorValue:_,onColorChange:f},_&&(j.clearable=_===g));let v={};m&&(v={gradientValue:b,onGradientChange:y},b&&(v.clearable=b===k));const E={...j,...v};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ne,{back:t+"/colors",title:(0,s.__)("Background","kubio"),description:(0,s.__)("Set a background color or gradient for the whole site.","kubio")}),(0,a.jsx)(x.__experimentalColorGradientControl,{className:"edit-site-screen-background-color__control",colors:u,gradients:d,disableCustomColors:!i,disableCustomGradients:!c,__experimentalHasMultipleOrigins:!0,showTitle:!1,enableAlpha:!0,__experimentalIsRenderedInSidebar:!0,...E})]})},je=function({name:e}){const t=void 0===e?"":"/blocks/"+e,o=w(e),[n]=S("color.palette",e),[r]=S("color.custom",e),[l]=S("color.text",e),i=I(e),c=o.includes("color")&&l&&(n.length>0||r),[u,d]=C("color.text",e),[p]=C("color.text",e,"user");return c?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ne,{back:t+"/colors",title:(0,s.__)("Text","kubio"),description:(0,s.__)("Set the default color used for text across the site.","kubio")}),(0,a.jsx)(x.__experimentalColorGradientControl,{className:"edit-site-screen-text-color__control",colors:i,disableCustomColors:!r,__experimentalHasMultipleOrigins:!0,showTitle:!1,enableAlpha:!0,__experimentalIsRenderedInSidebar:!0,colorValue:u,onColorChange:d,clearable:u===p})]}):null},ve=function({name:e}){const t=void 0===e?"":"/blocks/"+e,o=w(e),[n]=S("color.palette",e),[r]=S("color.custom",e),l=I(e),[i]=S("color.link",e),c=o.includes("linkColor")&&i&&(n.length>0||r),[u,d]=C("elements.link.color.text",e),[p]=C("elements.link.color.text",e,"user");return c?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ne,{back:t+"/colors",title:(0,s.__)("Links","kubio"),description:(0,s.__)("Set the default color used for links across the site.","kubio")}),(0,a.jsx)(x.__experimentalColorGradientControl,{className:"edit-site-screen-link-color__control",colors:l,disableCustomColors:!r,__experimentalHasMultipleOrigins:!0,showTitle:!1,enableAlpha:!0,__experimentalIsRenderedInSidebar:!0,colorValue:u,onColorChange:d,clearable:u===p})]}):null},Se=function({name:e}){const t=void 0===e?"":"/blocks/"+e,o=L(e),n=D(e);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ne,{back:t||"/",title:(0,s.__)("Layout","kubio")}),n&&(0,a.jsx)(K,{name:e}),o&&(0,a.jsx)(z,{name:e})]})};function Ce({className:t,...o}){return(0,a.jsx)(e.__experimentalNavigatorScreen,{className:["edit-site-global-styles-sidebar__navigator-screen",t].filter(Boolean).join(" "),...o})}function Ee({name:e}){const t=void 0===e?"":"/blocks/"+e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Ce,{path:t+"/typography",children:(0,a.jsx)(ce,{name:e})}),(0,a.jsx)(Ce,{path:t+"/typography/text",children:(0,a.jsx)(de,{name:e,element:"text"})}),(0,a.jsx)(Ce,{path:t+"/typography/link",children:(0,a.jsx)(de,{name:e,element:"link"})}),(0,a.jsx)(Ce,{path:t+"/colors",children:(0,a.jsx)(fe,{name:e})}),(0,a.jsx)(Ce,{path:t+"/colors/palette",children:(0,a.jsx)(ye,{name:e})}),(0,a.jsx)(Ce,{path:t+"/colors/background",children:(0,a.jsx)(ke,{name:e})}),(0,a.jsx)(Ce,{path:t+"/colors/text",children:(0,a.jsx)(je,{name:e})}),(0,a.jsx)(Ce,{path:t+"/colors/link",children:(0,a.jsx)(ve,{name:e})}),(0,a.jsx)(Ce,{path:t+"/layout",children:(0,a.jsx)(Se,{name:e})})]})}const we=function(){const o=(0,t.getBlockTypes)();return(0,a.jsxs)(e.__experimentalNavigatorProvider,{className:"edit-site-global-styles-sidebar__navigator-provider",initialPath:"/",children:[(0,a.jsx)(Ce,{path:"/",children:(0,a.jsx)(oe,{})}),(0,a.jsx)(Ce,{path:"/blocks",children:(0,a.jsx)(re,{})}),o.map((e=>(0,a.jsx)(Ce,{path:"/blocks/"+e.name,children:(0,a.jsx)(le,{name:e.name})},"menu-block-"+e.name))),(0,a.jsx)(Ee,{}),o.map((e=>(0,a.jsx)(Ee,{name:e.name},"screens-block-"+e.name)))]})};function Ie(e){return(0,p.startsWith)(e,"var:")?`var(--wp--${e.slice(4).split("|").join("--")})`:e}function Pe(e={},t,o){let n=[];return Object.keys(e).forEach((s=>{const r=t+(0,p.kebabCase)(s.replace("/","-")),l=e[s];if(l instanceof Object){const e=r+o;n=[...n,...Pe(l,e,o)]}else n.push(`${r}: ${l}`)})),n}const Te=(e,t)=>{var o,n;const s=[];if(null==e||!e.settings)return s;const r=e=>{const t={};return f.forEach((({path:o})=>{const n=(0,p.get)(e,o,!1);!1!==n&&(0,p.set)(t,o,n)})),t},l=r(e.settings),i=null===(o=e.settings)||void 0===o?void 0:o.custom;return(0,p.isEmpty)(l)&&!i||s.push({presets:l,custom:i,selector:_}),(0,p.forEach)(null===(n=e.settings)||void 0===n?void 0:n.blocks,((e,o)=>{const n=r(e),l=e.custom;(0,p.isEmpty)(n)&&!l||s.push({presets:n,custom:l,selector:t[o].selector})})),s},Me=(e,t)=>{const o=Te(e,t);let n="";return o.forEach((({presets:e,custom:t,selector:o})=>{const s=function(e={}){return(0,p.reduce)(f,((t,{path:o,valueKey:n,cssVarInfix:s})=>{const r=(0,p.get)(e,o,[]);return["default","theme","custom"].forEach((e=>{r[e]&&r[e].forEach((e=>{t.push(`--wp--preset--${s}--${(0,p.kebabCase)(e.slug)}: ${e[n]}`)}))})),t}),[])}(e),r=Pe(t,"--wp--custom--","--");r.length>0&&s.push(...r),s.length>0&&(n+=`${o}{${s.join(";")};}`)})),n},Re=(e,o)=>{const n=((e,o)=>{var n,s;const r=[];if(null==e||!e.styles)return r;const l=e=>(0,p.pickBy)(e,((e,t)=>["border","color","spacing","typography"].includes(t))),i=l(e.styles);return i&&r.push({styles:i,selector:_}),(0,p.forEach)(null===(n=e.styles)||void 0===n?void 0:n.elements,((e,o)=>{e&&t.__EXPERIMENTAL_ELEMENTS[o]&&r.push({styles:e,selector:t.__EXPERIMENTAL_ELEMENTS[o]})})),(0,p.forEach)(null===(s=e.styles)||void 0===s?void 0:s.blocks,((e,n)=>{var s;const i=l(e);i&&null!=o&&null!==(s=o[n])&&void 0!==s&&s.selector&&r.push({styles:i,selector:o[n].selector}),(0,p.forEach)(null==e?void 0:e.elements,((e,s)=>{e&&null!=o&&o[n]&&null!==t.__EXPERIMENTAL_ELEMENTS&&void 0!==t.__EXPERIMENTAL_ELEMENTS&&t.__EXPERIMENTAL_ELEMENTS[s]&&r.push({styles:e,selector:o[n].selector.split(",").map((e=>e+" "+t.__EXPERIMENTAL_ELEMENTS[s])).join(",")})}))})),r})(e,o),s=Te(e,o);let r=".wp-site-blocks > * { margin-top: 0; margin-bottom: 0; }.wp-site-blocks > * + * { margin-top: var( --wp--style--block-gap ); }";return n.forEach((({selector:e,styles:o})=>{const n=function(e={}){return(0,p.reduce)(t.__EXPERIMENTAL_STYLE_PROPERTY,((t,{value:o,properties:n},s)=>{const r=o;if("elements"===(0,p.first)(r))return t;const l=(0,p.get)(e,r);if(n&&!(0,p.isString)(l))Object.entries(n).forEach((e=>{const[o,n]=e;if(!(0,p.get)(l,[n],!1))return;const s=(0,p.kebabCase)(o);t.push(`${s}: ${Ie((0,p.get)(l,[n]))}`)}));else if((0,p.get)(e,r,!1)){const o=s.startsWith("--")?s:(0,p.kebabCase)(s);t.push(`${o}: ${Ie((0,p.get)(e,r))}`)}return t}),[])}(o);0!==n.length&&(r+=`${e}{${n.join(";")};}`)})),s.forEach((({selector:e,presets:t})=>{_===e&&(e="");const o=function(e,t={}){return(0,p.reduce)(f,((o,{path:n,cssVarInfix:s,classes:r})=>{if(!r)return o;const l=(0,p.get)(t,n,[]);return["default","theme","custom"].forEach((t=>{l[t]&&l[t].forEach((({slug:t})=>{r.forEach((({classSuffix:n,propertyName:r})=>{const l=`.has-${(0,p.kebabCase)(t)}-${n}`,i=e.split(",").map((e=>`${e}${l}`)).join(","),a=`var(--wp--preset--${s}--${(0,p.kebabCase)(t)})`;o+=`${i}{${r}: ${a} !important;}`}))}))})),o}),"")}(e,t);(0,p.isEmpty)(o)||(r+=o)})),r},Oe=e=>{const t={};return e.forEach((e=>{var o,n;const s=e.name,r=null!==(o=null==e||null===(n=e.supports)||void 0===n?void 0:n.__experimentalSelector)&&void 0!==o?o:".wp-block-"+s.replace("core/","").replace("/","-");t[s]={name:s,selector:r}})),t};function Ne(){const[e,o]=(0,r.useState)([]),[n,s]=(0,r.useState)({}),{merged:l}=(0,r.useContext)(x.GlobalStylesContext);return(0,r.useEffect)((()=>{if(null==l||!l.styles||null==l||!l.settings)return;const e=Oe((0,t.getBlockTypes)()),n=Me(l,e),r=Re(l,e);o([{css:n,isGlobalStyles:!0},{css:r,isGlobalStyles:!0}]),s(l.settings)}),[l]),[e,n]}const Le=window.wp.coreData,Ve=window.wp.data;function Be(e,t){if(Array.isArray(t))return t}const Fe=e=>{if(null===e||"object"!=typeof e||Array.isArray(e))return e;const t=Object.fromEntries(Object.entries((0,p.mapValues)(e,Fe)).filter((([,e])=>Boolean(e))));return(0,p.isEmpty)(t)?void 0:t};function Ge({children:e}){const t=function(){const[e,t,o]=function(){const{globalStylesId:e,settings:t,styles:o}=(0,Ve.useSelect)((e=>{const t=e(Le.store).__experimentalGetCurrentGlobalStylesId(),o=t?e(Le.store).getEditedEntityRecord("root","globalStyles",t):void 0;return{globalStylesId:t,settings:null==o?void 0:o.settings,styles:null==o?void 0:o.styles}}),[]),{getEditedEntityRecord:n}=(0,Ve.useSelect)(Le.store),{editEntityRecord:s}=(0,Ve.useDispatch)(Le.store),l=(0,r.useMemo)((()=>({settings:null!=t?t:{},styles:null!=o?o:{}})),[t,o]),i=(0,r.useCallback)((t=>{var o,r;const l=n("root","globalStyles",e),i=t({styles:null!==(o=null==l?void 0:l.styles)&&void 0!==o?o:{},settings:null!==(r=null==l?void 0:l.settings)&&void 0!==r?r:{}});s("root","globalStyles",e,{styles:Fe(i.styles)||{},settings:Fe(i.settings)||{}})}),[e]);return[!!t||!!o,l,i]}(),[n,s]=function(){const e=(0,Ve.useSelect)((e=>e(Le.store).__experimentalGetCurrentThemeBaseGlobalStyles()),[]);return[!!e,e]}(),l=(0,r.useMemo)((()=>{return s&&t?(e=s,o=t,(0,p.mergeWith)({},e,o,Be)):{};var e,o}),[t,s]);return(0,r.useMemo)((()=>({isReady:e&&n,user:t,base:s,merged:l,setUserConfig:o})),[l,t,s,o,e,n])}();return(0,a.jsx)(x.GlobalStylesContext.Provider,{value:t,children:e})}})(),(window.kubio=window.kubio||{}).wpGlobalStyles=n})();
