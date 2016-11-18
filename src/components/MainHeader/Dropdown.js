// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

class Dropdown extends Component {
  constructor (props) {
    super(props)

    this.click = this.click.bind(this)
    this.focus = this.focus.bind(this)
    this.blur = this.blur.bind(this)
    this.keydown = this.keydown.bind(this)
  }

  componentWillUnmount () {
    this.props.onBlur()
    clearTimeout(this.menu.getAttribute('timeoutId'))
  }

  click (event) {
    this.props.onToggle(event)
    setTimeout(() => {
      this.menu.focus()
    })
  }

  focus (event) {
    clearTimeout(this.menu.getAttribute('timeoutId'))
    if (this.props.onFocus instanceof Function) {
      this.props.onFocus(event)
    }
  }

  blur (event) {
    this.menu.setAttribute('timeoutId', setTimeout(() => {
      this.props.onBlur(event)
    }))
  }

  keydown (event) {
    if (event.keyCode === 27) {
      event.preventDefault()
      this.props.onBlur()
    }
  }

  render () {
    const {cn, label, items, open} = this.props

    return (
      <li className={classnames('dropdown', cn[0], {open})}>
        <a
          ref={dom => { this.anchor = dom }}
          href='#'
          className='dropdown-toggle'
          onClick={this.click}
          onFocus={this.focus}
          onBlur={this.blur}>

          <i className={classnames('fa', cn[1])} />
          <span className={classnames('label', cn[2])}>{label}</span>
        </a>
        <ul
          style={{outline: 'none'}}
          tabIndex={-1}
          ref={dom => { this.menu = dom }}
          className='dropdown-menu'
          onFocusCapture={this.focus}
          onBlurCapture={this.blur}
          onKeyDown={this.keydown}>
          {items}
        </ul>
      </li>
    )
  }
}

Dropdown.propTypes = {
  open: PropTypes.bool,
  cn: PropTypes.array.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  items: PropTypes.node.isRequired,
  onToggle: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func.isRequired
}

export {Dropdown}

const commonProps = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  data: PropTypes.array.isRequired,
  open: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
}

class Notifications extends Component {
  getItems () {
    return []
  }

  getClassNames () {
    return [
      'notifications-menu',
      'fa-bell-o',
      'label-warning'
    ]
  }

  render () {
    return <Dropdown
      open={this.props.open}
      cn={this.getClassNames()}
      items={this.getItems()}
      label={this.props.label}
      onToggle={this.props.onToggle}
      onBlur={this.props.onBlur}
      />
  }
}

Notifications.propTypes = commonProps

export {Notifications}

class Messages extends Component {
  getItems () {
    return []
  }

  getClassNames () {
    return [
      'messages-menu',
      'fa-envelope-o',
      'label-success'
    ]
  }

  render () {
    return <Dropdown
      open={this.props.open}
      cn={this.getClassNames()}
      items={this.getItems()}
      label={this.props.label}
      onToggle={this.props.onToggle}
      onBlur={this.props.onBlur}
      />
  }
}

Messages.propTypes = commonProps

export {Messages}

class Tasks extends Component {
  getItems () {
    return []
  }

  getClassNames () {
    return [
      'tasks-menu',
      'fa-flag-o',
      'label-danger'
    ]
  }

  render () {
    return <Dropdown
      open={this.props.open}
      cn={this.getClassNames()}
      items={this.getItems()}
      label={this.props.label}
      onToggle={this.props.onToggle}
      />
  }
}

Tasks.propTypes = commonProps

export {Tasks}
