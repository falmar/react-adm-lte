import React, {PropTypes} from 'react'
import classnames from 'classnames'

const NavTab = ({children, className}) => {
  return (
    <ul className={classnames('nav nav-tabs', className)}>
      {children}
    </ul>
  )
}

NavTab.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default NavTab
