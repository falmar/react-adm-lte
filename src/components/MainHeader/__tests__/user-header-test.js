// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('../UserHeader')

import React from 'react'
import {shallow} from 'enzyme'

import UserHeader from '../UserHeader'

const props = {
  imageUrl: '',
  title: '',
  description: ''
}

describe('MainHeader.Navbar.NavbarMenu.User.UserHeader', () => {
  it('should have className "user-header"', () => {
    const wrapper = shallow(<UserHeader {...props} />)

    expect(
      wrapper.hasClass('user-header')
    ).toBeTruthy()
  })

  it('should have <img> element with className "img-circle" by default', () => {
    const wrapper = shallow(<UserHeader {...props} />)

    expect(
      wrapper.find('img').hasClass('img-circle')
    ).toBeTruthy()
  })

  it('should pass the prop imageUrl to <img> element', () => {
    const wrapper = shallow(<UserHeader {...props} imageUrl='http://example.com' />)

    expect(
      wrapper.find('img').prop('src')
    ).toBe('http://example.com')
  })

  it('should have <p> element that contains the prop title', () => {
    const wrapper = shallow(<UserHeader {...props} title='Alexander Pierce' />)

    expect(
      wrapper.find('p').contains('Alexander Pierce')
    ).toBeTruthy()
  })

  it('should have <small> element that contains the prop description', () => {
    const wrapper = shallow(<UserHeader {...props} description='Web Developer' />)

    expect(
      wrapper.find('small').contains('Web Developer')
    ).toBeTruthy()
  })
})
