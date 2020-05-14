(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{156:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(2),i=t(9),r=(t(0),t(168)),o={id:"validation",title:"Validation",sidebar_label:"Validation"},l={id:"getting-started/validation",title:"Validation",description:"`react-fluent-form` comes with a build in validation approach that also enables customization.",source:"@site/docs/getting-started/validation.md",permalink:"/docs/getting-started/validation",editUrl:"https://github.com/ysfaran/react-fluent-form-docs/edit/master/docs/getting-started/validation.md",sidebar_label:"Validation",sidebar:"someSidebar",previous:{title:"Form State Handling",permalink:"/docs/getting-started/form-state-handling"},next:{title:"Customization",permalink:"/docs/getting-started/customization"}},c=[{value:"Basic Usage",id:"basic-usage",children:[{value:"Adding validation to config",id:"adding-validation-to-config",children:[]},{value:"Validation properties",id:"validation-properties",children:[]},{value:"Displaying errors",id:"displaying-errors",children:[]}]},{value:"Validation context",id:"validation-context",children:[{value:"Initial context",id:"initial-context",children:[]},{value:"Setting context dynamically",id:"setting-context-dynamically",children:[]},{value:"Triggering validation",id:"triggering-validation",children:[]},{value:"Accessing context",id:"accessing-context",children:[]}]},{value:"Conditional validation",id:"conditional-validation",children:[]}],s={rightToc:c};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"react-fluent-form")," comes with a build in validation approach that also enables customization."),Object(r.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(r.b)("p",null,"In this example validation will be added for a ",Object(r.b)("inlineCode",{parentName:"p"},"username")," and ",Object(r.b)("inlineCode",{parentName:"p"},"password")," field."),Object(r.b)("h3",{id:"adding-validation-to-config"},"Adding validation to config"),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"withValidation")," either a ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema")," or a ",Object(r.b)("inlineCode",{parentName:"p"},"validate function")," can be provided for each field. Providing a ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema")," will result in a ",Object(r.b)("inlineCode",{parentName:"p"},"string[]")," error type. In contrast to that you can return any type of data when using ",Object(r.b)("inlineCode",{parentName:"p"},"validate function"),"'s:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'formConfig.withValidation({\n  username: yup.string().required(),\n  password: value => {\n    if (value.length < 8) {\n      // return *any* custom error here (e.g. also complex objects or numbers)\n      return "Password is too short";\n    }\n  }\n});\n')),Object(r.b)("h3",{id:"validation-properties"},"Validation properties"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"touched"),", ",Object(r.b)("inlineCode",{parentName:"p"},"validity")," and ",Object(r.b)("inlineCode",{parentName:"p"},"errors")," are properties which are mostly relevant for validation. They are similarirly structured to ",Object(r.b)("inlineCode",{parentName:"p"},"values")," and ",Object(r.b)("inlineCode",{parentName:"p"},"fields"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const { touched, validity, errors } = useFluentForm(formConfig);\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"touched")),": stores information about touched state of each field. A field is ",Object(r.b)("em",{parentName:"li"},"touched")," once it had focus and then lost it, so from a technical perspective if the ",Object(r.b)("inlineCode",{parentName:"li"},"onBlur")," event of an input field was triggert.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"example: ",Object(r.b)("inlineCode",{parentName:"li"},"{username: true, password: undefined}")),Object(r.b)("li",{parentName:"ul"},"possible values: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),", ",Object(r.b)("inlineCode",{parentName:"li"},"false")," or ",Object(r.b)("inlineCode",{parentName:"li"},"undefined")," (",Object(r.b)("inlineCode",{parentName:"li"},"undefined")," means it was not touched yet)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"validity")),": stores information about validation state of each field.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"example: ",Object(r.b)("inlineCode",{parentName:"li"},"{username: false, password: undefined}")," (",Object(r.b)("inlineCode",{parentName:"li"},"undefined")," means it was not validated yet)."),Object(r.b)("li",{parentName:"ul"},"possible values: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),", ",Object(r.b)("inlineCode",{parentName:"li"},"false")," or ",Object(r.b)("inlineCode",{parentName:"li"},"undefined")," (",Object(r.b)("inlineCode",{parentName:"li"},"undefined")," means it was not validated yet)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"errors")),": contains the current errors of each field. In case of an error the evaluation of ",Object(r.b)("inlineCode",{parentName:"li"},"yup")," schemes will result in a ",Object(r.b)("inlineCode",{parentName:"li"},"string[]")," type.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"example: ",Object(r.b)("inlineCode",{parentName:"li"},'{username: ["username is a required field"], password: undefined }')),Object(r.b)("li",{parentName:"ul"},"possible values: ",Object(r.b)("inlineCode",{parentName:"li"},"any custom type")," or undefined (",Object(r.b)("inlineCode",{parentName:"li"},"undefined")," means the field was not validated yet or that it's valid).")))),Object(r.b)("h3",{id:"displaying-errors"},"Displaying errors"),Object(r.b)("p",null,"In order to properly display error messages (and maybe also success messages) properties ",Object(r.b)("inlineCode",{parentName:"p"},"touched"),", ",Object(r.b)("inlineCode",{parentName:"p"},"validity")," and ",Object(r.b)("inlineCode",{parentName:"p"},"errors")," can be used. To handle validation failures on submission a callback can be provided as second argument of ",Object(r.b)("inlineCode",{parentName:"p"},"handleSubmit"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{20-22,27-28}","{20-22,27-28}":!0}),'function RegistrationForm() {\n  const {\n    values,\n    touched,\n    validity,\n    errors,\n    fields,\n    handleSubmit\n  } = useFluentForm(formConfig);\n\n  const handleSubmitSuccess = () => console.log(values);\n\n  const handleSubmitFailure = () => console.log(errors);\n\n  return (\n    <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitFailure)}>\n      <label>\n        Username*:\n        <input {...fields.username} />\n        {touched.username && !validity.username && (\n          <div>{errors.username[0]}</div>\n        )}\n      </label>\n      <label>\n        Password*:\n        <input {...fields.password} />\n        {/* validity.password stays undefined until the submission (validateOnSubmitOnly) */}\n        {touched.password && validity.password === false && <div>{errors.password[0]}</div>}\n      </label>\n      <button type="submit">Submit</button>\n    </form>\n  );\n}\n')),Object(r.b)("p",null,"If ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../api/form-config#validateaftertouchonchange"}),"default validation triggers")," are used, it's enough to ",Object(r.b)("strong",{parentName:"p"},"only")," check  the ",Object(r.b)("inlineCode",{parentName:"p"},"errors")," object:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{10,15}","{10,15}":!0}),'function RegistrationForm() {\n\n  // ...\n\n  return (\n    <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitFailure)}>\n      <label>\n        Username*:\n        <input {...fields.username} />\n        {errors.username && <div>{errors.username[0]}</div>}\n      </label>\n      <label>\n        Password*:\n        <input {...fields.password} />\n        {errors.password && <div>{errors.password[0]}</div>}\n      </label>\n      <button type="submit">Submit</button>\n    </form>\n  );\n}\n')),Object(r.b)("h2",{id:"validation-context"},"Validation context"),Object(r.b)("p",null,"In some cases it's required to work with values outside of your form.\nThis is where ",Object(r.b)("inlineCode",{parentName:"p"},"validation context")," comes into place."),Object(r.b)("h3",{id:"initial-context"},"Initial context"),Object(r.b)("p",null,"Context always need to be an object:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"formConfig.withContext({\n  x: 1,\n  y: 2\n});\n")),Object(r.b)("h3",{id:"setting-context-dynamically"},"Setting context dynamically"),Object(r.b)("p",null,"If you want to update your context as soon as your context values have changed, you can take advandage of ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const { setContext } = useFluentForm(formConfing);\n\nuseEffect(() => {\n  setContext({ context: coordinates });\n}, [coordinates]);\n")),Object(r.b)("h3",{id:"triggering-validation"},"Triggering validation"),Object(r.b)("p",null,"You can trigger validation of all fields on context changes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"formConfig.validateOnContextChange();\n")),Object(r.b)("h3",{id:"accessing-context"},"Accessing context"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'formConfig.withValidation({\n  username: yup.string().when("$context.x", {\n    is: 0,\n    then: yup.string().required()\n  }),\n  password: (value, values, { context }) => {\n    if (context.x < context.y) return "error";\n  }\n});\n')),Object(r.b)("h2",{id:"conditional-validation"},"Conditional validation"),Object(r.b)("p",null,"Often it's necessary to adapt validations for a field based on the values of other fields in your form (and also the context). This can be done via ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema"),"'s or via ",Object(r.b)("inlineCode",{parentName:"p"},"validate function"),"'s.",Object(r.b)("br",{parentName:"p"}),"\n","It's very important to note that ",Object(r.b)("inlineCode",{parentName:"p"},"validate function"),"'s can also return ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema"),"'s conditionally. The returned ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema")," will not be treated as an error type, it will be evaluated, thus the error type will be ",Object(r.b)("inlineCode",{parentName:"p"},"string[]"),"."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When using ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema"),"'s other form fields need to be accessed with a leading ",Object(r.b)("inlineCode",{parentName:"p"},"$")," (here ",Object(r.b)("inlineCode",{parentName:"p"},"$lastName"),") which usually means the value is comming from the context. In fact other form values are passed as context to the ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema")," instances for each field during validation execution.",Object(r.b)("br",{parentName:"p"}),"\n","If a context property is named equal to a field property, the ",Object(r.b)("strong",{parentName:"p"},"field property will be overriden")," in ",Object(r.b)("inlineCode",{parentName:"p"},"yup.Schema"),"s context!"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'formConfig.withValidation({\n  username: yup.string().required(),\n  firstName: yup.string().when("$lastName", {\n    is: "",\n    otherwise: yup.string().required()\n  }),\n  lastName: yup.string(),\n  password: (value, values) => {\n    if (value.includes(values.username)) {\n      return "Password should not contain username";\n    } else {\n      // the error type will be string[] here\n      return yup\n        .string()\n        .required()\n        .matches(/[a-zA-Z]/, "Password can only contain letters.");\n    }\n  }\n});\n')))}d.isMDXComponent=!0},168:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),d=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},b=function(e){var n=d(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(t),u=a,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||r;return t?i.a.createElement(m,l({ref:n},s,{components:t})):i.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);