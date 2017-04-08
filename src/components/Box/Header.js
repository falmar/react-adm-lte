import React, {PropTypes} from 'react'
import classnames from 'classnames'

const Header = ({border, children}) => {
  const className = {
    'with-border': border
  }

  return (
    <div className={classnames('box-header', className)}>
      {children}
    </div>
  )
}

Header.propTypes = {
  border: PropTypes.bool,
  children: PropTypes.node
}

export default Header
