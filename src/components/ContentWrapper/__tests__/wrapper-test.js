import React from 'react'
import {shallow} from 'enzyme'

import MainFooter from '../MainFooter'

describe('Main Footer', () => {
  it('should be a <footer> element', () => {
    const wrapper = shallow(<MainFooter />)

    expect(
      wrapper.is('footer')
    ).toBeTruthy()
  })

  it('should have basic classNames', () => {
    const wrapper = shallow(<MainFooter />)

    expect(
      wrapper.hasClass('main-footer')
    ).toBeTruthy()
  })

  it('should not have children by default', () => {
    const wrapper = shallow(<MainFooter />)

    expect(
      wrapper.children().exists()
    ).toBeFalsy()
  })

  it('should pass down children if provided', () => {
    const wrapper = shallow(
      <MainFooter>
        <div>Children</div>
      </MainFooter>
    )

    expect(
      wrapper.children().exists()
    ).toBeTruthy()

    expect(
      wrapper.contains(<div>Children</div>)
    ).toBeTruthy()
  })
})
