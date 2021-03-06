import React from 'react'
import PropTypes from 'prop-types'
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
