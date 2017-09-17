jest.unmock('../Footer')

import React from 'react'
import {shallow} from 'enzyme'

import Footer from '../Footer'

describe('Box.Footer', () => {
  it('should have basic className by default', () => {
    const wrapper = shallow(<Footer />)

    expect(
      wrapper.hasClass('box-footer')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <Footer>
        <div>Children</div>
      </Footer>
    )

    expect(
      wrapper.contains(<div>Children</div>)
    ).toBeTruthy()
  })
})
