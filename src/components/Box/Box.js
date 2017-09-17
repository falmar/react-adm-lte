import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Overlay from './Overlay'

const Box = props => {
  const {solid, primary, info} = props
  const {warning, success, danger} = props
  const {collapsed, overlay} = props
  const className = classnames('box', {
    'box-solid': solid,
    'box-primary': primary,
    'box-info': info,
    'box-warning': warning,
    'box-success': success,
    'box-danger': danger,
    'box-collapsed': collapsed
  })

  return (
    <div className={className}>
      {props.children}
      {overlay && <Overlay />}
    </div>
  )
}

Box.propTypes = {
  solid: PropTypes.bool,
  primary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  collapsed: PropTypes.bool,
  overlay: PropTypes.bool,
  children: PropTypes.node
}

export default Box
