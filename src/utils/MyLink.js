// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const MyLink = ({href, children}) => {
  const url = (typeof href === 'string' && href.length > 0) ? href : '#'

  if (url.indexOf('http') === 0) {
    return <a href={url}>{children}</a>
  }

  return <Link to={url}>{children}</Link>
}

MyLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
}

export default MyLink
