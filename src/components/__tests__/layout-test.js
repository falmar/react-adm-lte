// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Layout')

import React from 'react'
import {mount} from 'enzyme'

import Layout from './../Layout'

describe('Layout component', () => {
  it('should add on mount and remove on unmount skin class body tag', () => {
    const list = window.document.body.classList
    const wrapper = mount(<Layout skin='skin-blue' />)

    expect(
      list.contains('skin-blue')
    ).toBeTruthy()

    wrapper.unmount()

    expect(
      list.contains('skin-blue')
    ).toBeFalsy()
  })

  it('should add classes on body tag (mount)', () => {
    const wrapper = mount(<Layout
      skin='skin'
      boxed
      topNavigation
      fixed
      sidebarCollapse
      sidebarMini
      />)

    const list = window.document.body.classList

    expect(
      list.contains('layout-boxed')
    ).toBeTruthy()

    expect(
      list.contains('layout-top-nav')
    ).toBeTruthy()

    expect(
      list.contains('fixed')
    ).toBeTruthy()

    expect(
      list.contains('sidebar-collapse')
    ).toBeTruthy()

    expect(
      list.contains('sidebar-mini')
    ).toBeTruthy()

    wrapper.unmount()
  })

  it('should add/remove classes on body tag (update)', () => {
    const wrapper = mount(<Layout
      skin='skin'
      fixed
      />)

    const list = window.document.body.classList

    expect(
        list.contains('layout-boxed')
      ).toBeFalsy()

    expect(
        list.contains('fixed')
      ).toBeTruthy()

    wrapper.setProps({fixed: false, boxed: true})

    expect(
        list.contains('layout-boxed')
      ).toBeTruthy()

    expect(
        list.contains('fixed')
      ).toBeFalsy()

    wrapper.unmount()
  })

  it('should remove classes on body tag (unmount)', () => {
    const wrapper = mount(<Layout
      skin='skin'
      fixed
      />)

    const list = window.document.body.classList

    expect(
        list.contains('skin')
      ).toBeTruthy()

    expect(
        list.contains('fixed')
      ).toBeTruthy()

    wrapper.unmount()

    expect(
      list.contains('skin')
    ).toBeFalsy()

    expect(
      list.contains('fixed')
    ).toBeFalsy()
  })
})
