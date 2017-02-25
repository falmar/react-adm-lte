// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('../User')

import React from 'react'
import {shallow} from 'enzyme'

import User from '../User'

const props = {
  label: '',
  imageUrl: '',
  open: false,
  onToggle: () => {}
}

describe('MainHeader.Navbar.NavbarMenu.User', () => {
  it('should have an Dropdown component', () => {
    const wrapper = shallow(<User {...props} />)

    expect(
      wrapper.find('Dropdown').length
    ).toBe(1)
  })

  it('should have an DropdownToggle component', () => {
    const wrapper = shallow(<User {...props} />)

    expect(
      wrapper.find('DropdownToggle').length
    ).toBe(1)
  })

  it('should have an DropdownMenu component', () => {
    const wrapper = shallow(<User {...props} />)

    expect(
      wrapper.find('DropdownMenu').length
    ).toBe(1)
  })

  it('should pass prop className to Dropdown as "user user-menu" by default', () => {
    const wrapper = shallow(<User {...props} />)

    expect(
      wrapper.find('Dropdown').prop('className')
    ).toBe('user user-menu')
  })

  it('should pass prop open to Dropdown false by default', () => {
    const wrapper = shallow(<User {...props} />)

    expect(
      wrapper.find('Dropdown').prop('open')
    ).toBeFalsy()
  })

  it('should pass prop open to Dropdown true', () => {
    const wrapper = shallow(<User {...props} open />)

    expect(
      wrapper.find('Dropdown').prop('open')
    ).toBeTruthy()
  })

  it('should have <img> element with className "user-image"', () => {
    const wrapper = shallow(<User {...props} />)
    const img = wrapper.find('img')

    expect(
      img.prop('className')
    ).toBe('user-image')
  })

  it('should pass prop imageUrl to <img> element', () => {
    const wrapper = shallow(<User {...props} imageUrl='http://example.com' />)
    const img = wrapper.find('img')

    expect(
      img.prop('src')
    ).toBe('http://example.com')
  })

  it('should have <span> tag element with className "hidden-xs" by default', () => {
    const wrapper = shallow(<User {...props} />)
    const span = wrapper.find('span')

    expect(
      span.prop('className')
    ).toBe('hidden-xs')
  })

  it('should have <span> tag element with no children by default', () => {
    const wrapper = shallow(<User {...props} />)
    const span = wrapper.find('span')

    expect(
      span.children().length
    ).toBe(0)
  })

  it('should have <span> tag element children provided as prop label', () => {
    const wrapper = shallow(<User {...props} label='Alexander Pierce' />)
    const span = wrapper.find('span')

    expect(
      span.children().length
    ).toBe(1)

    expect(
      span.contains('Alexander Pierce')
    ).toBeTruthy()
  })

  it('should pass onToggle func to Dropdown component as prop', () => {
    const ref = () => {}
    const wrapper = shallow(
      <User {...props} onToggle={ref} />
    )

    expect(
      wrapper.find('Dropdown').prop('onToggle')
    ).toBe(ref)
  })

  it('should pass onToggle func to DropdownToggle component as prop', () => {
    const ref = () => {}
    const wrapper = shallow(
      <User {...props} onToggle={ref} />
    )

    expect(
      wrapper.find('DropdownToggle').prop('onToggle')
    ).toBe(ref)
  })

  it('should pass down children to DropdownMenu component', () => {
    const wrapper = shallow(
      <User {...props}>
        <li>Children</li>
      </User>
    )

    expect(
      wrapper.find('DropdownMenu').contains(<li>Children</li>)
    ).toBeTruthy()
  })
})
