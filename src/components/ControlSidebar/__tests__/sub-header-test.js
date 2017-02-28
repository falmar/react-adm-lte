jest.unmock('./../SubHeader')

import React from 'react'
import {shallow} from 'enzyme'

import SubHeader from './../SubHeader'

describe('ControlSidebar.TabContent.TabPane.SubHeader', () => {
  it('should have basic classNames', () => {
    const wrapper = shallow(<SubHeader />)

    expect(
      wrapper.hasClass('control-sidebar-subheading')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <SubHeader>
        Children!
      </SubHeader>
    )

    expect(
      wrapper.contains('Children!')
    ).toBeTruthy()
  })
})
