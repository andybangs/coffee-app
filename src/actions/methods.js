import { RESET_RECIPE, EDIT_METHOD_RECIPE } from '../constants/methods'

export function resetRecipe(title) {
  return {
    type: RESET_RECIPE,
    title
  }
}

export function editMethodRecipe(index) {
  return {
    type: EDIT_METHOD_RECIPE,
    index
  }
}
