// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../TaskItem')

import React from 'react'
import {shallow} from 'enzyme'

import TaskItem from './../TaskItem'

describe('Menu.Dropdown.Tasks.TaskItem', () => {
  const commonProps = {
    id: 1,
    title: 'New Task',
    progress: 20,
    progressClass: 'progress-bar-aqua',
    onClick: () => {},
    href: '',
    completedText: 'completed'
  }

  it('should pass prop href to link as "http://example.com"', () => {
    const wrapper = shallow(
      <TaskItem
        {...commonProps}
        href='http://example.com'
         />
    )

    expect(
      wrapper.find('MyLink').prop('href')
    ).toEqual('http://example.com')
  })

  it('should add title', () => {
    const wrapper = shallow(
      <TaskItem {...commonProps}
         />
    )

    expect(
      wrapper.find('h3').text()
    ).toContain('New Task')
  })

  it('should add progress class', () => {
    const wrapper = shallow(
      <TaskItem {...commonProps}
         />
    )

    expect(
      wrapper.find('.progress-bar').hasClass('progress-bar-aqua')
    ).toBeTruthy()
  })

  it('should add progress to style', () => {
    const wrapper = shallow(
      <TaskItem {...commonProps}
         />
    )

    expect(
      wrapper.find('.progress-bar').prop('style').width
    ).toEqual('20%')
  })

  it('should add progress and complete screen only', () => {
    const wrapper = shallow(
      <TaskItem {...commonProps}
        completedText='Completed'
         />
    )

    expect(
      wrapper.find('.sr-only').text()
    ).toContain('20% Completed')
  })

  it('should trigger onclick on li message click', () => {
    const spy = jest.fn()
    const wrapper = shallow(
      <TaskItem
        {...commonProps}
        onClick={spy}
         />
    )

    wrapper.find('MyLink').simulate('click')

    expect(
      spy
    ).toBeCalled()
  })
})
