// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../User')
jest.unmock('./../../../utils/Link')

import React from 'react'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon'

import {User, UserHeader, UserBody, UserFooter} from './../User'

describe('Dropdown.User.Base', () => {
  it('should add a tag or Link (react-router) depending on href', () => {
    // href present with external link should be react-router's Link
    let wrapper = mount(<User href='http://example.com' />)

    let Link = wrapper.find('a')

    expect(
      Link.length
    ).toEqual(1)

    expect(
      Link.prop('href')
    ).toEqual('http://example.com')

    wrapper.unmount()

    // href not present should be a tag with href=/user
    wrapper = mount(<User href='/user' />)

    Link = wrapper.find('Link')

    expect(
      Link.length
    ).toEqual(1)

    expect(
      Link.prop('to')
    ).toEqual('/user')
  })

  it('should have img tag and its url', () => {
    const wrapper = shallow(<User imageUrl='/img/user2-160x160.jpg' />)

    const img = wrapper.find('img')

    expect(
      img.length
    ).toEqual(1)

    expect(
      img.hasClass('user-image')
    ).toBeTruthy()

    expect(
      img.prop('src')
    ).toEqual('/img/user2-160x160.jpg')
  })

  it('should have label', () => {
    const wrapper = shallow(<User label='Alexander Pierce' />)

    expect(
      wrapper.find('span').text()
    ).toEqual('Alexander Pierce')

    expect(
      wrapper.find('span').hasClass('hidden-xs')
    ).toBeTruthy()
  })

  it('should ul tag dropdown-menu', () => {
    const wrapper = shallow(<User />)

    const ul = wrapper.find('ul')

    expect(
      ul.length
    ).toEqual(1)

    expect(
      ul.hasClass('dropdown-menu')
    ).toBeTruthy()
  })

  it('should trigger onClick', () => {
    const spy = sinon.spy()
    const wrapper = shallow(<User onClick={spy} />)

    wrapper.find('MyLink').simulate('click')

    expect(
      spy.called
    ).toBeTruthy()
  })
})

describe('Dropdown.User.Header', () => {
  it('should have class name li tag', () => {
    expect(
      shallow(<UserHeader />).hasClass('user-header')
    ).toBeTruthy()
  })

  it('should have img tag with its url', () => {
    const wrapper = shallow(<UserHeader url='path/to/img' />)

    const img = wrapper.find('img')

    expect(
      img.length
    ).toEqual(1)

    expect(
      img.hasClass('img-circle')
    ).toBeTruthy()

    expect(
      img.prop('src')
    ).toEqual('path/to/img')
  })

  it('should have its title', () => {
    const wrapper = shallow(<UserHeader title='Web Developer' />)

    const p = wrapper.find('p')

    expect(
      p.length
    ).toEqual(1)

    expect(
      p.text()
    ).toContain('Web Developer')
  })

  it('should have its (description)', () => {
    const wrapper = shallow(<UserHeader description='Member since 2015' />)

    const small = wrapper.find('small')

    expect(
      small.length
    ).toEqual(1)

    expect(
      small.text()
    ).toContain('Member since 2015')
  })
})

describe('Dropdown.User.Body', () => {
  const linksData = [{
    href: '/to/somewhere',
    label: 'Somewhere'
  }, {
    href: 'http://example.com',
    label: 'Example'
  }, {
    href: '/',
    label: 'Home'
  }]

  it('should have class name li tag', () => {
    expect(
      shallow(<UserBody />).hasClass('user-body')
    ).toBeTruthy()
  })

  it('should have row container', () => {
    const wrapper = shallow(<UserBody data={[]} />)

    expect(
      wrapper.find('.row').length
    ).toEqual(1)
  })

  it('should have columns as much as links data ', () => {
    const wrapper = shallow(<UserBody data={linksData} />)

    expect(
      wrapper.find('.col-xs-4').length
    ).toEqual(3)
  })

  it('should have columns with text-center className', () => {
    const wrapper = shallow(<UserBody data={linksData} />)

    expect(
      wrapper.find('.col-xs-4').at(0).hasClass('text-center')
    ).toBeTruthy()
  })

  it('should have anchor tag (a) or react-router Link depend on url', () => {
    const wrapper = mount(<UserBody data={linksData} />)

    const columns = wrapper.find('.col-xs-4')

    let link = columns.at(0).find('Link')

    expect(
      link.length
    ).toEqual(1)

    expect(
      link.prop('to')
    ).toEqual('/to/somewhere')

    expect(
      link.text()
    ).toContain('Somewhere')

    link = columns.at(1).find('a')

    expect(
      link.length
    ).toEqual(1)

    expect(
      link.prop('href')
    ).toEqual('http://example.com')

    expect(
      link.text()
    ).toContain('Example')

    link = columns.at(2).find('Link')

    expect(
      link.length
    ).toEqual(1)

    expect(
      link.prop('to')
    ).toEqual('/')

    expect(
      link.text()
    ).toContain('Home')
  })

  it('should trigger onClick', () => {
    const spy0 = sinon.spy()
    const spy1 = sinon.spy()
    const spy2 = sinon.spy()
    const data = [
      ...linksData
    ]

    data[0].onClick = spy0
    data[1].onClick = spy1
    data[2].onClick = spy2

    const wrapper = mount(<UserBody data={data} />)
    const container = wrapper.find('div')

    container.find('MyLink').at(0).simulate('click')
    container.find('MyLink').at(1).simulate('click')
    container.find('MyLink').at(2).simulate('click')

    expect(
      spy0.called
    ).toBeTruthy()

    expect(
      spy1.called
    ).toBeTruthy()

    expect(
      spy2.called
    ).toBeTruthy()
  })
})

describe('Dropdown.User.Footer', () => {
  const linksData = {
    left: {
      href: '/to/somewhere',
      label: 'Somewhere'
    },
    right: {
      href: 'http://example.com',
      label: 'Example'
    }}

  it('should have class name li tag', () => {
    expect(
      shallow(<UserFooter />).hasClass('user-footer')
    ).toBeTruthy()
  })

  it('should have pull right and left', () => {
    const wrapper = shallow(<UserFooter data={linksData} />)

    expect(
      wrapper.find('div').at(0).hasClass('pull-left')
    ).toBeTruthy()

    expect(
      wrapper.find('div').at(1).hasClass('pull-right')
    ).toBeTruthy()
  })

  it('should have anchor tag (a) or react-router Link depend on url', () => {
    const wrapper = mount(<UserFooter data={linksData} />)
    const container = wrapper.find('div')
    let link = container.at(0).find('Link')

    expect(
      link.length
    ).toEqual(1)

    expect(
      link.prop('to')
    ).toEqual('/to/somewhere')

    expect(
      link.text()
    ).toContain('Somewhere')

    link = container.at(1).find('a')

    expect(
      link.length
    ).toEqual(1)

    expect(
      link.prop('href')
    ).toEqual('http://example.com')

    expect(
      link.text()
    ).toContain('Example')
  })

  it('should trigger onClick', () => {
    const leftSpy = sinon.spy()
    const rightSpy = sinon.spy()
    const data = {
      ...linksData,
      ...{
        left: {
          onClick: leftSpy
        },
        right: {
          onClick: rightSpy
        }
      }
    }
    const wrapper = mount(<UserFooter data={data} />)
    const container = wrapper.find('div')
    container.at(0).find('MyLink').simulate('click')
    container.at(1).find('MyLink').simulate('click')

    expect(
      leftSpy.called
    ).toBeTruthy()

    expect(
      rightSpy.called
    ).toBeTruthy()
  })
})
