import React from 'react'
import cx from 'classnames'
import RoundImage from '../RoundImage'
import SkillLabel from '../SkillLabel'

import styles from './component.scss'

export default function CardOffer ({ post }) {
  return <div className='card'>
    <CardHeader person={post.author} />
    <CardBlock className='m-0 py-0 px-6'>
      <CardBody post={post} />
      <CardTags tags={post.tags} />
    </CardBlock>
    <CardFooter votes={post.upVoters} />
  </div>
}

function CardBlock ({ children, className }) {
  className = cx('card-block', className)
  return <div className={className}>{ children }</div>
}

function CardHeader ({person: { url, name }}) {
  return <CardFlex
    lChildren={<RoundImage url={url} large />}
    rChildren={<RoundImage url={url} large />}>
    {name}
  </CardFlex>
}

function CardFlex ({ lChildren, rChildren, children }) {
  return <div className='d-flex align-item-center m-6'>
    <div className='d-flex mr-1'>{lChildren}</div>
    <div className='w-100 mx-1'>{children}</div>
    <div className='ml-1'>{rChildren}</div>
  </div>
}

function CardBody ({ post: { title, body } }) {
  return <div>
    <div className='h1'>{title}</div>
    <p>{body}</p>
  </div>
}

function CardFooter ({ votes }) {
  let names = votes.slice(0, 2).map(vote => vote.name)
  if (votes.length > 2) {
    names = `${names.join(', ')} and ${votes.length - 3} others commented`
  } else {
    names = names.join(', ')
  }
  const lChildren = votes.slice(0, 3).map(
    (vote, i) => <RoundImage url={vote.url} medium overlaps key={i} />
  )
  const rChildren = votes.length
  return <CardFlex lChildren={lChildren} rChildren={rChildren}>{names}</CardFlex>
}

function CardTags ({ tags }) {
  return <div>
    {tags.map(
      (tag, i) => <SkillLabel label={tag} className='mr-2' key={i} />
    )}
  </div>
}

// function Tag ({ name, className }) {
//   className = cx('btn btn-outline-secondary btn-sm tag', styles.tag, className)
//   return <div className={className}>
//     { name }
//   </div>
// }

// <Card>
//   <CardHeader>
//     <CardFlex lChildren={[<Avatar ../>]} rChildren={<CardTag />, <BurgerMenu />}>
//       <Person ... />
//     </CardFlex>
//   </CardHeader>
//   <CardImage></CardImage>
//   <CardBody title='' text='' labels=''>
//     <CardBlock />
//     <CardBlock />
//   </CardBody>
//   <CardBelowBody />
//   <CardFooter>
//     <CardFlex lChildren={[<People ../>]} rChildren={<Likes />}>
//       <PeopleNames />
//     </CardFlex>
//   </CardFooter>
// </Card>
