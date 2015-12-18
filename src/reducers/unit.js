import { TOGGLE_UNIT } from '../constants/unit'

const initialState = {
  coffee: 'g',
  water: 'g'
}

// toggleUnit :: String -> String
function toggleUnit(unit) {
  return unit === 'g' ? 'oz' : 'g'
}

export default function header(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_UNIT:
      return action.ingredient === 'coffee' ?
        {
          ...state,
          coffee: toggleUnit(action.unit)
        } :
        {
          ...state,
          water: toggleUnit(action.unit)
        }

    default:
      return state
  }
}
