// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

import Link from './../../utils/Link'

const User = ({imageUrl, href, onClick, label}) => {
  return (
    <li className='dropdown user user-menu'>
      <Link href={href} onClick={onClick}>
        <img src={imageUrl} className='user-image' alt='User Image' />
        <span className='hidden-xs'>{label}</span>
      </Link>
      <ul className='dropdown-menu' />
    </li>
  )
}

User.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  imageUrl: PropTypes.string,
  label: PropTypes.string
}

export {User}

const UserHeader = ({url, title, description}) => {
  return (
    <li className='user-header'>
      <img src={url} className='img-circle' alt='User Image' />
      <p>
        {title}
        <small>{description}</small>
      </p>
    </li>
  )
}

UserHeader.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export {UserHeader}

const UserBody = ({data}) => {
  return (
    <li className='user-body' >
      <div className='row'>
        {data && data.map((item, index) => {
          return (
            <div className='col-xs-4 text-center'>
              <Link
                key={item.href + index}
                href={item.href}
                onClick={item.onClick}>{item.label}
              </Link>
            </div>
          )
        })}
      </div>
    </li>
  )
}

UserBody.propTypes = {
  data: PropTypes.array.isRequired
}

export {UserBody}

const UserFooter = ({data}) => {
  const getContainer = (side, item) => {
    return <div className={`pull-${side}`}>
      <Link
        href={item.href}
        onClick={item.onClick}>{item.label}
      </Link>
    </div>
  }

  return (
    <li className='user-footer'>
      {data && data.left && getContainer('left', data.left)}
      {data && data.right && getContainer('right', data.right)}
    </li>
  )
}

UserFooter.propTypes = {
  data: PropTypes.object.isRequired
}

export {UserFooter}