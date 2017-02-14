import React, {PropTypes} from 'react'
import classnames from 'classnames'

import SubHeader from './SubHeader'
import Link from '../../utils/Link'

const ControlSidebarMenuItem = props => {
  const {href, onClick} = props
  const {title, description} = props
  const {iconClass, iconBackground} = props

  return (
    <li>
      <Link href={href} onClick={onClick}>
        <i className={classnames('menu-icon', iconClass, iconBackground)} />
        <div className='menu-info'>
          <SubHeader>{title}</SubHeader>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  )
}

ControlSidebarMenuItem.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  iconClass: PropTypes.string.isRequired,
  iconBackground: PropTypes.string.isRequired
}

export default ControlSidebarMenuItem
