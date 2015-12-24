import { ADD_METHOD, DELETE_METHOD, RESET_RECIPE, EDIT_METHOD_RECIPE } from '../constants/methods'

export function addMethod() {
  return {
    type: ADD_METHOD
  }
}

export function deleteMethod(index) {
  return {
    type: DELETE_METHOD,
    index
  }
}

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
