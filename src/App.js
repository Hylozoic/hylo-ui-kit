/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'

// Insert Global CSS
import './css/global.scss'

import styles from './App.scss'

class App extends Component {
  render () {
    return (
      (
        <div>
          <div className='sheet' styleName='nav'>
            <div className='sheet__title' styleName='heading'>hylo-ui-kit</div>
            <ul styleName='menu'>
              <li styleName='menu__item'><Link to='/typography'>Typography</Link></li>
              <li styleName='menu__item'><Link to='/elements'>Elements</Link></li>
              <li styleName='menu__item'><Link to='/post-types'>Post Types</Link></li>
            </ul>
          </div>
          {this.props.children}
        </div>
      )
    )
  }
}

export default CSSModules(styles, {allowMultiple: true})(App)
