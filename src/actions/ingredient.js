export const INCREMENT_INGREDIENT = 'INCREMENT_INGREDIENT'
export const DECREMENT_INGREDIENT = 'DECREMENT_INGREDIENT'

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
