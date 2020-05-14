(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{163:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(9),i=(t(0),t(168)),l={id:"form-state-handling",title:"Form State Handling",sidebar_label:"Form State Handling"},o={id:"getting-started/form-state-handling",title:"Form State Handling",description:"Following is a simple example for a registration form containing a `username`, `gender` and `password` field.",source:"@site/docs/getting-started/form-state-handling.md",permalink:"/docs/getting-started/form-state-handling",editUrl:"https://github.com/ysfaran/react-fluent-form-docs/edit/master/docs/getting-started/form-state-handling.md",sidebar_label:"Form State Handling",sidebar:"someSidebar",previous:{title:"Installation & Prerequisites",permalink:"/docs/getting-started/installation"},next:{title:"Validation",permalink:"/docs/getting-started/validation"}},c=[{value:"Creating the config",id:"creating-the-config",children:[]},{value:"Initializing the form",id:"initializing-the-form",children:[]},{value:"Rendering the form",id:"rendering-the-form",children:[]},{value:"Complete example",id:"complete-example",children:[]}],s={rightToc:c};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Following is a simple example for a registration form containing a ",Object(i.b)("inlineCode",{parentName:"p"},"username"),", ",Object(i.b)("inlineCode",{parentName:"p"},"gender")," and ",Object(i.b)("inlineCode",{parentName:"p"},"password")," field."),Object(i.b)("h2",{id:"creating-the-config"},"Creating the config"),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"createForm")," and ",Object(i.b)("inlineCode",{parentName:"p"},"field")," the basic form configuration can be described:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import { createForm, field } from "react-fluent-form";\n\nconst formConfig = createForm()({\n  username: field.text(),\n  // unselectable() allows to select nothing\n  gender: field.radio().name("gender").unselectable(),\n  password: field.password().validateOnSubmitOnly()\n});\n')),Object(i.b)("h2",{id:"initializing-the-form"},"Initializing the form"),Object(i.b)("p",null,"Initialize the form with previous ",Object(i.b)("inlineCode",{parentName:"p"},"formConfig")," using the ",Object(i.b)("inlineCode",{parentName:"p"},"useFluentForm")," hook:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import { useFluentForm } from "react-fluent-form";\n\nconst { values, fields, handleSubmit /* and more.. */ } = useFluentForm(\n  formConfig\n);\n')),Object(i.b)("p",null,"The objects ",Object(i.b)("inlineCode",{parentName:"p"},"values")," and ",Object(i.b)("inlineCode",{parentName:"p"},"fields")," (and also other objects returned by ",Object(i.b)("inlineCode",{parentName:"p"},"useFluentForm"),") will contain properties for each field name"),Object(i.b)("p",null,"Example for ",Object(i.b)("inlineCode",{parentName:"p"},"values"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n  username: "user",\n  gender: "",\n  password: "sg$!sga86"\n}\n')),Object(i.b)("p",null,"Type of ",Object(i.b)("inlineCode",{parentName:"p"},"fields.username")," would be:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"{\n  value: string;\n  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;\n  onBlur: () => void;\n}\n")),Object(i.b)("h2",{id:"rendering-the-form"},"Rendering the form"),Object(i.b)("p",null,"The return value of ",Object(i.b)("inlineCode",{parentName:"p"},"useFluentForm")," will provide everything required for form state handling (",Object(i.b)("inlineCode",{parentName:"p"},"fields")," object) and for form submission (",Object(i.b)("inlineCode",{parentName:"p"},"handleSubmit")," function):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'function RegistrationForm() {\n  const { values, fields, handleSubmit } = useFluentForm(formConfig);\n\n  const handleSubmitSuccess = () => console.log(values);\n\n  return (\n    <form onSubmit={handleSubmit(handleSubmitSuccess)}>\n      <label>\n        Username*:\n        <input {...fields.username} />\n      </label>\n      <div>\n        Gender:\n        <label>\n          male\n          <input {...fields.gender("male")} />\n        </label>\n        <label>\n          female\n          <input {...fields.gender("female")} />\n        </label>\n      </div>\n      <label>\n        Password*:\n        <input {...fields.password} />\n      </label>\n      <button type="submit">Submit</button>\n    </form>\n  );\n}\n')),Object(i.b)("h2",{id:"complete-example"},"Complete example"),Object(i.b)("p",null,"Following code snippet contains code from previous section:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import { createForm, field, useFluentForm } from "react-fluent-form";\n\nconst formConfig = createForm()({\n  username: field.text(),\n  gender: field.radio().name("gender").unselectable(),\n  password: field.password().validateOnSubmitOnly()\n});\n\nfunction RegistrationForm() {\n  const { values, fields, handleSubmit } = useFluentForm(formConfig);\n\n  const handleSubmitSuccess = () => console.log(values);\n\n  return (\n    <form onSubmit={handleSubmit(handleSubmitSuccess)}>\n      <label>\n        Username*:\n        <input {...fields.username} />\n      </label>\n      <div>\n        Gender:\n        <label>\n          male\n          <input {...fields.gender("male")} />\n        </label>\n        <label>\n          female\n          <input {...fields.gender("female")} />\n        </label>\n      </div>\n      <label>\n        Password*:\n        <input {...fields.password} />\n      </label>\n      <button type="submit">Submit</button>\n    </form>\n  );\n}\n')))}d.isMDXComponent=!0},168:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},m=function(e){var n=d(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(t),b=r,p=m["".concat(l,".").concat(b)]||m[b]||u[b]||i;return t?a.a.createElement(p,o({ref:n},s,{components:t})):a.a.createElement(p,o({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);