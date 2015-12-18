import { TOGGLE_UNIT } from '../constants/unit'

export function toggleUnit(ingredient, unit) {
  return {
    type: TOGGLE_UNIT,
    ingredient,
    unit
  }
}
