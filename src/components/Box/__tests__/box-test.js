jest.unmock('../Box')

import React from 'react'
import {shallow} from 'enzyme'

import Box from '../Box'

describe('Box', () => {
  it(`should have only one className 'box' if no other prop provided`, () => {
    const wrapper = shallow(<Box />)

    expect(
      wrapper.prop('className')
    ).toBe('box')
  })

  it('should have color classNames if prop provided', () => {
    let wrapper = shallow(<Box primary />)

    expect(
      wrapper.hasClass('box-primary')
    ).toBeTruthy()

    wrapper = shallow(<Box info />)

    expect(
      wrapper.hasClass('box-info')
    ).toBeTruthy()

    wrapper = shallow(<Box warning />)

    expect(
      wrapper.hasClass('box-warning')
    ).toBeTruthy()

    wrapper = shallow(<Box success />)

    expect(
      wrapper.hasClass('box-success')
    ).toBeTruthy()

    wrapper = shallow(<Box danger />)

    expect(
      wrapper.hasClass('box-danger')
    ).toBeTruthy()
  })

  it(`should have className 'box-solid' if prop provided`, () => {
    const wrapper = shallow(<Box solid />)

    expect(
      wrapper.hasClass('box-solid')
    ).toBeTruthy()
  })

  it(`should have className 'collapsed' if prop provided`, () => {
    const wrapper = shallow(<Box collapsed />)

    expect(
      wrapper.hasClass('box-collapsed')
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <Box>
        <div>Children</div>
      </Box>
    )

    expect(
      wrapper.contains(<div>Children</div>)
    ).toBeTruthy()
  })

  it('should not render Overlay Component if prop not provided', () => {
    const wrapper = shallow(<Box />)

    expect(
      wrapper.find('Overlay').length
    ).toBe(0)
  })

  it('should render Overlay Component if prop provided', () => {
    const wrapper = shallow(<Box overlay />)

    expect(
      wrapper.find('Overlay').length
    ).toBe(1)
  })
})
