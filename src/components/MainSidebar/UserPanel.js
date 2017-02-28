import React, {PropTypes} from 'react'
import classnames from 'classnames'

const UserPanel = ({imageUrl, title, statusText, statusClass}) => {
  return (
    <div className='user-panel'>
      <div className='pull-left image'>
        <img src={imageUrl} className='img-circle' alt='User Image' />
      </div>
      <div className='pull-left info'>
        <p>{title}</p>
        <a href='#'>
          <i className={classnames(['fa', 'fa-circle'], statusClass)} />
          {statusText}
        </a>
      </div>
    </div>
  )
}

UserPanel.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  statusText: PropTypes.string,
  statusClass: PropTypes.string
}

export default UserPanel
