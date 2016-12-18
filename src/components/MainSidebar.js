// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

import UserPanel from './MainSidebar/UserPanel'
import SearchForm from './MainSidebar/SearchForm'
import {Menu, Item} from './MainSidebar/SidebarMenu'

const MainSidebar = ({children}) => {
  return (
    <aside className='main-sidebar'>
      <section className='sidebar'>
        {children}
      </section>
    </aside>
  )
}

MainSidebar.propTypes = {
  children: PropTypes.array
}

export {
  MainSidebar,
  UserPanel,
  SearchForm,
  Menu,
  Item
}
