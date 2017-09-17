import React from 'react'
import PropTypes from 'prop-types'

const Breadcrumb = ({children}) => {
  return (
    <ol className='breadcrumb'>
      {children}
    </ol>
  )
}

Breadcrumb.propTypes = {
  children: PropTypes.node
}

export default Breadcrumb
