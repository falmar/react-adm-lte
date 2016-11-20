// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Messages')

import React from 'react'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon'

import Messages, {Message} from './../Messages'

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

  it('should add inner menu', () => {
    const wrapper = shallow(
      <Messages
        onToggle={commonCB}
        data={[]} />
    )

    const items = wrapper.instance().getItems()

    expect(
      items.length
    ).toEqual(3)

    expect(
      shallow(items[0]).hasClass('header')
    ).toBeTruthy()

    expect(
      shallow(items[1]).find('ul').hasClass('menu')
    ).toBeTruthy()

    expect(
      shallow(items[2]).hasClass('footer')
    ).toBeTruthy()
  })

  it('should set header and footer text', () => {
    const wrapper = shallow(
      <Messages
        onToggle={commonCB}
        data={[]}
        header='You have 0 messages'
        footer='View all messages' />
    )

    const items = wrapper.instance().getItems()

    expect(
      items.length
    ).toEqual(3)

    expect(
      shallow(items[0]).find('.header').text('You have 0 messages')
    ).toBeTruthy()

    expect(
      shallow(items[2]).find('.footer').contains(<a href='#'>View all messages</a>)
    ).toBeTruthy()
  })

  it('should have messages of type Message', () => {
    const wrapper = shallow(
      <Messages
        onToggle={commonCB}
        data={[{}]} />
    )

    const messages = wrapper.instance().getMessages()

    expect(
      messages.length
    ).toEqual(1)

    expect(
      mount(messages[0]).type()
    ).toEqual(Message)
  })
})

describe('Menu.Dropdown.Messages.Message', () => {
  const commonProps = {
    url: 'path/to/img',
    title: 'New Message',
    time: '5 min',
    message: 'Random message',
    onClick: () => {}
  }

  it('should add img and url', () => {
    const wrapper = shallow(
      <Message {...commonProps}
         />
    )

    expect(
      wrapper.find('img').length
    ).toEqual(1)

    expect(
      wrapper.find('img').prop('src')
    ).toEqual(commonProps.url)
  })

  it('should add title', () => {
    const wrapper = shallow(
      <Message {...commonProps}
         />
    )

    expect(
      wrapper.find('h4').text()
    ).toContain('New Message')
  })

  it('should add time', () => {
    const wrapper = shallow(
      <Message {...commonProps}
         />
    )

    expect(
      wrapper.find('small').text()
    ).toEqual(' 5 min')
  })

  it('should add message', () => {
    const wrapper = shallow(
      <Message {...commonProps}
         />
    )

    expect(
      wrapper.find('p').text()
    ).toEqual('Random message')
  })

  it('should trigger onclick on li message click', () => {
    const spy = sinon.spy()
    const wrapper = shallow(
      <Message
        {...commonProps}
        onClick={spy}
         />
    )

    wrapper.find('li').simulate('click')

    expect(
      spy.called
    ).toBeTruthy()
  })
})