// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

const Dropdown = ({onToggle, cn, label, items}) => {
  return (
    <li className={cn.base}>
      <a href='#' className='dropdown-toggle' onClick={onToggle}>
        <i className={cn.icon} />
        <span className={cn.label}>{label}</span>
      </a>
      <ul className='dropdown-menu'>
        {items}
      </ul>
    </li>
  )
}

Dropdown.propTypes = {
  cn: PropTypes.object.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  items: PropTypes.node.isRequired,
  onToggle: PropTypes.func.isRequired
}

export {Dropdown}

const commonProps = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  data: PropTypes.array.isRequired,
  open: PropTypes.bool,
  onToggle: PropTypes.func.isRequired
}

const commonClassNames = (classes, open) => {
  return {
    base: classnames('dropdown', classes[0], {open}),
    icon: classnames('fa', classes[1]),
    label: classnames('label', classes[2])
  }
}

class Notifications extends Component {
  getItems () {
    return <li>blue</li>
  }

  getClassNames () {
    return commonClassNames([
      'notifications-menu',
      'fa-bell-o',
      'label-warning'
    ], this.props.open)
  }

  render () {
    return <Dropdown
      cn={this.getClassNames()}
      items={this.getItems()}
      label={this.props.label}
      onToggle={this.props.onToggle}
      />
  }
}

Notifications.propTypes = commonProps

export {Notifications}

class Messages extends Component {
  getItems () {
    return <li className='header'>blue</li>
  }

  getClassNames () {
    return commonClassNames([
      'messages-menu',
      'fa-envelope-o',
      'label-success'
    ], this.props.open)
  }

  render () {
    return <Dropdown
      cn={this.getClassNames()}
      items={this.getItems()}
      label={this.props.label}
      onToggle={this.props.onToggle}
      />
  }
}

Messages.propTypes = commonProps

export {Messages}

class Tasks extends Component {
  getItems () {
    return <li>blue</li>
  }

  getClassNames () {
    return commonClassNames([
      'tasks-menu',
      'fa-flag-o',
      'label-danger'
    ], this.props.open)
  }

  render () {
    return <Dropdown
      cn={this.getClassNames()}
      items={this.getItems()}
      label={this.props.label}
      onToggle={this.props.onToggle}
      />
  }
}

Tasks.propTypes = commonProps

export {Tasks}
