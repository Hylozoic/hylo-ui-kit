import React from 'react'
import cx from 'classnames'

const { string, bool } = React.PropTypes

export default function Button ({ url, size = 'large', overlaps, className }) {
  let styleName = cx('image', size, {overlaps})
  return <div styleName={styleName}
    className={cx(className, 'd-inline-block align-top img-thumbnail rounded-circle')}
    style={bgStyle(url)} />
}
Button.propTypes = {
  url: string.isRequired,
  size: string,
  className: string,
  overlaps: bool
}

function bgStyle (url) {
  if (!url) return {}
  const escaped = url.replace(/([\(\)])/g, (match, $1) => '\\' + $1) // eslint-disable-line
  return {backgroundImage: `url(${escaped})`}
}
