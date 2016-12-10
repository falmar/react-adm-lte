// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component, PropTypes} from 'react'

const SearchForm = ({value, placeholder, onSubmit, onChange}) => {
  return (
    <form action='#' method='get' onSubmit={onSubmit} className='sidebar-form'>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          onChange={onChange}
          value={value}
          placeholder={placeholder} />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-flat'>
            <i className='fa fa-search' />
          </button>
        </span>
      </div>
    </form>
  )
}

SearchForm.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export {SearchForm}

class SearchFormContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {query: ''}
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentWillMount () {
    this.setState({query: this.props.value ? this.props.value : ''})
  }

  onSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.state.query)
  }

  onChange (event) {
    const query = event.currentTarget.value

    this.setState({query})
  }

  render () {
    const {placeholder} = this.props

    return (
      <SearchForm
        placeholder={placeholder}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        value={this.state.query} />
    )
  }
}

SearchFormContainer.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
}

export default SearchFormContainer
