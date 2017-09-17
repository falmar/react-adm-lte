import React from 'react'
import PropTypes from 'prop-types'
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
  title: PropTypes.string.isRequired,
  progress: stringOrNumber,
  progressClass: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  completedText: PropTypes.string.isRequired
}

export default TaskItem
