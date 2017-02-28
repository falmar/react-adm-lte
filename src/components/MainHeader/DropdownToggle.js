import React, {PropTypes} from 'react'

import Link from '../../utils/Link'

const DropdownToggle = ({children, onToggle}) => {
  return (
    <Link href='#' onClick={onToggle} className='dropdown-toggle'>
      {children}
    </Link>
  )
}

DropdownToggle.propTypes = {
  children: PropTypes.element,
  onToggle: PropTypes.func.isRequired
}

export default DropdownToggle
