// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../ControlSidebarToggle')

import React from 'react'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon'

import ControlSidebarToggle from './../ControlSidebarToggle'

describe('ControlSidebarToggle', () => {
  it('should add Link (react-router) if it is not an external link', () => {
    expect(
      mount(<ControlSidebarToggle />).find('Link').length
    ).toEqual(1)
  })

  it('should add <a> (tag) if it is an external link', () => {
    expect(
      mount(<ControlSidebarToggle href='http://example.com' />).find('a').length
    ).toEqual(1)
  })

  it('should add icon class name', () => {
    const wrapper = shallow(<ControlSidebarToggle />)

    expect(
      wrapper.find('i').length
    ).toEqual(1)

    expect(
      wrapper.find('i').hasClass('fa')
    ).toBeTruthy()

    expect(
      wrapper.find('i').hasClass('fa-gears')
    ).toBeTruthy()
  })

  it('should call onToggle function on click', () => {
    const spy = sinon.spy()
    const wrapper = mount(<ControlSidebarToggle onToggle={spy} />)

    expect(
      wrapper.find('MyLink').length
    ).toEqual(1)

    wrapper.find('MyLink').simulate('click')

    expect(
      spy.called
    ).toBeTruthy()
  })
})
