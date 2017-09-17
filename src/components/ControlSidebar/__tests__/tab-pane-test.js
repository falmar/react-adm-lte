jest.unmock('./../TabPane')

import React from 'react'
import {shallow} from 'enzyme'

import TabPane from './../TabPane'

describe('ControlSidebar.NavTab.TabContent.TabPane', () => {
  it('should pass down children', () => {
    const wrapper = shallow(
      <TabPane>
        <div>Children!</div>
      </TabPane>
    )

    expect(
      wrapper.contains(<div>Children!</div>)
    ).toBeTruthy()
  })
})
