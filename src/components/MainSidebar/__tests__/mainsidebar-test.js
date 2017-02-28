jest.unmock('./../MainSidebar')

import React from 'react'
import {shallow} from 'enzyme'

import MainSidebar from './../MainSidebar'

describe('MainSidebar', () => {
  it('should have classnames', () => {
    const wrapper = shallow(<MainSidebar />)

    expect(
      wrapper.hasClass('main-sidebar')
    ).toBeTruthy()

    expect(
      wrapper.find('section').length
    ).toEqual(1)

    expect(
      wrapper.find('section').hasClass('sidebar')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <MainSidebar>
        <li>Child</li>
      </MainSidebar>
    )

    expect(
      wrapper.find('section').contains(<li>Child</li>)
    ).toBeTruthy()
  })
})
