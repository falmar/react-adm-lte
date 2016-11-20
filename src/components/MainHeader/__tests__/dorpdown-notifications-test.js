// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Dropdown')

import React from 'react'
import {shallow} from 'enzyme'

import Notifications from './../Notifications'

describe('Menu.Dropdown.Notifications', () => {
  const commonCB = () => {}

  it('should add classes', () => {
    const wrapper = shallow(
      <Notifications
        onToggle={commonCB}
        data={[]} />
    )

    const classes = [
      'notifications-menu',
      'fa-bell-o',
      'label-warning'
    ]

    expect(
      wrapper.instance().getClassNames()
    ).toEqual(classes)
  })
})
