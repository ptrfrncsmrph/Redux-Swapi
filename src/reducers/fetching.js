import { FETCHING, SUCCESS, FAILURE } from "../actions"

export default (state = false, action) => {
  switch (action.type) {
    case FETCHING:
      return true
    case (SUCCESS, FAILURE):
      return false
    default:
      return state
  }
}
