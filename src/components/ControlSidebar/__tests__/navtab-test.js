// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../NavTab')

import React from 'react'
import {shallow} from 'enzyme'

import {NavTab, Tab} from './../NavTab'

describe('ControlSidebar.NavTab', () => {
  it('should have basic classnames', () => {
    const wrapper = shallow(<NavTab />)

    expect(
      wrapper.hasClass('nav')
    ).toBeTruthy()

    expect(
      wrapper.hasClass('nav-tabs')
    ).toBeTruthy()

    expect(
      wrapper.hasClass('nav-justified')
    ).toBeTruthy()

    expect(
      wrapper.hasClass('control-sidebar-tabs')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <NavTab>
        <span>children</span>
      </NavTab>
    )

    expect(
      wrapper.contains(<span>children</span>)
    ).toBeTruthy()
  })
})

describe('ControlSidebar.NavTab.Tab', () => {
  it('should not have icon className if not provied', () => {
    const wrapper = shallow(<Tab />)

    expect(
      wrapper.find('i').prop('className')
    ).toBeUndefined()
  })

  it('should have icon className if provired', () => {
    const wrapper = shallow(<Tab icon='fa fa-wrench' />)

    expect(
      wrapper.find('i').prop('className')
    ).toEqual('fa fa-wrench')
  })

  it('should not call onClick function when event is not fired', () => {
    const spy = jest.fn()
    shallow(<Tab onClick={spy} />)

    expect(
      spy
    ).not.toHaveBeenCalled()
  })

  it('should call onClick function when event is not fired', () => {
    const spy = jest.fn()
    const wrapper = shallow(<Tab onClick={spy} />)

    wrapper.find('MyLink').simulate('click')

    expect(
      spy
    ).toHaveBeenCalled()
  })
})
