jest.unmock('./../ControlSidebarMenu')

import React from 'react'
import {shallow} from 'enzyme'

import ControlSidebarMenu from './../ControlSidebarMenu'

describe('ControlSidebar.ControlSidebarMenu', () => {
  it('should have basic classNames', () => {
    const wrapper = shallow(<ControlSidebarMenu />)

    expect(
      wrapper.hasClass('control-sidebar-menu')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <ControlSidebarMenu>
        <li>Children!</li>
      </ControlSidebarMenu>
    )

    expect(
      wrapper.contains(<li>Children!</li>)
    ).toBeTruthy()
  })
})
