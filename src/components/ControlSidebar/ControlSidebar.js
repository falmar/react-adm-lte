import React, {PropTypes} from 'react'
import classnames from 'classnames'

const ControlSidebar = ({children, open}) => {
  const classes = classnames(
    'control-sidebar control-sidebar-dark', {
      'control-sidebar-open': open
    }
  )

  return (
    <aside className={classes}>
      {children}
    </aside>
  )
}

ControlSidebar.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.element
}

export default ControlSidebar
