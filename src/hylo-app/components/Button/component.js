import React from 'react'
import cx from 'classnames'

const { string, bool } = React.PropTypes

export default function Button ({ label, color = 'green', hover, clicked, narrow, className }) {
  let styleName = cx('button', color, {hover, clicked, narrow})
  return <div styleName={styleName}
    className={className}>
    {label}
  </div>
}
Button.propTypes = {
  label: string.isRequired,
  colorStyle: string,
  className: string,
  hover: bool,
  clicked: bool,
  narrow: bool
}
