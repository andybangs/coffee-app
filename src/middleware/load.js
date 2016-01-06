import { INIT, LOAD_STATE } from '../constants/middleware'

export default store => next => action => {
    if (action.type === INIT) {
      const storedState = JSON.parse(localStorage.getItem('COFFEE_APP'))

      if (storedState) {
          store.dispatch({
              type: LOAD_STATE,
              payload: storedState
          })
      }
    }

    next(action)
}
