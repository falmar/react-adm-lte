import React from 'react'
import PropTypes from 'prop-types'

import TabPane from '../NavTab/TabPane'

const ControlSidebarTabPane = ({children, active}) => {
  return (
    <TabPane active={active}>
      {children}
    </TabPane>
  )
}

ControlSidebarTabPane.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node
}

export default ControlSidebarTabPane
