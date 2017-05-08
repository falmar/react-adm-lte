import React from 'react'
import PropTypes from 'prop-types'

import GenericDropdown from './GenericDropdown'

const Notifications = props => {
  const {open, label, header, footer, children} = props
  const {onToggle, onClickFooter} = props

  return (
    <GenericDropdown
      {...{open, label, onToggle, header, footer, onClickFooter}}
      iconClass='fa fa-bell-o'
      labelClass='label label-warning'
      className='notifications-menu'
      >
      {children}
    </GenericDropdown>
  )
}

Notifications.propTypes = {
  open: PropTypes.bool.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  onToggle: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  onClickFooter: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Notifications
