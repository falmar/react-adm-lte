// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../Tasks')
jest.unmock('./../../../utils/Link')

import React from 'react'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon'

import Tasks, {Task} from './../Tasks'

describe('Menu.Dropdown.Tasks', () => {
  const commonCB = () => {}

  it('should add classes', () => {
    const wrapper = shallow(
      <Tasks
        onToggle={commonCB}
        data={[]} />
    )

    const classes = [
      'tasks-menu',
      'fa-flag-o',
      'label-danger'
    ]

    expect(
      wrapper.instance().getClassNames()
    ).toEqual(classes)
  })

  it('should add inner menu', () => {
    const wrapper = shallow(
      <Tasks
        onToggle={commonCB}
        data={[]} />
    )

    const items = wrapper.children()

    expect(
      items.length
    ).toEqual(3)

    expect(
      items.at(0).hasClass('header')
    ).toBeTruthy()

    expect(
      items.at(1).find('ul').hasClass('menu')
    ).toBeTruthy()

    expect(
      items.at(2).hasClass('footer')
    ).toBeTruthy()
  })

  it('should set header and footer text', () => {
    const wrapper = shallow(
      <Tasks
        onToggle={commonCB}
        data={[]}
        header='You have 1 Task'
        footer='View all tasks' />
    )

    const items = wrapper.children()

    expect(
      items.length
    ).toEqual(3)

    expect(
      items.at(0).find('.header').text('You have 1 Task')
    ).toBeTruthy()

    expect(
      items.at(2).find('.footer').contains(<a href='#'>View all tasks</a>)
    ).toBeTruthy()
  })

  it('should have messages of type Task', () => {
    const wrapper = shallow(
      <Tasks
        onToggle={commonCB}
        data={[{}]} />
    )

    const messages = wrapper.instance().getTasks()

    expect(
      messages.length
    ).toEqual(1)

    expect(
      mount(messages[0]).type()
    ).toEqual(Task)
  })
})

describe('Menu.Dropdown.Tasks.Task', () => {
  const commonProps = {
    id: 1,
    title: 'New Task',
    progress: 20,
    progressClass: 'progress-bar-aqua'
  }

  it('should have link with href (#) on empty href', () => {
    const wrapper = mount(
      <Task {...commonProps}
         />
    )

    expect(
      wrapper.find('MyLink').find('a').prop('href')
    ).toEqual('#')
  })

  it('should have link with href set on props', () => {
    const wrapper = mount(
      <Task
        {...commonProps}
        href='http://example.com'
         />
    )

    expect(
      wrapper.find('MyLink').find('a').prop('href')
    ).toEqual('http://example.com')
  })

  it('should add title', () => {
    const wrapper = mount(
      <Task {...commonProps}
         />
    )

    expect(
      wrapper.find('h3').text()
    ).toContain('New Task')
  })

  it('should add progress class', () => {
    const wrapper = mount(
      <Task {...commonProps}
         />
    )

    expect(
      wrapper.find('.progress-bar').hasClass('progress-bar-aqua')
    ).toBeTruthy()
  })

  it('should add progress to style', () => {
    const wrapper = mount(
      <Task {...commonProps}
         />
    )

    expect(
      wrapper.find('.progress-bar').prop('style').width
    ).toEqual('20%')
  })

  it('should add progress and complete screen only', () => {
    const wrapper = mount(
      <Task {...commonProps}
        complete='Completed'
         />
    )

    expect(
      wrapper.find('.sr-only').text()
    ).toContain('20% Completed')
  })

  it('should trigger onclick on li message click', () => {
    const spy = sinon.spy()
    const wrapper = shallow(
      <Task
        {...commonProps}
        onClick={spy}
         />
    )

    wrapper.find('MyLink').simulate('click')

    expect(
      spy.called
    ).toBeTruthy()
  })
})
