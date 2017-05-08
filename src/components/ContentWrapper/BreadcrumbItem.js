import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../utils/Link'

const BreadcrumbItem = props => {
  const {active, title, iconClass} = props
  const {href, onClick} = props

  if (active) {
    return <li className='active'>{title}</li>
  }

  return (
    <li>
      <Link href={href} onClick={onClick}>
        <i className={iconClass} />
        {title}
      </Link>
    </li>
  )
}

BreadcrumbItem.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  iconClass: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
}

export default BreadcrumbItem
