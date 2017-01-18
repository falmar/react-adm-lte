// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Notifications')
jest.unmock('./../../../utils/Link')

import React from 'react'
import {shallow, mount} from 'enzyme'

import Notifications, {Notification} from './../Notifications'

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

  it('should add inner menu', () => {
    const wrapper = shallow(
      <Notifications
        onToggle={commonCB}
        data={[]} />
    )

    const items = wrapper.children()

    expect(
      items.length
    ).toEqual(3)

    expect(
      items.at(0).hasClass('header')
    ).toBeTruthy()

    expect(
      items.at(1).find('ul').hasClass('menu')
    ).toBeTruthy()

    expect(
      items.at(2).hasClass('footer')
    ).toBeTruthy()
  })

  it('should set header and footer text', () => {
    const wrapper = shallow(
      <Notifications
        onToggle={commonCB}
        data={[]}
        header='You have 1 Notification'
        footer='View all notifications' />
    )

    const items = wrapper.children()

    expect(
      items.length
    ).toEqual(3)

    expect(
      items.at(0).find('.header').text('You have 1 Notification')
    ).toBeTruthy()

    expect(
      items.at(2).find('.footer').contains(<a href='#'>View all notifications</a>)
    ).toBeTruthy()
  })

  it('should have messages of type Notification', () => {
    const wrapper = shallow(
      <Notifications
        onToggle={commonCB}
        data={[{}]} />
    )

    const messages = wrapper.instance().getNotifications()

    expect(
      messages.length
    ).toEqual(1)

    expect(
      mount(messages[0]).type()
    ).toEqual(Notification)
  })
})

describe('Menu.Dropdown.Notifications.Notification', () => {
  const commonProps = {
    id: 1,
    title: 'New Notification'
  }

  it('should have link with href (#) on empty href', () => {
    const wrapper = mount(
      <Notification {...commonProps}
         />
    )

    expect(
      wrapper.find('MyLink').find('a').prop('href')
    ).toEqual('#')
  })

  it('should have link with href set on props', () => {
    const wrapper = mount(
      <Notification
        {...commonProps}
        href='http://example.com'
         />
    )

    expect(
      wrapper.find('MyLink').find('a').prop('href')
    ).toEqual('http://example.com')
  })

  it('should add icon if iconClass is an string', () => {
    const wrapper = mount(
      <Notification
        {...commonProps}
        iconClass='fa fa-pencil'
         />
    )

    expect(
      wrapper.find('i').length
    ).toEqual(1)

    expect(
      wrapper.find('i').hasClass('fa') && wrapper.find('i').hasClass('fa-pencil')
    ).toBeTruthy()
  })

  it('should add title', () => {
    const wrapper = mount(
      <Notification {...commonProps}
         />
    )

    expect(
      wrapper.find('a').text()
    ).toContain('New Notification')
  })

  it('should trigger onclick on li message click', () => {
    const spy = jest.fn()
    const wrapper = mount(
      <Notification
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
