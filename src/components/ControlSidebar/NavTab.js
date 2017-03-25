import React, {PropTypes} from 'react'

import NavTab from '../NavTab'

const ControlSidebarNavTab = ({children}) => {
  return (
    <NavTab className='nav-justified control-sidebar-tabs'>
      {children}
    </NavTab>
  )
}

ControlSidebarNavTab.propTypes = {
  children: PropTypes.node
}

export default ControlSidebarNavTab
