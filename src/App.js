import React, { Component } from 'react'
import logo from './logo.svg'
import styles from './App.css'

class App extends Component {
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt='logo' />
          <h2>Welcome to the Hylo UI Kit</h2>
        </div>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
