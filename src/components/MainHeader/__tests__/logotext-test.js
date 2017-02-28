jest.unmock('./../LogoText')

import React from 'react'
import {shallow} from 'enzyme'

import LogoText from './../LogoText'

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
