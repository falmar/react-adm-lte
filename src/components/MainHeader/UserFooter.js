import React, {PropTypes} from 'react'

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
