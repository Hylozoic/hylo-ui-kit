import React from 'react'
import RoundImage from '../../hylo-app/components/RoundImage'

const SAMPLE_IMAGE_URL = 'https://d3ngex8q79bk55.cloudfront.net/user/13986/avatar/1444260480878_AxolotlPic.png'

export default function Elements (props) {
  return <div>
    <div className='sheet'>
      <div className='sheet__title'>Elements</div>
      <div className='sheet__flexbox'>
        <div className='sheet__flexbox__item'>
          <div styleName='element__label'>Imagery</div>
          <div>
            <RoundImage url={SAMPLE_IMAGE_URL} styleName='imagePad' />
            <RoundImage url={SAMPLE_IMAGE_URL} styleName='imagePad' size='medium' className='mr-3 mb-2' />
            <RoundImage url={SAMPLE_IMAGE_URL} styleName='imagePad' size='small' className='mr-3 mb-2' />
          </div>
          <div>
            <span styleName='image__label'>48px</span>
            <span styleName='image__label'>36px</span>
            <span styleName='image__label'>28px</span>
          </div>
        </div>
        <div className='sheet__flexbox__item'>
          <div styleName='element__label'>Buttons / 40px</div>
        </div>
        <div className='sheet__flexbox__item'>
          <div styleName='element__label'>Buttons / 32px</div>
        </div>
      </div>
    </div>
  </div>
}
