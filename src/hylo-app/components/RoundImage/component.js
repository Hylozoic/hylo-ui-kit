// RFC: Started out calling this Avatar, but renamed to RoundImage as it doesn't
// replicate all the functionality of Avatar from the current app. Imagining
// this component will be imported by the Avatar component.
// Not sure if this is too much granularity.

import React from 'react'

const { string } = React.PropTypes

export default function RoundImage ({ url, size = 'large' }) {
  return <div styleName={size} style={bgStyle(url)} />
}
RoundImage.propTypes = {
  url: string.isRequired,
  size: string
}

const bgStyle = url => {
  if (!url) return {}
  const escaped = url.replace(/([\(\)])/g, (match, $1) => '\\' + $1) // eslint-disable-line
  return {backgroundImage: `url(${escaped})`}
}
