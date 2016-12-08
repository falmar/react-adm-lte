// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Logo')

import React from 'react'
import {shallow, mount} from 'enzyme'

import Logo, {LogoText} from './../Logo'

describe('LogoText', () => {
  it('should add class by type', () => {
    expect(
      shallow(<LogoText isMini />).hasClass('logo-mini')
    ).toBeTruthy()

    expect(
      shallow(<LogoText isLarge />).hasClass('logo-lg')
    ).toBeTruthy()
  })

  it('should add title', () => {
    expect(
      shallow(<LogoText isMini title='myTitle' />).text()
    ).toEqual('myTitle')
  })

  it('should add bold title', () => {
    expect(
      shallow(<LogoText isMini />).find('b').equals(<b />)
    ).toBeTruthy()

    expect(
      shallow(<LogoText isMini boldTitle='boldTitle' />).find('b').equals(<b>boldTitle</b>)
    ).toBeTruthy()
  })
})

describe('Logo', () => {
  it('should add class to link', () => {
    expect(
      shallow(<Logo href='' />).hasClass('logo')
    ).toBeTruthy()
  })

  it('should add href link ', () => {
    const wrapper = mount(<Logo href='/home-link' />)

    expect(
      wrapper.find('Link').prop('to')
    ).toEqual('/home-link')
  })
})
