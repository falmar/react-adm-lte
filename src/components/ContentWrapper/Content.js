import React, {PropTypes} from 'react'

const Content = ({children}) => {
  return (
    <section className='content'>
      {children}
    </section>
  )
}

Content.propTypes = {
  children: PropTypes.node
}

export default Content
