import React, {PropTypes} from 'react'

const DropdownMenu = ({children}) => {
  return (
    <ul className='dropdown-menu'>
      {children}
    </ul>
  )
}

DropdownMenu.propTypes = {
  children: PropTypes.element
}

export default DropdownMenu
