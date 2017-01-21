// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import classnames from 'classnames'

const SidebarMenu = ({isRoot, active, children}) => {
  const cn = {
    'sidebar-menu': isRoot,
    'treeview-menu': !isRoot,
    active
  }

  return (
    <ul className={classnames(cn)}>
      {children}
    </ul>
  )
}

SidebarMenu.propTypes = {
  active: PropTypes.bool,
  isRoot: PropTypes.bool,
  children: PropTypes.node
}

export default SidebarMenu
