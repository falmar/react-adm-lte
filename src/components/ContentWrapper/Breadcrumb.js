import React, {PropTypes} from 'react'

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
