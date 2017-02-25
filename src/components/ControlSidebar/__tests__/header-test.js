// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Header')

import React from 'react'
import {shallow} from 'enzyme'

import Header from './../Header'

describe('ControlSidebar.TabContent.TabPane.Header', () => {
  it('should have basic classNames', () => {
    const wrapper = shallow(<Header />)

    expect(
      wrapper.hasClass('control-sidebar-heading')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <Header>
        Children!
      </Header>
    )

    expect(
      wrapper.contains('Children!')
    ).toBeTruthy()
  })
})
