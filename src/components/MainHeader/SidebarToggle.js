import React, {PropTypes} from 'react'
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
