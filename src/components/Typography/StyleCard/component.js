import React, { PropTypes } from 'react'

export default function StyleCard ({ styleClassName, name, description, styleName, sampleKey, sample, children }) {
  const sampleTextOptions = {
    short: 'Five quacking zephyrs jolt my wax bed.',
    medium: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black.',
    long: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
  }
  const sampleText = children || sample || sampleTextOptions[sampleKey]
  let nameText = '.' + styleClassName
  if (name) nameText = `${name} (.${styleClassName})`
  return (
    <div styleName='card'>
      <div styleName='name'>
        {nameText}
      </div>
      <div styleName='attributes'>
        {description}
      </div>
      <div styleName='example-header' className={styleClassName}>
        {sampleText}
      </div>
    </div>
  )
}
StyleCard.defaultProps = {
  styleName: ''
}
StyleCard.propTypes = {
  styleClassName: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.string
}
