// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component, PropTypes} from 'react'
import Link from './../../utils/Link'
import classnames from 'classnames'

import {Dropdown} from './Dropdown'

const stringOrNumber = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
])

const Message = ({href, imageUrl, title, time, message, onClick}) => {
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

Message.propTypes = {
  id: stringOrNumber,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  message: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
}

export {Message}

class Messages extends Component {
  constructor (props) {
    super(props)

    this.getContent = this.getContent.bind(this)
  }

  getMessages (close) {
    const {data, onClick, closeOnClick} = this.props
    const click = (id) => {
      if (close instanceof Function && closeOnClick) {
        close()
      }

      if (onClick instanceof Function) {
        onClick(id)
      }
    }

    return data && data.map((message, index) => {
      return <Message key={message.id + index} {...message} onClick={() => click(message.id)} />
    })
  }

  getContent (close) {
    const {header, footer} = this.props

    return [
      <li className='header'>{header}</li>,
      <li>
        <ul className='menu'>
          {this.getMessages(close)}
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

  getHeader () {
    const cn = this.getClassNames()
    const {count} = this.props

    return [
      <i className={classnames('fa', cn[1])} />,
      <span className={classnames('label', cn[2])}>{count}</span>
    ]
  }

  render () {
    return <Dropdown
      open={this.props.open}
      cn={this.getClassNames()[0]}
      content={this.getContent}
      header={this.getHeader()}
      onToggle={this.props.onToggle}
      />
  }
}

Messages.propTypes = {
  count: stringOrNumber,
  data: PropTypes.array.isRequired,
  open: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  header: stringOrNumber,
  footer: stringOrNumber,
  closeOnClick: PropTypes.bool
}

Messages.defaultProps = {
  data: []
}

export default Messages
