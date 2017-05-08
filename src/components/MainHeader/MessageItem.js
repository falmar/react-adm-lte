import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../utils/Link'

const MessageItem = ({href, imageUrl, title, time, message, onClick}) => {
  return (
    <li >
      <Link href={href} onClick={onClick}>
        <div className='pull-left'>
          <img src={imageUrl} className='img-circle' alt='User Image' />
        </div>
        <h4>
          {title}
          <small><i className='fa fa-clock-o' /> {time}</small>
        </h4>
        <p>{message}</p>
      </Link>
    </li>
  )
}

MessageItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  message: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
}

export default MessageItem
