// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../NavbarMenu')

import React from 'react'
import {shallow} from 'enzyme'

import NavbarMenu from './../NavbarMenu'

describe('NavbarMenu', () => {
  it('should contain one children ul', () => {
    const wrapper = shallow(<NavbarMenu>anything</NavbarMenu>)

    expect(
      wrapper.find('ul').length
    ).toEqual(1)
  })

  it('should add classNames to ul', () => {
    const wrapper = shallow(<NavbarMenu>anything</NavbarMenu>)

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

  it('should contain one children div', () => {
    const wrapper = shallow(<NavbarMenu>anything</NavbarMenu>)

    expect(
      wrapper.find('div').length
    ).toEqual(1)
  })

  it('should add classNames to div', () => {
    const wrapper = shallow(<NavbarMenu>anything</NavbarMenu>)

    expect(
      wrapper.find('div').prop('className')
    ).toBe('navbar-custom-menu')
  })

  it('should pass down children', () => {
    const wrapper = shallow(<NavbarMenu><div>I'm a child</div></NavbarMenu>)

    expect(
      wrapper.contains(<div>I'm a child</div>)
    ).toBeTruthy()

    expect(
      wrapper.contains(<div>something else</div>)
    ).toBeFalsy()
  })
})
