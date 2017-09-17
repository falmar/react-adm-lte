jest.unmock('./../Tab')

import React from 'react'
import {shallow} from 'enzyme'

import Tab from './../Tab'

describe('NavTab.Tab', () => {
  it('should not have className "active" by default', () => {
    const wrapper = shallow(<Tab children={<div />} />)

    expect(
      wrapper.hasClass('active')
    ).toBeFalsy()
  })

  it('should have className "active" if prop provided', () => {
    const wrapper = shallow(<Tab active children={<div />} />)

    expect(
      wrapper.hasClass('active')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(<Tab><span>Children</span></Tab>)

    expect(
      wrapper.contains(<span>Children</span>)
    ).toBeTruthy()
  })
})
