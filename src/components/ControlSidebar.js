// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import classnames from 'classnames'

const ControlSidebar = ({children, open}) => {
  const classes = classnames(
    'control-sidebar control-sidebar-dark', {
      'control-sidebar-open': open
    }
  )

  return (
    <aside className={classes}>
      {children}
    </aside>
  )
}

ControlSidebar.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.element
}

export default ControlSidebar
