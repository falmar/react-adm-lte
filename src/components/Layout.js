// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

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
    window.document.body.classList.remove(this.props.skin)
    this.removeClasses(this.props)
  }

  toggleClasses (props) {
    const clsList = this.getClasses(props)

    Object.keys(clsList).forEach(cls => {
      if (clsList[cls] === true) {
        window.document.body.classList.add(cls)
      } else {
        window.document.body.classList.remove(cls)
      }
    })
  }

  removeClasses (props) {
    const clsList = this.getClasses(props)

    Object.keys(clsList).forEach(cls => {
      window.document.body.classList.remove(cls, clsList[cls])
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
