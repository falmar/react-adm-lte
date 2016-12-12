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

const Body = ({data, close, closeOnClick}) => {
  return (
    <li className='user-body' >
      <div className='row'>
        {data && data.map((item, index) => {
          const click = () => {
            if (close instanceof Function && closeOnClick) {
              close()
            }

            if (item.onClick instanceof Function) {
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
  close: PropTypes.func,
  closeOnClick: PropTypes.bool
}

Body.defaultProps = {
  close: () => {}
}

const Footer = ({data, close, closeOnClick}) => {
  const getContainer = (side, item) => {
    const click = () => {
      if (close instanceof Function && closeOnClick) {
        close()
      }

      if (item.onClick instanceof Function) {
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
  close: PropTypes.func,
  closeOnClick: PropTypes.bool
}

Footer.defaultProps = {
  close: () => {}
}

class Base extends Component {
  constructor (props) {
    super(props)

    this.getContent = this.getContent.bind(this)
  }

  getHeader () {
    const {imageUrl, label} = this.props

    return [
      <img src={imageUrl} className='user-image' alt='User Image' />,
      <span className='hidden-xs'>{label}</span>
    ]
  }

  getContent (close) {
    const {header, body, footer, closeOnClick} = this.props

    return [
      <Header key='header' {...{...header, close, closeOnClick}} />,
      <Body key='body' {...{data: body, close, closeOnClick}} />,
      <Footer key='footer' {...{data: footer, close, closeOnClick}} />
    ]
  }

  render () {
    return <Dropdown
      open={this.props.open}
      cn={'user-menu'}
      content={this.getContent}
      header={this.getHeader()}
      onToggle={this.props.onToggle}
      />
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
  imageUrl: PropTypes.string,
  children: PropTypes.node,
  closeOnClick: PropTypes.bool
}

const User = {
  Base,
  Header,
  Body,
  Footer
}

export default User
