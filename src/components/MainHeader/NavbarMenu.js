import React, {PropTypes} from 'react'

const NavbarMenu = ({children}) => {
  return (
    <div className='navbar-custom-menu'>
      <ul className='navbar-nav nav'>
        {children}
      </ul>
    </div>
  )
}

NavbarMenu.propTypes = {
  children: PropTypes.node.isRequired
}

export default NavbarMenu
