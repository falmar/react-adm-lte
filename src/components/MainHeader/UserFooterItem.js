import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Link from '../../utils/Link'

const UserFooterItem = props => {
  const {children, left, right} = props
  const {href, onClick} = props

  const cn = classnames({
    'pull-left': left && !right,
    'pull-right': right && !left
  })

  return (
    <div className={cn}>
      <Link
        className='btn btn-flat btn-default'
        href={href}
        onClick={onClick}>
        {children}
      </Link>
    </div>
  )
}

UserFooterItem.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default UserFooterItem
