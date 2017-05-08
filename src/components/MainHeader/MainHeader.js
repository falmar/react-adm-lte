import React from 'react'
import PropTypes from 'prop-types'

const MainHeader = ({children}) => {
  return (
    <header className='main-header'>
      {children}
    </header>
  )
}

MainHeader.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainHeader
