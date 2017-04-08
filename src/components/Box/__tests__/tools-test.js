jest.unmock('../Tools')

import React from 'react'
import {shallow} from 'enzyme'

import Tools from '../Tools'

describe('Box.Tools', () => {
  it('should have basic className by default', () => {
    const wrapper = shallow(<Tools />)

    expect(
      wrapper.hasClass('box-tools')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <Tools>
        <div>Children</div>
      </Tools>
    )

    expect(
      wrapper.contains(<div>Children</div>)
    ).toBeTruthy()
  })
})
