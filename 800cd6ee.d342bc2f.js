(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var i=t(2),l=t(9),a=(t(0),t(168)),r={id:"field-instance",title:"field (instance)",sidebar_label:"field (instance)"},b={id:"api/field-instance",title:"field (instance)",description:"Instance of `FieldCreator`",source:"@site/docs/api/field-instance.md",permalink:"/docs/api/field-instance",editUrl:"https://github.com/ysfaran/react-fluent-form-docs/edit/master/docs/api/field-instance.md",sidebar_label:"field (instance)",sidebar:"someSidebar",previous:{title:"Field",permalink:"/docs/api/field"},next:{title:"FormArrayConfig",permalink:"/docs/api/form-array-config"}},c=[{value:"Description",id:"description",children:[]},{value:"Members",id:"members",children:[{value:"checkbox",id:"checkbox",children:[]},{value:"color",id:"color",children:[]},{value:"date",id:"date",children:[]},{value:"datetimeLocal",id:"datetimelocal",children:[]},{value:"email",id:"email",children:[]},{value:"image",id:"image",children:[]},{value:"month",id:"month",children:[]},{value:"number",id:"number",children:[]},{value:"password",id:"password",children:[]},{value:"radio",id:"radio",children:[]},{value:"range",id:"range",children:[]},{value:"raw",id:"raw",children:[]},{value:"search",id:"search",children:[]},{value:"select",id:"select",children:[]},{value:"tel",id:"tel",children:[]},{value:"text",id:"text",children:[]},{value:"textarea",id:"textarea",children:[]},{value:"time",id:"time",children:[]},{value:"url",id:"url",children:[]},{value:"week",id:"week",children:[]}]}],o={rightToc:c};function p(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Instance of ",Object(a.b)("inlineCode",{parentName:"p"},"FieldCreator")),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"field")," is responsible for creating fields required by ",Object(a.b)("inlineCode",{parentName:"p"},"createForm"),"/",Object(a.b)("inlineCode",{parentName:"p"},"FormConfig"),".\nIt specifies a member function for each HTML ",Object(a.b)("inlineCode",{parentName:"p"},"input")," type, ",Object(a.b)("inlineCode",{parentName:"p"},"select")," and ",Object(a.b)("inlineCode",{parentName:"p"},"textarea"),". There is also a function for ",Object(a.b)("inlineCode",{parentName:"p"},"raw"),"fields. A custom field can be attached using ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"add-field"}),Object(a.b)("inlineCode",{parentName:"a"},"addField")),"."),Object(a.b)("h2",{id:"members"},"Members"),Object(a.b)("h3",{id:"checkbox"},"checkbox"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"(initialChecked: boolean = false) => CheckboxField")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"color"},"color"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"date"},"date"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"datetimelocal"},"datetimeLocal"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"email"},"email"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"image"},"image"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"month"},"month"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"number"},"number"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"password"},"password"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"radio"},"radio"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => RadioField')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"name"),Object(a.b)("br",{parentName:"li"}),Object(a.b)("inlineCode",{parentName:"li"},"(value: string) => RadioField"),Object(a.b)("br",{parentName:"li"}),"value for the ",Object(a.b)("inlineCode",{parentName:"li"},"name")," property passed to ",Object(a.b)("inlineCode",{parentName:"li"},"<input />"),"'s"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"unselectable"),Object(a.b)("br",{parentName:"li"}),Object(a.b)("inlineCode",{parentName:"li"},"(value = true) => RadioField"),Object(a.b)("br",{parentName:"li"}),"allows to unselect a radio option by clicking on it again")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"radio")," field will produce a function of following type for the ",Object(a.b)("inlineCode",{parentName:"p"},"fields")," property of ",Object(a.b)("inlineCode",{parentName:"p"},"useFluentForm"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"(radioInputValue: string) => {\n    type: string,\n    checked: boolean,\n    name: string,\n    value: string,\n    onBlur: () => void,\n    onChange: (e: ChangeEvent<HTMLInputElement>) => void,\n    // needed for unselectable configuration\n    onClick: (e: React.MouseEvent<HTMLInputElement>) => void\n}\n")),Object(a.b)("p",null,"This function will allow to specify different values for each radio ",Object(a.b)("inlineCode",{parentName:"p"},"<input />"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"}),'const formConfig = createForm()({\n  gender: field.radio().name("gender").unselectable()\n});\n\nconst GenderForm = () => {\n  const { fields } = useFluentForm(formConfig);\n\n  return (\n    <div>\n      Gender:\n      <label>\n        male\n        <input {...fields.gender("male")} />\n      </label>\n      <label>\n        female\n        <input {...fields.gender("female")} />\n      </label>\n    </div>\n  );\n};\n')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"range"},"range"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"raw"},"raw"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"<ValueType>(initialValue: ValueType) => RawField")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"withValueProp"),Object(a.b)("br",{parentName:"li"}),Object(a.b)("inlineCode",{parentName:"li"},"(valueProp: string) => void"),Object(a.b)("br",{parentName:"li"}),"name of the ",Object(a.b)("inlineCode",{parentName:"li"},"value")," property of the component"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"withOnChangeProp"),Object(a.b)("br",{parentName:"li"}),Object(a.b)("inlineCode",{parentName:"li"},"(onChangeProp: string) => void"),Object(a.b)("br",{parentName:"li"}),"name of the ",Object(a.b)("inlineCode",{parentName:"li"},"onChange")," property of the component"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"withOnBlurProp"),Object(a.b)("br",{parentName:"li"}),Object(a.b)("inlineCode",{parentName:"li"},"(onBlurProp: string) => void"),Object(a.b)("br",{parentName:"li"}),"name of the ",Object(a.b)("inlineCode",{parentName:"li"},"onBlur")," property of the component")),Object(a.b)("p",null,"For components like ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-datepicker"}),Object(a.b)("inlineCode",{parentName:"a"},"react-datepicker"))," it's not necessary to implement a custom field.\n",Object(a.b)("inlineCode",{parentName:"p"},"react-fluent-form")," comes with a raw field type which works for components with following characteristics:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"it has ",Object(a.b)("inlineCode",{parentName:"li"},"value"),"-like and a ",Object(a.b)("inlineCode",{parentName:"li"},"onChange"),"-like prop"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"value")," has the same type as the first parameter of ",Object(a.b)("inlineCode",{parentName:"li"},"onChange")," handler."),Object(a.b)("li",{parentName:"ul"},"it optionally has a ",Object(a.b)("inlineCode",{parentName:"li"},"onBlur"),"-like prop to indicate when the field is touched")),Object(a.b)("p",null,"*","-like means it must not have the same name, but the same type. E.g. the ",Object(a.b)("inlineCode",{parentName:"p"},"value")," prop in ",Object(a.b)("inlineCode",{parentName:"p"},"react-datepicker")," is called ",Object(a.b)("inlineCode",{parentName:"p"},"selected"),"."),Object(a.b)("p",null,"For raw fields it's required to pass an initial value, otherwise it will be undefined."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"const formConfig = createForm()({\n  dateOfBirth: field.raw(new Date())\n});\n\nconst MyForm = () => {\n  const { fields } = useFluentForm(formConfig);\n};\n")),Object(a.b)("p",null,"The type of ",Object(a.b)("inlineCode",{parentName:"p"},"fields")," object would look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),'type FieldsType = {\n  dateOfBirth: {\n    value: Date;\n    onChange: (newValue: Date) => void;\n    onBlur: () => void; // will just set the "touched" state to true\n  };\n};\n')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"search"},"search"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"select"},"select"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => SelectField')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"select")," field will produce an object of following type for the ",Object(a.b)("inlineCode",{parentName:"p"},"fields")," property of ",Object(a.b)("inlineCode",{parentName:"p"},"useFluentForm"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"{\n  select: {\n    value: string;\n    onBlur: () => void;\n    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;\n  },\n  option: (value: string) => { value: string }\n}\n")),Object(a.b)("p",null,"While the ",Object(a.b)("inlineCode",{parentName:"p"},"select")," property needs to be spreaded onto ",Object(a.b)("inlineCode",{parentName:"p"},"<select />"),", the ",Object(a.b)("inlineCode",{parentName:"p"},"option")," property will allow to specify differnet values for each ",Object(a.b)("inlineCode",{parentName:"p"},"<option />"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"}),'const formConfig = createForm()({\n  role: field.select("admin")\n});\n\nconst RolesForm = () => {\n  const { fields } = useFluentForm(formConfig);\n\n  return (\n    <select {...fields.role.select}>\n      <option {...fields.role.option("admin")}>Admin</option>\n      <option {...fields.role.option("user")}>User</option>\n    </select>\n  );\n};\n')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"tel"},"tel"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"text"},"text"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"textarea"},"textarea"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextAreaField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"time"},"time"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"url"},"url"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"week"},"week"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'(initialValue: string = "") => TextField')),Object(a.b)("hr",null))}p.isMDXComponent=!0},168:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var i=t(0),l=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=l.a.createContext({}),p=function(e){var n=l.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):b({},n,{},e)),t},d=function(e){var n=p(e.components);return l.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},s=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(t),s=i,m=d["".concat(r,".").concat(s)]||d[s]||u[s]||a;return t?l.a.createElement(m,b({ref:n},o,{components:t})):l.a.createElement(m,b({ref:n},o))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=s;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:i,r[1]=b;for(var o=2;o<a;o++)r[o]=t[o];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);