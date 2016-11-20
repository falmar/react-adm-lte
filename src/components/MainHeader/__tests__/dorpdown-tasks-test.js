// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Dropdown')
jest.unmock('sinon')

import React from 'react'
import {shallow} from 'enzyme'

import Tasks from './../Tasks'

describe('Menu.Dropdown.Tasks', () => {
  const commonCB = () => {}

  it('should add classes', () => {
    const wrapper = shallow(
      <Tasks
        onToggle={commonCB}
        data={[]} />
    )

    const classes = [
      'tasks-menu',
      'fa-flag-o',
      'label-danger'
    ]

    expect(
      wrapper.instance().getClassNames()
    ).toEqual(classes)
  })
})
