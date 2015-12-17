import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import header from './header'
import methods from './methods'

const rootReducer = combineReducers({
  header,
  methods,
  routing: routeReducer
})

export default rootReducer
