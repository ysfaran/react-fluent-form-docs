---
id: use-fluent-form-item
title: useFluentFormItem
sidebar_label: useFluentFormItem
---

`<Config extends FormArrayConfig>(args: UseFluentFormItemArgs): UseFluentFormItem`

## Description

Hook to create form item.
Expects `UseFluentFormItemArgs`, which is an item of [`formArray`](use-fluent-form-array#formarray), as parameter.

:::info
`useFluentFormItem` only works in combination with `useFluentFormArray`
:::

```tsx
const UserRoleFormArray = () => {
  const { formArray } = useFluentFormArray(arrayConfig);

  return formArray.map(item => <UserRoleForm key={item.key} formItem={item} />);
};
```

```tsx
interface UserRoleFormProps {
  formItem: UseFluentFormItemArgs<typeof arrayConfig>;
}

const UserRoleForm: React.FC<UserRoleFormProps> = ({ formItem }) => {
  const {
    key,
    values,
    touched,
    validity,
    // same properties as returned by useFluentForm ..
    handleSubmit,
    reset,
    removeSelf
  } = useFluentFormItem(formItem);

  return (
    <div>
      <label>
        Username:
        <input {...fields.username} />
      </label>
      {/* ... */}
    </div>
  );
};
```

## Return type

Is equal to [return type of `useFluentForm`](use-fluent-form#returntype), with following additional properties:

### key

`string | number`

Unique key that is used to identify a form item.

<hr />

### removeSelf

`() => void`

Removes itself from the form array.

<hr />
