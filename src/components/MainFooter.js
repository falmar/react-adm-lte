import React from 'react'
import PropTypes from 'prop-types'

const MainFooter = ({children}) => {
  return (
    <footer className='main-footer'>
      {children}
    </footer>
  )
}

MainFooter.propTypes = {
  children: PropTypes.node
}

export default MainFooter
