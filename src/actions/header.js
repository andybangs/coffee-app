import { TOGGLE_METHOD, SELECT_METHOD } from '../constants/header'

export function toggleMethod(methodsLength) {
  return {
    type: TOGGLE_METHOD,
    methodsLength
  }
}

export function selectMethod(index) {
  return {
    type: SELECT_METHOD,
    index
  }
}
