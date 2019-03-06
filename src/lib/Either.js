export class Right {
  constructor(x) {
    this.value = x
  }
  static of(x) {
    return new Right(x)
  }
  map(f) {
    return Right.of(f(this.value))
  }
}

export class Left {
  constructor(x) {
    this.value = x
  }
  static of(x) {
    return new Left(x)
  }
  map(_) {
    return this
  }
}

export const either = f => g => ({ constructor, value }) => {
  switch (constructor) {
    case Right:
      return f(value)
    case Left:
      return g(value)
    default:
      throw new Error("Constructor is not a valid Either type")
  }
}
