// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../ControlSidebarBackground')

import React from 'react'
import {shallow} from 'enzyme'

import ControlSidebarBackground from './../ControlSidebarBackground'

describe('ControlSidebar Background', () => {
  it('should have basic classnames', () => {
    const wrapper = shallow(<ControlSidebarBackground />)

    expect(
      wrapper.hasClass('control-sidebar-bg')
    ).toBeTruthy()
  })

  it('should have basic styles', () => {
    const wrapper = shallow(<ControlSidebarBackground />)

    expect(
      wrapper.prop('style')
    ).toEqual({
      position: 'fixed',
      height: 'auto'
    })
  })
})
