import React from 'react'
import PropTypes from 'prop-types'

const ControlSidebarMenu = ({children}) => (
  <ul className='control-sidebar-menu'>
    {children}
  </ul>
)

ControlSidebarMenu.propTypes = {
  children: PropTypes.node
}

export default ControlSidebarMenu
