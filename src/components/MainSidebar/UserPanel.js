// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import classnames from 'classnames'

const UserPanel = ({imageUrl, title, statusText, statusClass}) => {
  return (
    <div className='user-panel'>
      <div className='pull-left image'>
        <img src={imageUrl} alt='' />
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
