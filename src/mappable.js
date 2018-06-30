const mapSymbol = Symbol("mappable");

const objectFunctor = (fn, obj) => {
  return Object.keys(obj).reduce(
    (acc, key) => ({ ...acc, [key]: fn(obj[key]) }),
    {}
  );
};

const promiseFunctor = (fn, promise) => {
  return promise.then(fn);
};

const arrayFunctor = (fn, array) => {
  return array.map(fn);
};

const functionFunctor = (f, g) => x => f(g(x));

class Mappable {
  constructor(functor, value) {
    this.functor = functor;
    this.value = value;
  }
}

// a -> Mappable a
const mappable = functor => value => {
  return new Mappable(functor, value);
};

export const map = fn => subject => {
  if (subject instanceof Mappable) {
    return subject.functor(fn, subject.value);
  } else if (subject instanceof Promise) {
    return promiseFunctor(fn, subject);
  } else if (subject instanceof Array) {
    return arrayFunctor(fn, subject)
  } else if (subject instanceof Array) {
    return arrayFunctor(fn, subject)
  } else if (subject instanceof Function) {
    return functionFunctor(fn, subject)
  } else if (subject instanceof Object) {
    return objectFunctor(fn, subject);
  }
  return subject;
};

export default mappable;
