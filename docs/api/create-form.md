---
id: create-form
title: createForm
sidebar_label: createForm
---

`<ValuesType>() => (fields: Fields) => FormConfig`

## Description

`createForm` is a curried function that can be used to create an instance of [`FormConfig`](form-config).

:::info Why is it curried? 
Currently TypeScript doesn't support a feature called [`partial type argument inference`](https://github.com/Microsoft/TypeScript/pull/26349) which has some work arrounds, one of them is to use curried functions. This issue is well known and part of typescript roadmap. Once this feature is introduced the API will be changed accordingly.
:::

## Generic Types

### ValuesType

Type of field values.

<hr/>

## Arguments

### field

`Fields`

Object of fields (see [`Field`](field) for configuration details).  
Needs to match with properties of `ValuesType`.

<hr/>

## Example

```ts
interface RegistrationForm {
  username: string;
  password: string;
}

const formConfig = createForm<RegistrationForm>()({
  username: field.text(),
  password: field.password()
});

// values will be of type RegistrationForm
const { values } = useFluentForm(formConfig);
```
