import { INCREMENT_INGREDIENT, DECREMENT_INGREDIENT, TOGGLE_EDIT, UPDATE_WEIGHT } from '../actions/ingredient'

const initialState = {
  weight: 0,
  edit: false
}

export default function ingredient(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_INGREDIENT:
      return Object.assign({}, state, { weight: state.weight + 1 });
    case DECREMENT_INGREDIENT:
      return Object.assign({}, state, { weight: state.weight - 1 });
    case TOGGLE_EDIT:
      return Object.assign({}, state, { edit: !state.edit });
    case UPDATE_WEIGHT:
      return Object.assign({}, state, { weight: action.weight });
    default:
      return state
  }
}
