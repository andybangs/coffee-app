import { INCREMENT_INGREDIENT, DECREMENT_INGREDIENT } from '../actions/ingredient'

export default function ingredient(state = 0, action) {
  switch (action.type) {
    case INCREMENT_INGREDIENT:
      return state + 1
    case DECREMENT_INGREDIENT:
      return state - 1
    default:
      return state
  }
}
