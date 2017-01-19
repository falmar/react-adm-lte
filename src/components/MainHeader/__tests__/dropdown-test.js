// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Dropdown')

import React from 'react'
import {shallow, mount} from 'enzyme'

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
    const onToggle = jest.fn()

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
      onToggle
    ).toHaveBeenCalledTimes(1)

    expect(
      onToggle
    ).toHaveBeenCalledWith(true)

    wrapper.setProps({open: true})

    wrapper.find('.dropdown-toggle').simulate('click')

    expect(
      onToggle
    ).toHaveBeenCalledTimes(2)

    expect(
      onToggle
    ).toHaveBeenCalledWith(false)

    wrapper.instance().close()

    expect(
      onToggle
    ).toHaveBeenCalledTimes(3)

    expect(
      onToggle
    ).toHaveBeenCalledWith(false)
  })

  it('should call toggle preventDefault function on click', () => {
    const preventDefault = jest.fn()

    const wrapper = mount(
      <Dropdown
        header={commonHeader}
        onToggle={() => {}} />
      )

    wrapper.find('.dropdown-toggle').simulate('click', {preventDefault})

    expect(
        preventDefault
      ).toHaveBeenCalled()
  })

  it('should call focus method on focus (menu)', () => {
    const onFocus = jest.fn()

    const wrapper = mount(
      <Dropdown
        header={commonHeader}
        onFocus={onFocus}
         />
     )

    wrapper.find('.dropdown-menu').simulate('focus')

    expect(
      onFocus
    ).toHaveBeenCalled()
  })

  it('should call toggle function on blur', () => {
    const onToggle = jest.fn()

    const wrapper = mount(
      <div>
        <Dropdown
          header={commonHeader}
          onToggle={onToggle} />
      </div>
    )

    wrapper.find('.dropdown-menu').simulate('blur')

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          expect(
            onToggle
          ).toHaveBeenCalledWith(false)

          resolve(true)
        } catch (e) {
          reject(e)
        }
      })
    })
  })

  it('should call toggle function on blur argument false', () => {
    const onToggle = jest.fn()

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
          onToggle
        ).toHaveBeenCalledWith(false)

        wrapper.unmount()

        resolve(true)
      })
    })
  })

  it('should not call onToggle function on unmount if closed', () => {
    const onToggle = jest.fn()

    const wrapper = mount(
      <div>
        <Dropdown
          header={commonHeader}
          onToggle={onToggle} />
      </div>
    )

    wrapper.unmount()

    expect(
      onToggle
    ).not.toHaveBeenCalled()
  })

  it('should call onToggle function on unmount if open', () => {
    const onToggle = jest.fn()

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
      onToggle
    ).toHaveBeenCalledWith(false)
  })

  it('should not call toggle function on keydown (esc)', () => {
    const onToggle = jest.fn()

    const wrapper = mount(
      <div>
        <Dropdown
          header={commonHeader}
          onToggle={onToggle} />
      </div>
    )

    wrapper.find('.dropdown-menu').simulate('keyDown', {keyCode: 27})

    expect(
      onToggle
    ).not.toHaveBeenCalled()

    wrapper.unmount()
  })

  it('should not call toggle function on keydown (esc) if open', () => {
    const onToggle = jest.fn()

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
      onToggle
    ).toHaveBeenCalledWith(false)

    wrapper.unmount()
  })
})
