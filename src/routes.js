import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './App'
import Typography from './components/Typography'

export default
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Typography} />
      <Route path='typography' component={Typography} />
      <Route path='other' component={Typography} />
    </Route>
  </Router>
