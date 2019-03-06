import { FETCHING, SUCCESS, FAILURE } from "../actions"
import { Right, Left, Nothing as Nothing_, Just } from "../lib"

const Nothing = Nothing_.of()

export default (state = Right.of(Nothing), action) => {
  switch (action.type) {
    case FETCHING:
      return Right.of(Nothing)
    case SUCCESS:
      return Right.of(Just.of(action.payload))
    case FAILURE:
      return Left.of(Just.of(action.payload))
    default:
      return state
  }
}
