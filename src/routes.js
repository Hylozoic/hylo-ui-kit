import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './App'

// LEJ: The following throws and error looking for Typography.js
//    import Typography from './components/Typography'
// Need to figure-out why webpack? is defaulting to adding the .js
import Typography from './components/Typography/'
import Elements from './components/Elements/'
import PostTypes from './components/PostTypes/'

export default
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Typography} />
      <Route path='typography' component={Typography} />
      <Route path='elements' component={Elements} />
      <Route path='post-types' component={PostTypes} />
    </Route>
  </Router>
