// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

import {Dropdown} from './Dropdown'
import Link from './../../utils/Link'

const stringOrNumber = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
])

const icon = cn => {
  if (typeof cn === 'string' && cn.length > 0) {
    return <i className={cn} />
  }

  return null
}

const Notification = ({title, iconClass, href, onClick}) => {
  return (
    <li>
      <Link href={href} onClick={onClick}>
        {icon(iconClass)} {title}
      </Link>
    </li>
  )
}

Notification.propTypes = {
  id: stringOrNumber,
  title: PropTypes.string,
  iconClass: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
}

export {Notification}

class Notifications extends Component {
  getNotifications () {
    const {data, onClick, onToggle} = this.props
    const click = (id) => {
      if (onToggle instanceof Function) {
        onToggle()
      }

      if (onClick instanceof Function) {
        onClick(id)
      }
    }

    return data.map((item, index) => {
      return <Notification
        key={item.id + index}
        {...item}
        onClick={() => click(item.id)} />
    })
  }

  getClassNames () {
    return [
      'notifications-menu',
      'fa-bell-o',
      'label-warning'
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
    const {open, onToggle, header, footer} = this.props

    return (
      <Dropdown
        open={open}
        cn={this.getClassNames()[0]}
        content={this.getContent}
        header={this.getHeader()}
        onToggle={onToggle}
        >
        <li className='header'>{header}</li>
        <li>
          <ul className='menu'>
            {this.getNotifications(close)}
          </ul>
        </li>
        <li className='footer'><a href='#'>{footer}</a></li>
      </Dropdown>
    )
  }
}

Notifications.propTypes = {
  count: stringOrNumber,
  data: PropTypes.array.isRequired,
  open: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  header: stringOrNumber,
  footer: stringOrNumber
}

export default Notifications
