// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

import MyLink from './../../utils/MyLink'

const ControlSidebarToggle = ({href, onToggle}) => {
  return (
    <li onClick={onToggle}>
      <MyLink href={href}>
        <i className='fa fa-gears' />
      </MyLink>
    </li>
  )
}

ControlSidebarToggle.propTypes = {
  href: PropTypes.string,
  onToggle: PropTypes.func
}

export default ControlSidebarToggle
