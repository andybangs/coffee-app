import { INC_VAL, DEC_VAL, SET_VAL, INC_RATIO, DEC_RATIO, TOGGLE_UNIT } from '../constants/methods'

export function incVal(title, ingredient, unit) {
  return {
    type: INC_VAL,
    title,
    ingredient,
    unit
  }
}

export function decVal(title, ingredient, unit) {
  return {
    type: DEC_VAL,
    title,
    ingredient,
    unit
  }
}

export function setVal(title, ingredient, unit, val) {
  return {
    type: SET_VAL,
    title,
    ingredient,
    unit,
    val
  }
}

export function incRatio(title, toBeUpdated) {
  return {
    type: INC_RATIO,
    title,
    toBeUpdated
  }
}

export function decRatio(title, toBeUpdated) {
  return {
    type: DEC_RATIO,
    title,
    toBeUpdated
  }
}

export function toggleUnit(title, ingredient) {
  return {
    type: TOGGLE_UNIT,
    title,
    ingredient
  }
}
