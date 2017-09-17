import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../utils/Link'

const UserBodyItem = ({href, onClick, children}) => {
  return (
    <div className='col-xs-4 text-center'>
      <Link
        href={href}
        onClick={onClick}>
        {children}
      </Link>
    </div>
  )
}

UserBodyItem.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default UserBodyItem
