import React from 'react'
import StyleCard from './StyleCard'
import ColorSample from './ColorSample'

export default function Typography (props) {
  return <div>
    <div styleName='sheet'>
      <div styleName='sheet__title'>Typography</div>
      <div styleName='section'>
        <div styleName='section__title'>Headers</div>
        <div styleName='section__box'>
          <StyleCard styleClassName='h-display' name='display'
            description='Circular Bold / 32pt, -0.5 ch, 36 line / Color: 2C4059'
            sampleKey='short' />
          <StyleCard styleClassName='h-subheadline' name='h2'
            description='Circular Book / 18pt, 0 ch, 22 line / Color: 2C4059'
            sampleKey='short' />
          <StyleCard styleClassName='h-headline' name='h1'
            description='Circular Medium / 24pt, 0 ch, 28 line / Color: 2C4059'
            sampleKey='short' noBottomBorder />
          <StyleCard styleClassName='h-minor' name='h3'
            description='Circular Bold / 14pt, 0 ch, 18 line / Color: 2C4059'
            sampleKey='short' noBottomBorder />
        </div>
      </div>
      <div styleName='section'>
        <div styleName='section__title'>Body Styles</div>
        <div styleName='section__box'>
          <StyleCard styleClassName='body-drk-lg'
            description='Circular Book / 18pt, 0 ch, 24 line / Color: 2C4059 80%'
            sampleKey='medium' />
          <StyleCard styleClassName='body-drk-sm'
            description='Circular Book / 15pt, 0 ch, 22 line / Color: 2C4059 80%'
            sampleKey='medium' />
          <StyleCard styleClassName='body-lt-lg'
            description='Circular Book / 17pt, 0 ch, 25 line / Color: 2C4059 60%'
            sampleKey='medium' noBottomBorder />
          <StyleCard styleClassName='body-lt-sm'
            description='Circular Book / 15pt, 0 ch, 22 line / Color: 2C4059 60%'
            sampleKey='medium' noBottomBorder />
        </div>
      </div>
      <div styleName='sheet__flexbox'>
        <div styleName='sheet__flexbox__item'>
          <div styleName='section'>
            <div styleName='section__title'>Captions & Tags</div>
            <div styleName='section__box'>
              <StyleCard styleClassName='caption-drk-lg' name='Caption 13pt - Black'
                description='Circular Book / 14pt, 0 ch, 18 line / Color: 2C4059 80%'
                sampleKey='long' />
              <StyleCard styleClassName='caption-lt-lg' name='Caption 13pt - Grey'
                description='Circular Book / 14pt, 0 ch, 18 line / Color: 2C4059 80%'
                sampleKey='long' />
              <StyleCard styleClassName='tag' name='Tag'
                description='Circular Bold / 10pt, 0.6 ch, 14 line / Color: 8DABC4'
                sample='DASHBOARDS' />
            </div>
          </div>
        </div>
        <div styleName='sheet__flexbox__item'>
          <div styleName='section'>
            <div styleName='section__title'>Buttons</div>
            <div styleName='section__box'>
              <StyleCard styleClassName='button' name='Button - Regular'
                description='Circular Medium / 16pt, 0 ch, 20 line / Color: 0DC3A0'
                sample='Save changes' />
              <StyleCard styleClassName='button-sm' name='Button - Small'
                description='Circular Bold / 10pt, 0.6 ch, 14 line / Color: 0DC3A0'
                sample='Learn more' />
            </div>
          </div>
          <div styleName='section'>
            <div styleName='section__title--collapsed'>Other</div>
            <div styleName='section__box'>
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
    </div>
    <div styleName='sheet'>
      <div styleName='sheet__title'>Colors</div>
      <div styleName='sheet__flexbox'>
        <ColorSample color='#2C4059' description='Backgrounds, Header text styles' />
        <ColorSample color='#2C4059' opacity='0.8' description='Body black text styles' />
        <ColorSample color='#FFFFFF' textColor='#879BAB' borderColor='#DCDCDC' description='Main background, Card Background' />
        <ColorSample color='#0DC3A0' />
        <ColorSample color='#EAE6FA' textColor='#BB60A8' />
      </div>
    </div>
  </div>
}
