// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('../UserFooterItem')

import React from 'react'
import {shallow} from 'enzyme'

import UserFooterItem from '../UserFooterItem'

describe('MainHeader.Navbar.NavbarMenu.User.UserFooter.Item', () => {
  it('should not have className by default', () => {
    const wrapper = shallow(<UserFooterItem />)

    expect(
      wrapper.prop('className')
    ).toBe('')
  })

  it('should not have className if both prop left and right are provided', () => {
    const wrapper = shallow(<UserFooterItem right left />)

    expect(
      wrapper.prop('className')
    ).toBe('')
  })

  it('should have className "pull-left" if prop left is provided', () => {
    const wrapper = shallow(<UserFooterItem left />)

    expect(
      wrapper.prop('className')
    ).toBe('pull-left')
  })

  it('should have className "pull-right" if prop right is provided', () => {
    const wrapper = shallow(<UserFooterItem right />)

    expect(
      wrapper.prop('className')
    ).toBe('pull-right')
  })

  it('should have className "btn btn-flat btn-default" on <Link> component', () => {
    const wrapper = shallow(<UserFooterItem right />)

    expect(
      wrapper.find('MyLink').prop('className')
    ).toBe('btn btn-flat btn-default')
  })

  it('should pass prop href to <Link> component', () => {
    const wrapper = shallow(<UserFooterItem href='http://example.com' />)

    expect(
      wrapper.find('MyLink').prop('href')
    ).toBe('http://example.com')
  })

  it('should pass prop onClick to <Link> component', () => {
    const spy = () => {}
    const wrapper = shallow(<UserFooterItem onClick={spy} />)

    expect(
      wrapper.find('MyLink').prop('onClick')
    ).toBe(spy)
  })

  it('should pass down children to <Link> component', () => {
    const wrapper = shallow(
      <UserFooterItem>
        Children
      </UserFooterItem>
    )

    expect(
      wrapper.find('MyLink').contains('Children')
    ).toBeTruthy()
  })
})
