import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import { syncReduxAndRouter } from 'redux-simple-router'
import configureStore from './store/configureStore'
import App from './containers/App'
import Edit from './containers/Edit'
import Calculator from './components/Calculator'
import Timer from './components/Timer'
import List from './components/List'
import EditList from './components/EditList'

const store = configureStore()
const history = createHashHistory({ queryKey: false })

syncReduxAndRouter(history, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="coffee/0" />
        <Route path="coffee/:index" component={Calculator} />
        <Route path="timer/:index" component={Timer} />
      </Route>
      <Route path="edit" component={Edit}>
        <Route path="coffee/:index" component={Calculator} />
      </Route>
      <Route path="list" component={List} />
      <Route path="editlist" component={EditList} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
