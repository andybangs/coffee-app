import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import load from '../middleware/load'
import save from '../middleware/save'

export default function configureStore(initialState) {
  const creatStoreWithMiddleware = applyMiddleware(load, save)(createStore)
  const store = creatStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
