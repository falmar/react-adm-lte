import React, {PropTypes} from 'react'

const SubHeader = ({children}) => {
  return (
    <h4 className='control-sidebar-subheading'>{children}</h4>
  )
}

SubHeader.propTypes = {
  children: PropTypes.node
}

export default SubHeader
