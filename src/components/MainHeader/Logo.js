// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

import Link from '../../utils/Link'

const Logo = ({href, onClick, children}) => {
  return (
    <Link href={href} onClick={onClick} className='logo'>
      {children}
    </Link>
  )
}

Logo.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default Logo
