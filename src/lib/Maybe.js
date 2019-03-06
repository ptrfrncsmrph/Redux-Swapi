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
}

export const maybe = x => fn => ({ constructor, value }) => {
  switch (constructor) {
    case Just:
      return fn(value)
    default:
      return x
  }
}
