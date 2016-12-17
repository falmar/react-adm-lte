// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import classnames from 'classnames'

// -------------------- ITEM
const Item = ({isTreeview}) => {
  return (
    <li className={classnames({treeview: isTreeview})} />
  )
}

Item.propTypes = {
  isTreeview: PropTypes.bool
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
