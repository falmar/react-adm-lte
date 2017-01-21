// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../NavTab')

import React from 'react'
import {shallow} from 'enzyme'

import NavTab from './../NavTab'

describe('ControlSidebar.NavTab.Tab', () => {
  it('should not have icon className if not provied', () => {
    const wrapper = shallow(<NavTab />)

    expect(
      wrapper.find('i').prop('className')
    ).toBeUndefined()
  })

  it('should have icon className if provired', () => {
    const wrapper = shallow(<NavTab icon='fa fa-wrench' />)

    expect(
      wrapper.find('i').prop('className')
    ).toEqual('fa fa-wrench')
  })

  it('should not call onClick function when event is not fired', () => {
    const spy = jest.fn()
    shallow(<NavTab onClick={spy} />)

    expect(
      spy
    ).not.toHaveBeenCalled()
  })

  it('should call onClick function when event is not fired', () => {
    const spy = jest.fn()
    const wrapper = shallow(<NavTab onClick={spy} />)

    wrapper.find('MyLink').simulate('click')

    expect(
      spy
    ).toHaveBeenCalled()
  })
})
