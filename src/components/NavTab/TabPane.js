import React, {PropTypes} from 'react'
import classnames from 'classnames'

const TabPane = ({children, active}) => {
  const classNames = classnames('tab-pane', {active})

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

TabPane.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node
}

export default TabPane
