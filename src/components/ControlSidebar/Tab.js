// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

import Link from './../../utils/Link'

const Tab = ({icon, onClick}) => {
  return (
    <li>
      <Link onClick={onClick}>
        <i className={icon} />
      </Link>
    </li>
  )
}

Tab.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tab
