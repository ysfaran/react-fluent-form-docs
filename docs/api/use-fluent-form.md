---
id: use-fluent-form
title: useFluentForm
sidebar_label: useFluentForm
---

`<Config extends FormConfig>(config: Config) => UseFluentForm`

## Description

Core react hook of this library.
Expects a [`FormConfig`](form-config) as parameter:

```ts
type RegistrationForm = { username: string; password: string };

const formConfig = createForm<RegistrationForm>()({
  username: field.text(),
  password: field.password()
});

const {
  values,
  touched,
  validity,
  errors,
  context,
  submitting,
  fields,
  setValues,
  setInitialValues,
  setContext,
  handleSubmit,
  validateField,
  validateAllFields,
  reset
} = useFluentForm(formConfig);
```

## Return type

### values

`ValuesType`

Contains current values of form. Initial values are comming from [`FormConfig`](form-config)

<hr />

### touched

`StateTouched`

Contains information about the touched state of each field.
Initial value is `{}`.  
Usually fields are touched once `onBlur` event was triggered for the field.
This can help to trigger validations depended on the specified validation trigger.

Possible values for each field:

- `undefined`: field was not touched yet
- `true`: field was touched

```ts
{
  username: true,
  password: undefined
}
```

<hr />

### validity

`StateValidity`

Contains information about the validation state of each field. Initial value is `{}`.

Possible values for each field:

- `undefined`: validation was not triggert yet
- `true`: field is valid
- `false`: field is invalid

```ts
{
  username: true,
  password: false
}
```

<hr />

### errors

`ErrorsType<ValuesType, ErrorType>`

Contains errors for each field resulted from it's validation. Initial value is `{}`.

Possible values for each field:

- `undefined`: field has no error or was not validated yet
- For `yup.Schema`'s the `ErrorType` will always be `string[]`
- For `validate function`'s the `ErrorType` could possibly be anything

```ts
{
  username: ["username is a required field"],
  password: 1 // only possible with validate function
}
```

<hr />

### context

`object`

Current context value. Initial value is `{}`.

<hr />

### submitting

`boolean`

`true` if form is currently submitting else `false`.

<hr />

### fields

`Fields<ValuesType>`

Contains props for each component which resulted from evaluation of `mapToComponentProps` member function of each field (see [`Field`](field)).

```tsx
const formConfig = createForm<RegistrationForm>()({
  username: field.text(), // field.text() has a mapToComponentProps function
  password: field.password() // just like field.password() and all other fields have
});

const MyForm = () => {
  const { fields } = useFluentForm(fromConfig);

  return (
    <input {...fields.username}/>
    <input {...fields.password}/>
  )
}
```

In case above type of `fields` would be:

```ts
{
  username: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  },
  password:{
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  }
}
```

<hr />

### setValues

`(values: Partial<ValuesType>) => void`

Sets values of form.

<hr />

### setInitialValues

`(values: Partial<ValuesType>) => void`

Sets initial values of form. This is important when resetting a form.

<hr />

### setContext

`(context: object) => void`

Updates value of validation context. To re-validate all fields on context change `FormConfig.validateOnContextChange` can be used.
Works well in combination with `useEffect`.

```jsx
const { setContext } = useFluentForm(formConfig.validateOnContextChange());

useEffect(() => {
  setContext({ context: coordinates });
}, [coordinates]);
```

<hr />

### handleSubmit

`(success?: Function, failure?: Function, options?: HandleSubmitOptions) => (event: any) => void`

Returns a submit handler. When this handler is called validation for all fields will be trigger no matter which validation trigger was configured.

Following parameter can be passed:

- `success`: a callback when the validation was successful
- `failure`: a callback when the validation has failed
- `options`
  - `preventDefault`: will call `preventDefault` function in case submit handler passes an event. Default value is `true`
  - `stopPropagation`: will call `stopPropagation` function in case submit handler passes an event. Default value is `true`

```tsx
formConfig.withValidation({
  username: yup.string().required(),
  password: yup.string().required().min(8)
  }
});

function LoginForm() {
  const {
    values,
    touched,
    validity,
    errors,
    fields,
    handleSubmit
  } = useFluentForm(formConfig);

  const handleSubmitSuccess = () => console.log(values);

  const handleSubmitFailure = () => console.log(errors);

  return (
    <form onSubmit={handleSubmit(
      handleSubmitSuccess,
      handleSubmitFailure,
      // these are the default values
      { preventDefault: true, stopPropagtion: true }
    )}>
        <input {...fields.username} />
        <input {...fields.password} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

<hr />

### validateField

`<K extends keyof ValuesType>(field: K) => ErrorsType<ValuesType, ErrorType>[K]`

Triggers validation for given field and returns error in case the field is invalid, otherwise `undefined`.  
It also updates the [errors state](#errors) based on the returned error.

<hr />

### validateAllFields

`() => ErrorsType<ValuesType, ErrorType>`

Triggers validation for all fields and returns an errors object.  
It also updates the [errors state](#errors) based on the returned errors.

<hr />

### reset

`() => void`

Sets complete form state to inital state. Initial values can be modified using `setInitialValues`.

<hr />
