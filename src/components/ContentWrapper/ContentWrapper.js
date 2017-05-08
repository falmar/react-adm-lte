import React from 'react'
import PropTypes from 'prop-types'

const ContentWrapper = ({children}) => {
  return (
    <div className='content-wrapper'>
      {children}
    </div>
  )
}

ContentWrapper.propTypes = {
  children: PropTypes.node
}

export default ContentWrapper
