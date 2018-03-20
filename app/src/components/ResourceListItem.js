import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
import {
  toLower,
  split,
  head,
  compose,
  toUpper,
  slice,
  join,
  drop,
  contains
} from 'ramda'

const ResourceListItem = props => {
  const { name, shortDesc, _id } = props.resource

  const removeArticles = arrWords => {
    return contains(head(arrWords), ['the', 'a', 'an'])
      ? drop(1, arrWords)
      : arrWords
  }

  const avatarLetter = compose(
    toUpper,
    slice(0, 1),
    join(' '),
    removeArticles,
    split(' '),
    toLower
  )(name)

  return (
    <Link
      to={`/resources/${_id}`}
      style={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      <Link
        style={{ textDecoration: 'none' }}
        to={`/resources/${props.resource._id}`}
      >
        <ListItem>
          <Avatar>{avatarLetter}</Avatar>
          <ListItemText
            style={{ marginLeft: '15px' }}
            primary={name}
            secondary={shortDesc}
          />
        </ListItem>
      </Link>
      <Divider />
    </Link>
  )
}

export default ResourceListItem
