import React from 'react'
import PropTypes from 'prop-types'

import Link from './../../utils/Link'

const SiderbarToggle = ({onToggle, srOnly}) => {
  return (
    <Link className='sidebar-toggle' onClick={onToggle}>
      <span className='sr-only'>{srOnly}</span>
    </Link>
  )
}

SiderbarToggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  srOnly: PropTypes.string
}

export default SiderbarToggle
