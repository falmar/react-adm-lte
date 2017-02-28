import React, {PropTypes} from 'react'

import GenericDropdown from './GenericDropdown'

const Notifications = props => {
  return (
    <GenericDropdown
      {...props}
      iconClass='fa fa-bell-o'
      labelClass='label label-warning'
      className='notifications-menu'
      >
      {props.children}
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
