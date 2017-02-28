import React, {PropTypes} from 'react'

import Link from './../../utils/Link'

const Tab = ({active, iconClass, onClick}) => {
  return (
    <li className={active ? 'active' : ''}>
      <Link onClick={onClick}>
        <i className={iconClass} />
      </Link>
    </li>
  )
}

Tab.propTypes = {
  active: PropTypes.bool,
  iconClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tab
