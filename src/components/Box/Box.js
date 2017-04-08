import React, {PropTypes} from 'react'
import classnames from 'classnames'

const Box = props => {
  const {solid, primary, info} = props
  const {warning, success, danger} = props
  const {collapsed} = props
  const {children} = props
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
      {children}
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
  children: PropTypes.node
}

export default Box
