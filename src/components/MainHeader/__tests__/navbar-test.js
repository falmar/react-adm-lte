// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Navbar')

import React from 'react'
import {shallow} from 'enzyme'

import Navbar from './../Navbar'

describe('MainHeader.Navbar', () => {
  it('should contain classNames', () => {
    const wrapper = shallow(<Navbar />)

    expect(
      wrapper.hasClass('navbar')
    ).toBeTruthy()

    expect(
      wrapper.hasClass('navbar-static-top')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(<Navbar><div>I'm a child</div></Navbar>)

    expect(
      wrapper.contains(<div>I'm a child</div>)
    ).toBeTruthy()

    expect(
      wrapper.contains(<div>something else</div>)
    ).toBeFalsy()
  })
})
