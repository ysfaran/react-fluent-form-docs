(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{157:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(9),i=(r(0),r(168)),o={id:"create-form",title:"createForm",sidebar_label:"createForm"},c={id:"api/create-form",title:"createForm",description:"`<ValuesType>() => (fields: Fields) => FormConfig`",source:"@site/docs/api/create-form.md",permalink:"/docs/api/create-form",editUrl:"https://github.com/ysfaran/react-fluent-form-docs/edit/master/docs/api/create-form.md",sidebar_label:"createForm",sidebar:"someSidebar",previous:{title:"addField",permalink:"/docs/api/add-field"},next:{title:"createFormArray",permalink:"/docs/api/create-form-array"}},l=[{value:"Description",id:"description",children:[]},{value:"Generic Types",id:"generic-types",children:[{value:"ValuesType",id:"valuestype",children:[]}]},{value:"Arguments",id:"arguments",children:[{value:"field",id:"field",children:[]}]},{value:"Example",id:"example",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<ValuesType>() => (fields: Fields) => FormConfig")),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"createForm")," is a curried function that can be used to create an instance of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"form-config"}),Object(i.b)("inlineCode",{parentName:"a"},"FormConfig")),"."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Why is it curried? ")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Currently TypeScript doesn't support a feature called ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Microsoft/TypeScript/pull/26349"}),Object(i.b)("inlineCode",{parentName:"a"},"partial type argument inference"))," which has some work arrounds, one of them is to use curried functions. This issue is well known and part of typescript roadmap. Once this feature is introduced the API will be changed accordingly."))),Object(i.b)("h2",{id:"generic-types"},"Generic Types"),Object(i.b)("h3",{id:"valuestype"},"ValuesType"),Object(i.b)("p",null,"Type of field values."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"arguments"},"Arguments"),Object(i.b)("h3",{id:"field"},"field"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Fields")),Object(i.b)("p",null,"Object of fields (see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"field"}),Object(i.b)("inlineCode",{parentName:"a"},"Field"))," for configuration details).",Object(i.b)("br",{parentName:"p"}),"\n","Needs to match with properties of ",Object(i.b)("inlineCode",{parentName:"p"},"ValuesType"),"."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"interface RegistrationForm {\n  username: string;\n  password: string;\n}\n\nconst formConfig = createForm<RegistrationForm>()({\n  username: field.text(),\n  password: field.password()\n});\n\n// values will be of type RegistrationForm\nconst { values } = useFluentForm(formConfig);\n")))}s.isMDXComponent=!0},168:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return r?a.a.createElement(m,c({ref:t},p,{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);