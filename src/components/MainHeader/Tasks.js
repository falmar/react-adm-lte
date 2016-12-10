// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

import {Dropdown} from './Dropdown'
import Link from './../../utils/Link'

const stringOrNumber = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
])

const Task = ({title, progress, progressClass, complete, href, onClick}) => {
  const width = `${progress}%`
  const pcn = classnames('progress-bar', progressClass)

  return (
    <li>
      <Link href={href} onClick={onClick}>
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
      </Link>
    </li>
  )
}

Task.propTypes = {
  id: stringOrNumber,
  title: PropTypes.string,
  progress: stringOrNumber,
  progressClass: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  complete: PropTypes.string
}

export {Task}

class Tasks extends Component {
  getTasks () {
    const {data, complete} = this.props
    let {onClick} = this.props

    if (!(onClick instanceof Function)) {
      onClick = () => {}
    }

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

  getHeader () {
    const cn = this.getClassNames()
    const {label} = this.props

    return [
      <i className={classnames('fa', cn[1])} />,
      <span className={classnames('label', cn[2])}>{label}</span>
    ]
  }

  render () {
    return <Dropdown
      open={this.props.open}
      cn={this.getClassNames()[0]}
      content={this.getItems()}
      header={this.getHeader()}
      onToggle={this.props.onToggle}
      />
  }
}

Tasks.propTypes = {
  label: stringOrNumber,
  data: PropTypes.array.isRequired,
  open: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  header: stringOrNumber,
  footer: stringOrNumber,
  complete: PropTypes.string
}

export default Tasks
