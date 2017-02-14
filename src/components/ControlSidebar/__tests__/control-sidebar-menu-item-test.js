jest.unmock('./../ControlSidebarMenuItem')

import React from 'react'
import {shallow} from 'enzyme'

import ControlSidebarMenuItem from './../ControlSidebarMenuItem'

const defaultProps = {
  title: '',
  description: '',
  iconClass: '',
  iconBackground: '',
  onClick: () => {},
  href: ''
}

describe('ControlSidebar.ControlSidebarMenu', () => {
  it('should have basic classNames', () => {
    const wrapper = shallow(
      <ControlSidebarMenuItem
        {...defaultProps}
        />
    )

    expect(
      wrapper.find('i').hasClass('menu-icon')
    ).toBeTruthy()

    expect(
      wrapper.find('div').hasClass('menu-info')
    ).toBeTruthy()
  })

  it('should use ControlSidebar\'s SubHeader component for the title', () => {
    const wrapper = shallow(
      <ControlSidebarMenuItem
        {...defaultProps}
        title='Item Title!'
        />
    )

    const SubHeader = wrapper.find('SubHeader')

    expect(
      SubHeader.length
    ).toEqual(1)

    expect(
      SubHeader.contains('Item Title!')
    ).toBeTruthy()
  })

  it('should set iconClass className to the <i> element', () => {
    const wrapper = shallow(
      <ControlSidebarMenuItem
        {...defaultProps}
        iconClass='fa-user'
        />
    )

    expect(
      wrapper.find('i').hasClass('fa-user')
    ).toBeTruthy()
  })

  it('should set iconBackground className to the <i> element', () => {
    const wrapper = shallow(
      <ControlSidebarMenuItem
        {...defaultProps}
        iconBackground='bg-red'
        />
    )

    expect(
      wrapper.find('i').hasClass('bg-red')
    ).toBeTruthy()
  })

  it('should have description provided as prop', () => {
    const wrapper = shallow(
      <ControlSidebarMenuItem
        {...defaultProps}
        description='description for the item!'
        />
    )

    expect(
      wrapper.contains(<p>description for the item!</p>)
    ).toBeTruthy()
  })

  it('should pass href prop to <MyLink> component', () => {
    const wrapper = shallow(
      <ControlSidebarMenuItem
        {...defaultProps}
        href='http://example.com'
        />
    )

    expect(
      wrapper.find('MyLink').prop('href', 'http://example.com')
    ).toBeTruthy()
  })

  it('should call onClick prop when <MyLink> component is clicked', () => {
    const spy = jest.fn()
    const wrapper = shallow(
      <ControlSidebarMenuItem
        {...defaultProps}
        onClick={spy}
        />
    )

    wrapper.find('MyLink').simulate('click')

    expect(
      spy
    ).toHaveBeenCalled()
  })
})
