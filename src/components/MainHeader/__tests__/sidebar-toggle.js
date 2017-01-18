// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Logo')

import React from 'react'
import {shallow} from 'enzyme'

import SidebarToggle from './../SidebarToggle'

describe('SidebarToggle', () => {
  it('should not set any screen only if not provided', () => {
    expect(
      shallow(<SidebarToggle click={() => {}} />).find('.sr-only').text()
    ).toEqual('')
  })

  it('should set screen only text if provided', () => {
    expect(
      shallow(<SidebarToggle
        srOnly='this is a text'
        click={() => {}} />).find('.sr-only').text()
    ).toEqual('this is a text')
  })

  it('should not call click callback', () => {
    const onClick = jest.fn()

    shallow(<SidebarToggle onToggle={onClick} />)

    expect(
      onClick
    ).not.toHaveBeenCalled()
  })

  it('should call click callback on click', () => {
    const onClick = jest.fn()

    const wrapper = shallow(<SidebarToggle onToggle={onClick} />)

    wrapper.find('.sidebar-toggle').simulate('click')

    expect(
      onClick
    ).toHaveBeenCalled()
  })
})
