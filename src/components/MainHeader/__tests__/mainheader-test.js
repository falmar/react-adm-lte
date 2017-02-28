jest.unmock('./../MainHeader')

import React from 'react'
import {shallow} from 'enzyme'

import MainHeader from './../MainHeader'

describe('MainHeader', () => {
  it('should contain main-header class', () => {
    expect(
      shallow(<MainHeader>anything</MainHeader>).hasClass('main-header')
    ).toBeTruthy()
  })

  it('should contain children passed down', () => {
    const comp = <MainHeader>
      <div>I'm a child</div>
    </MainHeader>

    expect(
      shallow(comp).contains(<div>I'm a child</div>)
    ).toBeTruthy()
  })

  it('should not contain anything than children passed down', () => {
    const comp = <MainHeader>
      <div>I'm a child</div>
    </MainHeader>

    expect(
      shallow(comp).contains(<div>I'm weird</div>)
    ).toBeFalsy()
  })
})
