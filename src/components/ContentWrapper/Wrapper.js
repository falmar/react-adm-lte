import React, {PropTypes} from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='content-wrapper'>
      {children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node
}

export default Wrapper
