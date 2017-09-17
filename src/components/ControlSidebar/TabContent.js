import React from 'react'
import PropTypes from 'prop-types'

import TabContent from '../NavTab/TabContent'

const ControlSidebarTabContent = ({children}) => {
  return (
    <TabContent>
      {children}
    </TabContent>
  )
}

ControlSidebarTabContent.propTypes = {
  children: PropTypes.element
}

export default ControlSidebarTabContent
