export const INCREMENT_INGREDIENT = 'INCREMENT_INGREDIENT'
export const DECREMENT_INGREDIENT = 'DECREMENT_INGREDIENT'
export const TOGGLE_EDIT = 'TOGGLE_EDIT'
export const UPDATE_WEIGHT = 'UPDATE_WEIGHT'

export function increment() {
  return {
    type: INCREMENT_INGREDIENT
  }
}

export function decrement() {
  return {
    type: DECREMENT_INGREDIENT
  }
}

export function toggleEdit() {
  return {
    type: TOGGLE_EDIT
  }
}

export function updateWeight(weight) {
  return {
    type: UPDATE_WEIGHT,
    weight
  }
}
