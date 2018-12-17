export const compose = (...fns) => {
  const [first, ...others] = fns;
  return others.reduce(
    (composed, fn) => (...args) => fn(composed(...args)),
    first
  );
};

export const transduce = (transducer, rf, init, subject) => {
  const xf = transducer(rf);
  return subject.reduce(xf, init);
};

export const mapping = fn => rf => (result, input) => rf(result, fn(input));
