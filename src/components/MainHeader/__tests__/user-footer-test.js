jest.unmock('../UserFooter')

import React from 'react'
import {shallow} from 'enzyme'

import UserFooter from '../UserFooter'

describe('MainHeader.Navbar.NavbarMenu.User.UserFooter', () => {
  it('should have className "user-footer"', () => {
    const wrapper = shallow(<UserFooter />)

    expect(
      wrapper.hasClass('user-footer')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <UserFooter>
        <a href='#'>Children</a>
      </UserFooter>
    )

    expect(
      wrapper.contains(<a href='#'>Children</a>)
    ).toBeTruthy()
  })
})
