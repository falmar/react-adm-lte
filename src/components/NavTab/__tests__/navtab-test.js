jest.unmock('./../NavTab')

import React from 'react'
import {shallow} from 'enzyme'

import NavTab from './../NavTab'

describe('NavTab', () => {
  it('should have basic classnames', () => {
    const wrapper = shallow(<NavTab />)

    expect(
      wrapper.hasClass('nav')
    ).toBeTruthy()

    expect(
      wrapper.hasClass('nav-tabs')
    ).toBeTruthy()
  })

  it('should include classnames passed as prop', () => {
    const wrapper = shallow(<NavTab className='nav-justified' />)

    expect(
      wrapper.hasClass('nav-justified')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <NavTab>
        <span>children</span>
      </NavTab>
    )

    expect(
      wrapper.contains(<span>children</span>)
    ).toBeTruthy()
  })
})
