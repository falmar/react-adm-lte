import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Dropdown from './Dropdown'
import DropdownToggle from './DropdownToggle'
import DropdownMenu from './DropdownMenu'

class User extends Component {
  render () {
    const {open, onToggle} = this.props
    const {imageUrl, label} = this.props
    const {children} = this.props

    return (
      <Dropdown open={open} onToggle={onToggle} className='user user-menu'>
        <DropdownToggle onToggle={onToggle}>
          <img src={imageUrl} className='user-image' alt='User Image' />
          <span className='hidden-xs'>{label}</span>
        </DropdownToggle>
        <DropdownMenu>
          {children}
        </DropdownMenu>
      </Dropdown>
    )
  }
}

User.propTypes = {
  open: PropTypes.bool,
  imageUrl: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default User
