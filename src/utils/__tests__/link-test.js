jest.unmock('./../Link')

import React from 'react'
import {mount} from 'enzyme'

import Link from './../Link'

describe('Link', () => {
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

  it('should have <a> tag for external url', () => {
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

  it('should have <a> tag with numeral for empty href', () => {
    const wrapper = mount(
      <Link href='' />
    )

    expect(
      wrapper.find('a').length
    ).toEqual(1)

    expect(
      wrapper.find('a').prop('href')
    ).toEqual('#')
  })

  it('should have <a> tag with numeral for internal url', () => {
    const wrapper = mount(
      <Link
        href='/path/somewhere' />
    )

    expect(
      wrapper.find('a').length
    ).toEqual(1)

    expect(
      wrapper.find('a').prop('href')
    ).toEqual('#')
  })

  it('should preventDefault when href is numeral ', () => {
    const preventDefault = jest.fn()
    const wrapper = mount(
      <Link
        onClick={() => {}} />
    )

    expect(
      wrapper.find('a').length
    ).toEqual(1)

    wrapper.simulate('click', {preventDefault})

    expect(
      preventDefault
    ).toBeCalled()
  })

  it('should not preventDefault when href is not numeral ', () => {
    const preventDefault = jest.fn()
    const wrapper = mount(
      <Link
        href='http://example.com'
        onClick={() => {}} />
    )

    expect(
      wrapper.find('a').length
    ).toEqual(1)

    wrapper.simulate('click', {preventDefault})

    expect(
      preventDefault
    ).not.toBeCalled()
  })

  it('should have numeral href when onClick prop provided', () => {
    const wrapper = mount(
      <Link />
    )

    expect(
      wrapper.find('a').length
    ).toEqual(1)

    expect(
      wrapper.find('a').prop('href')
    ).toEqual('#')
  })

  it('should trigger onClick function', () => {
    const spy = jest.fn()
    const wrapper = mount(
      <Link
        onClick={spy} />
    )

    expect(
      wrapper.find('a').length
    ).toEqual(1)

    wrapper.find('a').simulate('click')

    expect(
      spy
    ).toBeCalled()
  })
})
