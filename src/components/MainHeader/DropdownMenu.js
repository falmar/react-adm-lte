import React from 'react'
import PropTypes from 'prop-types'

const DropdownMenu = ({children}) => {
  return (
    <ul className='dropdown-menu'>
      {children}
    </ul>
  )
}

DropdownMenu.propTypes = {
  children: PropTypes.node
}

export default DropdownMenu
