// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component, PropTypes} from 'react'

import {Dropdown, commonProps} from './Dropdown'
import MyLink from './../../utils/MyLink'
const icon = cn => {
  if (typeof cn === 'string' && cn.length > 0) {
    return <i className={cn} />
  }

  return null
}

const Notification = ({title, iconClass, href, onClick}) => {
  return (
    <li onClick={onClick}>
      <MyLink href={href}>
        {icon(iconClass)} {title}
      </MyLink>
    </li>
  )
}

Notification.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  title: PropTypes.string,
  iconClass: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
}

export {Notification}

class Notifications extends Component {
  getNotifications () {
    const {data, onClick} = this.props

    return data.map((item, index) => {
      return <Notification
        key={item.id + index}
        {...item}
        onClick={() => onClick(item.id)} />
    })
  }

  getItems () {
    const {header, footer} = this.props

    return [
      <li className='header'>{header}</li>,
      <li>
        <ul className='menu'>
          {this.getNotifications()}
        </ul>
      </li>,
      <li className='footer'><a href='#'>{footer}</a></li>
    ]
  }

  getClassNames () {
    return [
      'notifications-menu',
      'fa-bell-o',
      'label-warning'
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

Notifications.propTypes = commonProps

export default Notifications
