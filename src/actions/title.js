import { EDIT_METHOD_TITLE } from '../constants/title'

export function editMethodTitle(index, title) {
  return {
    type: EDIT_METHOD_TITLE,
    index,
    title
  }
}
