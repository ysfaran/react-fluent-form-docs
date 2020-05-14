---
id: validation
title: Validation
sidebar_label: Validation
---

`react-fluent-form` comes with a build in validation approach that also enables customization.

## Basic Usage

In this example validation will be added for a `username` and `password` field.

### Adding validation to config

Using `withValidation` either a `yup.Schema` or a `validate function` can be provided for each field. Providing a `yup.Schema` will result in a `string[]` error type. In contrast to that you can return any type of data when using `validate function`'s:

```jsx
formConfig.withValidation({
  username: yup.string().required(),
  password: value => {
    if (value.length < 8) {
      // return *any* custom error here (e.g. also complex objects or numbers)
      return "Password is too short";
    }
  }
});
```

### Validation properties

`touched`, `validity` and `errors` are properties which are mostly relevant for validation. They are similarirly structured to `values` and `fields`:

```jsx
const { touched, validity, errors } = useFluentForm(formConfig);
```

- **`touched`**: stores information about touched state of each field. A field is _touched_ once it had focus and then lost it, so from a technical perspective if the `onBlur` event of an input field was triggert.
  - example: `{username: true, password: undefined}`
  - possible values: `true`, `false` or `undefined` (`undefined` means it was not touched yet)
- **`validity`**: stores information about validation state of each field.
  - example: `{username: false, password: undefined}` (`undefined` means it was not validated yet).
  - possible values: `true`, `false` or `undefined` (`undefined` means it was not validated yet)
- **`errors`**: contains the current errors of each field. In case of an error the evaluation of `yup` schemes will result in a `string[]` type.
  - example: `{username: ["username is a required field"], password: undefined }`
  - possible values: `any custom type` or undefined (`undefined` means the field was not validated yet or that it's valid).

### Displaying errors

In order to properly display error messages (and maybe also success messages) properties `touched`, `validity` and `errors` can be used. To handle validation failures on submission a callback can be provided as second argument of `handleSubmit`:

```jsx {20-22,27-28}
function RegistrationForm() {
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
    <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitFailure)}>
      <label>
        Username*:
        <input {...fields.username} />
        {touched.username && !validity.username && (
          <div>{errors.username[0]}</div>
        )}
      </label>
      <label>
        Password*:
        <input {...fields.password} />
        {/* validity.password stays undefined until the submission (validateOnSubmitOnly) */}
        {touched.password && validity.password === false && <div>{errors.password[0]}</div>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

If [default validation triggers](../api/form-config#validateaftertouchonchange) are used, it's enough to **only** check  the `errors` object:

```jsx {10,15}
function RegistrationForm() {

  // ...

  return (
    <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitFailure)}>
      <label>
        Username*:
        <input {...fields.username} />
        {errors.username && <div>{errors.username[0]}</div>}
      </label>
      <label>
        Password*:
        <input {...fields.password} />
        {errors.password && <div>{errors.password[0]}</div>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Validation context

In some cases it's required to work with values outside of your form.
This is where `validation context` comes into place.

### Initial context

Context always need to be an object:

```jsx
formConfig.withContext({
  x: 1,
  y: 2
});
```

### Setting context dynamically

If you want to update your context as soon as your context values have changed, you can take advandage of `useEffect`:

```jsx
const { setContext } = useFluentForm(formConfing);

useEffect(() => {
  setContext({ context: coordinates });
}, [coordinates]);
```

### Triggering validation

You can trigger validation of all fields on context changes:

```jsx
formConfig.validateOnContextChange();
```

### Accessing context

```jsx
formConfig.withValidation({
  username: yup.string().when("$context.x", {
    is: 0,
    then: yup.string().required()
  }),
  password: (value, values, { context }) => {
    if (context.x < context.y) return "error";
  }
});
```

## Conditional validation

Often it's necessary to adapt validations for a field based on the values of other fields in your form (and also the context). This can be done via `yup.Schema`'s or via `validate function`'s.  
It's very important to note that `validate function`'s can also return `yup.Schema`'s conditionally. The returned `yup.Schema` will not be treated as an error type, it will be evaluated, thus the error type will be `string[]`.

:::important
When using `yup.Schema`'s other form fields need to be accessed with a leading `$` (here `$lastName`) which usually means the value is comming from the context. In fact other form values are passed as context to the `yup.Schema` instances for each field during validation execution.  
If a context property is named equal to a field property, the **field property will be overriden** in `yup.Schema`s context!
:::

```jsx
formConfig.withValidation({
  username: yup.string().required(),
  firstName: yup.string().when("$lastName", {
    is: "",
    otherwise: yup.string().required()
  }),
  lastName: yup.string(),
  password: (value, values) => {
    if (value.includes(values.username)) {
      return "Password should not contain username";
    } else {
      // the error type will be string[] here
      return yup
        .string()
        .required()
        .matches(/[a-zA-Z]/, "Password can only contain letters.");
    }
  }
});
```
