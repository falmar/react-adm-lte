import React, {PropTypes} from 'react'

const Header = ({title, subTitle, children}) => {
  return (
    <section className='content-header'>
      <h1>
        {title}
        <small>{subTitle}</small>
      </h1>
      {children}
    </section>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node
}

export default Header
