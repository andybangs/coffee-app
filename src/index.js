import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import { syncReduxAndRouter } from 'redux-simple-router'
import configureStore from './store/configureStore'
import App from './containers/App'
import Edit from './containers/Edit'
import EditCoffee from './components/EditCoffee'
import EditWater from './components/EditWater'
import EditList from './components/EditList'
import Coffee from './components/Coffee'
import Water from './components/Water'
import Timer from './components/Timer'
import List from './components/List'

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
      <Route path="list" component={List} />
      <Route path="editlist" component={EditList} />
      <Route path="edit" component={Edit}>
        <Route path="coffee/:index" component={EditCoffee} />
        <Route path="water/:index" component={EditWater} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
