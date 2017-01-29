// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

import Link from '../../utils/Link'

const icon = cn => {
  if (typeof cn === 'string' && cn.length > 0) {
    return <i className={cn} />
  }

  return null
}

const NotificationItem = ({title, iconClass, href, onClick}) => {
  return (
    <li>
      <Link href={href} onClick={onClick}>
        {icon(iconClass)} {title}
      </Link>
    </li>
  )
}

NotificationItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
}

export default NotificationItem
