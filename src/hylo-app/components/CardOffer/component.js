import React from 'react'
import RoundImage from '../RoundImage'

export default function CardOffer ({ post }) {
  return <div className='card'>
    <CardHeader person={post.author} />
    <CardBlock>
      <CardBody post={post} />
      <CardTags tags={post.tags} />
    </CardBlock>
    <CardFooter votes={post.upVoters} />
  </div>
}

function CardBlock ({ children }) {
  return <div className='card-block'>{ children }</div>
}

function CardHeader ({person: { url, name }}) {
  return <CardFlex
    lChildren={<RoundImage url={url} size='small' />}
    rChildren={<RoundImage url={url} size='small' />}>
    {name}
  </CardFlex>
}

function CardFlex ({ lChildren, rChildren, children }) {
  return <div className='d-flex align-item-center'>
    <div className='d-flex ml-3 mr-1 my-3'>{lChildren}</div>
    <div className='w-100 mx-1 my-3'>{children}</div>
    <div className='ml-1 mr-3 my-3'>{rChildren}</div>
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
    (vote, i) => <RoundImage url={vote.url} overlaps size='small' key={i} />
  )
  const rChildren = votes.length
  return <CardFlex lChildren={lChildren} rChildren={rChildren}>{names}</CardFlex>
}

function CardTags ({ tags }) {
  return <div>
    {tags.map(
      (tag, i) => <Tag name={tag} key={i} />
    )}
  </div>
}

function Tag ({ name }) {
  return <div className='btn btn-outline-secondary btn-sm'>
    { name }
  </div>
}

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
