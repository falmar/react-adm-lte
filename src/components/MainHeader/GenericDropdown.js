// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

import Link from '../../utils/Link'
import Dropdown from './Dropdown'
import DropdownToggle from './DropdownToggle'
import DropdownMenu from './DropdownMenu'

const GenericDropdown = (props) => {
  const {open, onToggle, children} = props
  const {iconClass, labelClass, label} = props
  const {header, footer, onClickFooter} = props

  return (
    <Dropdown open={open} onToggle={onToggle}>
      <DropdownToggle onToggle={onToggle}>
        <i className={iconClass} />
        <span className={labelClass}>{label}</span>
      </DropdownToggle>
      <DropdownMenu>
        <li className='header'>{header}</li>
        <li>
          <ul className='menu'>
            {children}
          </ul>
        </li>
        <li className='footer'>
          <Link onClick={onClickFooter}>{footer}</Link>
        </li>
      </DropdownMenu>
    </Dropdown>
  )
}

GenericDropdown.propTypes = {
  open: PropTypes.bool,
  iconClass: PropTypes.string,
  labelClass: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  onToggle: PropTypes.func,
  header: PropTypes.string,
  footer: PropTypes.string,
  onClickFooter: PropTypes.func
}

export default GenericDropdown
