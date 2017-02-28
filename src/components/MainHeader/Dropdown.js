import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

class Dropdown extends Component {
  constructor (props) {
    super(props)

    this.state = {eventRef: null}
  }

  componentDidMount () {
    const ref = event => {
      const {onToggle, open} = this.props

      if (
        open &&
        typeof onToggle === 'function' &&
        this.dom !== event.target &&
        !this.dom.contains(event.target)
      ) {
        onToggle()
      }
    }

    this.setState({eventRef: ref})
    document.addEventListener('click', ref)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.state.eventRef)
  }

  render () {
    const {className, children, open} = this.props

    return (
      <li
        ref={dom => (this.dom = dom)}
        className={classnames('dropdown', className, {open})}>
        {children}
      </li>
    )
  }
}

Dropdown.propTypes = {
  onToggle: PropTypes.func.isRequired,
  open: PropTypes.bool,
  children: PropTypes.element,
  className: PropTypes.string
}

export default Dropdown
