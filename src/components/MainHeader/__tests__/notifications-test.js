jest.unmock('./../Notifications')

import React from 'react'
import {shallow} from 'enzyme'

import Notifications from './../Notifications'

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

describe('MainHeader.Navbar.NavbarMenu.Notifications', () => {
  it(`should pass prop 'open' as true if provided`, () => {
    const wrapper = shallow(<Notifications {...props} open />)

    expect(
      wrapper.find('GenericDropdown').prop('open')
    ).toBeTruthy()
  })

  it(`should pass prop 'className' as 'notifications-menu'`, () => {
    const wrapper = shallow(<Notifications {...props} />)

    expect(
      wrapper.find('GenericDropdown').prop('className')
    ).toBe('notifications-menu')
  })

  it(`should pass prop 'iconClass' as 'fa fa-bell-o'`, () => {
    const wrapper = shallow(<Notifications {...props} />)

    expect(
      wrapper.find('GenericDropdown').prop('iconClass')
    ).toBe('fa fa-bell-o')
  })

  it(`should pass prop 'labelClass' as 'label label-warning'`, () => {
    const wrapper = shallow(<Notifications {...props} />)

    expect(
      wrapper.find('GenericDropdown').prop('labelClass')
    ).toBe('label label-warning')
  })

  it(`should pass prop 'label' as '5' if provided`, () => {
    const wrapper = shallow(<Notifications {...props} label={5} />)

    expect(
      wrapper.find('GenericDropdown').prop('label')
    ).toBe(5)
  })

  it(`should pass prop 'onToggle' if provided`, () => {
    const ref = () => {}
    const wrapper = shallow(<Notifications {...props} onToggle={ref} />)

    expect(
      wrapper.find('GenericDropdown').prop('onToggle')
    ).toBe(ref)
  })

  it(`should pass prop 'header' as 'You have 4 messages' if provided`, () => {
    const wrapper = shallow(<Notifications {...props} header='You have 4 messages' />)

    expect(
      wrapper.find('GenericDropdown').prop('header')
    ).toBe('You have 4 messages')
  })

  it(`should pass prop 'footer' as 'Read all messages' if provided`, () => {
    const wrapper = shallow(<Notifications {...props} footer='Read all messages' />)

    expect(
      wrapper.find('GenericDropdown').prop('footer')
    ).toBe('Read all messages')
  })

  it(`should pass prop 'onClickFooter' if provided`, () => {
    const ref = () => {}
    const wrapper = shallow(<Notifications {...props} onClickFooter={ref} />)

    expect(
      wrapper.find('GenericDropdown').prop('onClickFooter')
    ).toBe(ref)
  })

  it(`should pass down children`, () => {
    const wrapper = shallow(
      <Notifications {...props}>
        <li>Children</li>
      </Notifications>
    )

    expect(
      wrapper.find('GenericDropdown').contains(<li>Children</li>)
    ).toBeTruthy()
  })
})
