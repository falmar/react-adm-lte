// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

import {Dropdown, commonProps} from './Dropdown'
import MyLink from './../../utils/MyLink'

const Task = ({title, progress, progressClass, complete, href, onClick}) => {
  const width = `${progress}%`
  const pcn = classnames('progress-bar', progressClass)

  return (
    <li onClick={onClick}>
      <MyLink href={href}>
        <h3>
          {title}
          <small className='pull-right'>{progress}%</small>
        </h3>

        <div className='progress xs'>
          <div className={pcn}
            style={{width}}
            role='progressbar'
            aria-valuenow={progress}
            aria-valuemin='0'
            aria-valuemax='100'>
            <span className='sr-only'>{progress}% {complete}</span>
          </div>
        </div>
      </MyLink>
    </li>
  )
}

const stringOrNumeric = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
])

Task.propTypes = {
  id: stringOrNumeric,
  title: PropTypes.string,
  progress: stringOrNumeric,
  progressClass: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  complete: PropTypes.string
}

export {Task}

class Tasks extends Component {
  getTasks () {
    const {data, onClick, complete} = this.props

    return data.map((item, index) => {
      return <Task
        key={item.id + index}
        {...item}
        complete={complete}
        onClick={() => onClick(item.id)} />
    })
  }

  getItems () {
    const {header, footer} = this.props

    return [
      <li className='header'>{header}</li>,
      <li>
        <ul className='menu'>
          {this.getTasks()}
        </ul>
      </li>,
      <li className='footer'><a href='#'>{footer}</a></li>
    ]
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

Tasks.propTypes = {
  ...commonProps,
  complete: PropTypes.string
}

export default Tasks
