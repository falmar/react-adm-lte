import React from 'react'
import PropTypes from 'prop-types'

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
