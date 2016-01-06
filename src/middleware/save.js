import { RESET_RECIPE, EDIT_INITIAL_RECIPE } from '../constants/initialRecipe'
import { EDIT_METHOD_TITLE } from '../constants/title'
import { ADD_METHOD, DELETE_METHOD } from '../constants/method'
import { TOGGLE_UNIT } from '../constants/unit'

const saveActions = [RESET_RECIPE, EDIT_INITIAL_RECIPE, EDIT_METHOD_TITLE, ADD_METHOD, DELETE_METHOD, TOGGLE_UNIT]

export default store => next => action => {
    next(action)

    if (saveActions.indexOf(action.type) !== -1) {
      const state = store.getState()
      localStorage.setItem('COFFEE_APP', JSON.stringify(state));
    }
}
