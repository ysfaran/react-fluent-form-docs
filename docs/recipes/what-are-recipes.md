---
id: what-are-recipes
title: What are Recipes?
sidebar_label: What are Recipes?
---

Recipes are guidelines and solutions for common issues. These guidelines and solutions are not part of `react-fluent-form`'s code base, since they are more like plugins or an architectural guidance.

## Philosophy

- Keep the size of the library small
- Only provide features within the code base that require changes inside the library itself. As an example you can take [`FormArray`](advanced/form-array), which is a very common and complex topic.
- (Only provide features within the code base that are used by the majority of developers)

## What Recipes aren't

Recipes aren't:

- **an ideal solution for everyone:** it's recommended to adapt code provided in recipes, when needed
- **the only way to go:** recipes should not change the archtiecture arround them, but rather support it.
