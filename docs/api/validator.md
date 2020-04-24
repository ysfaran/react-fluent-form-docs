---
id: validator
title: Validator
sidebar_label: Validator
---

`abstract calss`

## Description

Base class of `DefaultValidator`, which is used for form validation by default (see [`withValidation`](form-config#withvalidation)). Can be extended to add custom validator (see [`withCustomValidator`](form-config#withcustomvalidator)).

## Generic types

### ValuesType

Type of field values.

<hr />

### Errors

Type of errors object. Needs to extend `ErrorsType`.

<hr />

## Members

### validateField

`<K extends keyof ValuesType>(field: K, values: ValuesType, context: object) => Errors[K] | void`

Validates one form field and returns validation error for field in case of validation failure else nothing. Needs to be overriden when custom validator is implemented.

<hr />

### validateAllFields

`(values: ValuesType, context: object) => Errors`

Validates all fields based on `validateField`. Can be overriden to e.g. improve performance.

<hr />