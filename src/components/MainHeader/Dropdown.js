// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

const stringOrNumber = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
])

const commonProps = {
  label: stringOrNumber,
  data: PropTypes.array.isRequired,
  open: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  header: stringOrNumber,
  footer: stringOrNumber
}

export {commonProps}

class Dropdown extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.focus = this.focus.bind(this)
    this.blur = this.blur.bind(this)
    this.keydown = this.keydown.bind(this)
  }

  componentWillUnmount () {
    clearTimeout(this.menu.getAttribute('timeoutId'))

    if (this.props.open) {
      this.props.onToggle(false)
    }
  }

  toggle (event) {
    if (!this.props.open) {
      this.props.onToggle(true)
      setTimeout(() => {
        this.menu.focus()
      })
    } else {
      this.props.onToggle(false)
    }
  }

  focus (event) {
    clearTimeout(this.menu.getAttribute('timeoutId'))

    if (this.props.onFocus instanceof Function) {
      this.props.onFocus(event)
    }
  }

  blur (event) {
    this.menu.setAttribute('timeoutId', setTimeout(() => {
      this.props.onToggle(false)
    }))
  }

  keydown (event) {
    if (event.keyCode === 27) {
      event.preventDefault()

      if (this.props.open) {
        this.props.onToggle(false)
      }
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
          onClick={this.toggle}
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
  label: stringOrNumber,
  items: PropTypes.node.isRequired,
  onToggle: PropTypes.func.isRequired,
  onFocus: PropTypes.func
}

export {Dropdown}
