// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

import Logo, {LogoText} from './MainHeader/Logo'
import Navbar from './MainHeader/Navbar'
import SidebarToggle from './MainHeader/SidebarToggle'
import ControlSidebarToggle from './MainHeader/ControlSidebarToggle'
import Menu from './MainHeader/Menu'
import Notifications from './MainHeader/Notifications'
import Messages from './MainHeader/Messages'
import Tasks from './MainHeader/Tasks'
import User from './MainHeader/User'

const MainHeader = ({children}) => {
  return (
    <header className='main-header'>
      {children}
    </header>
  )
}

MainHeader.propTypes = {
  children: PropTypes.node.isRequired
}

export {
  MainHeader,
  Logo,
  LogoText,
  Navbar,
  SidebarToggle,
  ControlSidebarToggle,
  Menu,
  Messages,
  Notifications,
  Tasks,
  User
}
