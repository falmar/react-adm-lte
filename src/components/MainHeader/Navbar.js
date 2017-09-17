import React from 'react'
import PropTypes from 'prop-types'

const NavbarMenu = ({children}) => {
  return (
    <nav className='navbar navbar-static-top'>
      {children}
    </nav>
  )
}

NavbarMenu.propTypes = {
  children: PropTypes.node.isRequired
}

export default NavbarMenu
