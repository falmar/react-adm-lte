// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

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
