// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

import Link from '../../utils/Link'

const UserBodyItem = ({href, onClick, children}) => {
  return (
    <div className='col-xs-4 text-center'>
      <Link
        href={href}
        onClick={onClick}>
        {children}
      </Link>
    </div>
  )
}

UserBodyItem.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default UserBodyItem
