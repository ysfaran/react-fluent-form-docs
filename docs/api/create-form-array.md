---
id: create-form-array
title: createFormArray
sidebar_label: createFormArray
---

`<ValuesType>() => (fields: Fields) => FormArrayConfig`

## Description

`creatFormArray` is a curried function - like [`createForm`](create-form) - that can be used to create an instance of [`FormArrayConfig`](form-array-config).

## Generic Types

### ValuesType

Type of field values.

<hr/>

## Arguments

### field

`Fields`

Object of fields (see [`Field`](field) for configuration details).  
Needs to match with properties of `ValuesType`.

<hr />

## Example

```ts
type RegistrationForm = { username: string; password: string };

const formConfig = createForm<RegistrationForm>()({
  username: field.text(),
  password: field.password()
});

// values will be of type RegistrationForm
const { values } = useFluentFormArray(formConfig);
```
