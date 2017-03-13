import React from 'react'
import {shallow} from 'enzyme'

import Content from '../Content'

describe('Content Content', () => {
  it('should be a <section> element', () => {
    const wrapper = shallow(<Content />)

    expect(
      wrapper.is('section')
    ).toBeTruthy()
  })

  it('should have basic classNames', () => {
    const wrapper = shallow(<Content />)

    expect(
      wrapper.hasClass('content')
    ).toBeTruthy()
  })

  it('should not have children by default', () => {
    const wrapper = shallow(<Content />)

    expect(
      wrapper.children().exists()
    ).toBeFalsy()
  })

  it('should pass down children if provided', () => {
    const wrapper = shallow(
      <Content>
        <div>Children</div>
      </Content>
    )

    expect(
      wrapper.children().exists()
    ).toBeTruthy()

    expect(
      wrapper.contains(<div>Children</div>)
    ).toBeTruthy()
  })
})
