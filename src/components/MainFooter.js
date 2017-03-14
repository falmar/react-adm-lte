import React, {PropTypes} from 'react'

const MainFooter = ({children}) => {
  return (
    <footer className='main-footer'>
      {children}
    </footer>
  )
}

MainFooter.propTypes = {
  children: PropTypes.node
}

export default MainFooter
