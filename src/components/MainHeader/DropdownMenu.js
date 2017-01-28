// Copyright 2016 David Lavieri. All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

const DropdownMenu = ({children}) => {
  return (
    <ul className='dropdown-menu'>
      {children}
    </ul>
  )
}

DropdownMenu.propTypes = {
  children: PropTypes.element
}

export default DropdownMenu
