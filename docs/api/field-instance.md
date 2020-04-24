---
id: field-instance
title: field (instance)
sidebar_label: field (instance)
---

Instance of `FieldCreator`

## Description

`field` is responsible for creating fields required by `createForm`/`FormConfig`.
It specifies a member function for each HTML `input` type, `select` and `textarea`. There is also a function for `raw`fields. A custom field can be attached using [`addField`](add-field).

## Members

### checkbox

`(initialChecked: boolean = false) => CheckboxField`

<hr />

### color

`(initialValue: string = "") => TextField`

<hr />

### date

`(initialValue: string = "") => TextField`

<hr />

### datetimeLocal

`(initialValue: string = "") => TextField`

<hr />

### email

`(initialValue: string = "") => TextField`

<hr />

### image

`(initialValue: string = "") => TextField`

<hr />

### month

`(initialValue: string = "") => TextField`

<hr />

### number

`(initialValue: string = "") => TextField`

<hr />

### password

`(initialValue: string = "") => TextField`

<hr />

### radio

`(initialValue: string = "") => RadioField`

- **name**  
  `(value: string) => RadioField`  
  value for the `name` property passed to `<input />`'s
- **unselectable**  
  `(value = true) => RadioField`  
  allows to unselect a radio option by clicking on it again

The `radio` field will produce a function of following type for the `fields` property of `useFluentForm`:

```ts
(radioInputValue: string) => {
    type: string,
    checked: boolean,
    name: string,
    value: string,
    onBlur: () => void,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    // needed for unselectable configuration
    onClick: (e: React.MouseEvent<HTMLInputElement>) => void
}
```

This function will allow to specify different values for each radio `<input />`:

```tsx
const formConfig = createForm()({
  gender: field.radio().name("gender").unselectable()
});

const GenderForm = () => {
  const { fields } = useFluentForm(formConfig);

  return (
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
  );
};
```

<hr />

### range

`(initialValue: string = "") => TextField`

<hr />

### raw

`<ValueType>(initialValue: ValueType) => RawField`

- **withValueProp**  
  `(valueProp: string) => void`  
  name of the `value` property of the component
- **withOnChangeProp**  
  `(onChangeProp: string) => void`  
  name of the `onChange` property of the component
- **withOnBlurProp**  
  `(onBlurProp: string) => void`  
  name of the `onBlur` property of the component

For components like [`react-datepicker`](https://www.npmjs.com/package/react-datepicker) it's not necessary to implement a custom field.
`react-fluent-form` comes with a raw field type which works for components with following characteristics:

- it has `value`-like and a `onChange`-like prop
- `value` has the same type as the first parameter of `onChange` handler.
- it optionally has a `onBlur`-like prop to indicate when the field is touched

\*-like means it must not have the same name, but the same type. E.g. the `value` prop in `react-datepicker` is called `selected`.

For raw fields it's required to pass an initial value, otherwise it will be undefined.

```jsx
const formConfig = createForm()({
  dateOfBirth: field.raw(new Date())
});

const MyForm = () => {
  const { fields } = useFluentForm(formConfig);
};
```

The type of `fields` object would look like this:

```ts
type FieldsType = {
  dateOfBirth: {
    value: Date;
    onChange: (newValue: Date) => void;
    onBlur: () => void; // will just set the "touched" state to true
  };
};
```

<hr />

### search

`(initialValue: string = "") => TextField`

<hr />

### select

`(initialValue: string = "") => SelectField`

The `select` field will produce an object of following type for the `fields` property of `useFluentForm`:

```ts
{
  select: {
    value: string;
    onBlur: () => void;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  },
  option: (value: string) => { value: string }
}
```

While the `select` property needs to be spreaded onto `<select />`, the `option` property will allow to specify differnet values for each `<option />`:

```tsx
const formConfig = createForm()({
  role: field.select("admin")
});

const RolesForm = () => {
  const { fields } = useFluentForm(formConfig);

  return (
    <select {...fields.role.select}>
      <option {...fields.role.option("admin")}>Admin</option>
      <option {...fields.role.option("user")}>User</option>
    </select>
  );
};
```

<hr />

### tel

`(initialValue: string = "") => TextField`

<hr />

### text

`(initialValue: string = "") => TextField`

<hr />

### textarea

`(initialValue: string = "") => TextAreaField`

<hr />

### time

`(initialValue: string = "") => TextField`

<hr />

### url

`(initialValue: string = "") => TextField`

<hr />

### week

`(initialValue: string = "") => TextField`

<hr />
