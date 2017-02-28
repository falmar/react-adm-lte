jest.unmock('./../Header')

import React from 'react'
import {shallow} from 'enzyme'

import Header from './../Header'

describe('ControlSidebar.TabContent.TabPane.Header', () => {
  it('should have basic classNames', () => {
    const wrapper = shallow(<Header />)

    expect(
      wrapper.hasClass('control-sidebar-heading')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <Header>
        Children!
      </Header>
    )

    expect(
      wrapper.contains('Children!')
    ).toBeTruthy()
  })
})
