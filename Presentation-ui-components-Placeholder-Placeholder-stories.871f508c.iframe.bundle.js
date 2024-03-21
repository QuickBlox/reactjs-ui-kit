"use strict";(self.webpackChunkquickblox_react_ui_kit=self.webpackChunkquickblox_react_ui_kit||[]).push([[874],{"./src/Presentation/ui-components/Placeholder/Placeholder.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PlaceholderDefault:()=>PlaceholderDefault,PlaceholderError:()=>PlaceholderError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Placeholder_stories});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),icons=__webpack_require__("./src/Presentation/icons/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Placeholder_Placeholder(_ref){let{icon,text,onRetry,className}=_ref,renderText=(content,index)=>(0,jsx_runtime.jsx)("span",{className:"placeholder__text",children:content},index);return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("placeholder",className),children:[icon&&(0,jsx_runtime.jsx)("div",{className:"placeholder__icon",children:icon}),Array.isArray(text)?text.map(renderText):renderText(text),onRetry&&(0,jsx_runtime.jsxs)("div",{className:"placeholder__retry",children:[(0,jsx_runtime.jsx)(icons.Sv,{className:"placeholder__retry-icon",onClick:onRetry}),"Retry"]})]})}try{Placeholder_Placeholder.displayName="Placeholder",Placeholder_Placeholder.__docgenInfo={description:"",displayName:"Placeholder",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | string[]"}},onRetry:{defaultValue:null,description:"",name:"onRetry",required:!1,type:{name:"VoidFunction"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Presentation/ui-components/Placeholder/Placeholder.tsx#Placeholder"]={docgenInfo:Placeholder_Placeholder.__docgenInfo,name:"Placeholder",path:"src/Presentation/ui-components/Placeholder/Placeholder.tsx#Placeholder"})}catch(__react_docgen_typescript_loader_error){}let Placeholder_stories={title:"@quickblox-react-ui-kit/Presentation/ui-components/Placeholder",component:Placeholder_Placeholder,tags:["autodocs"],parameters:{layout:"centered"},args:{text:["Text for placeholder"],className:"",onRetry:void 0,icon:void 0},argTypes:{icon:{options:["Public","Message","Members","Muted","Banned","Search","Error"],control:"select",mapping:{Public:(0,jsx_runtime.jsx)(icons.UZ,{}),Message:(0,jsx_runtime.jsx)(icons.OR,{}),Members:(0,jsx_runtime.jsx)(icons.Av,{}),Muted:(0,jsx_runtime.jsx)(icons.vg,{}),Banned:(0,jsx_runtime.jsx)(icons.GT,{}),Search:(0,jsx_runtime.jsx)(icons.K1,{}),Error:(0,jsx_runtime.jsx)(icons.iZ,{})},table:{type:{summary:"svg"}},description:"Format plug svg"},onRetry:{table:{type:{summary:"function"}},description:"Action on re-try"},text:{defaultValue:{summary:[""]},table:{type:{summary:"array"}},description:"Placeholder text"},className:{table:{type:{summary:"string"}},description:"Additional classes"}}},PlaceholderDefault={args:{icon:(0,jsx_runtime.jsx)(icons.UZ,{})}},PlaceholderError={args:{icon:(0,jsx_runtime.jsx)(icons.iZ,{}),onRetry:()=>void 0}};PlaceholderDefault.parameters={...PlaceholderDefault.parameters,docs:{...PlaceholderDefault.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: <PublicChannelSvg />\n  }\n}",...PlaceholderDefault.parameters?.docs?.source}}},PlaceholderError.parameters={...PlaceholderError.parameters,docs:{...PlaceholderError.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: <ErrorSvg />,\n    onRetry: () => undefined\n  }\n}",...PlaceholderError.parameters?.docs?.source}}};let __namedExportsOrder=["PlaceholderDefault","PlaceholderError"]}}]);