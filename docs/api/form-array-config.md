---
id: form-array-config
title: FormArrayConfig
sidebar_label: FormArrayConfig
---

`class`, extends [`FormConfig`](form-config)

## Description

Stores configuration of form array like validation and fields, but also configuration about the array (e.g. inital array values). It's the only argument that needs to be passed to [`useFluentFormArray`](use-fluent-form-array).  
It's recommended to use [`createFormArray`](create-form-array) to create a form array config.

## Generic types

### ValuesType

Type of field values.

<hr />

## Members

:::info
Every member function returns `this` to enable fluent API.
:::

For form item level configuration refer to [`FormConfig`](form-config) since it has the same configuration options as `FormArrayConfig`. Following members are **only** relevant on array level:

### withInitialArray

`(initialArray: ValuesType[]) => FormArrayConfig`

Sets initial values of the form array.

<hr />

### withKeyGenerator

`(generator: KeyGenerator<ValuesType>) => FormConfig`

To identify items in a form array they need a unique key assigned to them. On default keys are generated with a key counter. That behaviour can be overriden by specifying a `KeyGenerator` which has type `(item: ValuesType) => string | number`:

```ts
interface UserRoleForm {
  username: string;
  role: string;
}

const arrayConfig = createFormArray<UserRoleForm>()({
  username: field.text(),
  role: field.select()
}).withKeyGenerator(item => item.username);
```

<hr />
