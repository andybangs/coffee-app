import { ADD_METHOD, DELETE_METHOD } from '../constants/method'

export function addMethod() {
  return {
    type: ADD_METHOD
  }
}

export function deleteMethod(index) {
  return {
    type: DELETE_METHOD,
    index
  }
}
