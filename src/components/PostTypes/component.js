import React from 'react'
import CardOffer from '../../hylo-app/components/CardOffer'

export default function PostTypes (props) {
  return <div>
    <div styleName='sheet'>
      <div styleName='sheet__title'>Post Types</div>
      <div styleName='sheet__flexbox'>
        <div styleName='sheet__flexbox__item'>
          <CardOffer />
        </div>
        <div styleName='sheet__flexbox__item'>
          <CardOffer />
        </div>
      </div>
    </div>
  </div>
}
