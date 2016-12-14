// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Dropdown')

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
  const commonContent = <li key={1}>SingleItem</li>
  const commonHeader = [<i className='icon' />, <span>Header</span>]

  it('should not be open (mount)', () => {
    const wrapper = shallow(
      <Dropdown
        header={commonHeader}
        />
    )

    expect(
      wrapper.hasClass('open')
    ).toBeFalsy()
  })

  it('should be open when prop is provided', () => {
    const wrapper = shallow(
      <Dropdown
        open
        header={commonHeader}
        />
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
        cn='notifications'
        header={commonHeader}
        />
    )

    expect(
      wrapper.hasClass('notifications')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <Dropdown
        header={commonHeader}>
        {commonContent}
      </Dropdown>
    )

    expect(
      wrapper.find('a').at(0).contains(commonHeader)
    ).toBeTruthy()

    expect(
      wrapper.find('.dropdown-menu').contains(commonContent)
    ).toBeTruthy()
  })

  it('should call toggle function on click', () => {
    const onToggle = sinon.spy()

    const wrapper = mount(
      <Dropdown
        header={commonHeader}
        onToggle={onToggle} />
    )

    expect(
      wrapper.instance().props.open
    ).toEqual(undefined)

    wrapper.find('.dropdown-toggle').simulate('click')

    expect(
      onToggle.callCount
    ).toEqual(1)

    expect(
      onToggle.calledWith(true)
    ).toBeTruthy()

    wrapper.setProps({open: true})

    wrapper.find('.dropdown-toggle').simulate('click')

    expect(
      onToggle.callCount
    ).toEqual(2)

    expect(
      onToggle.calledWith(false)
    ).toBeTruthy()

    wrapper.instance().close()

    expect(
      onToggle.callCount
    ).toEqual(3)

    expect(
      onToggle.calledWith(false)
    ).toBeTruthy()
  })

  it('should call toggle preventDefault function on click', () => {
    const preventDefault = sinon.spy()

    const wrapper = mount(
      <Dropdown
        header={commonHeader}
        onToggle={() => {}} />
      )

    wrapper.find('.dropdown-toggle').simulate('click', {preventDefault})

    expect(
        preventDefault.called
      ).toBeTruthy()
  })

  it('should call focus method on focus (menu)', () => {
    const onFocus = sinon.spy()

    const wrapper = mount(
      <Dropdown
        header={commonHeader}
        onFocus={onFocus}
         />
     )

    wrapper.find('.dropdown-menu').simulate('focus')

    expect(
      onFocus.called
    ).toBeTruthy()
  })

  it('should call toggle function on blur', () => {
    const onToggle = sinon.spy()

    const wrapper = mount(
      <div>
        <Dropdown
          header={commonHeader}
          onToggle={onToggle} />
      </div>
    )

    wrapper.find('.dropdown-menu').simulate('blur')

    return new Promise((resolve) => {
      setTimeout(() => {
        expect(
          onToggle.called
        ).toBeTruthy()

        wrapper.unmount()

        resolve(true)
      })
    })
  })

  it('should call toggle function on blur argument false', () => {
    const onToggle = sinon.spy()

    const wrapper = mount(
      <div>
        <Dropdown
          header={commonHeader}
          onToggle={onToggle} />
      </div>
    )

    wrapper.find('.dropdown-menu').simulate('blur')

    return new Promise((resolve) => {
      setTimeout(() => {
        expect(
          onToggle.calledWith(false)
        ).toBeTruthy()

        wrapper.unmount()

        resolve(true)
      })
    })
  })

  it('should not call onToggle function on unmount if closed', () => {
    const onToggle = sinon.spy()

    const wrapper = mount(
      <div>
        <Dropdown
          header={commonHeader}
          onToggle={onToggle} />
      </div>
    )

    wrapper.unmount()

    expect(
      onToggle.called
    ).toBeFalsy()
  })

  it('should call onToggle function on unmount if open', () => {
    const onToggle = sinon.spy()

    const wrapper = mount(
      <div>
        <Dropdown
          open
          header={commonHeader}
          onToggle={onToggle} />
      </div>
    )

    wrapper.unmount()

    expect(
      onToggle.called
    ).toBeTruthy()

    expect(
      onToggle.calledWith(false)
    ).toBeTruthy()
  })

  it('should not call toggle function on keydown (esc)', () => {
    const onToggle = sinon.spy()

    const wrapper = mount(
      <div>
        <Dropdown
          header={commonHeader}
          onToggle={onToggle} />
      </div>
    )

    wrapper.find('.dropdown-menu').simulate('keyDown', {keyCode: 27})

    expect(
      onToggle.called
    ).toBeFalsy()

    wrapper.unmount()
  })

  it('should not call toggle function on keydown (esc) if open', () => {
    const onToggle = sinon.spy()

    const wrapper = mount(
      <div>
        <Dropdown
          open
          header={commonHeader}
          onToggle={onToggle} />
      </div>
    )

    wrapper.find('.dropdown-menu').simulate('keyDown', {keyCode: 27})

    expect(
      onToggle.called
    ).toBeTruthy()

    expect(
      onToggle.calledWith(false)
    ).toBeTruthy()

    wrapper.unmount()
  })
})
