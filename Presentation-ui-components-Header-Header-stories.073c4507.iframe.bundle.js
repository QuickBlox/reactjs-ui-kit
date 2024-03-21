"use strict";(self.webpackChunkquickblox_react_ui_kit=self.webpackChunkquickblox_react_ui_kit||[]).push([[752],{"./node_modules/@storybook/addon-viewport/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>INITIAL_VIEWPORTS});var INITIAL_VIEWPORTS={iphone5:{name:"iPhone 5",styles:{height:"568px",width:"320px"},type:"mobile"},iphone6:{name:"iPhone 6",styles:{height:"667px",width:"375px"},type:"mobile"},iphone6p:{name:"iPhone 6 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphone8p:{name:"iPhone 8 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphonex:{name:"iPhone X",styles:{height:"812px",width:"375px"},type:"mobile"},iphonexr:{name:"iPhone XR",styles:{height:"896px",width:"414px"},type:"mobile"},iphonexsmax:{name:"iPhone XS Max",styles:{height:"896px",width:"414px"},type:"mobile"},iphonese2:{name:"iPhone SE (2nd generation)",styles:{height:"667px",width:"375px"},type:"mobile"},iphone12mini:{name:"iPhone 12 mini",styles:{height:"812px",width:"375px"},type:"mobile"},iphone12:{name:"iPhone 12",styles:{height:"844px",width:"390px"},type:"mobile"},iphone12promax:{name:"iPhone 12 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphoneSE3:{name:"iPhone SE 3rd generation",styles:{height:"667px",width:"375px"},type:"mobile"},iphone13:{name:"iPhone 13",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13pro:{name:"iPhone 13 Pro",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13promax:{name:"iPhone 13 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphone14:{name:"iPhone 14",styles:{height:"844px",width:"390px"},type:"mobile"},iphone14pro:{name:"iPhone 14 Pro",styles:{height:"852px",width:"393px"},type:"mobile"},iphone14promax:{name:"iPhone 14 Pro Max",styles:{height:"932px",width:"430px"},type:"mobile"},ipad:{name:"iPad",styles:{height:"1024px",width:"768px"},type:"tablet"},ipad10p:{name:"iPad Pro 10.5-in",styles:{height:"1112px",width:"834px"},type:"tablet"},ipad11p:{name:"iPad Pro 11-in",styles:{height:"1194px",width:"834px"},type:"tablet"},ipad12p:{name:"iPad Pro 12.9-in",styles:{height:"1366px",width:"1024px"},type:"tablet"},galaxys5:{name:"Galaxy S5",styles:{height:"640px",width:"360px"},type:"mobile"},galaxys9:{name:"Galaxy S9",styles:{height:"740px",width:"360px"},type:"mobile"},nexus5x:{name:"Nexus 5X",styles:{height:"660px",width:"412px"},type:"mobile"},nexus6p:{name:"Nexus 6P",styles:{height:"732px",width:"412px"},type:"mobile"},pixel:{name:"Pixel",styles:{height:"960px",width:"540px"},type:"mobile"},pixelxl:{name:"Pixel XL",styles:{height:"1280px",width:"720px"},type:"mobile"}}},"./src/Presentation/ui-components/Header/Header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HeaderDefault:()=>HeaderDefault,HeaderWithAvatar:()=>HeaderWithAvatar,HeaderWithAvatarAndBack:()=>HeaderWithAvatarAndBack,HeaderWithOneChildrenIcon:()=>HeaderWithOneChildrenIcon,HeaderWithTwoChildrenIcon:()=>HeaderWithTwoChildrenIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-viewport/dist/index.mjs"),_Header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Presentation/ui-components/Header/Header.tsx"),_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Presentation/icons/index.ts"),_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Presentation/ui-components/Avatar/Avatar.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"@quickblox-react-ui-kit/Presentation/ui-components/Header",component:_Header__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["autodocs"],parameters:{viewport:{viewports:_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.p}},argTypes:{title:{control:{type:"text"},description:"Dialog title"},avatar:{description:"Avatar or Icon",type:"function",options:["None","User","Group","Public","Photo"],control:"select",mapping:{None:void 0,User:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.vw,{})}),Group:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.Av,{})}),Public:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.UZ,{})}),Photo:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__.Z,{src:"https://quickblox.com/wp-content/themes/QuickbloxTheme2021/img/chat-messaging.svg"})}},badge:{control:!1,description:"Badge or dialog status"},children:{type:"function",options:["None","SingleIcon","MultiplyIcons","Close"],control:"select",mapping:{None:void 0,SingleIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.VY,{}),MultiplyIcons:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.K1,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.Xg,{})],Close:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.sZ,{})},table:{type:{summary:"svg"}},description:"Additional content: list of icons"},onGoBack:{action:"clicked back button"},classNames:{table:{type:{summary:"string"}},description:"Additional classes"}}},HeaderDefault={args:{title:"Default Dialog desktop"},parameters:{layout:"centered"}},HeaderWithAvatar={args:{title:"Default Dialog desktop",avatar:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.vw,{})})},parameters:{layout:"centered"}},HeaderWithAvatarAndBack={args:{title:"Default Dialog mobile",avatar:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.vw,{})}),onGoBack:()=>{window.alert("onGoBack")}},parameters:{viewport:{defaultViewport:"iphonese2"}}},HeaderWithOneChildrenIcon={args:{title:"Default Dialog desktop",avatar:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.vw,{})}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.sZ,{}),onGoBack:void 0},parameters:{layout:"centered"}},HeaderWithTwoChildrenIcon={args:{title:"Default Dialog desktop",avatar:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.vw,{})}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.K1,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.Xg,{})],onGoBack:void 0},parameters:{layout:"centered"}};HeaderDefault.parameters={...HeaderDefault.parameters,docs:{...HeaderDefault.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Default Dialog desktop'\n  },\n  parameters: {\n    layout: 'centered'\n  }\n}",...HeaderDefault.parameters?.docs?.source}}},HeaderWithAvatar.parameters={...HeaderWithAvatar.parameters,docs:{...HeaderWithAvatar.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Default Dialog desktop',\n    avatar: <Avatar icon={<UserSvg />} />\n  },\n  parameters: {\n    layout: 'centered'\n  }\n}",...HeaderWithAvatar.parameters?.docs?.source}}},HeaderWithAvatarAndBack.parameters={...HeaderWithAvatarAndBack.parameters,docs:{...HeaderWithAvatarAndBack.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Default Dialog mobile',\n    avatar: <Avatar icon={<UserSvg />} />,\n    onGoBack: () => {\n      window.alert('onGoBack');\n    }\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: 'iphonese2'\n    }\n  }\n}",...HeaderWithAvatarAndBack.parameters?.docs?.source}}},HeaderWithOneChildrenIcon.parameters={...HeaderWithOneChildrenIcon.parameters,docs:{...HeaderWithOneChildrenIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Default Dialog desktop',\n    avatar: <Avatar icon={<UserSvg />} />,\n    children: <CloseSvg />,\n    onGoBack: undefined\n  },\n  parameters: {\n    layout: 'centered'\n  }\n}",...HeaderWithOneChildrenIcon.parameters?.docs?.source}}},HeaderWithTwoChildrenIcon.parameters={...HeaderWithTwoChildrenIcon.parameters,docs:{...HeaderWithTwoChildrenIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Default Dialog desktop',\n    avatar: <Avatar icon={<UserSvg />} />,\n    children: [<SearchSvg />, <NewChatSvg />],\n    onGoBack: undefined\n  },\n  parameters: {\n    layout: 'centered'\n  }\n}",...HeaderWithTwoChildrenIcon.parameters?.docs?.source}}};let __namedExportsOrder=["HeaderDefault","HeaderWithAvatar","HeaderWithAvatarAndBack","HeaderWithOneChildrenIcon","HeaderWithTwoChildrenIcon"]},"./src/Presentation/ui-components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_Avatar});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),icons=__webpack_require__("./src/Presentation/icons/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Avatar_Avatar(_ref){let{icon=(0,jsx_runtime.jsx)(icons.vw,{}),size="md",className,src}=_ref;return src?(0,jsx_runtime.jsx)("div",{className:classnames_default()("avatar","avatar--".concat(size),className),children:(0,jsx_runtime.jsx)("img",{src:src,className:"avatar__image",alt:"Avatar"})}):(0,jsx_runtime.jsx)("div",{className:classnames_default()("avatar","avatar--".concat(size),className),children:icon})}try{Avatar_Avatar.displayName="Avatar",Avatar_Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},icon:{defaultValue:{value:"<UserSvg />"},description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Presentation/ui-components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar_Avatar.__docgenInfo,name:"Avatar",path:"src/Presentation/ui-components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/Presentation/ui-components/Header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ui_components_Header_Header});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),icons=__webpack_require__("./src/Presentation/icons/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Header_Header=_ref=>{let{title,avatar,badge,children,onGoBack,className}=_ref;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("dialog-header",className),children:[onGoBack&&(0,jsx_runtime.jsx)(icons.Hg,{className:"dialog-header__icon dialog-header__back",onClick:onGoBack}),(0,jsx_runtime.jsxs)("div",{className:"dialog-header__body",children:[(0,jsx_runtime.jsxs)("div",{className:"dialog-header__body-left",children:[avatar,(0,jsx_runtime.jsx)("span",{className:"dialog-header__title",children:title}),badge]}),children&&(0,jsx_runtime.jsx)("div",{className:"dialog-header__body-right",children:react.Children.map(children,child=>(0,jsx_runtime.jsx)("span",{className:"dialog-header__icon",children:child}))})]})]})},ui_components_Header_Header=Header_Header;try{Header_Header.displayName="Header",Header_Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},avatar:{defaultValue:null,description:"",name:"avatar",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onGoBack:{defaultValue:null,description:"",name:"onGoBack",required:!1,type:{name:"FunctionTypeVoidToVoid"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Presentation/ui-components/Header/Header.tsx#Header"]={docgenInfo:Header_Header.__docgenInfo,name:"Header",path:"src/Presentation/ui-components/Header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}}}]);