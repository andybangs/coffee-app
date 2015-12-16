import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import methods from './methods'
import recipe from './recipe'

const rootReducer = combineReducers({
  methods,
  recipe,
  routing: routeReducer
})

export default rootReducer
