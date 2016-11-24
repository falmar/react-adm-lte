// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../User')

import React from 'react'
import {shallow, mount} from 'enzyme'

import {User, UserHeader} from './../User'

describe('Dropdown.User.Base', () => {
  it('should add a tag or Link (react-router) depending on href', () => {
    // href present with external link should be react-router's Link
    let wrapper = mount(<User href='http://example.com' />)

    let Link = wrapper.find('a')

    expect(
      Link.length
    ).toEqual(1)

    expect(
      Link.prop('href')
    ).toEqual('http://example.com')

    wrapper.unmount()

    // href not present should be a tag with href=/user
    wrapper = mount(<User href='/user' />)

    Link = wrapper.find('Link')

    expect(
      Link.length
    ).toEqual(1)

    expect(
      Link.prop('to')
    ).toEqual('/user')
  })

  it('should have img tag and its url', () => {
    const wrapper = shallow(<User imageUrl='/img/user2-160x160.jpg' />)

    const img = wrapper.find('img')

    expect(
      img.length
    ).toEqual(1)

    expect(
      img.hasClass('user-image')
    ).toBeTruthy()

    expect(
      img.prop('src')
    ).toEqual('/img/user2-160x160.jpg')
  })

  it('should have label', () => {
    const wrapper = shallow(<User label='Alexander Pierce' />)

    expect(
      wrapper.find('span').text()
    ).toEqual('Alexander Pierce')

    expect(
      wrapper.find('span').hasClass('hidden-xs')
    ).toBeTruthy()
  })

  it('should ul tag dropdown-menu', () => {
    const wrapper = shallow(<User />)

    const ul = wrapper.find('ul')

    expect(
      ul.length
    ).toEqual(1)

    expect(
      ul.hasClass('dropdown-menu')
    ).toBeTruthy()
  })
})

describe('Dropdown.User.Header', () => {
  it('should have class name li tag', () => {
    expect(
      shallow(<UserHeader />).hasClass('user-header')
    ).toBeTruthy()
  })

  it('should have img tag with its url', () => {
    const wrapper = shallow(<UserHeader url='path/to/img' />)

    const img = wrapper.find('img')

    expect(
      img.length
    ).toEqual(1)

    expect(
      img.hasClass('img-circle')
    ).toBeTruthy()

    expect(
      img.prop('src')
    ).toEqual('path/to/img')
  })

  it('should have its title', () => {
    const wrapper = shallow(<UserHeader title='Web Developer' />)

    const p = wrapper.find('p')

    expect(
      p.length
    ).toEqual(1)

    expect(
      p.text()
    ).toContain('Web Developer')
  })

  it('should have its (description)', () => {
    const wrapper = shallow(<UserHeader description='Member since 2015' />)

    const small = wrapper.find('small')

    expect(
      small.length
    ).toEqual(1)

    expect(
      small.text()
    ).toContain('Member since 2015')
  })
})
