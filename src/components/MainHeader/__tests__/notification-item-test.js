jest.unmock('./../NotificationItem')

import React from 'react'
import {shallow} from 'enzyme'

import NotificationItem from './../NotificationItem'

describe('Menu.Dropdown.Notifications.NotificationItem', () => {
  const commonProps = {
    id: 1,
    title: 'New Notification',
    onClick: () => {},
    href: '#'
  }

  it('should pass href (http://example.com) to Link', () => {
    const wrapper = shallow(<NotificationItem {...commonProps} href='http://example.com' />)

    expect(
      wrapper.find('MyLink').prop('href')
    ).toEqual('http://example.com')
  })

  it('should not add icon if iconClass is not provided', () => {
    const wrapper = shallow(<NotificationItem {...commonProps} />)

    expect(
      wrapper.find('i').length
    ).toBe(0)
  })

  it('should add icon if iconClass is an string', () => {
    const wrapper = shallow(
      <NotificationItem
        {...commonProps}
        iconClass='fa fa-pencil'
         />
    )

    expect(
      wrapper.find('i').length
    ).toEqual(1)

    expect(
      wrapper.find('i').hasClass('fa')
    ).toBeTruthy()

    expect(
      wrapper.find('i').hasClass('fa-pencil')
    ).toBeTruthy()
  })

  it('should add title', () => {
    const wrapper = shallow(<NotificationItem {...commonProps} />)

    expect(
      wrapper.contains('New Notification')
    ).toBeTruthy()
  })

  it('should trigger onclick on li message click', () => {
    const spy = jest.fn()
    const wrapper = shallow(
      <NotificationItem
        {...commonProps}
        onClick={spy}
         />
    )

    wrapper.find('MyLink').simulate('click')

    expect(
      spy
    ).toBeCalled()
  })
})
