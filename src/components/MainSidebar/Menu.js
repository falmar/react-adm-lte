import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const SidebarMenu = ({isRoot, active, children}) => {
  const cn = {
    'sidebar-menu': isRoot,
    'treeview-menu': !isRoot,
    active
  }

  return (
    <ul className={classnames(cn)}>
      {children}
    </ul>
  )
}

SidebarMenu.propTypes = {
  active: PropTypes.bool,
  isRoot: PropTypes.bool,
  children: PropTypes.node
}

export default SidebarMenu
