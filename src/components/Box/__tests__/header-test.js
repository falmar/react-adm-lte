jest.unmock('../Header')

import React from 'react'
import {shallow} from 'enzyme'

import Header from '../Header'

describe('Box.Header', () => {
  it('should have basic classNames by default', () => {
    const wrapper = shallow(<Header />)

    expect(
      wrapper.prop('className')
    ).toBe('box-header')
  })

  it(`should disable className 'with-border' if provided as false`, () => {
    let wrapper = shallow(<Header border={false} />)

    expect(
      wrapper.hasClass('with-border')
    ).toBeFalsy()

    wrapper = shallow(<Header border />)

    expect(
      wrapper.hasClass('with-border')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <Header>
        <div>Children</div>
      </Header>
    )

    expect(
      wrapper.contains(<div>Children</div>)
    ).toBeTruthy()
  })
})
