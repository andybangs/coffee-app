import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import header from './header'
import methods from './methods'
import unit from './unit'

const rootReducer = combineReducers({
  header,
  methods,
  unit,
  routing: routeReducer
})

export default rootReducer
