// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Dropdown')
jest.unmock('sinon')

import React from 'react'
import {shallow} from 'enzyme'

import {Messages} from './../Dropdown'

describe('Menu.Dropdown.Messages', () => {
  const commonCB = () => {}

  it('should add classes', () => {
    const wrapper = shallow(
      <Messages
        onToggle={commonCB}
        data={[]} />
    )

    const classes = [
      'messages-menu',
      'fa-envelope-o',
      'label-success'
    ]

    expect(
      wrapper.instance().getClassNames()
    ).toEqual(classes)
  })
})
