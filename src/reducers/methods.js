import { SELECT_METHOD } from '../constants/methods'

const initialState = {
  methods: ["aeropress", "chemex", "clever", "hario v60", "kalita wave", "press pot"],
  selected: 1
}

export default function methods(state = initialState, action) {
  const { methods, selected } = state
  const { index } = action

  switch (action.type) {
    case SELECT_METHOD:

      return selected < methods.length - 1 ?
        {
          ...state,
          selected: selected + 1
        } :
        {
          ...state,
          selected: 0
        }

    default:
      return state
  }
}
