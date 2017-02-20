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
      <div styleName='color-section-title'>7 Shades of grey:</div>
      <div styleName='sheet__flexbox'>
        <ColorSample color='#2C4059' colorName='rhino' description='Backgrounds, Header text styles' />
        <ColorSample color='#2C4059' opacity='0.8' colorName='rhino-80' description='Body black text styles' />
        <ColorSample color='#2C4059' opacity='0.6' colorName='rhino-60' description='Body grey text styles' />
        <ColorSample color='#2C4059' opacity='0.5' colorName='rhino-50' description='Active (clickable) icons' />
        <ColorSample color='#2C4059' opacity='0.3' colorName='rhino-30' description='Passive icons' />
        <ColorSample color='#FFFFFF' colorName='white' textColor='#879BAB' borderColor='#DCDCDC' description='Main background, Card Background' />
        <ColorSample color='#FAFBFC' colorName='athens-gray' textColor='#879BAB' borderColor='#DCDCDC' description='Divider background, grey blocks background' />
      </div>
      <div styleName='sheet__flexbox'>
        <div styleName='color-section'>
          <div styleName='color-section-title'>Active Colors</div>
          <div styleName='color-section-description'>
            Colors for interactive elements: <br />
            - Fills for buttons, inputs, notifications, bars, etc <br />
            - Status indicators (error, success, etc) <br />
            Accent versions of active colors can be used for top bar backgrounds <br />
          </div>
        </div>
        <ColorSample color='#0DC3A0' colorName='caribbean-green' />
        <ColorSample color='#9883E5' colorName='medium-purple' />
        <ColorSample color='#BB60A8' colorName='fuchsia-pink' />
        <ColorSample color='#40A1DD' colorName='picton-blue' />
        <ColorSample color='#FE6848' colorName='persimmon' />
      </div>
      <div styleName='sheet__flexbox'>
        <div styleName='color-section'>
          <div styleName='color-section-title'>Highlight Colors</div>
          <div styleName='color-section-description'>
            Can be used only for labels and backgrounds
          </div>
        </div>
        <ColorSample color='#CFF3EC' colorName='iceberg' textColor='#0DC3A0' />
        <ColorSample color='#EAE6FA' colorName='moon-raker' textColor='#9883E5' />
        <ColorSample color='#F1DFEE' colorName='prim' textColor='#BB60A8' />
        <ColorSample color='#D9ECF8' colorName='link-water' textColor='#40A1DD' />
        <ColorSample color='#FFE1DA' colorName='peach-schnapps' textColor='#FE6848' />
      </div>
      <div styleName='sheet__flexbox'>
        <div styleName='color-section'>
          <div styleName='color-section-title'>System Colors</div>
          <div styleName='color-section-description'>
            To be used for Success, Warning and Error Messages
          </div>
        </div>
        <ColorSample color='#23CC80' colorName='mountain-meadow' />
        <ColorSample color='#EE4266' colorName='amaranth' />
        <ColorSample color='#FFB949' colorName='yello-orange' />
        <ColorSample />
        <ColorSample />
      </div>
    </div>
  </div>
}
