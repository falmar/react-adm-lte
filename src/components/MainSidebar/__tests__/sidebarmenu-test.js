// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../SidebarMenu')

import React from 'react'
import {shallow} from 'enzyme'

import {SidebarMenu} from './../SidebarMenu'

describe('Sidebar.Menu', () => {
  it('should have classnames', () => {
    const wrapper = shallow(<SidebarMenu />)

    expect(
      wrapper.hasClass('sidebar-menu')
    ).toBeTruthy()
  })
})
