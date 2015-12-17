import { TOGGLE_METHOD } from '../constants/header'

export function toggleMethod(methodsLength) {
  return {
    type: TOGGLE_METHOD,
    methodsLength
  }
}
