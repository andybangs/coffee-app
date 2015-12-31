import { RESET_RECIPE, EDIT_INITIAL_RECIPE } from '../constants/initialRecipe'

export function resetRecipe(index) {
  return {
    type: RESET_RECIPE,
    index
  }
}

export function editInitialRecipe(index) {
  return {
    type: EDIT_INITIAL_RECIPE,
    index
  }
}
