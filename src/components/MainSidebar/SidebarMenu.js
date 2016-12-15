// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

const SidebarMenu = ({children}) => {
  return (
    <ul className='sidebar-menu'>
      {children}
    </ul>
  )
}

SidebarMenu.propTypes = {
  children: PropTypes.node
}

export {SidebarMenu}
