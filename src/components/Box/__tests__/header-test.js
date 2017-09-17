jest.unmock('../Header')

import React from 'react'
import {shallow} from 'enzyme'

import Header from '../Header'

describe('Box.Header', () => {
  it('should have basic classNames by default', () => {
    const wrapper = shallow(<Header />)

    expect(
      wrapper.prop('className')
    ).toBe('box-header')
  })

  it(`should disable className 'with-border' if provided as false`, () => {
    let wrapper = shallow(<Header border={false} />)

    expect(
      wrapper.hasClass('with-border')
    ).toBeFalsy()

    wrapper = shallow(<Header border />)

    expect(
      wrapper.hasClass('with-border')
    ).toBeTruthy()
  })

  it('should not have Box.Title if prop not provided', () => {
    const wrapper = shallow(<Header />)
    const h3 = wrapper.find('h3')

    expect(
      h3.length
    ).toBe(0)
  })

  it('should not have Box.Title if prop provided', () => {
    const wrapper = shallow(<Header title='Happy Title!' />)
    const h3 = wrapper.find('h3')

    expect(
      h3.length
    ).toBe(1)

    expect(
      h3.hasClass('box-title')
    ).toBeTruthy()

    expect(
      h3.contains('Happy Title!')
    ).toBeTruthy()
  })

  it('should render another node element passed as prop title', () => {
    const wrapper = shallow(<Header title={<div>Children</div>} />)

    expect(
      wrapper.find('h3').contains(<div>Children</div>)
    ).toBeTruthy()
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <Header>
        <div>Children</div>
      </Header>
    )

    expect(
      wrapper.contains(<div>Children</div>)
    ).toBeTruthy()
  })
})
