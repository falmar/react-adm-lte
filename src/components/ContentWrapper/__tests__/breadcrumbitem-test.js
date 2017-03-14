import React from 'react'
import {shallow} from 'enzyme'

import BreadcrumbItem from '../BreadcrumbItem'

describe('Breadcrumb Item', () => {
  it('sould be a <li> element by default', () => {
    const wrapper = shallow(<BreadcrumbItem />)

    expect(
      wrapper.is('li')
    ).toBeTruthy()
  })

  it('should not have active className by default', () => {
    const wrapper = shallow(<BreadcrumbItem />)

    expect(
      wrapper.hasClass('active')
    ).toBeFalsy()
  })

  it('should have active className if active prop provied', () => {
    const wrapper = shallow(<BreadcrumbItem active />)

    expect(
      wrapper.hasClass('active')
    ).toBeTruthy()
  })

  it('should have <Link> element and <i> within if prop active not provided', () => {
    const wrapper = shallow(<BreadcrumbItem />)

    expect(
      wrapper.find('MyLink').exists()
    ).toBeTruthy()

    expect(
      wrapper.find('MyLink').find('i').exists()
    ).toBeTruthy()
  })

  it('should not have <Link> and <i> element if prop active provided', () => {
    const wrapper = shallow(
      <BreadcrumbItem active />
    )
    const Link = wrapper.find('MyLink')

    expect(
      Link.exists()
    ).toBeFalsy()

    expect(
      Link.find('i').exists()
    ).toBeFalsy()
  })

  it('should pass title prop as child to <Link> element', () => {
    const wrapper = shallow(
      <BreadcrumbItem title='Dashboard' />
    )

    expect(
      wrapper.find('MyLink').contains('Dashboard')
    ).toBeTruthy()
  })

  it('should not have any className on <i> element by default', () => {
    const wrapper = shallow(
      <BreadcrumbItem />
    )

    expect(
      wrapper.find('i').prop('className')
    ).toBeFalsy()
  })

  it('should pass iconClass prop to <i> element className', () => {
    const wrapper = shallow(
      <BreadcrumbItem iconClass='fa fa-dashboard' />
    )

    expect(
      wrapper.find('i').hasClass('fa')
    ).toBeTruthy()

    expect(
      wrapper.find('i').hasClass('fa-dashboard')
    ).toBeTruthy()
  })

  it('should have falsy props onClick or href to <MyLink> Element if not provided', () => {
    const wrapper = shallow(
      <BreadcrumbItem />
    )
    const Link = wrapper.find('MyLink')

    expect(
      Link.prop('onClick')
    ).toBeFalsy()

    expect(
      Link.prop('href')
    ).toBeFalsy()
  })

  it('should pass onClick prop to <MyLink> element', () => {
    const spy = jest.fn()
    const wrapper = shallow(
      <BreadcrumbItem onClick={spy} />
    )

    expect(
      wrapper.find('MyLink').prop('onClick')
    ).toBe(spy)
  })

  it('should pass href prop to <MyLink>', () => {
    const wrapper = shallow(
      <BreadcrumbItem href='http://example.com' />
    )

    expect(
      wrapper.find('MyLink').prop('href')
    ).toBe('http://example.com')
  })
})
