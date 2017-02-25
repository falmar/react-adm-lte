// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../TabContent')

import React from 'react'
import {shallow} from 'enzyme'

import TabContent from './../TabContent'

describe('ControlSidebar.TabContent', () => {
  it('should be a <div> element', () => {
    const wrapper = shallow(<TabContent />)

    expect(
      wrapper.is('div')
    ).toBeTruthy()
  })

  it('should have basic className', () => {
    const wrapper = shallow(<TabContent />)

    expect(
      wrapper.hasClass('tab-content')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <TabContent>
        <div>Children!</div>
      </TabContent>
    )

    expect(
      wrapper.contains(<div>Children!</div>)
    ).toBeTruthy()
  })
})
