// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Link')

import React from 'react'
import {mount} from 'enzyme'
import sinon from 'sinon'

import Link from './../Link'

describe('Link', () => {
  it('should have className react.router Link', () => {
    const wrapper = mount(<Link className='btn btn-default' />)

    expect(
      wrapper.find('Link').length
    ).toEqual(1)

    expect(
      wrapper.find('a').hasClass('btn')
    ).toBeTruthy()

    expect(
      wrapper.find('a').hasClass('btn-default')
    ).toBeTruthy()
  })

  it('should have className <a> tag', () => {
    const wrapper = mount(
      <Link
        className='btn btn-default'
        onClick={() => {}} />
    )

    expect(
      wrapper.find('a').length
    ).toEqual(1)

    expect(
      wrapper.find('a').hasClass('btn')
    ).toBeTruthy()

    expect(
      wrapper.find('a').hasClass('btn-default')
    ).toBeTruthy()
  })

  it('should <a> tag for internal url', () => {
    const wrapper = mount(
      <Link
        href='http://example.com' />
    )

    expect(
      wrapper.find('Link').length
    ).toEqual(0)

    expect(
      wrapper.find('a').length
    ).toEqual(1)

    expect(
      wrapper.find('a').prop('href')
    ).toEqual('http://example.com')
  })

  it('should react router Link for internal url', () => {
    const wrapper = mount(
      <Link
        href='/path/somewhere' />
    )

    expect(
      wrapper.find('Link').length
    ).toEqual(1)

    expect(
      wrapper.find('Link').prop('to')
    ).toEqual('/path/somewhere')
  })

  it('should trigger onClick function', () => {
    const spy = sinon.spy()
    const wrapper = mount(
      <Link
        onClick={spy} />
    )

    expect(
      wrapper.find('a').length
    ).toEqual(1)

    wrapper.find('a').simulate('click')

    expect(
      spy.called
    ).toBeTruthy()
  })
})
