jest.unmock('./../TabPane')

import React from 'react'
import {shallow} from 'enzyme'

import TabPane from './../TabPane'

describe('NavTab.TabContent.TabPane', () => {
  it('should have basic className', () => {
    const wrapper = shallow(<TabPane />)

    expect(
      wrapper.hasClass('tab-pane')
    ).toBeTruthy()
  })

  it('should not have className "active" by default', () => {
    const wrapper = shallow(<TabPane />)

    expect(
      wrapper.hasClass('active')
    ).toBeFalsy()
  })

  it('should have className "active" if prop provided', () => {
    const wrapper = shallow(<TabPane active />)

    expect(
      wrapper.hasClass('tab-pane')
    ).toBeTruthy()
  })

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
