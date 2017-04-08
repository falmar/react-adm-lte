import React, {PropTypes} from 'react'

const Body = ({children}) => {
  return (
    <div className='box-body'>
      {children}
    </div>
  )
}

Body.propTypes = {
  children: PropTypes.node
}

export default Body
