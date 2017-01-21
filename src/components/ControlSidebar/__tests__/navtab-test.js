// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../NavTab')

import React from 'react'
import {shallow} from 'enzyme'

import NavTab from './../NavTab'

describe('ControlSidebar.NavTab', () => {
  it('should have basic classnames', () => {
    const wrapper = shallow(<NavTab />)

    expect(
      wrapper.hasClass('nav')
    ).toBeTruthy()

    expect(
      wrapper.hasClass('nav-tabs')
    ).toBeTruthy()

    expect(
      wrapper.hasClass('nav-justified')
    ).toBeTruthy()

    expect(
      wrapper.hasClass('control-sidebar-tabs')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <NavTab>
        <span>children</span>
      </NavTab>
    )

    expect(
      wrapper.contains(<span>children</span>)
    ).toBeTruthy()
  })
})
