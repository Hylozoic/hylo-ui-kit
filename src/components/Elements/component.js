import React from 'react'
import RoundImage from '../../hylo-app/components/RoundImage'

export default function Elements (props) {
  return <div>
    <div styleName='sheet'>
      <div styleName='sheet__title'>Elements</div>
      <div styleName='sheet__flexbox'>
        <div styleName='sheet__flexbox__item'>
          <div styleName='element__label'>Imagery</div>
          <div>
            <RoundImage url={imageUrl} />
            <RoundImage url={imageUrl} size='medium' />
            <RoundImage url={imageUrl} size='small' />
          </div>
          <div>
            <span styleName='image__label'>48px</span>
            <span styleName='image__label'>36px</span>
            <span styleName='image__label'>28px</span>
          </div>
        </div>
        <div styleName='sheet__flexbox__item'>
          <div styleName='element__label'>Buttons / 40px</div>
        </div>
        <div styleName='sheet__flexbox__item'>
          <div styleName='element__label'>Buttons / 32px</div>
        </div>
      </div>
    </div>
  </div>
}

const imageUrl = 'https://d3ngex8q79bk55.cloudfront.net/user/13986/avatar/1444260480878_AxolotlPic.png'
