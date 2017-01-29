// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

import Link from '../../utils/Link'

const UserBodyItem = ({href, onClick, label}) => {
  return (
    <div className='col-xs-4 text-center'>
      <Link
        href={href}
        onClick={onClick}>
        {label}
      </Link>
    </div>
  )
}

UserBodyItem.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default UserBodyItem
