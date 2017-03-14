import React from 'react'
import {shallow} from 'enzyme'

import Breadcrumb from '../Breadcrumb'

describe('ContentWrapper Breadcrumb', () => {
  it('should be <ol> element', () => {
    const wrapper = shallow(
      <Breadcrumb />
    )

    expect(
      wrapper.is('ol')
    ).toBeTruthy()
  })

  it('should have basic classNames', () => {
    const wrapper = shallow(
      <Breadcrumb />
    )

    expect(
      wrapper.hasClass('breadcrumb')
    ).toBeTruthy()
  })

  it('should not have children by default', () => {
    const wrapper = shallow(
      <Breadcrumb />
    )

    expect(
      wrapper.children().exists()
    ).toBeFalsy()
  })

  it('should have children if provided', () => {
    const wrapper = shallow(
      <Breadcrumb>
        <div>Children!</div>
      </Breadcrumb>
    )

    expect(
      wrapper.children().exists()
    ).toBeTruthy()

    expect(
      wrapper.contains(<div>Children!</div>)
    ).toBeTruthy()
  })
})
