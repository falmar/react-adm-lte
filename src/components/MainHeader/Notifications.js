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
    const {data} = this.props
    let {onClick} = this.props

    if (!(onClick instanceof Function)) {
      onClick = () => {}
    }

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

  getHeader () {
    const cn = this.getClassNames()
    const {label} = this.props

    return [
      <i className={classnames('fa', cn[1])} />,
      <span className={classnames('label', cn[2])}>{label}</span>
    ]
  }

  render () {
    return <Dropdown
      open={this.props.open}
      cn={this.getClassNames()[0]}
      content={this.getItems()}
      header={this.getHeader()}
      onToggle={this.props.onToggle}
      />
  }
}

Notifications.propTypes = {
  label: stringOrNumber,
  data: PropTypes.array.isRequired,
  open: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  header: stringOrNumber,
  footer: stringOrNumber
}

export default Notifications
