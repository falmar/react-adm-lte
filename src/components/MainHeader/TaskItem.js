// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import classnames from 'classnames'

import Link from '../../utils/Link'

const TaskItem = ({title, progress, progressClass, completedText, href, onClick}) => {
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
            <span className='sr-only'>{progress}% {completedText}</span>
          </div>
        </div>
      </Link>
    </li>
  )
}

const stringOrNumber = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]).isRequired

TaskItem.propTypes = {
  id: stringOrNumber,
  title: PropTypes.string.isRequired,
  progress: stringOrNumber,
  progressClass: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  completedText: PropTypes.string.isRequired
}

export default TaskItem
