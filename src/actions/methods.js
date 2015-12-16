import { SELECT_METHOD } from '../constants/methods'

export function selectMethod(index) {
  return {
    type: SELECT_METHOD,
    index
  }
}
