// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Tasks')

import React from 'react'
import {shallow} from 'enzyme'

import Tasks from './../Tasks'

// using this to avoid props missing warning
// but need to inmediatly overwrite its value
const props = {
  open: false,
  label: '',
  header: '',
  footer: '',
  onToggle: () => {},
  onClickFooter: () => {}
}

describe('MainHeader.Navbar.NavbarMenu.Tasks', () => {
  it(`should pass prop 'open' as true if provided`, () => {
    const wrapper = shallow(<Tasks {...props} open />)

    expect(
      wrapper.find('GenericDropdown').prop('open')
    ).toBeTruthy()
  })

  it(`should pass prop 'className' as 'tasks-menu'`, () => {
    const wrapper = shallow(<Tasks {...props} />)

    expect(
      wrapper.find('GenericDropdown').prop('className')
    ).toBe('tasks-menu')
  })

  it(`should pass prop 'iconClass' as 'fa fa-flag-o'`, () => {
    const wrapper = shallow(<Tasks {...props} />)

    expect(
      wrapper.find('GenericDropdown').prop('iconClass')
    ).toBe('fa fa-flag-o')
  })

  it(`should pass prop 'labelClass' as 'label label-danger'`, () => {
    const wrapper = shallow(<Tasks {...props} />)

    expect(
      wrapper.find('GenericDropdown').prop('labelClass')
    ).toBe('label label-danger')
  })

  it(`should pass prop 'label' as '5' if provided`, () => {
    const wrapper = shallow(<Tasks {...props} label={5} />)

    expect(
      wrapper.find('GenericDropdown').prop('label')
    ).toBe(5)
  })

  it(`should pass prop 'onToggle' if provided`, () => {
    const ref = () => {}
    const wrapper = shallow(<Tasks {...props} onToggle={ref} />)

    expect(
      wrapper.find('GenericDropdown').prop('onToggle')
    ).toBe(ref)
  })

  it(`should pass prop 'header' as 'You have 4 messages' if provided`, () => {
    const wrapper = shallow(<Tasks {...props} header='You have 4 messages' />)

    expect(
      wrapper.find('GenericDropdown').prop('header')
    ).toBe('You have 4 messages')
  })

  it(`should pass prop 'footer' as 'Read all messages' if provided`, () => {
    const wrapper = shallow(<Tasks {...props} footer='Read all messages' />)

    expect(
      wrapper.find('GenericDropdown').prop('footer')
    ).toBe('Read all messages')
  })

  it(`should pass prop 'onClickFooter' if provided`, () => {
    const ref = () => {}
    const wrapper = shallow(<Tasks {...props} onClickFooter={ref} />)

    expect(
      wrapper.find('GenericDropdown').prop('onClickFooter')
    ).toBe(ref)
  })

  it(`should pass down children`, () => {
    const wrapper = shallow(
      <Tasks {...props}>
        <li>Children</li>
      </Tasks>
    )

    expect(
      wrapper.find('GenericDropdown').contains(<li>Children</li>)
    ).toBeTruthy()
  })
})
