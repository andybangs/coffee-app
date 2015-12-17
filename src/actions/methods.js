import { TOGGLE_METHOD } from '../constants/methods'

export function toggleMethod(methodsLength) {
  return {
    type: TOGGLE_METHOD,
    methodsLength
  }
}
