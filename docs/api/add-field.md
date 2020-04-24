---
id: add-field
title: addField
sidebar_label: addField
---

`(fieldName: string, fieldCreator: (...args: any[]) => Field) => void`

## Descripiton

Adds a custom field to [`field`](field-instance) (`FieldCreator.prototype`) so it can be used just like the pre-defined fields (e.g. `text`, `radio` etc.). `addField` statments should be placed in a top level file.

## Arguments

### fieldName

`Fields`

Name of the field

<hr/>

### fieldCreator

`(...args: any[]) => Field`

A function that creates a subclass of `Field`

<hr/>

## Example

```ts
import { addField } from "react-fluent-form";

// only necessary for typescript because types need to be known at compile time
declare module "react-fluent-form" {
  interface FieldCreator {
    clearableText: (initalValue?: string) => ClearableTextField;
  }
}

addField(
  "clearableText",
  (initalValue = "") => new ClearableTextField(initialValue)
);
```

Using the previously added field would look like so:

```tsx
const formConfig = createForm()({
  username: field.clearableText("initial value").isClearable(false)
});
```
