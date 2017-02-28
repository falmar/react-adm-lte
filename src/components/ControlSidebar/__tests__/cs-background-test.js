jest.unmock('./../ControlSidebarBackground')

import React from 'react'
import {shallow} from 'enzyme'

import ControlSidebarBackground from './../ControlSidebarBackground'

describe('ControlSidebar Background', () => {
  it('should have basic classnames', () => {
    const wrapper = shallow(<ControlSidebarBackground />)

    expect(
      wrapper.hasClass('control-sidebar-bg')
    ).toBeTruthy()
  })

  it('should have basic styles', () => {
    const wrapper = shallow(<ControlSidebarBackground />)

    expect(
      wrapper.prop('style')
    ).toEqual({
      position: 'fixed',
      height: 'auto'
    })
  })
})
