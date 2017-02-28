import React, {PropTypes} from 'react'

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
