export class Just {
  constructor(x) {
    this.value = x
  }
  static of(x) {
    return new Just(x)
  }
  map(f) {
    return Just.of(f(this.value))
  }
  // chain :: (a -> Maybe b) ~> Maybe a -> Maybe b
  chain(f) {
    return f(this.value)
  }
  fromJust() {
    return this.value
  }
}

export class Nothing {
  constructor() {
    this.value = undefined
  }
  static of() {
    return new Nothing()
  }
  map(_) {
    return Nothing.of()
  }
  // chain :: (a -> Maybe b) ~> Maybe a -> Maybe b
  chain(_) {
    return Nothing.of()
  }
}

export const maybe = (x, fn) => ({ constructor, value }) => {
  switch (constructor) {
    case Just:
      return fn(value)
    case Nothing:
      return x
    default:
      throw new Error(`${constructor} is not a valid Maybe type`)
  }
}

export const fromJust = J => J.fromJust()
