# mappable

Map anything and everything in the same way. A `map` function built for the [Pipeline Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Pipeline_operator).

**Experimental: use this at your own risk ☢️**

## Installation

```
yarn add @mappable/map
```

## Usage

Here are examples of mapping Javascript language types.

```js
import map from '@mappable/map';

// mapping an array
[1, 2, 3] |> map(i => i + 1) |> map(i => i * 2);

// mapping a Promise
Promise.resolve(1) |> map(i => i + 1);

// mapping an object
{ value: 1 } |> map(i => i + 1);

// mapping a function
(x => x + 2) |> map(i => i + 1);
```

Here is an example of how you can map your own types.

```js
import map from "@mappable/map";

// your own type
const tree = {
  value: 1,
  children: [{ value: 2, children: [] }, { value: 3, children: [] }]
};

// describe how to map your type
const treeMapper = fn => tree => {
  const { value, children } = tree;
  return {
    value: fn(value),
    children: children |> map(treeMapper(fn))
  };
};

// new tree with all values incremented
tree |> map(i => i + 1, treeFunctor);
```
