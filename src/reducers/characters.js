import { FETCHING, SUCCESS, FAILURE } from "../actions"
import { Right, Left } from "../lib"

export default (state = Right.of([]), action) => {
  switch (action.type) {
    // This would "empty" the state when a fetch request starts
    // but maybe I should just return state here
    case FETCHING:
      return Right.of([])
    // NOTE: Not sure if below will work
    case SUCCESS:
      return Right.of(action.payload)
    case FAILURE:
      return Left.of(action.payload)
    default:
      return state
  }
}
