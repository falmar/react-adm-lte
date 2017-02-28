jest.unmock('../UserBody')

import React from 'react'
import {shallow} from 'enzyme'

import UserBody from '../UserBody'

describe('MainHeader.Navbar.NavbarMenu.User.UserBody', () => {
  it('should have className "user-body"', () => {
    const wrapper = shallow(<UserBody />)

    expect(
      wrapper.hasClass('user-body')
    ).toBeTruthy()
  })

  it('should have <div> element with className "row"', () => {
    const wrapper = shallow(<UserBody />)

    expect(
      wrapper.find('div').hasClass('row')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <UserBody>
        <a href='#'>Children</a>
      </UserBody>
    )

    expect(
      wrapper.contains(<a href='#'>Children</a>)
    ).toBeTruthy()
  })
})
