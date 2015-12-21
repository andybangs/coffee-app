import { INC_VAL, DEC_VAL, SET_VAL, INC_RATIO, DEC_RATIO, RESET_RECIPE, ADD_METHOD, DELETE_METHOD } from '../constants/methods'

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

export function resetRecipe(title) {
  return {
    type: RESET_RECIPE,
    title
  }
}

export function deleteMethod(index) {
  return {
    type: DELETE_METHOD,
    index
  }
}
