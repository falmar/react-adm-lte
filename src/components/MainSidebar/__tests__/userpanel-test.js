// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../UserPanel')

import React from 'react'
import {shallow} from 'enzyme'

import UserPanel from './../UserPanel'

describe('MainSidebar.UserPanel', () => {
  it('should have classnames', () => {
    const wrapper = shallow(<UserPanel />)

    expect(
      wrapper.hasClass('user-panel')
    ).toBeTruthy()

    expect(
      wrapper.find('div.pull-left').length
    ).toEqual(2)
  })

  it('should have image', () => {
    const wrapper = shallow(<UserPanel imageUrl='path/to/image' />)
    const container = wrapper.find('div.pull-left').at(0)

    expect(
      container.length
    ).toEqual(1)

    expect(
      container.hasClass('pull-left')
    ).toBeTruthy()

    expect(
      container.hasClass('image')
    ).toBeTruthy()

    expect(
      container.find('img').length
    ).toEqual(1)

    expect(
      container.find('img').prop('src')
    ).toEqual('path/to/image')
  })

  it('should have info', () => {
    const wrapper = shallow(<UserPanel
      title='Alexander Pierce'
      statusText='Online'
      statusClass='text-success'
      />)
    const container = wrapper.find('div.pull-left').at(1)

    expect(
      container.length
    ).toEqual(1)

    expect(
      container.hasClass('pull-left')
    ).toBeTruthy()

    expect(
      container.find('p').length
    ).toEqual(1)

    expect(
      container.find('p').text()
    ).toEqual('Alexander Pierce')

    expect(
      container.find('i').length
    ).toEqual(1)

    expect(
      container.find('i').hasClass('fa')
    ).toBeTruthy()

    expect(
      container.find('i').hasClass('fa-circle')
    ).toBeTruthy()

    expect(
      container.find('i').hasClass('text-success')
    ).toBeTruthy()

    expect(
      container.find('a').text()
    ).toContain('Online')
  })
})
