jest.unmock('../Body')

import React from 'react'
import {shallow} from 'enzyme'

import Body from '../Body'

describe('Box.Body', () => {
  it('should have basic className by default', () => {
    const wrapper = shallow(<Body />)

    expect(
      wrapper.hasClass('box-body')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <Body>
        <div>Children</div>
      </Body>
    )

    expect(
      wrapper.contains(<div>Children</div>)
    ).toBeTruthy()
  })
})
