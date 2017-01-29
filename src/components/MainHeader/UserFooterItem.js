// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import classnames from 'classnames'

import Link from '../../utils/Link'

const UserFooterItem = props => {
  const {children, left, right} = props
  const {href, onClick} = props

  const cn = classnames({
    'pull-left': left && !right,
    'pull-right': right && !left
  })

  return (
    <div className={cn}>
      <Link
        className='btn btn-flat btn-default'
        href={href}
        onClick={onClick}>
        {children}
      </Link>
    </div>
  )
}

UserFooterItem.propTypes = {
  children: PropTypes.node
}

export default UserFooterItem
