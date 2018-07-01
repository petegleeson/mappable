const objectFunctor = (fn, obj) =>
  Object.keys(obj).reduce((acc, key) => ({ ...acc, [key]: fn(obj[key]) }), {});

const promiseFunctor = (fn, promise) => promise.then(fn);

const arrayFunctor = (fn, array) => array.map(fn);

const functionFunctor = (f, g) => x => f(g(x));

const map = (fn, customFunctor) => subject => {
  const functor = (() => {
    if (customFunctor) {
      return customFunctor;
    } else if (subject instanceof Promise) {
      return promiseFunctor;
    } else if (subject instanceof Array) {
      return arrayFunctor;
    } else if (subject instanceof Array) {
      return arrayFunctor;
    } else if (subject instanceof Function) {
      return functionFunctor;
    } else if (subject instanceof Object) {
      return objectFunctor;
    }
  })();
  return functor(fn, subject);
};

export default map;
