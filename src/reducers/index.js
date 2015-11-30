import { combineReducers } from 'redux'
import recipes from './recipes'
import ingredient from './ingredient'

const rootReducer = combineReducers({
  recipes,
  ingredient
})

export default rootReducer
