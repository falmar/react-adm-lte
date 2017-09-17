import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../utils/Link'

const DropdownToggle = ({children, onToggle}) => {
  return (
    <Link href='#' onClick={onToggle} className='dropdown-toggle'>
      {children}
    </Link>
  )
}

DropdownToggle.propTypes = {
  children: PropTypes.node,
  onToggle: PropTypes.func.isRequired
}

export default DropdownToggle
