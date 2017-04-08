import React, {PropTypes} from 'react'

const Footer = ({children}) => {
  return (
    <div className='box-footer'>
      {children}
    </div>
  )
}

Footer.propTypes = {
  children: PropTypes.node
}

export default Footer
