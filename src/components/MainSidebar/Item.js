import React, {PropTypes} from 'react'
import classnames from 'classnames'

import Link from './../../utils/Link'

// -------------------- ITEM
const SidebarMenuItem = (props) => {
  const {isTreeview, header, active} = props
  const {title, iconClass} = props
  const {href, onClick} = props
  const {children} = props

  if (header) {
    return <li className='header'>{title}</li>
  }

  return (
    <li className={classnames({treeview: isTreeview, active})}>
      <Link href={href} onClick={onClick}>
        <i className={classnames(iconClass)} />
        {isTreeview ? <span>{title}</span> : title}

        {
          isTreeview &&
          <span className='pull-right-container'>
            <i className='fa fa-angle-left pull-right' />
          </span>
        }
      </Link>
      {children}
    </li>
  )
}

SidebarMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  isTreeview: PropTypes.bool,
  header: PropTypes.bool,
  children: PropTypes.element
}

export default SidebarMenuItem
