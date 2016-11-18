// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Dropdown')
jest.unmock('sinon')
jest.unmock('jsdom')

var jsdom = require('jsdom').jsdom

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}

import React from 'react'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon'

import {Dropdown} from './../Dropdown'

describe('Menu.Dropdown', () => {
  const commonItems = [<li key={1}>SingleItem</li>]
  const commonClasses = [
    'dropdown',
    'icon',
    'label'
  ]
  const commonCB = () => {}

  it('should not be open (mount)', () => {
    const wrapper = shallow(
      <Dropdown
        cn={commonClasses}
        items={commonItems}
        onToggle={commonCB}
        onBlur={commonCB} />
    )

    expect(
      wrapper.hasClass('open')
    ).toBeFalsy()
  })

  it('should be open prop provided', () => {
    const wrapper = shallow(
      <Dropdown
        open
        cn={commonClasses}
        items={commonItems}
        onToggle={commonCB}
        onBlur={commonCB} />
    )

    expect(
      wrapper.hasClass('open')
    ).toBeTruthy()

    wrapper.setProps({open: false})

    expect(
      wrapper.hasClass('open')
    ).toBeFalsy()
  })

  it('should add classnames', () => {
    const wrapper = shallow(
      <Dropdown
        cn={commonClasses}
        items={commonItems}
        onToggle={commonCB}
        onBlur={commonCB} />
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

  it('should pass down children', () => {
    const wrapper = shallow(
      <Dropdown
        cn={commonClasses}
        items={commonItems}
        onToggle={commonCB}
        onBlur={commonCB} />
    )

    expect(
      wrapper.find('.dropdown-menu').contains(commonItems)
    ).toBeTruthy()
  })

  it('should call toggle function on click', () => {
    const onToggle = sinon.spy()

    const wrapper = mount(
      <Dropdown
        cn={commonClasses}
        items={commonItems}
        onToggle={onToggle}
        onBlur={commonCB} />
    )

    wrapper.find('.dropdown-toggle').simulate('click')

    expect(
      onToggle.callCount
    ).toBeTruthy()
  })

  it('should call blur function on blur', () => {
    const onBlur = sinon.spy()

    const wrapper = mount(
      <div>
        <Dropdown
          cn={commonClasses}
          items={commonItems}
          onToggle={commonCB}
          onBlur={onBlur} />
      </div>
    )

    wrapper.find('.dropdown-menu').simulate('blur')

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          expect(
            onBlur.called
          ).toBeTruthy()
        )
      })
    })
  })

  it('should call blur function on unmount', () => {
    const onBlur = sinon.spy()

    const wrapper = mount(
      <div>
        <Dropdown
          cn={commonClasses}
          items={commonItems}
          onToggle={commonCB}
          onBlur={onBlur} />
      </div>
    )

    wrapper.unmount()

    expect(
      onBlur.called
    ).toBeTruthy()
  })

  it('should call blur function on keydown (esc)', () => {
    const onBlur = sinon.spy()

    const wrapper = mount(
      <div>
        <Dropdown
          cn={commonClasses}
          items={commonItems}
          onToggle={commonCB}
          onBlur={onBlur} />
      </div>
    )

    wrapper.find('.dropdown-menu').simulate('keyDown', {keyCode: 27})

    expect(
      onBlur.called
    ).toBeTruthy()
  })
})
