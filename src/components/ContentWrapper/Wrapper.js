import React, {PropTypes} from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='main-content'>
      {children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node
}

export default Wrapper
