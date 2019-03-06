import characters from "./characters"
// Don't need fetching because we will model with Maybe type
// import fetching from "./fetching"

const combineReducers = obj => (initialState = {}, action) =>
  Object.entries(obj).reduce(
    (state, [key, reducerFn]) => ({
      ...state,
      [key]: reducerFn(state[key], action)
    }),
    initialState
  )

export default combineReducers({
  characters
})
