// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

const SubHeader = ({children}) => {
  return (
    <h4 className='control-sidebar-subheading'>{children}</h4>
  )
}

SubHeader.propTypes = {
  children: PropTypes.node
}

export default SubHeader
