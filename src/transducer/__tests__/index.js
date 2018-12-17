import { mapping, transduce, compose } from "../";

test("should create a mapping transducer", () => {
  const conj = (result, input) => [...result, input];
  const increment = compose(
    mapping(x => x + 1),
    mapping(x => x + 2)
  );
  expect(transduce(increment, conj, [], [1, 2, 3, 4])).toEqual([4, 5, 6, 7]);
});
