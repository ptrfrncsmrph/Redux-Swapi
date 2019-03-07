import { FETCHING, SUCCESS, FAILURE } from "../actions"
import { Right, Left, Nothing as Nothing_, Just } from "../lib"

const Nothing = Nothing_.of()

// State :: Either Error (Maybe Data)
// characters :: (State, Action) -> State
export default (state = Right.of(Nothing), action) => {
  switch (action.type) {
    case FETCHING:
      return Right.of(Nothing)
    case SUCCESS:
      return Right.of(Just.of(action.payload))
    case FAILURE:
      return Left.of(action.payload)
    default:
      return state
  }
}
