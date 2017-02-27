import React from 'react'
import RoundImage from '../../hylo-app/components/RoundImage'
import Button from '../../hylo-app/components/Button'

const SAMPLE_IMAGE_URL = 'https://d3ngex8q79bk55.cloudfront.net/user/13986/avatar/1444260480878_AxolotlPic.png'

export default function Elements (props) {
  return <div>
    <div className='sheet'>
      <div className='sheet__title'>Elements</div>
      <div className='sheet__flexbox'>
        <div>
          <div styleName='element__label'>Imagery</div>
          <div styleName='images__card'>
            <RoundImage url={SAMPLE_IMAGE_URL} styleName='imageMargin' />
            <RoundImage url={SAMPLE_IMAGE_URL} styleName='imageMargin' size='medium' className='mr-3 mb-2' />
            <RoundImage url={SAMPLE_IMAGE_URL} styleName='imageMargin' size='small' className='mr-3 mb-2' />
          </div>
          <div>
            <span styleName='image__label'>48px</span>
            <span styleName='image__label'>36px</span>
            <span styleName='image__label'>28px</span>
          </div>
        </div>
        <div styleName='buttons__card'>
          <div styleName='element__label'>Buttons / 40px</div>
          <div styleName='buttonRow'>
            <div styleName='buttonRow--label'>Normal</div>
            <Button label='Button' styleName='buttonMargin' />
            <Button label='Button' color='purple' styleName='buttonMargin' />
            <Button label='Button' color='green-white' styleName='buttonMargin' narrow />
          </div>
          <div styleName='buttonRow'>
            <div styleName='buttonRow--label'>Hover</div>
            <Button label='Button' styleName='buttonMargin' hover />
            <Button label='Button' color='purple' styleName='buttonMargin' hover />
            <Button label='Button' color='green-white' styleName='buttonMargin' narrow hover />
          </div>
          <div styleName='buttonRow'>
            <div styleName='buttonRow--label'>Clicked</div>
            <Button label='Button' styleName='buttonMargin' active />
            <Button label='Button' color='purple' styleName='buttonMargin' active />
            <Button label='Button' color='green-white' styleName='buttonMargin' narrow active />
          </div>
        </div>
        <div>
          <div styleName='element__label'>Buttons / 32px</div>
          <div styleName='smallButtonRow'>
            <Button label='Button' styleName='buttonMargin' small />
            <Button label='Button' color='purple' styleName='buttonMargin' small />
          </div>
          <div styleName='smallButtonRow'>
            <Button label='Button' styleName='buttonMargin' hover small />
            <Button label='Button' color='purple' styleName='buttonMargin' hover small />
          </div>
          <div styleName='smallButtonRow'>
            <Button label='Button' styleName='buttonMargin' active small />
            <Button label='Button' color='purple' styleName='buttonMargin' active small />
          </div>
        </div>
      </div>
    </div>
  </div>
}
