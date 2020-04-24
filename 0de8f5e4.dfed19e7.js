(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return s}));var a=t(1),i=t(9),l=(t(0),t(166)),r={id:"use-fluent-form",title:"useFluentForm",sidebar_label:"useFluentForm"},o={id:"api/use-fluent-form",title:"useFluentForm",description:"`<Config extends FormConfig>(config: Config) => UseFluentForm`",source:"@site/docs/api/use-fluent-form.md",permalink:"/react-fluent-form-docs/docs/api/use-fluent-form",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/use-fluent-form.md",sidebar_label:"useFluentForm",sidebar:"someSidebar",previous:{title:"FormConfig",permalink:"/react-fluent-form-docs/docs/api/form-config"},next:{title:"useFluentFormArray",permalink:"/react-fluent-form-docs/docs/api/use-fluent-form-array"}},b=[{value:"Description",id:"description",children:[]},{value:"Return type",id:"return-type",children:[{value:"values",id:"values",children:[]},{value:"touched",id:"touched",children:[]},{value:"validity",id:"validity",children:[]},{value:"errors",id:"errors",children:[]},{value:"context",id:"context",children:[]},{value:"submitting",id:"submitting",children:[]},{value:"fields",id:"fields",children:[]},{value:"setValues",id:"setvalues",children:[]},{value:"setInitialValues",id:"setinitialvalues",children:[]},{value:"setContext",id:"setcontext",children:[]},{value:"handleSubmit",id:"handlesubmit",children:[]},{value:"validateField",id:"validatefield",children:[]},{value:"validateAllFields",id:"validateallfields",children:[]},{value:"reset",id:"reset",children:[]}]}],c={rightToc:b};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<Config extends FormConfig>(config: Config) => UseFluentForm")),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"Core react hook of this library.\nExpects a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"form-config"}),Object(l.b)("inlineCode",{parentName:"a"},"FormConfig"))," as parameter:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type RegistrationForm = { username: string; password: string };\n\nconst formConfig = createForm<RegistrationForm>()({\n  username: field.text(),\n  password: field.password()\n});\n\nconst {\n  values,\n  touched,\n  validity,\n  errors,\n  context,\n  submitting,\n  fields,\n  setValues,\n  setInitialValues,\n  setContext,\n  handleSubmit,\n  validateField,\n  validateAllFields,\n  reset\n} = useFluentForm(formConfig);\n")),Object(l.b)("h2",{id:"return-type"},"Return type"),Object(l.b)("h3",{id:"values"},"values"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"ValuesType")),Object(l.b)("p",null,"Contains current values of form. Initial values are comming from ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"form-config"}),Object(l.b)("inlineCode",{parentName:"a"},"FormConfig"))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"touched"},"touched"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"StateTouched")),Object(l.b)("p",null,"Contains information about the touched state of each field.\nInitial value is ",Object(l.b)("inlineCode",{parentName:"p"},"{}"),".",Object(l.b)("br",{parentName:"p"}),"\n","Usually fields are touched once ",Object(l.b)("inlineCode",{parentName:"p"},"onBlur")," event was triggered for the field.\nThis can help to trigger validations depended on the specified validation trigger."),Object(l.b)("p",null,"Possible values for each field:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"undefined"),": field was not touched yet"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"true"),": field was touched")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"{\n  username: true,\n  password: undefined\n}\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"validity"},"validity"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"StateValidity")),Object(l.b)("p",null,"Contains information about the validation state of each field. Initial value is ",Object(l.b)("inlineCode",{parentName:"p"},"{}"),"."),Object(l.b)("p",null,"Possible values for each field:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"undefined"),": validation was not triggert yet"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"true"),": field is valid"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"false"),": field is invalid")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"{\n  username: true,\n  password: false\n}\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"errors"},"errors"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"ErrorsType<ValuesType, ErrorType>")),Object(l.b)("p",null,"Contains errors for each field resulted from it's validation. Initial value is ",Object(l.b)("inlineCode",{parentName:"p"},"{}"),"."),Object(l.b)("p",null,"Possible values for each field:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"undefined"),": field has no error or was not validated yet"),Object(l.b)("li",{parentName:"ul"},"For ",Object(l.b)("inlineCode",{parentName:"li"},"yup.Schema"),"'s the ",Object(l.b)("inlineCode",{parentName:"li"},"ErrorType")," will always be ",Object(l.b)("inlineCode",{parentName:"li"},"string[]")),Object(l.b)("li",{parentName:"ul"},"For ",Object(l.b)("inlineCode",{parentName:"li"},"validate function"),"'s the ",Object(l.b)("inlineCode",{parentName:"li"},"ErrorType")," could possibly be anything")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'{\n  username: ["username is a required field"],\n  password: 1 // only possible with validate function\n}\n')),Object(l.b)("hr",null),Object(l.b)("h3",{id:"context"},"context"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"object")),Object(l.b)("p",null,"Current context value. Initial value is ",Object(l.b)("inlineCode",{parentName:"p"},"{}"),"."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"submitting"},"submitting"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"boolean")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"true")," if form is currently submitting else ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"fields"},"fields"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Fields<ValuesType>")),Object(l.b)("p",null,"Contains props for each component which resulted from evaluation of ",Object(l.b)("inlineCode",{parentName:"p"},"mapToComponentProps")," member function of each field (see ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"field"}),Object(l.b)("inlineCode",{parentName:"a"},"Field")),")."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const formConfig = createForm<RegistrationForm>()({\n  username: field.text(), // field.text() has a mapToComponentProps function\n  password: field.password() // just like field.password() and all other fields have\n});\n\nconst MyForm = () => {\n  const { fields } = useFluentForm(fromConfig);\n\n  return (\n    <input {...fields.username}/>\n    <input {...fields.password}/>\n  )\n}\n")),Object(l.b)("p",null,"In case above type of ",Object(l.b)("inlineCode",{parentName:"p"},"fields")," would be:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"{\n  username: {\n    value: string;\n    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;\n    onBlur: () => void;\n  },\n  password:{\n    value: string;\n    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;\n    onBlur: () => void;\n  }\n}\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setvalues"},"setValues"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"(values: Partial<ValuesType>) => void")),Object(l.b)("p",null,"Sets values of form."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setinitialvalues"},"setInitialValues"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"(values: Partial<ValuesType>) => void")),Object(l.b)("p",null,"Sets initial values of form. This is important when resetting a form."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setcontext"},"setContext"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"(context: object) => void")),Object(l.b)("p",null,"Updates value of validation context. To re-validate all fields on context change ",Object(l.b)("inlineCode",{parentName:"p"},"FormConfig.validateOnContextChange")," can be used.\nWorks well in combination with ",Object(l.b)("inlineCode",{parentName:"p"},"useEffect"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const { setContext } = useFluentForm(formConfig.validateOnContextChange());\n\nuseEffect(() => {\n  setContext({ context: coordinates });\n}, [coordinates]);\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"handlesubmit"},"handleSubmit"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"(success?: Function, failure?: Function, options?: HandleSubmitOptions) => (event: any) => void")),Object(l.b)("p",null,"Returns a submit handler. When this handler is called validation for all fields will be trigger no matter which validation trigger was configured."),Object(l.b)("p",null,"Following parameter can be passed:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"success"),": a callback when the validation was successful"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"failure"),": a callback when the validation has failed"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"options"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"preventDefault"),": will call ",Object(l.b)("inlineCode",{parentName:"li"},"preventDefault")," function in case submit handler passes an event. Default value is ",Object(l.b)("inlineCode",{parentName:"li"},"true")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stopPropagation"),": will call ",Object(l.b)("inlineCode",{parentName:"li"},"stopPropagation")," function in case submit handler passes an event. Default value is ",Object(l.b)("inlineCode",{parentName:"li"},"true"))))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'formConfig.withValidation({\n  username: yup.string().required(),\n  password: yup.string().required().min(8)\n  }\n});\n\nfunction LoginForm() {\n  const {\n    values,\n    touched,\n    validity,\n    errors,\n    fields,\n    handleSubmit\n  } = useFluentForm(formConfig);\n\n  const handleSubmitSuccess = () => console.log(values);\n\n  const handleSubmitFailure = () => console.log(errors);\n\n  return (\n    <form onSubmit={handleSubmit(\n      handleSubmitSuccess,\n      handleSubmitFailure,\n      // these are the default values\n      { preventDefault: true, stopPropagtion: true }\n    )}>\n        <input {...fields.username} />\n        <input {...fields.password} />\n      <button type="submit">Submit</button>\n    </form>\n  );\n}\n')),Object(l.b)("hr",null),Object(l.b)("h3",{id:"validatefield"},"validateField"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<K extends keyof ValuesType>(field: K) => ErrorsType<ValuesType, ErrorType>[K]")),Object(l.b)("p",null,"Triggers validation for given field and returns error in case the field is invalid, otherwise ",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),".",Object(l.b)("br",{parentName:"p"}),"\n","It also updates the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#errors"}),"errors state")," based on the returned error."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"validateallfields"},"validateAllFields"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"() => ErrorsType<ValuesType, ErrorType>")),Object(l.b)("p",null,"Triggers validation for all fields and returns an errors object.",Object(l.b)("br",{parentName:"p"}),"\n","It also updates the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#errors"}),"errors state")," based on the returned errors."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"reset"},"reset"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"() => void")),Object(l.b)("p",null,"Sets complete form state to inital state. Initial values can be modified using ",Object(l.b)("inlineCode",{parentName:"p"},"setInitialValues"),"."),Object(l.b)("hr",null))}s.isMDXComponent=!0},166:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),s=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},u=function(e){var n=s(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=s(t),p=a,m=u["".concat(r,".").concat(p)]||u[p]||d[p]||l;return t?i.a.createElement(m,o({ref:n},c,{components:t})):i.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=p;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);