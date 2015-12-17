import { TOGGLE_METHOD } from '../constants/header'

const initialState = {
  selected: 0
}

export default function header(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_METHOD:
      return state.selected < action.methodsLength - 1 ?
        {
          ...state,
          selected: state.selected + 1
        } :
        {
          ...state,
          selected:0
        }

    default:
      return state
  }
}
