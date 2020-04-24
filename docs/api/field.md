---
id: field
title: Field
sidebar_label: Field
---

`abtract class`

## Description

This is the base class of all fields. Custom fields need to extend this class or any subclass.

## Generic types

### ValueType

Type of the maintained value

<hr />

### ComponentProps

Type of component props after mapping functions/state of `useFluenForm` passed to `mapToComponentProps` (see below)

<hr />

## Members

:::info
Most member functions return `this` to enable a fluent API.
:::

### validateAfterTouchOnChange
 
`() => Field`

Configures field to trigger validation once it was touched, then always if it has changed and on submit.  
 This is the `default` validation trigger.

<hr />

### validateOnChange

`() => Field`

Configures field to trigger validation everytime it has changed and on submit.

<hr />

### validateOnSubmitOnly

`() => Field`

Configures field to trigger validation only on submit.

<hr />

### mapToComponentProps

`(args: ComponentPropsMapperArgs) => ComponentProps`

Since this function is `abstract` it needs to be implemented by each subclass.  
This member is only relevant when adding custom fields and receives a parameter with following properties:

- `value: ValueType`: the current value stored in state of `useFluentForm`. Map this to the value prop of your component.
- `setValue(v: ValueType)`: whenever your component changed its value, this function should be called (often it's an `onChange`-like event)
- `setTouched(value: boolean = true)`: call this function when your component has been touched. For most cases this function should be called when the `onBlur` event was triggered.

Following is an example implementation of a clearable custom text field, which makes use of `mapToComponentProps`.

```ts
import React from "react";
import { Field } from "react-fluent-form";

export type ClearableTextFieldProps = {
  value: string;
  clearable: boolean;
  onBlur: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
};

export class ClearableTextField extends Field<string, ClearableTextFieldProps> {
  private clearable: boolean;

  constructor(initialValue = "") {
    super(initialValue);
    this.clearable = true;
  }

  // add functions to configure your field
  // NOTE: configuration functions should always return "this" to stay conform to the fluent API syntax
  public isClearable = (value: boolean = true) => {
    this.clearable = value;
    return this;
  };

  public mapToComponentProps: ComponentPropsMapper<
    string,
    ClearableTextFieldProps
  > = ({ value, setValue, setTouched }) => ({
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

It's recommended to add custom fields using [`addField`](add-field).
