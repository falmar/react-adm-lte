// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../SidebarMenu')

import React from 'react'
import {shallow} from 'enzyme'

import {Menu, Item} from './../SidebarMenu'

describe('Sidebar.Menu', () => {
  it('should have classnames treeview-menu when isRoot prop is not provided', () => {
    const wrapper = shallow(<Menu />)

    expect(
      wrapper.hasClass('treeview-menu')
    ).toBeTruthy()
  })

  it('should have classnames sidebar-menu when isRoot prop is provided', () => {
    const wrapper = shallow(<Menu isRoot />)

    expect(
      wrapper.hasClass('sidebar-menu')
    ).toBeTruthy()
  })

  it('should not have classnames active when prop is not provided', () => {
    const wrapper = shallow(<Menu />)

    expect(
      wrapper.hasClass('active')
    ).toBeFalsy()
  })

  it('should have classnames active when prop is provided', () => {
    const wrapper = shallow(<Menu active />)

    expect(
      wrapper.hasClass('active')
    ).toBeTruthy()
  })
})

describe('Sidebar.Item', () => {
  it('should not have classname if isTreeview prop is not provided', () => {
    const wrapper = shallow(<Item />)

    expect(
      wrapper.prop('className')
    ).toEqual('')
  })

  it('should have classname if isTreeview prop is provided', () => {
    const wrapper = shallow(<Item isTreeview />)

    expect(
      wrapper.hasClass('treeview')
    ).toBeTruthy()
  })

  it('should have classname active if prop provided', () => {
    const wrapper = shallow(<Item active />)

    expect(
      wrapper.hasClass('active')
    ).toBeTruthy()
  })

  it('should not have classname active if prop not provided', () => {
    const wrapper = shallow(<Item />)

    expect(
      wrapper.hasClass('active')
    ).toBeFalsy()
  })

  it('should be header if prop provided', () => {
    const wrapper = shallow(<Item header name='Main Section' />)

    expect(
      wrapper.hasClass('header')
    ).toBeTruthy()

    expect(
      wrapper.text()
    ).toContain('Main Section')
  })

  it('should not be header if prop not provided', () => {
    const wrapper = shallow(<Item />)

    expect(
      wrapper.hasClass('header')
    ).toBeFalsy()
  })

  it('should have label without span when isTreeview not provided', () => {
    const wrapper = shallow(<Item name='Main Section' />)

    expect(
      wrapper.contains('Main Section')
    ).toBeTruthy()
  })

  it('should have label with span when isTreeview provided', () => {
    const wrapper = shallow(<Item isTreeview name='Main Section' />)

    expect(
      wrapper.contains(<span>Main Section</span>)
    ).toBeTruthy()
  })

  it('should not have arrow when children not passed', () => {
    const wrapper = shallow(<Item />)

    expect(
      wrapper.find('span.pull-right-container').length
    ).toEqual(0)

    expect(
      wrapper.find('i.fa.fa-angle-left.pull-right').length
    ).toEqual(0)
  })

  it('should have arrow when children passed', () => {
    const wrapper = shallow(<Item>anything</Item>)

    expect(
      wrapper.find('span.pull-right-container').length
    ).toEqual(1)

    expect(
      wrapper.find('i.fa.fa-angle-left.pull-right').length
    ).toEqual(1)
  })

  it('should have children', () => {
    const wrapper = shallow(
      <Item>
        <Menu />
      </Item>
    )

    expect(
      wrapper.contains(<Menu />)
    ).toBeTruthy()
  })

  it('should pass onClick and call it when provided', () => {
    const spy = jest.fn()
    const wrapper = shallow(<Item onClick={spy} />)

    wrapper.find('MyLink').simulate('click')

    expect(
      spy
    ).toHaveBeenCalled()
  })

  it('should have link with external link', () => {
    const wrapper = shallow(<Item href='http://example.com' />)

    expect(
      wrapper.find('MyLink').prop('href')
    ).toEqual('http://example.com')
  })
})
