import React, {PropTypes} from 'react'
import classnames from 'classnames'

const Header = ({title, border, children}) => {
  const className = {
    'with-border': border
  }

  return (
    <div className={classnames('box-header', className)}>
      {title && <h3 className='box-title'>{title}</h3>}
      {children}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.node,
  border: PropTypes.bool,
  children: PropTypes.node
}

export default Header
