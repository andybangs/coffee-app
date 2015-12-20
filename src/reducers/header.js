import { TOGGLE_METHOD, SELECT_METHOD } from '../constants/header'

const initialState = { selected: 0 }

export default function header(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_METHOD:
      return state.selected < action.methodsLength - 1 ?
        { selected: state.selected + 1 } :
        { selected: 0 }

    case SELECT_METHOD:
      return { selected: action.index }

    default:
      return state
  }
}
