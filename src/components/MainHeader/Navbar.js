import React, {PropTypes} from 'react'

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
