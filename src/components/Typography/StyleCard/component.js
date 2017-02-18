import React, { PropTypes } from 'react'
import hyloAppTypographyStyles from '../../../hylo-app/css/typography.css'

export default function StyleCard ({ styleClassName, name, description, styleName, sampleKey, sample, children }) {
  const sampleTextOptions = {
    short: 'Five quacking zephyrs jolt my wax bed.',
    medium: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black.',
    long: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
  }
  const sampleText = children || sample || sampleTextOptions[sampleKey]
  let nameText = '.' + styleClassName
  if (name) nameText = `${name} (.${styleClassName})`
  function handleClick (event) {
    console.log(hyloAppTypographyStyles[styleClassName])
  }
  return (
    <div styleName='card' onClick={handleClick}>
      <div styleName='name'>
        {nameText}
      </div>
      <div styleName='attributes'>
        {description}
      </div>
      <div styleName='example-header' className={hyloAppTypographyStyles[styleClassName]}>
        {sampleText}
      </div>
    </div>
  )
}
StyleCard.propTypes = {
  styleClassName: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.string
}
