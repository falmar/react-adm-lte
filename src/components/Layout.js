import React, {Component, PropTypes} from 'react'

class Layout extends Component {
  componentDidMount () {
    this.toggleClasses(this.props)

    window.document.body.classList.add(this.props.skin)
  }

  componentWillReceiveProps (nextProps) {
    this.toggleClasses(nextProps)

    window.document.body.classList.remove(this.props.skin)
    window.document.body.classList.add(nextProps.skin)
  }

  componentWillUnmount () {
    const {skin, boxed, fixed} = this.props
    const {topNavigation, sidebarCollapse, sidebarMini} = this.props

    const classes = {
      boxed,
      fixed,
      topNavigation,
      sidebarCollapse,
      sidebarMini
    }

    window.document.body.classList.remove(skin)

    this.removeClasses(classes)
  }

  toggleClasses (props) {
    const clsList = this.getClasses(props)
    const body = window.document.body

    Object.keys(clsList).forEach(cls => {
      if (clsList[cls] === true) {
        body.classList.add(cls)
      } else {
        body.classList.remove(cls)
      }
    })
  }

  removeClasses (props) {
    const clsList = this.getClasses(props)
    const body = window.document.body

    Object.keys(clsList).forEach(cls => {
      body.classList.remove(cls, clsList[cls])
    })
  }

  getClasses (props) {
    return {
      'layout-top-nav': props.topNavigation,
      'layout-boxed': props.boxed,
      'fixed': props.fixed,
      'sidebar-collapse': props.sidebarCollapse,
      'sidebar-mini': props.sidebarMini
    }
  }

  render () {
    return (
      <div className='wrapper'>
        {this.props.children}
      </div>
    )
  }
}

Layout.propTypes = {
  skin: PropTypes.string.isRequired,
  topNavigation: PropTypes.bool,
  boxed: PropTypes.bool,
  fixed: PropTypes.bool,
  sidebarCollapse: PropTypes.bool,
  sidebarMini: PropTypes.bool,
  children: PropTypes.node
}

export default Layout
