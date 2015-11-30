export const ADD_RECIPE = 'ADD_RECIPE'
export const DELETE_RECIPE = 'DELETE_RECIPE'
export const EDIT_RECIPE = 'EDIT_RECIPE'
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE'

export function addRecipe(recipe) {
  return {
    type: ADD_RECIPE,
    recipe
  }
}

export function deleteRecipe(id) {
  return {
    type: DELETE_RECIPE,
    id
  }
}

export function editRecipe(id, recipe) {
  return {
    type: EDIT_RECIPE,
    id,
    recipe
  }
}

export function favoriteRecipe(id) {
  return {
    type: FAVORITE_RECIPE,
    id
  }
}
