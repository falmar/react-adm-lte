// Copyright 2016 David Lavieri. All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('../DropdownMenu')

import React from 'react'
import {shallow} from 'enzyme'

import DropdownMenu from '../DropdownMenu'

describe('MainHeader.NavbarMenu.Dropdown.DropdownMenu', () => {
  it('should have basic classNames', () => {
    const wrapper = shallow(<DropdownMenu />)

    expect(
      wrapper.hasClass('dropdown-menu')
    ).toBeTruthy()
  })

  it('should be ul dom element', () => {
    const wrapper = shallow(<DropdownMenu />)

    expect(
      wrapper.is('ul')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <DropdownMenu>
        <li>I'm a child</li>
      </DropdownMenu>
    )

    expect(
      wrapper.contains(<li>I'm a child</li>)
    ).toBeTruthy()
  })
})
