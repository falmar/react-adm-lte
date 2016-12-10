// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component, PropTypes} from 'react'

import {Dropdown} from './Dropdown'
import Link from './../../utils/Link'

const stringOrNumber = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
])

const commonProps = {
  label: PropTypes.string,
  open: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  header: stringOrNumber,
  footer: stringOrNumber,
  imageUrl: PropTypes.string
}

class Base extends Component {
  getHeader () {
    const {imageUrl, label} = this.props

    return [
      <img src={imageUrl} className='user-image' alt='User Image' />,
      <span className='hidden-xs'>{label}</span>
    ]
  }

  render () {
    return <Dropdown
      open={this.props.open}
      cn={'user-menu'}
      content={this.children}
      header={this.getHeader()}
      onToggle={this.props.onToggle}
      />
  }
}

Base.propTypes = commonProps

const Header = ({url, title, description}) => {
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

Header.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

const Body = ({data}) => {
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

Body.propTypes = {
  data: PropTypes.array.isRequired
}

const Footer = ({data}) => {
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

Footer.propTypes = {
  data: PropTypes.object.isRequired
}

const User = {
  Base,
  Header,
  Body,
  Footer
}

export default User
