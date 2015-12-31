import { ADD_METHOD, DELETE_METHOD } from '../constants/method'


export default function methods(state, action) {
  switch (action.type) {
    case ADD_METHOD:
      if (state.length > 9) return state

      return state.concat({
        title: 'New Method',
        recipe: {
          coffee: 24,
          water: 360,
          ratio: 16
        },
        initialRecipe: {
          coffee: 24,
          water: 360,
          ratio: 16
        }
      })

    case DELETE_METHOD:
      if (state.length < 2) return state

      return state.filter((method, index) => index !== action.index)

    default:
      return state
  }
}
