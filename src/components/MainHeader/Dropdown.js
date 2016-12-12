// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

class Dropdown extends Component {
  constructor (props) {
    super(props)

    this.state = {timeoutId: null}
    this.toggle = this.toggle.bind(this)
    this.focus = this.focus.bind(this)
    this.blur = this.blur.bind(this)
    this.keydown = this.keydown.bind(this)
    this.close = this.close.bind(this)
  }

  componentWillUnmount () {
    clearTimeout(this.state.timeoutId)

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
    clearTimeout(this.state.timeoutId)

    this.props.onFocus(event)
  }

  blur (event) {
    this.setState({timeoutId: setTimeout(() => {
      this.props.onToggle(false)
    })})
  }

  keydown (event) {
    if (event.keyCode === 27) {
      event.preventDefault()

      if (this.props.open) {
        this.props.onToggle(false)
      }
    }
  }

  close () {
    this.props.onToggle(false)
  }

  render () {
    const {cn, header, content, open} = this.props

    return (
      <li className={classnames('dropdown', cn, {open})}>
        <a
          href='#'
          className='dropdown-toggle'
          onClick={this.toggle}
          onFocus={this.focus}
          onBlur={this.blur}>
          {header}
        </a>
        <ul
          style={{outline: 'none'}}
          tabIndex={-1}
          ref={dom => { this.menu = dom }}
          className='dropdown-menu'
          onFocusCapture={this.focus}
          onBlurCapture={this.blur}
          onKeyDown={this.keydown}>
          {content(this.close)}
        </ul>
      </li>
    )
  }
}

Dropdown.propTypes = {
  open: PropTypes.bool,
  cn: PropTypes.string,
  header: PropTypes.node.isRequired,
  content: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onFocus: PropTypes.func
}

Dropdown.defaultProps = {
  content: () => {},
  onToggle: () => {},
  onFocus: () => {}
}

export {Dropdown}
