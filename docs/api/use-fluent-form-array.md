---
id: use-fluent-form-array
title: useFluentFormArray
sidebar_label: useFluentFormArray
---

`<Config extends FormArrayConfig>(config: Config) => UseFluentFormArray`

## Description

Hook to create form arrays.
Expects a [`FormArrayConfig`](form-array-config) as parameter:

```ts
type UserRoleForm = { username: string; role: string };

const arrayConfig = createFormArray<UserRoleForm>()({
  username: field.text(),
  role: field.select()
}).withInitalArray([{ username: "ysfaran", role: "admin" }]);

const {
  formArray,
  formStates,
  submitting,
  setInitialArray,
  addForm,
  removeForm,
  resetArray,
  getFormStateByKey,
  handleSubmit
} = useFluentFormArray(arrayConfig);
```

## Return type

### formArray

`UseFluentFormItemArgs[]`

Contains all items that need to be passed to [`useFluentFormItem`](use-fluent-form-item).

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
  const { fields } = useFluentFormItem(arrayConfig);

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

<hr />

### formStates

`FormArrayStates`

Array that contains information about states of each form item.
The state is equally structured as the [state returned by `useFluentForm`](use-fluent-form#returntype), but contains an additional `key` prop to identify the item:

```tsx
const { formStates } = useFluentFormArray(arrayConfig);
const { key, values, errors /* ... */ } = formStates[0];
```

<hr />

### submitting

`boolean`

`true` if form array is currently submitting else `false`.

<hr />

### addForm

`(args?: AddFormArgs) => void`

Add new item to form array.

`AddFormArgs`:

```ts
{
  // default: initial values of FormArrayConfig
  initialValues?: Partial<ValuesType>;
  // default: key counter or key generator passed to withKeyGenerator
  key?: string | number;
}
```

<hr />

### setInitialArray

`(initialArray: ValuesType[]) => void`

Sets initial array values of form array. This is important when resetting a form array.

<hr />

### removeForm

`(key: string | number) => void`

Removes form item with specified `key` from the form array.

<hr />

### getFormStateByKey

`(key: string | number) => FormItem | undefined`

Returns state of form item with specified key or `undefined` in case item is not in the form array.

<hr />

### handleSubmit

`(success?: Function, failure?: Function, options?: HandleSubmitOptions) => (event: any) => void`

Returns a submit handler. When this handler is called validation for all fields in all form items will be triggered. Works equally to [`handleSubmit` returned by `useFluentForm`](use-fluent-form#handlesubmit).

<hr />

### resetArray

`() => void`

Sets complete form array state to inital state. Initial values can be modified using [`setInitialArray`](#setinitialarray).

<hr />