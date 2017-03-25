import React, {PropTypes} from 'react'

import Tab from '../NavTab/Tab'
import Link from './../../utils/Link'

const ControlSidebarTab = ({active, iconClass, onClick}) => {
  return (
    <Tab active={active}>
      <Link onClick={onClick}>
        <i className={iconClass} />
      </Link>
    </Tab>
  )
}

ControlSidebarTab.propTypes = {
  active: PropTypes.bool,
  iconClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ControlSidebarTab
