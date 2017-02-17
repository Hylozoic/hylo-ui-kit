import React from 'react'
import styles from './Typography.css'
import CSSModules from 'react-css-modules'

function Typography (props) {
  return <div styleName='page'>
    <div styleName='title'>Typography</div>
    <div styleName='section-title'>Headers</div>
    <div styleName='section'>
      <div styleName='style-card-row'>
        <div styleName='style-card'>
          <div styleName='style-name'>
            Display
          </div>
          <div styleName='style-attributes'>
            Circular Bold / 32pt, -0.5 ch, 36 line / Color: 2C4059
          </div>
          <div className='h-display'>
            Five quacking zephyrs jolt my wax bed.
          </div>
        </div>
        <div styleName='style-card'>
          <div styleName='style-name'>
            .h-subheadline, h2
          </div>
          <div styleName='style-attributes'>
            Circular Book / 18pt, 0 ch, 22 line / Color: 2C4059
          </div>
          <div className='h-subheadline'>
            Five quacking zephyrs jolt my wax bed.
          </div>
        </div>
      </div>
      <div styleName='style-card-row' className='no-bottom-border'>
        <div styleName='style-card'>
          <div styleName='style-name'>
            .h-headline, h1
          </div>
          <div styleName='style-attributes'>
            Circular Medium / 24pt, 0 ch, 28 line / Color: 2C4059
          </div>
          <div className='h-headline'>
            Five quacking zephyrs jolt my wax bed.
          </div>
        </div>
        <div styleName='style-card'>
          <div styleName='style-name'>
            .h-minor, h3
          </div>
          <div styleName='style-attributes'>
            Circular Bold / 14pt, 0 ch, 18 line / Color: 2C4059
          </div>
          <div className='h-minor'>
            Five quacking zephyrs jolt my wax bed.
          </div>
        </div>
      </div>
    </div>
    <div styleName='section-title'>Body Styles</div>
    <div styleName='section'>
      <div styleName='style-card-row'>
        <div styleName='style-card'>
          <div styleName='style-name'>
            Body 18pt - Black
          </div>
          <div styleName='style-attributes'>
            Circular Book / 18pt, 0 ch, 24 line / Color: 2C4059 80%
          </div>
          <div styleName='style-example' className='body-dark-lg'>
            Apparently we had reached a great height in atmosphere, for the sky was a dead black.
          </div>
        </div>
        <div styleName='style-card'>
          <div styleName='style-name'>
            Body 15pt - Black
          </div>
          <div styleName='style-attributes'>
            Circular Book / 15pt, 0 ch, 22 line / Color: 2C4059 80%
          </div>
          <div styleName='style-example' className='body-dark-sm'>
            Apparently we had reached a great height in atmosphere, for the sky was a dead black.
          </div>
        </div>
      </div>
      <div styleName='style-card-row'>
        <div styleName='style-card'>
          <div styleName='style-name'>
            Body 17pt - Grey
          </div>
          <div styleName='style-attributes'>
            Circular Book / 17pt, 0 ch, 25 line / Color: 2C4059 60%
          </div>
          <div styleName='style-example' className='body-lt-lg'>
            Apparently we had reached a great height in atmosphere, for the sky was a dead black.
          </div>
        </div>
        <div styleName='style-card'>
          <div styleName='style-name'>
            Body 15pt - Grey
          </div>
          <div styleName='style-attributes'>
            Circular Book / 15pt, 0 ch, 22 line / Color: 2C4059 60%
          </div>
          <div styleName='style-example' className='body-lt-sm'>
            Apparently we had reached a great height in atmosphere, for the sky was a dead black.
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default CSSModules(Typography, styles)
