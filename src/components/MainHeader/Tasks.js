// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

import GenericDropdown from './GenericDropdown'

const Tasks = props => {
  return (
    <GenericDropdown
      {...props}
      iconClass='fa fa-flag-o'
      labelClass='label label-danger'
      className='tasks-menu'
      >
      {props.children}
    </GenericDropdown>
  )
}

Tasks.propTypes = {
  open: PropTypes.bool.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  onToggle: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  onClickFooter: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Tasks
