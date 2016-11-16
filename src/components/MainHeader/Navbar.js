// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

const Navbar = ({children}) => {
  return (
    <nav className='navbar navbar-static-top'>
      {children}
    </nav>
  )
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired
}

export default Navbar
