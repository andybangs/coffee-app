import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import methods from './methods'
import unit from './unit'

const rootReducer = combineReducers({
  methods,
  unit,
  routing: routeReducer
})

export default rootReducer
