import React from 'react'
import PropTypes from 'prop-types'

const UserFooter = ({children}) => {
  return (
    <li className='user-footer'>
      {children}
    </li>
  )
}

UserFooter.propTypes = {
  children: PropTypes.node
}

export default UserFooter
