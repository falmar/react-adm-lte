// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component, PropTypes} from 'react'
import MyLink from './../../utils/MyLink'

import {Dropdown, commonProps} from './Dropdown'

const Message = ({href, imageUrl, title, time, message, onClick}) => {
  return (
    <li onClick={onClick}>
      <MyLink href={href}>
        <div className='pull-left'>
          <img src={imageUrl} className='img-circle' alt='User Image' />
        </div>
        <h4>
          {title}
          <small><i className='fa fa-clock-o' /> {time}</small>
        </h4>
        <p>{message}</p>
      </MyLink>
    </li>
  )
}

Message.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  message: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
}

export {Message}

class Messages extends Component {
  getMessages () {
    const {data, onClick} = this.props

    return data.map((message, index) => {
      return <Message key={message.id + index} {...message} onClick={() => onClick(message.id)} />
    })
  }

  getItems () {
    const {header, footer} = this.props

    return [
      <li className='header'>{header}</li>,
      <li>
        <ul className='menu'>
          {this.getMessages()}
        </ul>
      </li>,
      <li className='footer'><a href='#'>{footer}</a></li>
    ]
  }

  getClassNames () {
    return [
      'messages-menu',
      'fa-envelope-o',
      'label-success'
    ]
  }

  render () {
    return <Dropdown
      open={this.props.open}
      cn={this.getClassNames()}
      items={this.getItems()}
      label={this.props.label}
      onToggle={this.props.onToggle}
      />
  }
}

Messages.propTypes = {
  ...commonProps,
  onClick: PropTypes.func
}

export default Messages
