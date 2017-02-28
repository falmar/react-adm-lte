import React, {PropTypes} from 'react'

const NavTab = ({children}) => {
  return (
    <ul className='nav nav-tabs nav-justified control-sidebar-tabs'>
      {children}
    </ul>
  )
}

NavTab.propTypes = {
  children: PropTypes.element
}

export default NavTab
