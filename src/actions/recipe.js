import { INC_VAL, DEC_VAL, SET_VAL, INC_RATIO, DEC_RATIO, TOGGLE_UNIT } from '../constants/recipe'

export function incVal(ingredient) {
  return {
    type: INC_VAL,
    ingredient
  }
}

export function decVal(ingredient) {
  return {
    type: DEC_VAL,
    ingredient
  }
}

export function setVal(ingredient, val) {
  return {
    type: SET_VAL,
    ingredient,
    val
  }
}

export function incRatio(toBeUpdated) {
  return {
    type: INC_RATIO,
    toBeUpdated
  }
}

export function decRatio(toBeUpdated) {
  return {
    type: DEC_RATIO,
    toBeUpdated
  }
}

export function toggleUnit(toBeUpdated) {
  return {
    type: TOGGLE_UNIT,
    toBeUpdated
  }
}
