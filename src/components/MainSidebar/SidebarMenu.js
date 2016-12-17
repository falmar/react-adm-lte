// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import classnames from 'classnames'

import Link from './../../utils/Link'

// -------------------- ITEM
const Item = (props) => {
  const {isTreeview, header, active} = props
  const {name, iconClass} = props
  const {href, onClick} = props
  const {children} = props

  if (header) {
    return <li className='header'>{name}</li>
  }

  const label = isTreeview ? <span>{name}</span> : name
  const hasChildren = !(!children)

  return (
    <li className={classnames({treeview: isTreeview, active})}>
      <Link href={href} onClick={onClick}>
        <i className={classnames(iconClass)} />
        {label}
        {hasChildren &&
          <span className='pull-right-container'>
            <i className='fa fa-angle-left pull-right' />
          </span>}
      </Link>
      {children}
    </li>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  iconClass: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  isTreeview: PropTypes.bool,
  header: PropTypes.bool,
  children: PropTypes.element
}

export {Item}

// -------------------- MENU
const Menu = ({isRoot, children}) => {
  return (
    <ul className={isRoot ? 'sidebar-menu' : 'treeview-menu'}>
      {children}
    </ul>
  )
}

Menu.propTypes = {
  isRoot: PropTypes.bool,
  children: PropTypes.node
}

export {Menu}
