// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

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
