import React from 'react'
import PropTypes from 'prop-types'

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
