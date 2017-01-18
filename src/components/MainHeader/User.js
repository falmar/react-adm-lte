// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component, PropTypes} from 'react'

import {Dropdown} from './Dropdown'
import Link from './../../utils/Link'

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

const Body = ({data, close}) => {
  return (
    <li className='user-body' >
      <div className='row'>
        {data && data.map((item, index) => {
          const click = () => {
            if (typeof close === 'function') {
              close()
            }

            if (typeof item.onClick === 'function') {
              item.onClick()
            }
          }

          return (
            <div className='col-xs-4 text-center'>
              <Link
                key={index}
                href={item.href}
                onClick={click}>
                {item.label}
              </Link>
            </div>
          )
        })}
      </div>
    </li>
  )
}

Body.propTypes = {
  data: PropTypes.array.isRequired,
  close: PropTypes.func
}

const Footer = ({data, close}) => {
  const getContainer = (side, item) => {
    const click = () => {
      if (typeof close === 'function') {
        close()
      }

      if (typeof item.onClick === 'function') {
        item.onClick()
      }
    }

    return <div className={`pull-${side}`}>
      <Link
        href={item.href}
        className='btn btn-flat btn-default'
        onClick={click}>
        {item.label}
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
  data: PropTypes.object.isRequired,
  close: PropTypes.func
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
    const {open, onToggle, header, body, footer} = this.props
    const close = () => onToggle(false)

    return (
      <Dropdown
        open={open}
        cn={'user-menu'}
        content={this.getContent}
        header={this.getHeader()}
        onToggle={onToggle}
        >
        <Header key='header' {...{...header, close}} />
        <Body key='body' {...{data: body, close}} />
        <Footer key='footer' {...{data: footer, close}} />
      </Dropdown>
    )
  }
}

Base.propTypes = {
  label: PropTypes.string,
  open: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  header: PropTypes.object,
  body: PropTypes.array,
  footer: PropTypes.object,
  imageUrl: PropTypes.string
}

const User = {
  Base,
  Header,
  Body,
  Footer
}

export default User
