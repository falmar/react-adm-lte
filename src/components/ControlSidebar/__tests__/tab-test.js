jest.unmock('./../Tab')

import React from 'react'
import {shallow} from 'enzyme'

import Tab from './../Tab'

describe('ControlSidebar.NavTab.Tab', () => {
  it('should not have className "active" by default', () => {
    const wrapper = shallow(<Tab />)

    expect(
      wrapper.hasClass('active')
    ).toBeFalsy()
  })

  it('should have className "active" if prop provided', () => {
    const wrapper = shallow(<Tab active />)

    expect(
      wrapper.hasClass('active')
    ).toBeTruthy()
  })

  it('should not have icon className if not provied', () => {
    const wrapper = shallow(<Tab />)

    expect(
      wrapper.find('i').prop('className')
    ).toBeUndefined()
  })

  it('should have icon className if provired', () => {
    const wrapper = shallow(<Tab iconClass='fa fa-wrench' />)

    expect(
      wrapper.find('i').prop('className')
    ).toEqual('fa fa-wrench')
  })

  it('should not call onClick function when event is not fired', () => {
    const spy = jest.fn()
    shallow(<Tab onClick={spy} />)

    expect(
      spy
    ).not.toHaveBeenCalled()
  })

  it('should call onClick function when event is not fired', () => {
    const spy = jest.fn()
    const wrapper = shallow(<Tab onClick={spy} />)

    wrapper.find('MyLink').simulate('click')

    expect(
      spy
    ).toHaveBeenCalled()
  })
})
