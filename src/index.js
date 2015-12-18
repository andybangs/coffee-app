import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import { syncReduxAndRouter } from 'redux-simple-router'
import configureStore from './store/configureStore'
import App from './containers/App'
import Coffee from './components/Coffee'
import Water from './components/Water'
import Timer from './components/Timer'

const store = configureStore()
const history = createHashHistory({ queryKey: false })

syncReduxAndRouter(history, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="coffee" />
        <Route path="coffee" component={Coffee} />
        <Route path="water" component={Water} />
        <Route path="timer" component={Timer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
