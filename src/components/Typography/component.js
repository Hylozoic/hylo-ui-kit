import React from 'react'
import ColorSample from '../ColorSample'

export default function Typography (props) {
  return <div>
    <div styleName='sheet'>
      <div styleName='title'>Typography</div>
      <div styleName='section-title'>Headers</div>
      <div styleName='section'>
        <div styleName='row'>
          <div styleName='style-card'>
            <div styleName='style-name'>
              .h-display
            </div>
            <div styleName='style-attributes'>
              Circular Bold / 32pt, -0.5 ch, 36 line / Color: 2C4059
            </div>
            <div styleName='style-example-header' className='h-display'>
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
            <div styleName='style-example-header' className='h-subheadline'>
              Five quacking zephyrs jolt my wax bed.
            </div>
          </div>
        </div>
        <div styleName='row'>
          <div styleName='style-card no-border'>
            <div styleName='style-name'>
              .h-headline, h1
            </div>
            <div styleName='style-attributes'>
              Circular Medium / 24pt, 0 ch, 28 line / Color: 2C4059
            </div>
            <div styleName='style-example-header' className='h-headline'>
              Five quacking zephyrs jolt my wax bed.
            </div>
          </div>
          <div styleName='style-card no-border'>
            <div styleName='style-name'>
              .h-minor, h3
            </div>
            <div styleName='style-attributes'>
              Circular Bold / 14pt, 0 ch, 18 line / Color: 2C4059
            </div>
            <div styleName='style-example-header' className='h-minor'>
              Five quacking zephyrs jolt my wax bed.
            </div>
          </div>
        </div>
      </div>
      <div styleName='section-title'>Body Styles</div>
      <div styleName='section'>
        <div styleName='row'>
          <div styleName='style-card'>
            <div styleName='style-name'>
              .body-drk-lg
            </div>
            <div styleName='style-attributes'>
              Circular Book / 18pt, 0 ch, 24 line / Color: 2C4059 80%
            </div>
            <div styleName='style-example-body' className='body-drk-lg'>
              Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
            </div>
          </div>
          <div styleName='style-card'>
            <div styleName='style-name'>
              .body-drk-sm
            </div>
            <div styleName='style-attributes'>
              Circular Book / 15pt, 0 ch, 22 line / Color: 2C4059 80%
            </div>
            <div styleName='style-example-body' className='body-drk-sm'>
              Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
            </div>
          </div>
        </div>
        <div styleName='row'>
          <div styleName='style-card no-border'>
            <div styleName='style-name'>
              .body-lt-lg
            </div>
            <div styleName='style-attributes'>
              Circular Book / 17pt, 0 ch, 25 line / Color: 2C4059 60%
            </div>
            <div styleName='style-example-body' className='body-lt-lg'>
              Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
            </div>
          </div>
          <div styleName='style-card no-border'>
            <div styleName='style-name'>
              .body-lt-sm
            </div>
            <div styleName='style-attributes'>
              Circular Book / 15pt, 0 ch, 22 line / Color: 2C4059 60%
            </div>
            <div styleName='style-example-body' className='body-lt-sm'>
              Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
            </div>
          </div>
        </div>
      </div>
      <div styleName='row'>
        <div styleName='section-title flex-item left-column'>Captions & Tags</div>
        <div styleName='section-title flex-item'>Buttons</div>
      </div>
      <div styleName='row'>
        <div styleName='column flex-item left-column'>
          <div styleName='section'>
            <div styleName='style-card'>
              <div styleName='style-name'>
                Caption 13pt - Black
              </div>
              <div styleName='style-attributes'>
                Circular Book / 14pt, 0 ch, 18 line / Color: 2C4059 80%
              </div>
              <div styleName='style-example-header' className='caption-drk-lg'>
                Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
              </div>
            </div>
            <div styleName='style-card'>
              <div styleName='style-name'>
                Caption 13pt - Grey
              </div>
              <div styleName='style-attributes'>
                Circular Book / 13pt, 0 ch, 19 line / Color: 2C4059 60%
              </div>
              <div styleName='style-example-header' className='caption-lt-lg'>
                Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
              </div>
            </div>
            <div styleName='style-card no-border'>
              <div styleName='style-name'>
                Tag
              </div>
              <div styleName='style-attributes'>
                Circular Bold / 10pt, 0.6 ch, 14 line / Color: 8DABC4;
              </div>
              <div styleName='style-example-body' className='tag'>
                DASHBOARDS
              </div>
            </div>
          </div>
        </div>
        <div styleName='column flex-item'>
          <div styleName='section'>
            <div styleName='style-card'>
              <div styleName='style-name'>
                Button - Regular
              </div>
              <div styleName='style-attributes'>
                Circular Medium / 16pt, 0 ch, 20 line / Color: 0DC3A0
              </div>
              <div styleName='style-example-body' className='button'>
                Save changes
              </div>
            </div>
            <div styleName='style-card no-border'>
              <div styleName='style-name'>
                Button - Small
              </div>
              <div styleName='style-attributes'>
                Circular Bold / 10pt, 0.6 ch, 14 line / Color: 0DC3A0
              </div>
              <div styleName='style-example-body' className='button-sm'>
                Learn more
              </div>
            </div>
          </div>
          <div styleName='section-title'>Other</div>
          <div styleName='section'>
            <div styleName='style-card'>
              <div styleName='style-name'>
                User Name - Cards
              </div>
              <div styleName='style-attributes'>
                Circular Bold / 14pt, 0 ch, 20 line / Color: 2C4059
              </div>
              <div styleName='style-example-body' className='cards'>
                Steven Pham
              </div>
            </div>
            <div styleName='style-card no-border'>
              <div styleName='style-name'>
                Timestamp
              </div>
              <div styleName='style-attributes'>
                Circular Book / 13pt, 0 ch, 16 line / Color: 2C4059 60%
              </div>
              <div styleName='style-example-body' className='timestamp'>
                6 days ago
              </div>
            </div>
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
