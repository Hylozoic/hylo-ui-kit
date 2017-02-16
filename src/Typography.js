import React from 'react'
import styles from './Typography.css'
import CSSModules from 'react-css-modules'

function Typography (props) {
  return <div styleName='big-red'>
    Big red
    <div styleName='little-black'>
      little black
    </div>
  </div>
}

export default CSSModules(Typography, styles)
