// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Dropdown')
jest.unmock('sinon')

import React from 'react'
import {shallow} from 'enzyme'
import sinon from 'sinon'

import {Dropdown} from './../Dropdown'

describe('Menu.Dropdown', () => {
  const commonItems = [<li key={1}>SingleItem</li>]
  const commonClasses = {
    base: 'dropdown',
    icon: 'icon',
    label: 'label'
  }
  const commonOnToggle = () => {}

  it('should add classnames', () => {
    const wrapper = shallow(
      <Dropdown
        cn={commonClasses}
        items={commonItems}
        onToggle={commonOnToggle} />
    )

    expect(
      wrapper.hasClass('dropdown')
    ).toBeTruthy()

    expect(
      wrapper.find('i').hasClass('icon')
    )

    expect(
      wrapper.find('span').hasClass('label')
    )
  })

  it('should add toggle function', () => {
    const wrapper = shallow(
      <Dropdown
        cn={commonClasses}
        items={commonItems}
        onToggle={commonOnToggle} />
    )

    expect(
      wrapper.find('.dropdown-toggle').prop('onClick')
    ).toEqual(commonOnToggle)
  })

  it('should call toggle function on click', () => {
    const onToggle = sinon.spy()

    const wrapper = shallow(
      <Dropdown
        cn={commonClasses}
        items={commonItems}
        onToggle={onToggle} />
    )

    wrapper.find('.dropdown-toggle').simulate('click')

    expect(
      onToggle.calledOnce
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <Dropdown
        cn={commonClasses}
        items={commonItems}
        onToggle={commonOnToggle} />
    )

    expect(
      wrapper.find('.dropdown-menu').contains(commonItems)
    ).toBeTruthy()
  })
})
