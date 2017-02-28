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
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
}

export default NotificationItem
