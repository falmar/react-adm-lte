// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const MyLink = ({href, children, onClick, className}) => {
  let url = (typeof href === 'string' && href.length > 0) ? href : '#'

  if (onClick instanceof Function) {
    return <a className={className} href='#' onClick={onClick}>{children}</a>
  }

  if (url.indexOf('http') === 0 || url.indexOf('www.') === 0) {
    return <a className={className} href={url}>{children}</a>
  }

  return <Link className={className} to={url}>{children}</Link>
}

MyLink.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  children: PropTypes.node
}

export default MyLink
