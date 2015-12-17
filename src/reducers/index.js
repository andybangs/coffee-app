import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import header from './header'
import recipe from './recipe'

const rootReducer = combineReducers({
  header,
  recipe,
  routing: routeReducer
})

export default rootReducer
