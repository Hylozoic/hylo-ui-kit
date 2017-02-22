// RFC: Started out calling this Avatar, but renamed to RoundImage as it doesn't
// replicate all the functionality of Avatar from the current app. Imagining
// this component will be imported by the Avatar component.
// Not sure if this is too much granularity.

import React from 'react'

const { string, bool } = React.PropTypes

export default function RoundImage ({ url, size = 'large', overlaps }) {
  let styleName = `image ${size}`
  if (overlaps) styleName += ' overlaps'
  return <div styleName={styleName}
    className='d-inline-block align-middle img-thumbnail rounded-circle'
    style={bgStyle(url)} />
}
RoundImage.propTypes = {
  url: string.isRequired,
  size: string,
  overlaps: bool
}

function bgStyle (url) {
  if (!url) return {}
  const escaped = url.replace(/([\(\)])/g, (match, $1) => '\\' + $1) // eslint-disable-line
  return {backgroundImage: `url(${escaped})`}
}
