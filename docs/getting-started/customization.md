---
id: customization
title: Customization
sidebar_label: Customization
---

When working with forms HTML elements are seldom enough to create beatufil and intuitive UI's.
That's why `react-fluent-form` was build to be customizable, so custom field types can be added.
In some cases it's enought to use `field.raw` (s. below).

If you maybe have your own validation library or you just don't like `yup`, also a custom validator can be provided.

## Using the raw field

For components like [`react-datepicker`](https://www.npmjs.com/package/react-datepicker) it's not necessary to implement a custom field.
`react-fluent-form` comes with a raw field type which works for components with following characteristics:

- it has `value`-like and a `onChange`-like prop
- `value` has the same type as the first parameter of `onChange` handler
- it optionally has a `onBlur`-like prop to indicate when the field is touched

\*-like means it must not have the same name, but the same type. E.g. the `value` prop in `react-datepicker` is called `selected`.

For raw fields it's required to pass an initial value, otherwise it will be undefined.

```jsx
const formConfig = createForm()({
  // there is also a withOnChangeProp and withOnBlurProp option!
  dateOfBirth: field.raw(new Date()).withValueProp("selected")
});

const MyForm = () => {
  const { fields } = useFluentForm(formConfig);
};
```

The type of `fields` object would look like this:

```ts
type FieldsType = {
  dateOfBirth: {
    selected: Date;
    onChange: (newValue: Date) => void;
    onBlur: () => void; // will just set the "touched" state to true
  };
};
```

## Adding custom fields

First of all a new class needs to be implemented which extends `Fields`, the base class of every field. It's required to implement a function called `mapToComponentProps` which receives a parameter with following properties:

- `value: ValueType`: the current value stored in state of `useFluentForm`. Map this to the value prop of your component.
- `setValue(v: ValueType)`: whenever your component changed its value, this function should be called (often it's an `onChange`-like event)
- `setTouched(value: boolean = true)`: call this function when your component has been touched. For most cases this function should be called when the `onBlur` event was triggered.

Imagine you have implemented a custom input field that has an additional prop called `onClear` which is called when the input should be cleared. On top of that you have an option to disable this functionality using the `clearable` prop:

```js
import { Field } from "react-fluent-form";

export class ClearableTextField extends Field {
  constructor(initialValue = "") {
    super(initialValue);
    this.clearable = true;
  }

  // add functions to configure your field
  // NOTE: configuration functions should always return "this" to stay conform to the fluent API syntax
  isClearable = (value = true) => {
    this.clearable = value;
    return this;
  };

  mapToComponentProps = ({ value, setValue, setTouched }) => ({
    value,
    clearable: this.clearable,
    onBlur: () => {
      setTouched();
    },
    onChange: e => {
      setValue(e.target.value);
    },
    onClear: () => {
      setValue("");
    }
  });
}
```

For convenience purposes there is also a utility function named `addField` that adds a custom field to the `field` instance exported by `react-fluent-form` (which is actually adding a new function to `FieldCreator.prototype`). `addField` should be called in a top level file:

```js
import { addField } from "react-fluent-form";

addField("clearableText", intialValue => new ClearableTextField(initialValue));
```

The newly added field can then be used e.g. like so:

```jsx
const formConfig = createForm()({
  username: field.clearableText("initial value").isClearable(false)
});
```

## Adding custom validator

To add a custom validator a class need to be implemented which extends `Validator`. The only function that needs to be implemented is `validateField`, which is called with following parameters:

- `field: KeyType`: name of the field that should be validated
- `values: ValuesType`: current values of the form
- `context: object`: current context value

For the sake of simplicity lets assume you just want to have an optional required check on your fields. An implementation could look like following:

```js
import { Validator } from "react-fluent-form";

export class RequiredValidator extends Validator {
  constructor(requiredFields) {
    super();
    this.requiredFields = requiredFields;
  }

  public validateField(
    field,
    values,
    _context // not relevant for this example
  ) {
    if (this.requiredFields[field] && !values[field]) {
      return "field is required";
    }
  }
}
```

Using `withCustomValidator` a custom validator can be added to your form config:

:::caution
Attaching a custom validator will remove the `DefaultValidator`.
:::

```js
const formConfig = createForm()({
  username: field.text(),
  email: field.email(),
  phone: field.tel()
}).withCustomValidator(new RequiredValidator({
  username: true,
  email: true
});
```
