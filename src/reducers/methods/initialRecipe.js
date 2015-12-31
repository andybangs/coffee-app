import { RESET_RECIPE, EDIT_INITIAL_RECIPE } from '../../constants/initialRecipe'

export default function initialRecipe(state, action) {
  switch (action.type) {
    case RESET_RECIPE:
      if (state.index !== action.index) {
        return state.method
      }

      return {
        ...state.method,
        recipe: Object.assign({}, state.method.initialRecipe)
      }

    case EDIT_INITIAL_RECIPE:
      if (state.index !== action.index) {
        return state.method
      }

      return {
        ...state.method,
        initialRecipe: Object.assign({}, state.method.recipe)
      }

    default:
      return state
  }
}
