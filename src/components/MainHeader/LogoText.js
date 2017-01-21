// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import classnames from 'classnames'

const LogoText = ({isMini, isLarge, title, boldTitle}) => {
  const className = {
    'logo-mini': isMini,
    'logo-lg': isLarge
  }

  return <span className={classnames(className)}><b>{boldTitle}</b>{title}</span>
}

LogoText.propTypes = {
  isMini: PropTypes.bool,
  isLarge: PropTypes.bool,
  title: PropTypes.string,
  boldTitle: PropTypes.string
}

export default LogoText
