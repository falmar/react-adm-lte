// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../ControlSidebar')

import React from 'react'
import {shallow} from 'enzyme'

import {ControlSidebar, ControlSidebarBackground} from './../ControlSidebar'

describe('ControlSidebar', () => {
  it('should have basic classnames', () => {
    const wrapper = shallow(<ControlSidebar />)

    expect(
      wrapper.hasClass('control-sidebar')
    ).toBeTruthy()

    expect(
      wrapper.hasClass('control-sidebar-dark')
    ).toBeTruthy()
  })

  it('should be closed by default', () => {
    const wrapper = shallow(<ControlSidebar />)

    expect(
      wrapper.hasClass('control-sidebar-open')
    ).toBeFalsy()
  })

  it('should be open when prop provided', () => {
    const wrapper = shallow(<ControlSidebar open />)

    expect(
      wrapper.hasClass('control-sidebar-open')
    ).toBeTruthy()
  })
})

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
