// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../SidebarMenu')

import React from 'react'
import {shallow} from 'enzyme'

import {Menu, Item} from './../SidebarMenu'

describe('Sidebar.Menu', () => {
  it('should have classnames treeview-menu when isRoot prop is not provided', () => {
    const wrapper = shallow(<Menu />)

    expect(
      wrapper.hasClass('treeview-menu')
    ).toBeTruthy()
  })

  it('should have classnames sidebar-menu when isRoot prop is provided', () => {
    const wrapper = shallow(<Menu isRoot />)

    expect(
      wrapper.hasClass('sidebar-menu')
    ).toBeTruthy()
  })
})

describe('Sidebar.Item', () => {
  it('should not have classname if isTreeview prop is not provided', () => {
    const wrapper = shallow(<Item />)

    expect(
      wrapper.prop('className')
    ).toEqual('')
  })

  it('should have classname if isTreeview prop is provided', () => {
    const wrapper = shallow(<Item isTreeview />)

    expect(
      wrapper.hasClass('treeview')
    ).toBeTruthy()
  })
})
