import React from 'react'
import PropTypes from 'prop-types'

const Body = ({children}) => {
  return (
    <div className='box-tools'>
      {children}
    </div>
  )
}

Body.propTypes = {
  children: PropTypes.node
}

export default Body
