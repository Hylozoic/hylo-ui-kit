import React from 'react'
import StyleCard from './StyleCard'
import ColorSample from './ColorSample'

export default function Typography (props) {
  return <div>
    <div styleName='sheet'>
      <div styleName='title'>Typography</div>
      <div styleName='section-title'>Headers</div>
      <div styleName='section'>
        <div styleName='row'>
          <StyleCard styleClassName='h-display'
            description='Circular Bold / 32pt, -0.5 ch, 36 line / Color: 2C4059'
            sampleKey='short' />
          <StyleCard styleClassName='h-subheadline' name='h2'
            description='Circular Book / 18pt, 0 ch, 22 line / Color: 2C4059'
            sampleKey='short' />
        </div>
        <div styleName='row'>
          <StyleCard styleClassName='h-headline' name='h1'
            description='Circular Medium / 24pt, 0 ch, 28 line / Color: 2C4059'
            sampleKey='short' />
          <StyleCard styleClassName='h-minor' name='h3'
            description='Circular Bold / 14pt, 0 ch, 18 line / Color: 2C4059'
            sampleKey='short' />
        </div>
      </div>
      <div styleName='section-title'>Body Styles</div>
      <div styleName='section'>
        <div styleName='row'>
          <StyleCard styleClassName='body-drk-lg'
            description='Circular Book / 18pt, 0 ch, 24 line / Color: 2C4059 80%'
            sampleKey='medium' />
          <StyleCard styleClassName='body-drk-sm'
            description='Circular Book / 15pt, 0 ch, 22 line / Color: 2C4059 80%'
            sampleKey='medium' />
        </div>
        <div styleName='row'>
          <StyleCard styleClassName='body-lt-lg'
            description='Circular Book / 17pt, 0 ch, 25 line / Color: 2C4059 60%'
            sampleKey='medium' />
          <StyleCard styleClassName='body-lt-sm'
            description='Circular Book / 15pt, 0 ch, 22 line / Color: 2C4059 60%'
            sampleKey='medium' />
        </div>
      </div>
      <div styleName='row'>
        <div styleName='section-title flex-item left-column'>Captions & Tags</div>
        <div styleName='section-title flex-item'>Buttons</div>
      </div>
      <div styleName='row'>
        <div styleName='column flex-item left-column'>
          <div styleName='section'>
            <StyleCard styleClassName='caption-drk-lg' name='Caption 13pt - Black'
              description='Circular Book / 14pt, 0 ch, 18 line / Color: 2C4059 80%'
              sampleKey='long' />
            <StyleCard styleClassName='caption-lt-lg' name='Caption 13pt - Grey'
              description='Circular Book / 14pt, 0 ch, 18 line / Color: 2C4059 80%'
              sampleKey='long' />
            <StyleCard styleClassName='tag' name='.tag (Tag)'
              description='Circular Bold / 10pt, 0.6 ch, 14 line / Color: 8DABC4'
              sample='DASHBOARDS' />
          </div>
        </div>
        <div styleName='column flex-item'>
          <div styleName='section'>
            <StyleCard styleClassName='button' name='Button - Regular'
              description='Circular Medium / 16pt, 0 ch, 20 line / Color: 0DC3A0'
              sample='Save changes' />
            <StyleCard styleClassName='button-sm' name='Button - Small'
              description='Circular Bold / 10pt, 0.6 ch, 14 line / Color: 0DC3A0'
              sample='Learn more' />
          </div>
          <div styleName='section-title'>Other</div>
          <div styleName='section'>
            <StyleCard styleClassName='cards' name='User Name - Cards'
              description='Circular Bold / 14pt, 0 ch, 20 line / Color: 2C4059'
              sample='Steven Pham' />
            <StyleCard styleClassName='timestamp' name='Timestamp'
              description='Circular Book / 13pt, 0 ch, 16 line / Color: 2C4059 60%'
              sample='6 days ago' />
          </div>
        </div>
      </div>
    </div>
    <div styleName='sheet'>
      <div styleName='title'>Colors</div>
      <div styleName='row'>
        <ColorSample color='#2C4059' description='Backgrounds, Header text styles' />
        <ColorSample color='#2C4059' opacity='0.8' description='Body black text styles' />
        <ColorSample color='#FFFFFF' textColor='#879BAB' borderColor='#DCDCDC' description='Main background, Card Background' />
        <ColorSample color='#0DC3A0' />
        <ColorSample color='#EAE6FA' textColor='#BB60A8' />
      </div>
    </div>
  </div>
}
