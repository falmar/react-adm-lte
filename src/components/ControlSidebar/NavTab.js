// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

const NavTab = ({children}) => {
  return (
    <ul className='nav nav-tabs nav-justified control-sidebar-tabs'>
      {children}
    </ul>
  )
}

NavTab.propTypes = {
  children: PropTypes.element
}

export {NavTab}
