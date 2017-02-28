import React, {PropTypes} from 'react'

const TabContent = ({children}) => {
  return (
    <div className='tab-content'>
      {children}
    </div>
  )
}

TabContent.propTypes = {
  children: PropTypes.element
}

export default TabContent
