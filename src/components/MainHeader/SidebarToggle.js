// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import Link from './../../utils/Link'

const SiderbarToggle = ({onToggle, srOnly}) => {
  return (
    <Link className='sidebar-toggle' onClick={onToggle}>
      <span className='sr-only'>{srOnly}</span>
    </Link>
  )
}

SiderbarToggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  srOnly: PropTypes.string
}

export default SiderbarToggle
