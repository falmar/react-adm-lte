// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

const SiderbarToggle = ({click, srOnly}) => {
  return (
    <a href='#' className='sidebar-toggle' onClick={click}>
      <span className='sr-only'>{srOnly}</span>
    </a>
  )
}

SiderbarToggle.propTypes = {
  click: PropTypes.func.isRequired,
  srOnly: PropTypes.string
}

export default SiderbarToggle
