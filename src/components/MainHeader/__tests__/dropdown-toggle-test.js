jest.unmock('../DropdownToggle')

import React from 'react'
import {shallow} from 'enzyme'

import DropdownToggle from '../DropdownToggle'

describe('MainHeader.Navbar.NavbarMenu.Dropdown.DropdownToggle', () => {
  it('should have basic className by default', () => {
    const wrapper = shallow(<DropdownToggle />)

    expect(
      wrapper.hasClass('dropdown-toggle')
    ).toBeTruthy()
  })

  it('should a <MyLink> tag element', () => {
    const wrapper = shallow(<DropdownToggle />)

    expect(
      wrapper.is('MyLink')
    ).toBeTruthy()
  })

  it('should call onToggle func when click event is fired', () => {
    const spy = jest.fn()
    const wrapper = shallow(<DropdownToggle onToggle={spy} />)

    wrapper.simulate('click')

    expect(
      spy
    ).toHaveBeenCalled()
  })

  it('should not call onToggle func if click event is not fired', () => {
    const spy = jest.fn()
    shallow(<DropdownToggle onToggle={spy} />)

    expect(
      spy
    ).not.toHaveBeenCalled()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <DropdownToggle>
        <i>I'm a child</i>
      </DropdownToggle>
    )

    expect(
      wrapper.contains(<i>I'm a child</i>)
    ).toBeTruthy()
  })
})
