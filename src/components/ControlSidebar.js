// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import classnames from 'classnames'

const ControlSidebar = ({open}) => {
  const classes = {
    'control-sidebar-open': open
  }

  return (
    <aside className={classnames('control-sidebar control-sidebar-dark', classes)} />
  )
}

ControlSidebar.propTypes = {
  open: PropTypes.bool
}

export {ControlSidebar}

const ControlSidebarBackground = () => {
  const styles = {
    position: 'fixed',
    height: 'auto'
  }

  return (
    <div className='control-sidebar-bg' style={styles} />
  )
}

export {ControlSidebarBackground}
