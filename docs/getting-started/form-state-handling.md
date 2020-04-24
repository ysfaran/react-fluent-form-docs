---
id: form-state-handling
title: Form State Handling
sidebar_label: Form State Handling
---

Following is a simple example for a registration form containing a `username`, `gender` and `password` field.

## Creating the config

With `createForm` and `field` the basic form configuration can be described:

```jsx
import { createForm, field } from "react-fluent-form";

const formConfig = createForm()({
  username: field.text(),
  // unselectable() allows to select nothing
  gender: field.radio().name("gender").unselectable(),
  password: field.password().validateOnSubmitOnly()
});
```

## Initializing the form

Initialize the form with previous `formConfig` using the `useFluentForm` hook:

```jsx
import { useFluentForm } from "react-fluent-form";

const { values, fields, handleSubmit /* and more.. */ } = useFluentForm(
  formConfig
);
```

The objects `values` and `fields` (and also other objects returned by `useFluentForm`) will contain properties for each field name

Example for `values`:

```js
{
  username: "user",
  gender: "",
  password: "sg$!sga86"
}
```

Type of `fields.username` would be:

```ts
{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}
```

## Rendering the form

The return value of `useFluentForm` will provide everything required for form state handling (`fields` object) and for form submission (`handleSubmit` function):

```jsx
function RegistrationForm() {
  const { values, fields, handleSubmit } = useFluentForm(formConfig);

  const handleSubmitSuccess = () => console.log(values);

  return (
    <form onSubmit={handleSubmit(handleSubmitSuccess)}>
      <label>
        Username*:
        <input {...fields.username} />
      </label>
      <div>
        Gender:
        <label>
          male
          <input {...fields.gender("male")} />
        </label>
        <label>
          female
          <input {...fields.gender("female")} />
        </label>
      </div>
      <label>
        Password*:
        <input {...fields.password} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Complete example

Following code snippet contains code from previous section:

```jsx
import { createForm, field, useFluentForm } from "react-fluent-form";

const formConfig = createForm()({
  username: field.text(),
  gender: field.radio().name("gender").unselectable(),
  password: field.password().validateOnSubmitOnly()
});

function RegistrationForm() {
  const { values, fields, handleSubmit } = useFluentForm(formConfig);

  const handleSubmitSuccess = () => console.log(values);

  return (
    <form onSubmit={handleSubmit(handleSubmitSuccess)}>
      <label>
        Username*:
        <input {...fields.username} />
      </label>
      <div>
        Gender:
        <label>
          male
          <input {...fields.gender("male")} />
        </label>
        <label>
          female
          <input {...fields.gender("female")} />
        </label>
      </div>
      <label>
        Password*:
        <input {...fields.password} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}