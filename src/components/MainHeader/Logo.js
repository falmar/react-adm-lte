import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../utils/Link'

const Logo = ({href, onClick, children}) => {
  return (
    <Link href={href} onClick={onClick} className='logo'>
      {children}
    </Link>
  )
}

Logo.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default Logo
