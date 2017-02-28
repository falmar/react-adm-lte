import React, {PropTypes} from 'react'

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

export default SearchForm
