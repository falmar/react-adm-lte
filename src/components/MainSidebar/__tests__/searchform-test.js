// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../SearchForm')

import React from 'react'
import {shallow} from 'enzyme'

import SearchForm from './../SearchForm'

describe('MainSidebar.SearchForm', () => {
  it('should have classnames', () => {
    const wrapper = shallow(<SearchForm />)

    expect(
      wrapper.hasClass('sidebar-form')
    ).toBeTruthy()

    expect(
      wrapper.prop('action')
    ).toEqual('#')

    expect(
      wrapper.prop('method')
    ).toEqual('get')
  })

  it('should trigger onSubmit', () => {
    const spy = jest.fn()
    const wrapper = shallow(<SearchForm onSubmit={spy} />)

    wrapper.simulate('submit')

    expect(
      spy
    ).toBeCalled()
  })

  it('should trigger onChange', () => {
    const spy = jest.fn()
    const wrapper = shallow(<SearchForm onChange={spy} />)

    wrapper.find('input').simulate('change')

    expect(
      spy
    ).toBeCalled()
  })

  it('should have input-group', () => {
    const wrapper = shallow(
      <SearchForm
        placeholder='Search...'
        value='Random Value!' />
    )

    expect(
      wrapper.find('.input-group').length
    ).toEqual(1)

    const input = wrapper.find('input')

    expect(
      input.length
    ).toEqual(1)

    expect(
      input.hasClass('form-control')
    )

    expect(
      input.prop('value')
    ).toEqual('Random Value!')

    expect(
      input.prop('placeholder')
    ).toEqual('Search...')

    expect(
      input.prop('type')
    ).toEqual('text')
  })

  it('should have form btn', () => {
    const wrapper = shallow(<SearchForm />)

    expect(
      wrapper.find('span').hasClass('input-group-btn')
    ).toBeTruthy()

    const button = wrapper.find('button')

    expect(
      button.hasClass('btn btn-flat')
    ).toBeTruthy()

    expect(
      button.prop('type')
    ).toEqual('submit')

    expect(
      wrapper.find('i').hasClass('fa')
    ).toBeTruthy()

    expect(
      wrapper.find('i').hasClass('fa-search')
    ).toBeTruthy()
  })
})
