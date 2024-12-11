(()=>{"use strict";var e={5251:(e,t,o)=>{var n=o(9196),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var n,s={},d=null,u=null;for(n in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)r.call(t,n)&&!i.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:l,type:e,key:d,ref:u,props:s,_owner:a.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},5893:(e,t,o)=>{e.exports=o(5251)},9196:e=>{e.exports=window.React}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{o.r(n),o.d(n,{AdvancedInspectorPanel:()=>R,StatesControl:()=>b,withInspectorControlsAdvancedPanel:()=>T}),window.kubio.adminPanel;const e=window.kubio.constants,t=window.kubio.controls,l=window.kubio.core,s=window.kubio.inspectors,r=window.kubio.styleManager,a=window.wp.components,i=window.wp.compose,d=window.wp.data,u=window.wp.element,c=window.wp.i18n,p=window.lodash;var S=o.n(p);const y=window.kubio.log,m={[r.StylesEnum.TYPOGRAPHY]:{control:t.TypographyForTextAdvanced,mapsToStyle:!1,title:(0,c.__)("Typography","kubio")},[r.StylesEnum.TYPOGRAPHY_FOR_HEADING]:{control:t.TypographyForHeading,mapsToStyle:!1,title:(0,c.__)("Typography","kubio")},[r.StylesEnum.TYPOGRAPHY_FOR_CONTAINER]:{control:t.TypographyForContainer,mapsToStyle:!1,title:(0,c.__)("Typography","kubio")},[r.StylesEnum.TYPOGRAPHY_FOR_CONTAINER_ADVANCED]:{control:t.TypographyForContainerAdvanced,mapsToStyle:!1,title:(0,c.__)("Typography","kubio")},[r.StylesEnum.SPACING]:{control:t.SpacingControl,mapsToStyle:!1,title:(0,c.__)("Spacing","kubio")},[r.StylesEnum.BORDER]:{control:t.BorderAndShadowControl,mapsToStyle:!1,title:({filters:e})=>{const{supportsBorder:t=!0,supportsBoxShadow:o=!0}=e;return t&&o?(0,c.__)("Border and Shadows","kubio"):t&&!o?(0,c.__)("Border","kubio"):!t&&o?(0,c.__)("Box shadow","kubio"):void 0}},[r.StylesEnum.BACKGROUND]:{control:t.BackgroundControl,title:(0,c.__)("Background","kubio"),options:{mergeArrays:!0}},[r.StylesEnum.TEXT_SHADOW]:{control:t.TextShadowControl,title:(0,c.__)("Text shadow","kubio")},[r.StylesEnum.RESPONSIVE]:{shouldRender:({filters:e})=>!(null!=e&&e.isDisabled),control:t.ResponsiveControl,mapsToStyle:!1,title:(0,c.__)("Responsive","kubio")},[r.StylesEnum.SEPARATORS]:{control:t.SeparatorsControl,title:(0,c.__)("Dividers","kubio")},[r.StylesEnum.TRANSFORM]:{control:t.TransformControl,title:(0,c.__)("Transform","kubio"),options:{mergeData:!0}},[r.StylesEnum.APPEARANCE]:{shouldRender:({filters:e})=>!(null!=e&&e.isDisabled),control:t.AppearanceControl,title:(0,c.__)("Entrance animation","kubio")},[r.StylesEnum.TRANSITION]:{control:t.TransitionControlOnHover,shouldRender:e=>"hover"===e.state,title:(0,c.__)("Transition","kubio")},[r.StylesEnum.MISC]:{shouldRender:({filters:e})=>!(null!=e&&e.isDisabled),control:t.MiscControl,title:(0,c.__)("Miscellaneous","kubio")}},E=[r.StylesEnum.TRANSITION,r.StylesEnum.BACKGROUND,r.StylesEnum.SEPARATORS,r.StylesEnum.SPACING,r.StylesEnum.BORDER,r.StylesEnum.BOX_SHADOW,r.StylesEnum.TYPOGRAPHY,r.StylesEnum.TYPOGRAPHY_FOR_CONTAINER,r.StylesEnum.TYPOGRAPHY_FOR_CONTAINER_ADVANCED,r.StylesEnum.TYPOGRAPHY_FOR_HEADING,r.StylesEnum.TEXT_SHADOW,r.StylesEnum.TRANSFORM,r.StylesEnum.APPEARANCE,r.StylesEnum.RESPONSIVE,r.StylesEnum.MISC];var _=o(5893);const v=({selectedElement:e})=>{let t=[];return e&&(t=(0,p.get)(e,"supports.states",["normal","hover"])),t},b=({activeState:e,setActiveState:t,availableStates:o=[],selectedElement:n=null,label:l=null})=>{var s;const i=(0,p.isEmpty)(o)?v({selectedElement:n}):o,d=null===(s=(0,p.find)(r.statesById,{value:e}))||void 0===s?void 0:s.id;return!(i.length<=1)&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:"kubio-states-control-label",title:l,children:l}),(0,_.jsx)(a.__experimentalRadioGroup,{id:"kubio-states-control",className:"kubio-states-control-radio-group",defaultChecked:e,checked:d,onChange:e=>{var o;return t(null===(o=r.statesById[e])||void 0===o?void 0:o.value)},children:i.map((e=>{var t,o;return(0,_.jsx)(a.__experimentalRadio,{value:null===(t=r.statesById[e])||void 0===t?void 0:t.id,children:null===(o=r.statesById[e])||void 0===o?void 0:o.label},e)}))})]})},k=window.wp.blocks,h=window.kubio.pro,w=window.kubio.utils,O=e=>{const{styles:t,selectedStyledElement:o,dataHelper:n,showContent:l}=e;return E.filter((e=>t.includes(e))).filter(Boolean).map((e=>(0,_.jsx)(A,{style:e,selectedStyledElement:o,dataHelper:n,showContent:l},e)))},A=({style:e,selectedStyledElement:t,dataHelper:o,showContent:n=!0})=>{const{defaultOptions:s}=(0,l.useDataHelperDefaultOptionsContext)(),r=m[e];if(!r)return y.Log.error(`Advanced panel: "${e}" does not exists`),(0,_.jsx)(_.Fragment,{});const{control:i,mapsToStyle:d=!0,shouldRender:u=(()=>!0),options:c={}}=r,p=d?o.useStylePath(e,{...s,...c},{}):{dataHelper:o},E=S().get(t,["supports","filters",e],{});let v="";v="function"==typeof m[e].title?m[e].title({filters:E}):m[e].title;const b={dataHelper:o,property:e,state:S().get(s,"state"),...p,filters:E,styledElement:t.name};return u(b)&&(0,_.jsx)(a.PanelBody,{classname:"kubio-advanced-panel-panelbody",title:v,initialOpen:!1,children:n&&(0,_.jsx)(i,{...b})},`panel-${e}`)},g=e=>{const{name:o,clientId:n}=e,{blockDefinition:s,getBlock:a}=(0,d.useSelect)((e=>({blockDefinition:e("core/blocks").getBlockType(o),getBlock:e("core/block-editor").getBlock}))),{displayAdvancedPanelFor:i}=s,p=i?i(n,d.select):null,y=p?a(p).name:o,m=(0,l.getBlockElements)(y,!1,!0),E=(0,l.getBlockDefaultElement)(y)||m[0],[A,g]=(0,u.useState)(""),[R,T]=(0,u.useState)(E),f=S().get(R,"supports.styles",[]),C=(0,u.useMemo)((()=>m.reduce(((e,t)=>{const{items:o}=t;return o?[...e,...o]:[...e,t]}),[])),[m]),x=null==R?void 0:R.name,P=(0,d.useSelect)((e=>e("core/block-editor").getBlock(p||n)),[p,n]),{dataHelper:N}=(0,l.useKubioDataHelper)(P),D=(0,u.useMemo)((()=>!0),[])&&w.SHOW_ADVANCED_IN_PRO,j=null==N?void 0:N.blockName,I={state:A,styledComponent:x},B=(0,l.useDataHelperDefaultOptionsContext)({defaultOptions:I});if(!f.length)return(0,_.jsx)("div",{className:"kubio-editing-header",children:(0,_.jsx)(t.ControlNotice,{content:(0,c.__)("Current block does not support advanced styling","kubio")})});const H=C.filter((e=>!e.internal)).length;N.kubioSupports("advanced.responsive",!0)&&(R.wrapper||H<=1)&&f.push(r.StylesEnum.RESPONSIVE),N.kubioSupports("advanced.misc",!0)&&(R.wrapper||H<=1)&&f.push(r.StylesEnum.MISC),(0,k.hasBlockSupport)(null==N?void 0:N.blockName,"kubio.appearanceEffect",!1)&&f.push(r.StylesEnum.APPEARANCE);const Y=v({selectedElement:R});return(0,_.jsx)("div",{style:{position:"relative"},children:(0,_.jsxs)(l.DataHelperDefaultOptionsContext.Provider,{value:B,children:[(0,_.jsx)(h.UpgradeToProOverlay,{show:D,urlArgs:{source:"sidebar-advanced/"+j,content:j}}),(0,_.jsxs)(l.KubioBlockContext.Provider,{value:{dataHelper:N},children:[(m.length>1||Y.length>1)&&(0,_.jsxs)("div",{className:"kubio-editing-header",children:[m.length>1&&(0,_.jsx)(t.GutentagSelectControl,{className:"kubio-editing-select",label:(0,c.__)("Editing","kubio"),value:null==R?void 0:R.name,onChange:e=>{T(C.find((t=>t.name===e))),g("")},options:m}),(0,_.jsx)(b,{label:(0,c.__)("State","kubio"),activeState:A,setActiveState:e=>{g("normal"===e?"":e)},selectedElement:R,availableStates:Y})]}),(0,_.jsx)(O,{...e,styles:f,selectedStyledElement:R,dataHelper:N,showContent:!D})]})]})})},R=t=>((0,d.useSelect)((t=>!!t(e.STORE_KEY)&&t(e.STORE_KEY).isGutentagDebug()),[]),(0,_.jsx)(s.AdvancedInspectorControls,{clientId:t.clientId,children:(0,_.jsx)(g,{...t})})),T=(0,i.createHigherOrderComponent)((e=>o=>{const n=(0,l.getBlockAncestor)(null==o?void 0:o.name),{ancestor:r}=(0,l.useAncestorContext)();let a={};n&&r===n&&(a={ancestor:r}),n&&(a.inheritedAncestor=n);const i={defaultOptions:a},d=(0,l.useDataHelperDefaultOptionsContext)(i);return(0,_.jsxs)(l.DataHelperDefaultOptionsContext.Provider,{value:d,children:[(0,_.jsx)(e,{...o}),o.isSelected&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(R,{...o}),(0,_.jsxs)(s.BlockInspectorTopControls,{children:[(0,_.jsx)(t.LinkedNotice,{...o}),(0,_.jsx)(t.AncestorNotice,{})]})]})]})}),"withInspectorControlsAdvancedPanel")})(),(window.kubio=window.kubio||{}).advancedPanel=n})();
