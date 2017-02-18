/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import styles from './App.css'
class App extends Component {
  render () {
    return (
      (
        <div>
          <div styleName='sheet'>
            <h2>hylo-ui-kit</h2>
            <ul styleName='menu'>
              <li styleName='menu-item'><Link to='/typography'>Typography</Link></li>
              <li styleName='menu-item'><Link to='/elements'>Elements</Link></li>
            </ul>
          </div>
          {this.props.children}
        </div>
      )
    )
  }
}

export default CSSModules(App, styles, {allowMultiple: true})
