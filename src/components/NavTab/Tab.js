import React from 'react'
import PropTypes from 'prop-types'

const Tab = ({active, children}) => {
  return (
    <li className={active ? 'active' : ''}>
      {children}
    </li>
  )
}

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Tab
