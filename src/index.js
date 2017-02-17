import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './App'
import Typography from './components/Typography'

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Typography} />
      <Route path='typography' component={Typography} />
      <Route path='other' component={Typography} />
    </Route>
  </Router>
), document.getElementById('root'))
