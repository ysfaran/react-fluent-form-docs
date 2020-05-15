---
id: grouping-field-data
title: Grouping Field Data
sidebar_label: Grouping Field Data
---

`useFluentForm` returns multiple objects containing data for each field: `values`, `errors`, `fields` etc..
These field data are grouped by their concerns (e.g. the concern of `values` is to store all current values).
This can be perfectly fine for a lot of apps, but for others it could limit the possiblities to design the architecture.

It might be more useful to put all information, that belongs to a field, into one place. Instead of having `values`, `errors`, `fields` etc. you could've e.g. `name` and `password` objects that contain properties for `values`, `errors`, `fields` etc..

## useFieldData

`useFieldData` receives a fluent form instance as parameter and will put all information for each field in a seperate object:

```tsx
import { useMemo } from "react";
import {
  ExtractErrorsType,
  ExtractFieldsType,
  UseFluentForm,
  FormConfig,
  MappedFields,
  ExtractValuesType
} from "react-fluent-form";

export type FieldData<Config extends FormConfig> = {
  [field in keyof ExtractFieldsType<Config>]: {
    field: MappedFields<ExtractFieldsType<Config>>[field];
    errors: ExtractErrorsType<Config>[field];
    validity: boolean | undefined;
    touched: boolean | undefined;
    value: ExtractValuesType<Config>[field];
  };
};

export function useFieldData<Config extends FormConfig>({
  fields,
  errors,
  validity,
  touched,
  values
}: UseFluentForm<Config>): FieldData<Config> {
  return useMemo(() => {
    const fieldData = {} as FieldData<Config>;
    const fieldKeys = Object.keys(fields) as Array<keyof FieldData<Config>>;

    for (const key of fieldKeys) {
      fieldData[key] = {
        field: fields[key],
        errors: errors[key],
        validity: validity[key],
        touched: touched[key],
        value: values[key]
      };
    }

    return fieldData;
  }, [fields, errors, validity, touched, values]);
};

```

## Example

Following example contains a fluent form with two fields: `name` and `password`. `useFieldData` will reorganize the state returned by `useFluentForm` and group field data by the field itself:

```jsx
interface UserFormModel {
  name: string;
  password: string;
}

const userConfig = createConfig<UserFormModel>({
  name: field.text(),
  password: field.password()
})

function UserForm() {
  const userForm = useFluentForm(userConfig);
  
  const { name, password } = useFieldData(userForm);

  // name and password will have following properties:
  // field, errors, validity, touched and value
  
  return (
    <NameField {...name} />
    <PasswordField {...password} />
    // ...
  );
}
```
