const addOne = x => x + 1;

const f = 1 |> (x => x + 1);
console.log(f);

it('should fail', () => {
  expect(true).toBe(false);
})
