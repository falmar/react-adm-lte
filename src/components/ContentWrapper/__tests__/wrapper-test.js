import React from 'react'
import {shallow} from 'enzyme'

import Wrapper from '../Wrapper'

describe('Content Wrapper', () => {
  it('should be a <div> element', () => {
    const wrapper = shallow(<Wrapper />)

    expect(
      wrapper.is('div')
    ).toBeTruthy()
  })

  it('should have basic classNames', () => {
    const wrapper = shallow(<Wrapper />)

    expect(
      wrapper.hasClass('main-content')
    ).toBeTruthy()
  })

  it('should not have children by default', () => {
    const wrapper = shallow(<Wrapper />)

    expect(
      wrapper.children().exists()
    ).toBeFalsy()
  })

  it('should pass down children if provided', () => {
    const wrapper = shallow(
      <Wrapper>
        <div>Children</div>
      </Wrapper>
    )

    expect(
      wrapper.children().exists()
    ).toBeTruthy()

    expect(
      wrapper.contains(<div>Children</div>)
    ).toBeTruthy()
  })
})
