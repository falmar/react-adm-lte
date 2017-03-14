import React from 'react'
import {shallow} from 'enzyme'

import Header from '../Header'

describe('Content Header', () => {
  it('should be a <section> element', () => {
    const wrapper = shallow(<Header />)

    expect(
      wrapper.is('section')
    ).toBeTruthy()
  })

  it('should have basic classNames', () => {
    const wrapper = shallow(<Header />)

    expect(
      wrapper.hasClass('content-header')
    ).toBeTruthy()
  })

  it('should have empty title by default', () => {
    const wrapper = shallow(<Header />)

    expect(
      wrapper.contains(<h1><small /></h1>)
    ).toBeTruthy()
  })

  it('should have title if provided', () => {
    const wrapper = shallow(<Header title='Dashboard' />)

    expect(
      wrapper.find('h1').contains('Dashboard')
    ).toBeTruthy()
  })

  it('should have empty sub title by default', () => {
    const wrapper = shallow(<Header />)

    expect(
      wrapper.contains(<small />)
    ).toBeTruthy()
  })

  it('should have sub title if provided', () => {
    const wrapper = shallow(<Header subTitle='react' />)

    expect(
      wrapper.contains(<small>react</small>)
    ).toBeTruthy()
  })

  it('should have only h1 children by default', () => {
    const wrapper = shallow(<Header />)

    expect(
      wrapper.children().length
    ).toBe(1)

    expect(
      wrapper.children().is('h1')
    ).toBeTruthy()
  })

  it('should pass down children if provided', () => {
    const wrapper = shallow(
      <Header>
        <div>Children</div>
        <div>Children 2</div>
      </Header>
    )

    expect(
      wrapper.children().length
    ).toBe(3)

    expect(
      wrapper.contains(<h1><small /></h1>)
    ).toBeTruthy()

    expect(
      wrapper.contains(<div>Children</div>)
    ).toBeTruthy()

    expect(
      wrapper.contains(<div>Children 2</div>)
    ).toBeTruthy()
  })
})
