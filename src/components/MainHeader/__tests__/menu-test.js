// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Menu')

import React from 'react'
import {shallow} from 'enzyme'

import Menu from './../Menu'

describe('MainHeader Menu', () => {
  it('should contain two children div', () => {
    const wrapper = shallow(<Menu>anything</Menu>)

    expect(
      wrapper.find('div').length
    ).toEqual(1)
  })

  it('should contain two children rul', () => {
    const wrapper = shallow(<Menu>anything</Menu>)

    expect(
      wrapper.find('ul').length
    ).toEqual(1)
  })

  it('should add classNames to div', () => {
    const wrapper = shallow(<Menu>anything</Menu>)

    expect(
      wrapper.find('div').prop('className').split(' ').length
    ).toEqual(1)

    expect(
      wrapper.find('div').hasClass('navbar-custom-menu')
    ).toBeTruthy()
  })

  it('should add classNames to ul', () => {
    const wrapper = shallow(<Menu>anything</Menu>)

    expect(
      wrapper.find('ul').prop('className').split(' ').length
    ).toEqual(2)

    expect(
      wrapper.find('ul').hasClass('navbar-nav')
    ).toBeTruthy()

    expect(
      wrapper.find('ul').hasClass('nav')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(<Menu><li>A child!</li></Menu>)

    expect(
      wrapper.contains(<li>A child!</li>)
    ).toBeTruthy()
  })
})
