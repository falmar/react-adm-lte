import React, {PropTypes} from 'react'

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
