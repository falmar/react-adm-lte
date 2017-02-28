import React, {PropTypes} from 'react'

const Header = ({children}) => {
  return (
    <h4 className='control-sidebar-heading'>{children}</h4>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header
