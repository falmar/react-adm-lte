// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.
/* global Event */

jest.unmock('./../Dropdown')

import React from 'react'
import {shallow, mount} from 'enzyme'

import {Dropdown} from './../Dropdown'

describe('MainHeader.NavbarMenu.Dropdown', () => {
  it('should have className dropdown by default', () => {
    const wrapper = shallow(<Dropdown />)

    expect(
      wrapper.hasClass('dropdown')
    ).toBeTruthy()
  })

  it('should have className passed as prop', () => {
    const wrapper = shallow(<Dropdown className='messages' />)

    expect(
      wrapper.hasClass('messages')
    ).toBeTruthy()
  })

  it('should not have className open by default', () => {
    const wrapper = shallow(<Dropdown />)

    expect(
      wrapper.hasClass('open')
    ).toBeFalsy()
  })

  it('should have className open by if prop provided', () => {
    const wrapper = shallow(<Dropdown open />)

    expect(
      wrapper.hasClass('open')
    ).toBeTruthy()
  })

  it('should not call onToggle func if is not open', () => {
    const onToggle = jest.fn()
    const wrapper = mount(<Dropdown onToggle={onToggle} />)

    document.dispatchEvent(new Event('click'))

    wrapper.unmount()

    expect(
      onToggle
    ).not.toHaveBeenCalled()
  })

  it('should call onToggle func if is open', () => {
    const onToggle = jest.fn()
    const wrapper = mount(<Dropdown open onToggle={onToggle} />)

    document.dispatchEvent(new Event('click'))

    wrapper.unmount()

    expect(
      onToggle
    ).toHaveBeenCalled()
  })

  it('should remove onToggle event from dom when is unmounted', () => {
    const onToggle = jest.fn()
    const wrapper = mount(<Dropdown onToggle={onToggle} />)

    wrapper.unmount()

    document.dispatchEvent(new Event('click'))

    expect(
      onToggle
    ).not.toHaveBeenCalled()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <Dropdown>
        <div>I'm a children</div>
      </Dropdown>
    )

    expect(
      wrapper.contains(<div>I'm a children</div>)
    ).toBeTruthy()
  })

  it('should call onToggle on click window.document', () => {
    const spy = jest.fn()
    const wrapper = mount(
      <Dropdown open onToggle={spy} />
    )

    window.document.dispatchEvent(new Event('click'))

    expect(
      spy
    ).toHaveBeenCalled()

    wrapper.unmount()
    spy.mockReset()
    window.document.dispatchEvent(new Event('click'))

    expect(
      spy
    ).not.toHaveBeenCalled()
  })

  it('should call onToggle on click when click ocurs outside component', () => {
    const spy = jest.fn()
    const div = document.createElement('div')
    const wrapper = mount(
      <Dropdown open onToggle={spy} />
    )

    document.body.appendChild(div)
    div.dispatchEvent(new Event('click', {bubbles: true}))
    wrapper.unmount()
    document.body.removeChild(div)

    expect(
      spy
    ).toHaveBeenCalled()
  })

  it('should not call onToggle on click the component itself', () => {
    const spy = jest.fn()
    const div = document.createElement('div')
    const wrapper = mount(
      <Dropdown open onToggle={spy} />
    , {attachTo: div})
    const inst = wrapper.instance()

    document.body.appendChild(div)
    inst.dom.dispatchEvent(new Event('click', {bubbles: true}))
    wrapper.unmount()
    document.body.removeChild(div)

    expect(
      spy
    ).not.toHaveBeenCalled()
  })

  it('should not call onToggle on click the component\'s children', () => {
    const spy = jest.fn()
    const div = document.createElement('div')
    const wrapper = mount(
      <Dropdown open onToggle={spy}>
        <span />
      </Dropdown>
    , {attachTo: div})
    const inst = wrapper.instance()
    const span = inst.dom.getElementsByTagName('span')[0]

    document.body.appendChild(div)
    span.dispatchEvent(new Event('click', {bubbles: true}))
    wrapper.unmount()
    document.body.removeChild(div)

    expect(
      spy
    ).not.toHaveBeenCalled()
  })
})
