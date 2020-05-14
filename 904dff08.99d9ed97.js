(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(9),r=(n(0),n(168)),l={id:"form-config",title:"FormConfig",sidebar_label:"FormConfig"},o={id:"api/form-config",title:"FormConfig",description:"`class`",source:"@site/docs/api/form-config.md",permalink:"/react-fluent-form-docs/docs/api/form-config",editUrl:"https://github.com/ysfaran/react-fluent-form-docs/edit/master/docs/api/form-config.md",sidebar_label:"FormConfig",sidebar:"someSidebar",previous:{title:"FormArrayConfig",permalink:"/react-fluent-form-docs/docs/api/form-array-config"},next:{title:"useFluentForm",permalink:"/react-fluent-form-docs/docs/api/use-fluent-form"}},c=[{value:"Description",id:"description",children:[]},{value:"Generic types",id:"generic-types",children:[{value:"ValuesType",id:"valuestype",children:[]}]},{value:"Members",id:"members",children:[{value:"validateAfterTouchOnChange",id:"validateaftertouchonchange",children:[]},{value:"validateOnChange",id:"validateonchange",children:[]},{value:"validateOnSubmitOnly",id:"validateonsubmitonly",children:[]},{value:"validateOnContextChange",id:"validateoncontextchange",children:[]},{value:"withInitialValues",id:"withinitialvalues",children:[]},{value:"withContext",id:"withcontext",children:[]},{value:"withValidation",id:"withvalidation",children:[]},{value:"withCustomValidator",id:"withcustomvalidator",children:[]}]}],b={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"class")),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"Stores configuration of form like validation and fields. It's the only argument that needs to be passed to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"use-fluent-form"}),Object(r.b)("inlineCode",{parentName:"a"},"useFluentForm")),".",Object(r.b)("br",{parentName:"p"}),"\n","It's recommended to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"create-form"}),Object(r.b)("inlineCode",{parentName:"a"},"createForm"))," to create an instance of ",Object(r.b)("inlineCode",{parentName:"p"},"FormConfig"),"."),Object(r.b)("h2",{id:"generic-types"},"Generic types"),Object(r.b)("h3",{id:"valuestype"},"ValuesType"),Object(r.b)("p",null,"Type of field values."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"members"},"Members"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Every member function returns ",Object(r.b)("inlineCode",{parentName:"p"},"this")," to enable fluent API."))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"field#validateaftertouchonchange"}),"Validation triggers defined on field level")," are always considered first. ",Object(r.b)("inlineCode",{parentName:"p"},"FormConfig")," level validation triggers will only be used when no trigger is defiend on ",Object(r.b)("inlineCode",{parentName:"p"},"Field")," level."))),Object(r.b)("h3",{id:"validateaftertouchonchange"},"validateAfterTouchOnChange"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"() => FormConfig")),Object(r.b)("p",null,"Configures validation for all fields to trigger once they touched, then always if they have changed and on submit.",Object(r.b)("br",{parentName:"p"}),"\n","This is the ",Object(r.b)("inlineCode",{parentName:"p"},"default")," validation trigger."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"validateonchange"},"validateOnChange"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"() => FormConfig")),Object(r.b)("p",null,"Configures validation for all fields to trigger everytime they have changed and on submit."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"validateonsubmitonly"},"validateOnSubmitOnly"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"() => FormConfig")),Object(r.b)("p",null,"Configures validation for all fields to trigger only on submit."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"validateoncontextchange"},"validateOnContextChange"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"(validate: boolean = true) => FormConfig")),Object(r.b)("p",null,"Configures validation for all fields to be triggered when context has changed. The default value is ",Object(r.b)("inlineCode",{parentName:"p"},"false"),".",Object(r.b)("br",{parentName:"p"}),"\n","Context changes are triggerd by ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"use-fluent-form#setcontext"}),Object(r.b)("inlineCode",{parentName:"a"},"setContext"))," function return by ",Object(r.b)("inlineCode",{parentName:"p"},"useFluentForm"),"."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"withinitialvalues"},"withInitialValues"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"(values: Partial<ValuesType>) => FormConfig")),Object(r.b)("p",null,"While initial values can be set on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"field"}),Object(r.b)("inlineCode",{parentName:"a"},"Field"))," level (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},'field.text("initial")'),") it's also possible to do so on ",Object(r.b)("inlineCode",{parentName:"p"},"FormConfig")," level for all fields."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'const formConfig = createForm<UserForm>()({\n  username: field.text("initial"),\n  email: field.email()\n}).withInitialValues({ email: "email@example.com" });\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"withcontext"},"withContext"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"(context: object) => FormConfig")),Object(r.b)("p",null,"Sets the initial context value. It needs to be an object of any type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const formConfig = createForm<UserForm>()({\n  username: field.text(),\n  email: field.email()\n}).withContext({\n  context: {\n    // values are wrapped here\n    shouldValidateUsername: true\n  }\n});\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"withvalidation"},"withValidation"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"(validations: Validations) => FormConfig")),Object(r.b)("p",null,"Adds functionality to validate the form. A ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema")," or a custom ",Object(r.b)("inlineCode",{parentName:"p"},"validate function")," can be provided for each field. Behind the scenes ",Object(r.b)("inlineCode",{parentName:"p"},"DefaultValidator")," is being used."),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"validate function")," receives following values as paramater:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"value"),": current value of field"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"values"),": current values of all fields in the form"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"context"),": current context value")),Object(r.b)("p",null,"Using a ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema")," will always result in an ",Object(r.b)("inlineCode",{parentName:"p"},"string[]")," error type.\nIn contrast to that ",Object(r.b)("inlineCode",{parentName:"p"},"validate function")," allow any kind of error type to be returned. Returning nothing (",Object(r.b)("inlineCode",{parentName:"p"},"undefined"),") will indicate that there is no validation error.",Object(r.b)("br",{parentName:"p"}),"\n","On top of that also a ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema")," can be returned by a ",Object(r.b)("inlineCode",{parentName:"p"},"validate functions")," which enables conditional ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema")," validation. In this case the error type will also be from type ",Object(r.b)("inlineCode",{parentName:"p"},"string[]"),". To say it in other words: returning a ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema")," in a ",Object(r.b)("inlineCode",{parentName:"p"},"validate function")," will result in an evaulation of the returned ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema"),"."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When using ",Object(r.b)("inlineCode",{parentName:"p"},"yup validation")," other form fields need to be accessed with a leading ",Object(r.b)("inlineCode",{parentName:"p"},"$")," (here ",Object(r.b)("inlineCode",{parentName:"p"},"$lastName"),") which usually means the value is coming from the context. In fact other form values are passed as context to the ",Object(r.b)("inlineCode",{parentName:"p"},"yup schema")," for each field during validation execution.",Object(r.b)("br",{parentName:"p"}),"\n","If a context property is named equal to a field property, the ",Object(r.b)("strong",{parentName:"p"},"field property will be overriden")," in ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema"),"s context!"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'formConfig.withValidation({\n  username: yup.string().required(),\n  firstName: yup.string().when("$lastName", {\n    is: "",\n    otherwise: yup.string().required()\n  }),\n  lastName: yup.string(),\n  // the error type will be "string | string[]" for this validate function\n  password: (value, values, _context) => {\n    if (value.includes(values.username)) {\n      return "Password should not contain username";\n    } else {\n      return yup\n        .string()\n        .required()\n        .matches(/[a-zA-Z]/, "Password can only contain letters.");\n    }\n  }\n});\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"withcustomvalidator"},"withCustomValidator"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"(validator: Validator) => FormConfig")),Object(r.b)("p",null,"Allows to provide a custom ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"validator"}),Object(r.b)("inlineCode",{parentName:"a"},"Validator")),".",Object(r.b)("br",{parentName:"p"}),"\n","Providing such will remove ",Object(r.b)("inlineCode",{parentName:"p"},"DefaultValidator"),", thus removes all features mentioned in ",Object(r.b)("inlineCode",{parentName:"p"},"withValdation"),"."),Object(r.b)("p",null,"Following is an example of a simple validator that does truthy checks on fields:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import { Validator, ErrorsType } from "react-fluent-form";\n\nexport class RequiredValidator<ValuesType> extends Validator<\n  ValuesType,\n  ErrorsType<string>\n> {\n  constructor(requiredFields) {\n    super();\n    this.requiredFields = requiredFields;\n  }\n\n  public validateField<K extends keyof ValuesType>(\n    field: K,\n    values: ValuesType,\n    _context: object // not relevant for this example\n  ) {\n    if (this.requiredFields[field] && !values[field]) {\n      return "field is required";\n    }\n  }\n}\n')),Object(r.b)("p",null,"Usage:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const formConfig = createForm()({\n  username: field.text(),\n  email: field.email(),\n  phone: field.tel()\n}).withCustomValidator(new RequiredValidator({\n  username: true,\n  email: true\n});\n")),Object(r.b)("hr",null))}d.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),d=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=d(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,u=p["".concat(l,".").concat(m)]||p[m]||s[m]||r;return n?i.a.createElement(u,o({ref:t},b,{components:n})):i.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<r;b++)l[b]=n[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);