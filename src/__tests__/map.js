import map from "../map";

const obj = {
  one: 1,
  two: 2
};

it("should map an object", () => {
  const res = obj |> map(i => i + 1);
  expect(res).toEqual({ one: 2, two: 3 });
});

it("should be able to map multiple times", () => {
  const res = obj |> map(i => i + 1) |> map(i => i * 2);
  expect(res).toEqual({ one: 4, two: 6 });
});

it("should map a promise", async () => {
  const res = Promise.resolve(1) |> map(i => i + 1);
  expect(await res).toEqual(2);
});

it("should map an array", () => {
  const res = [1, 2, 3] |> map(i => i + 1);
  expect(res).toEqual([2, 3, 4]);
});

it("should map a function", () => {
  const res = (x => x + 1) |> map(i => i + 10);
  expect(res(1)).toEqual(12);
});

const parent = {
  value: 1,
  children: [{ value: 2, children: [] }, { value: 3, children: [] }]
};

it("should map custom object", () => {
  const treeFunctor = fn => tree => {
    const { value, children } = tree;
    return {
      value: fn(value),
      children: children |> map(treeFunctor(fn))
    };
  };
  const res = parent |> map(i => i + 1, treeFunctor);
  expect(res).toEqual({
    value: 2,
    children: [{ value: 3, children: [] }, { value: 4, children: [] }]
  });
});
