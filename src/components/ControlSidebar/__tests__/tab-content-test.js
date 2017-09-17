jest.unmock('./../TabContent')

import React from 'react'
import {shallow} from 'enzyme'

import TabContent from './../TabContent'

describe('ControlSidebar.NavTab.TabContent', () => {
  it('should pass down children', () => {
    const wrapper = shallow(
      <TabContent>
        <div>Children!</div>
      </TabContent>
    )

    expect(
      wrapper.contains(<div>Children!</div>)
    ).toBeTruthy()
  })
})
