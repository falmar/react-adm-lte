// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

const Header = ({children}) => {
  return (
    <h4 className='control-sidebar-heading'>{children}</h4>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header
