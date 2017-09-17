jest.unmock('../Overlay')

import React from 'react'
import {shallow} from 'enzyme'

import Overlay from '../Overlay'

describe('Overlay', () => {
  it('should have basic className', () => {
    const wrapper = shallow(<Overlay />)

    expect(
      wrapper.hasClass('overlay')
    ).toBeTruthy()
  })

  it('should have <i> tag as children with classNames', () => {
    const wrapper = shallow(<Overlay />)
    const i = wrapper.find('i')

    expect(
      i.length
    ).toBe(1)

    expect(
      i.hasClass('fa')
    ).toBeTruthy()

    expect(
      i.hasClass('fa-refresh')
    ).toBeTruthy()

    expect(
      i.hasClass('fa-spin')
    ).toBeTruthy()
  })
})
