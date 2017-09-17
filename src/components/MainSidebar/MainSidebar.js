import React from 'react'
import PropTypes from 'prop-types'

const MainSidebar = ({children}) => {
  return (
    <aside className='main-sidebar'>
      <section className='sidebar'>
        {children}
      </section>
    </aside>
  )
}

MainSidebar.propTypes = {
  children: PropTypes.node
}

export default MainSidebar
