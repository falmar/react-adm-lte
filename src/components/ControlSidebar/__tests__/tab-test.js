jest.unmock('./../Tab')

import React from 'react'
import {shallow} from 'enzyme'

import Tab from './../Tab'

describe('ControlSidebar.NavTab.Tab', () => {
  it('should have icon className if provided', () => {
    const wrapper = shallow(<Tab iconClass='fa fa-wrench' onClick={() => {}} />)

    expect(
      wrapper.find('i').prop('className')
    ).toEqual('fa fa-wrench')
  })

  it('should not call onClick function when event is not fired', () => {
    const spy = jest.fn()
    shallow(<Tab onClick={spy} iconClass='' />)

    expect(
      spy
    ).not.toHaveBeenCalled()
  })

  it('should call onClick function when event is not fired', () => {
    const spy = jest.fn()
    const wrapper = shallow(<Tab onClick={spy} iconClass='' />)

    wrapper.find('MyLink').simulate('click')

    expect(
      spy
    ).toHaveBeenCalled()
  })
})
