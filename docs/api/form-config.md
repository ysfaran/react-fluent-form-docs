---
id: form-config
title: FormConfig
sidebar_label: FormConfig
---

`class`

## Description

Stores configuration of form like validation and fields. It's the only argument that needs to be passed to [`useFluentForm`](use-fluent-form).  
It's recommended to use [`createForm`](create-form) to create an instance of `FormConfig`.

## Generic types

### ValuesType

Type of field values.

<hr />

## Members

:::info
Every member function returns `this` to enable fluent API.
:::

:::important  
[Validation triggers defined on field level](field#validateaftertouchonchange) are always considered first. `FormConfig` level validation triggers will only be used when no trigger is defiend on `Field` level.
:::

### validateAfterTouchOnChange

`() => FormConfig`

Configures validation for all fields to trigger once they touched, then always if they have changed and on submit.  
 This is the `default` validation trigger.

<hr />


### validateOnChange

`() => FormConfig`

Configures validation for all fields to trigger everytime they have changed and on submit.

<hr />


### validateOnSubmitOnly

`() => FormConfig`

Configures validation for all fields to trigger only on submit.

<hr />


### validateOnContextChange

`(validate: boolean = true) => FormConfig`

Configures validation for all fields to be triggered when context has changed. The default value is `false`.  
Context changes are triggerd by [`setContext`](use-fluent-form#setcontext) function return by `useFluentForm`.

<hr />


### withInitialValues

`(values: Partial<ValuesType>) => FormConfig`

While initial values can be set on [`Field`](field) level (e.g. `field.text("initial")`) it's also possible to do so on `FormConfig` level for all fields.

```ts
const formConfig = createForm<UserForm>()({
  username: field.text("initial"),
  email: field.email()
}).withInitialValues({ email: "email@example.com" });
```

<hr />


### withContext

`(context: object) => FormConfig`

Sets the initial context value. It needs to be an object of any type:

```ts
const formConfig = createForm<UserForm>()({
  username: field.text(),
  email: field.email()
}).withContext({
  context: {
    // values are wrapped here
    shouldValidateUsername: true
  }
});
```

<hr />


### withValidation

`(validations: Validations) => FormConfig`

Adds functionality to validate the form. A `yup.Schema` or a custom `validate function` can be provided for each field. Behind the scenes `DefaultValidator` is being used.

A `validate function` receives following values as paramater:

- `value`: current value of field
- `values`: current values of all fields in the form
- `context`: current context value

Using a `yup.Schema` will always result in an `string[]` error type.
In contrast to that `validate function` allow any kind of error type to be returned. Returning nothing (`undefined`) will indicate that there is no validation error.  
On top of that also a `yup.Schema` can be returned by a `validate functions` which enables conditional `yup.Schema` validation. In this case the error type will also be from type `string[]`. To say it in other words: returning a `yup.Schema` in a `validate function` will result in an evaulation of the returned `yup.Schema`.

:::important
When using `yup validation` other form fields need to be accessed with a leading `$` (here `$lastName`) which usually means the value is coming from the context. In fact other form values are passed as context to the `yup schema` for each field during validation execution.  
If a context property is named equal to a field property, the **field property will be overriden** in `yup.Schema`s context!
:::

```ts
formConfig.withValidation({
  username: yup.string().required(),
  firstName: yup.string().when("$lastName", {
    is: "",
    otherwise: yup.string().required()
  }),
  lastName: yup.string(),
  // the error type will be "string | string[]" for this validate function
  password: (value, values, _context) => {
    if (value.includes(values.username)) {
      return "Password should not contain username";
    } else {
      return yup
        .string()
        .required()
        .matches(/[a-zA-Z]/, "Password can only contain letters.");
    }
  }
});
```

<hr />


### withCustomValidator

`(validator: Validator) => FormConfig`

Allows to provide a custom [`Validator`](validator).  
 Providing such will remove `DefaultValidator`, thus removes all features mentioned in `withValdation`.

Following is an example of a simple validator that does truthy checks on fields:

```ts
import { Validator, ErrorsType } from "react-fluent-form";

export class RequiredValidator<ValuesType> extends Validator<
  ValuesType,
  ErrorsType<string>
> {
  constructor(requiredFields) {
    super();
    this.requiredFields = requiredFields;
  }

  public validateField<K extends keyof ValuesType>(
    field: K,
    values: ValuesType,
    _context: object // not relevant for this example
  ) {
    if (this.requiredFields[field] && !values[field]) {
      return "field is required";
    }
  }
}
```

Usage:

```ts
const formConfig = createForm()({
  username: field.text(),
  email: field.email(),
  phone: field.tel()
}).withCustomValidator(new RequiredValidator({
  username: true,
  email: true
});
```

<hr />
