// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

import Link from '../../utils/Link'

const DropdownToggle = ({children, onToggle}) => {
  return (
    <Link href='#' onClick={onToggle} className='dropdown-toggle'>
      {children}
    </Link>
  )
}

DropdownToggle.propTypes = {
  children: PropTypes.element,
  onToggle: PropTypes.func.isRequired
}

export default DropdownToggle
