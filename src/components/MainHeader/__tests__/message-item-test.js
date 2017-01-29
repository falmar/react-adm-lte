// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../MessageItem')

import React from 'react'
import {shallow} from 'enzyme'

import MessageItem from './../MessageItem'

describe('Menu.Dropdown.Messages.MessageItem', () => {
  const commonProps = {
    imageUrl: 'path/to/img',
    title: 'New Message',
    time: '5 min',
    message: 'Random message'
  }

  it('should add img and url', () => {
    const wrapper = shallow(<MessageItem {...commonProps} />)

    expect(
      wrapper.find('img').length
    ).toEqual(1)

    expect(
      wrapper.find('img').prop('src')
    ).toEqual(commonProps.imageUrl)
  })

  it('should add title text', () => {
    const wrapper = shallow(<MessageItem {...commonProps} />)

    expect(
      wrapper.find('h4').text()
    ).toContain('New Message')
  })

  it('should add time text', () => {
    const wrapper = shallow(<MessageItem {...commonProps} />)

    expect(
      wrapper.find('small').text()
    ).toEqual(' 5 min')
  })

  it('should add message text', () => {
    const wrapper = shallow(<MessageItem {...commonProps} />)

    expect(
      wrapper.find('p').text()
    ).toEqual('Random message')
  })

  it('should pass href prop to Link if external url', () => {
    const wrapper = shallow(
      <MessageItem
        {...commonProps}
        href='http://example.com'
        />
    )

    expect(
      wrapper.find('MyLink').prop('href')
    ).toEqual('http://example.com')
  })

  it('should trigger onClick when link is clicked', () => {
    const spy = jest.fn()
    const wrapper = shallow(
      <MessageItem
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
