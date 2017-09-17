import React from 'react'
import PropTypes from 'prop-types'

import Link from './../../utils/Link'

const ControlSidebarToggle = ({href, onToggle}) => {
  return (
    <li>
      <Link href={href} onClick={onToggle}>
        <i className='fa fa-gears' />
      </Link>
    </li>
  )
}

ControlSidebarToggle.propTypes = {
  href: PropTypes.string,
  onToggle: PropTypes.func
}

export default ControlSidebarToggle
