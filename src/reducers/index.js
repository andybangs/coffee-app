import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import recipe from './recipe'

const rootReducer = combineReducers({
  recipe,
  routing: routeReducer
})

export default rootReducer
