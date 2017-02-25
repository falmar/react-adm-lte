import React, {PropTypes} from 'react'

const ControlSidebarMenu = ({children}) => (
  <ul className='control-sidebar-menu'>
    {children}
  </ul>
)

ControlSidebarMenu.propTypes = {
  children: PropTypes.node
}

export default ControlSidebarMenu
