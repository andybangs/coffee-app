import { EDIT_METHOD_TITLE } from '../constants/title'

export default function title(state, action) {

  switch (action.type) {
    case EDIT_METHOD_TITLE:
      if (state.index !== action.index) {
        return state.method
      }

      return {
        ...state.method,
        title: action.title
      }

    default:
      return state
  }
}
