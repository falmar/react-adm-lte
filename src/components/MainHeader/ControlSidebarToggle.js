import React, {PropTypes} from 'react'

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
