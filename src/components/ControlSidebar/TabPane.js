// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import classnames from 'classnames'

const TabPane = ({children, active}) => {
  const classNames = classnames('tab-pane', {active})

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

TabPane.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node
}

export default TabPane
