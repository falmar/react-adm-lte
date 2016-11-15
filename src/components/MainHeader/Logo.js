// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import classnames from 'classnames'

const LogoText = ({isMini, isLarge, title, boldTitle}) => {
  const className = {
    'logo-mini': isMini,
    'logo-lg': isLarge
  }

  return <span className={classnames(className)}><b>{boldTitle}</b>{title}</span>
}

export {LogoText}

LogoText.propTypes = {
  isMini: PropTypes.bool,
  isLarge: PropTypes.bool,
  title: PropTypes.string,
  boldTitle: PropTypes.string
}

const Logo = ({href, children}) => {
  return (
    <Link to={href} className='logo'>
      {children}
    </Link>
  )
}

Logo.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Logo
