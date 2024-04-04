(self.webpackChunkquickblox_react_ui_kit=self.webpackChunkquickblox_react_ui_kit||[]).push([[231],{"./src/Presentation/ui-components/SettingsItem/SettingsItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SettingsItemDefault:()=>SettingsItemDefault,SettingsItemMembers:()=>SettingsItemMembers,SettingsItemNotification:()=>SettingsItemNotification,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SettingsItem_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),icons=__webpack_require__("./src/Presentation/icons/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function SettingsItem_SettingsItem(_ref){let{icon,title,rightSection,children,className,onClick}=_ref,[isShow,setIsShow]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{onClick:onClick,className:classnames_default()("settings-item",className),children:[(0,jsx_runtime.jsxs)("div",{className:"settings-item__body",children:[(0,jsx_runtime.jsxs)("div",{className:"settings-item__left-section",children:[(0,jsx_runtime.jsx)("span",{className:"settings-item__icon",children:icon}),(0,jsx_runtime.jsx)("span",{className:"settings-item__title",children:title})]}),(0,jsx_runtime.jsxs)("div",{className:"settings-item__right-section",children:[rightSection,children&&(0,jsx_runtime.jsx)(icons.PB,{className:classnames_default()("settings-item__arrow",{"settings-item__arrow--opened":isShow}),onClick:()=>setIsShow(!isShow)})]})]}),children&&(0,jsx_runtime.jsx)("div",{className:classnames_default()("settings-item__children",{"settings-item__children--opened":isShow}),children:children})]})}try{SettingsItem_SettingsItem.displayName="SettingsItem",SettingsItem_SettingsItem.__docgenInfo={description:"",displayName:"SettingsItem",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},rightSection:{defaultValue:null,description:"",name:"rightSection",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"VoidFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Presentation/ui-components/SettingsItem/SettingsItem.tsx#SettingsItem"]={docgenInfo:SettingsItem_SettingsItem.__docgenInfo,name:"SettingsItem",path:"src/Presentation/ui-components/SettingsItem/SettingsItem.tsx#SettingsItem"})}catch(__react_docgen_typescript_loader_error){}var Badge=__webpack_require__("./src/Presentation/ui-components/Badge/Badge.tsx"),Avatar=__webpack_require__("./src/Presentation/ui-components/Avatar/Avatar.tsx");let SettingsItem_stories={title:"@quickblox-react-ui-kit/Presentation/ui-components/SettingsItem",component:SettingsItem_SettingsItem,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{title:{table:{defaultValue:{summary:""},type:{summary:"string"}},description:"Name Setting item "},className:{table:{defaultValue:{summary:""},type:{summary:"string"}},description:"Additional classes"},icon:{control:!1,table:{defaultValue:{summary:"svg | ReactElement"},type:{summary:"svg | ReactElement"}},description:"Format plug svg or React element "},rightSection:{control:!1,table:{defaultValue:{summary:"ReactElement | ReactElement[]"},type:{summary:"ReactElement | ReactElement[]"}},description:"Elements for the right section"},onClick:{control:!1,table:{defaultValue:{summary:"VoidFunction"},type:{summary:"VoidFunction"}},description:"function onClick for icon"},children:{control:!1,table:{defaultValue:{summary:"ReactElement | ReactElement[]"},type:{summary:"ReactElement | ReactElement[]"}},description:"Elements that will be contained in the additional section"}}},SettingsItemDefault={name:"SettingsItem Default",args:{title:"Search in dialog",icon:(0,jsx_runtime.jsx)(icons.K1,{style:{fill:"#3978FC"}})}},SettingsItemNotification={name:"SettingsItem Notification",args:{title:"Notification",icon:(0,jsx_runtime.jsx)(icons.Dn,{style:{fill:"#3978FC"}}),rightSection:(0,jsx_runtime.jsx)(icons.sZ,{style:{cursor:"pointer"}})}},SettingsItemMembers={name:"SettingsItem Members",args:{title:"Notification",icon:(0,jsx_runtime.jsx)(icons.Av,{style:{fill:"#3978FC"}}),rightSection:(0,jsx_runtime.jsx)(Badge.Z,{count:10,limit:99,mute:!0}),children:(0,jsx_runtime.jsxs)("ul",{style:{listStyle:"none",overflow:"hidden",margin:"0",padding:"0"},children:[(0,jsx_runtime.jsxs)("li",{style:{display:"flex",alignItems:"center",padding:"8px 16px",gap:"16px"},children:[(0,jsx_runtime.jsx)(Avatar.Z,{size:"sm"})," Name"]}),(0,jsx_runtime.jsxs)("li",{style:{display:"flex",alignItems:"center",padding:"8px 16px",gap:"16px"},children:[(0,jsx_runtime.jsx)(Avatar.Z,{size:"sm"})," Name"]}),(0,jsx_runtime.jsxs)("li",{style:{display:"flex",alignItems:"center",padding:"8px 16px",gap:"16px"},children:[(0,jsx_runtime.jsx)(Avatar.Z,{size:"sm"})," Name"]}),(0,jsx_runtime.jsxs)("li",{style:{display:"flex",alignItems:"center",padding:"8px 16px",gap:"16px"},children:[(0,jsx_runtime.jsx)(Avatar.Z,{size:"sm"})," Name"]})]})}};SettingsItemDefault.parameters={...SettingsItemDefault.parameters,docs:{...SettingsItemDefault.parameters?.docs,source:{originalSource:"{\n  name: 'SettingsItem Default',\n  args: {\n    title: 'Search in dialog',\n    icon: <SearchSvg style={{\n      fill: '#3978FC'\n    }} />\n  }\n}",...SettingsItemDefault.parameters?.docs?.source}}},SettingsItemNotification.parameters={...SettingsItemNotification.parameters,docs:{...SettingsItemNotification.parameters?.docs,source:{originalSource:"{\n  name: 'SettingsItem Notification',\n  args: {\n    title: 'Notification',\n    icon: <NotificationsSvg style={{\n      fill: '#3978FC'\n    }} />,\n    rightSection: <CloseSvg style={{\n      cursor: 'pointer'\n    }} />\n  }\n}",...SettingsItemNotification.parameters?.docs?.source}}},SettingsItemMembers.parameters={...SettingsItemMembers.parameters,docs:{...SettingsItemMembers.parameters?.docs,source:{originalSource:"{\n  name: 'SettingsItem Members',\n  args: {\n    title: 'Notification',\n    icon: <GroupChatSvg style={{\n      fill: '#3978FC'\n    }} />,\n    rightSection: <Badge count={10} limit={99} mute />,\n    children: <ul style={{\n      listStyle: 'none',\n      overflow: 'hidden',\n      margin: '0',\n      padding: '0'\n    }}>\n        <li style={{\n        display: 'flex',\n        alignItems: 'center',\n        padding: '8px 16px',\n        gap: '16px'\n      }}>\n          <Avatar size=\"sm\" /> Name\n        </li>\n        <li style={{\n        display: 'flex',\n        alignItems: 'center',\n        padding: '8px 16px',\n        gap: '16px'\n      }}>\n          <Avatar size=\"sm\" /> Name\n        </li>\n        <li style={{\n        display: 'flex',\n        alignItems: 'center',\n        padding: '8px 16px',\n        gap: '16px'\n      }}>\n          <Avatar size=\"sm\" /> Name\n        </li>\n        <li style={{\n        display: 'flex',\n        alignItems: 'center',\n        padding: '8px 16px',\n        gap: '16px'\n      }}>\n          <Avatar size=\"sm\" /> Name\n        </li>\n      </ul>\n  }\n}",...SettingsItemMembers.parameters?.docs?.source}}};let __namedExportsOrder=["SettingsItemDefault","SettingsItemNotification","SettingsItemMembers"]},"./src/Presentation/ui-components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_Avatar});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),icons=__webpack_require__("./src/Presentation/icons/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Avatar_Avatar(_ref){let{icon=(0,jsx_runtime.jsx)(icons.vw,{}),size="md",className,src}=_ref;return src?(0,jsx_runtime.jsx)("div",{className:classnames_default()("avatar","avatar--".concat(size),className),children:(0,jsx_runtime.jsx)("img",{src:src,className:"avatar__image",alt:"Avatar"})}):(0,jsx_runtime.jsx)("div",{className:classnames_default()("avatar","avatar--".concat(size),className),children:icon})}try{Avatar_Avatar.displayName="Avatar",Avatar_Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},icon:{defaultValue:{value:"<UserSvg />"},description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Presentation/ui-components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar_Avatar.__docgenInfo,name:"Avatar",path:"src/Presentation/ui-components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/Presentation/ui-components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Badge_Badge});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Badge_Badge(_ref){let{count,limit,mute=!1,classNames}=_ref;return(0,jsx_runtime.jsx)("div",{className:classnames_default()("badge",{"badge--mute":mute},classNames),children:limit&&count>limit?"".concat(limit,"+"):count})}try{Badge_Badge.displayName="Badge",Badge_Badge.__docgenInfo={description:"",displayName:"Badge",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}},mute:{defaultValue:{value:"false"},description:"",name:"mute",required:!1,type:{name:"boolean"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Presentation/ui-components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge_Badge.__docgenInfo,name:"Badge",path:"src/Presentation/ui-components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return classNames}).apply(exports,[]))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=Presentation-ui-components-SettingsItem-SettingsItem-stories.429a72d5.iframe.bundle.js.map