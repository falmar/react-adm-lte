jest.unmock('./../ControlSidebar')

import React from 'react'
import {shallow} from 'enzyme'

import ControlSidebar from './../ControlSidebar'

describe('ControlSidebar', () => {
  it('should have basic classnames', () => {
    const wrapper = shallow(<ControlSidebar />)

    expect(
      wrapper.hasClass('control-sidebar')
    ).toBeTruthy()

    expect(
      wrapper.hasClass('control-sidebar-dark')
    ).toBeTruthy()
  })

  it('should be closed by default', () => {
    const wrapper = shallow(<ControlSidebar />)

    expect(
      wrapper.hasClass('control-sidebar-open')
    ).toBeFalsy()
  })

  it('should be open when prop provided', () => {
    const wrapper = shallow(<ControlSidebar open />)

    expect(
      wrapper.hasClass('control-sidebar-open')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <ControlSidebar>
        <span>children</span>
      </ControlSidebar>
    )

    expect(
      wrapper.contains(<span>children</span>)
    ).toBeTruthy()
  })
})
