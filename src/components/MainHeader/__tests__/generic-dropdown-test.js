// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('../GenericDropdown')

import React from 'react'
import {shallow} from 'enzyme'

import GenericDropdown from '../GenericDropdown'

describe('MainHeader.NavbarMenu.GenericDropdown', () => {
  it('should have <i> tag element without className by default', () => {
    const wrapper = shallow(<GenericDropdown />)
    const i = wrapper.find('i')

    expect(
      i.prop('className')
    ).toBeUndefined()
  })

  it('should have <i> tag element with the className provided as prop iconClass', () => {
    const wrapper = shallow(<GenericDropdown iconClass='fa fa-envelope' />)
    const i = wrapper.find('i')

    expect(
    i.prop('className')
    ).toBe('fa fa-envelope')
  })

  it('should have <span> tag element without className by default', () => {
    const wrapper = shallow(<GenericDropdown />)
    const span = wrapper.find('span')

    expect(
      span.prop('className')
    ).toBeUndefined()
  })

  it('should have <span> tag element with the className provided as prop labelClass', () => {
    const wrapper = shallow(<GenericDropdown labelClass='label label-success' />)
    const span = wrapper.find('span')

    expect(
      span.prop('className')
    ).toBe('label label-success')
  })

  it('should have <span> tag element with no children by default', () => {
    const wrapper = shallow(<GenericDropdown labelClass='label label-success' />)
    const span = wrapper.find('span')

    expect(
      span.children().length
    ).toBe(0)
  })

  it('should have <span> tag element children provided as prop label', () => {
    const wrapper = shallow(<GenericDropdown label={5} />)
    const span = wrapper.find('span')

    expect(
      span.children().length
    ).toBe(1)

    expect(
      span.contains(5)
    ).toBeTruthy()
  })

  it('should have an empty <li> tag element with className header', () => {
    const wrapper = shallow(<GenericDropdown />)
    const li = wrapper.find('li.header')

    expect(
      li.length
    ).toBe(1)

    expect(
       wrapper.find('li.header').children().length
    ).toBe(0)
  })

  it('should have <li.header> tag element that contains header prop value', () => {
    const wrapper = shallow(<GenericDropdown header='You have 4 messages' />)

    expect(
      wrapper.find('li.header').contains('You have 4 messages')
    ).toBeTruthy()
  })

  it('should have a <li> tag element with className footer and Link children', () => {
    const wrapper = shallow(<GenericDropdown />)
    const li = wrapper.find('li.footer')

    expect(
      li.length
    ).toBe(1)

    expect(
       li.find('MyLink').length
    ).toBe(1)
  })

  it('should have <li.footer> tag element that contains footer prop value', () => {
    const wrapper = shallow(<GenericDropdown footer='Show all messages' />)

    expect(
      wrapper.find('li.footer').contains('Show all messages')
    ).toBeTruthy()
  })

  it('should onClickFooter to the Link inside <li.footer> element', () => {
    const spy = () => {}
    const wrapper = shallow(<GenericDropdown onClickFooter={spy} />)

    expect(
      wrapper.find('li.footer').find('MyLink').prop('onClick')
    ).toBe(spy)
  })

  it('should pass onToggle func to Dropdown component as prop', () => {
    const ref = () => {}
    const wrapper = shallow(
      <GenericDropdown onToggle={ref} />
    )

    expect(
      wrapper.find('Dropdown').prop('onToggle')
    ).toBe(ref)
  })

  it('should pass onToggle func to DropdownToggle component as prop', () => {
    const ref = () => {}
    const wrapper = shallow(
      <GenericDropdown onToggle={ref} />
    )

    expect(
      wrapper.find('DropdownToggle').prop('onToggle')
    ).toBe(ref)
  })

  it('should have an <ul> element with className menu', () => {
    const wrapper = shallow(<GenericDropdown />)

    expect(
      wrapper.find('ul.menu')
    ).toBeTruthy()
  })

  it('should pass down children to <ul.menu> element', () => {
    const wrapper = shallow(
      <GenericDropdown>
        <li>Children</li>
      </GenericDropdown>
    )

    expect(
      wrapper.find('ul.menu').contains(<li>Children</li>)
    ).toBeTruthy()
  })
})
