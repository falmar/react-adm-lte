import React, {PropTypes} from 'react'

const UserHeader = ({imageUrl, title, description}) => {
  return (
    <li className='user-header'>
      <img src={imageUrl} className='img-circle' alt='User Image' />
      <p>
        {title}
        <small>{description}</small>
      </p>
    </li>
  )
}

UserHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default UserHeader
