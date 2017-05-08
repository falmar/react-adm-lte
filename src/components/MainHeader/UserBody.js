import React from 'react'
import PropTypes from 'prop-types'

const UserBody = ({children}) => {
  return (
    <li className='user-body'>
      <div className='row'>
        {children}
      </div>
    </li>
  )
}

UserBody.propTypes = {
  children: PropTypes.node
}

export default UserBody
