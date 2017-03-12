# react-adm-lte

React Components for [AdminLTE](https://github.com/almasaeed2010/AdminLTE)

[![](https://travis-ci.org/falmar/react-adm-lte.svg?branch=master)](https://travis-ci.org/falmar/react-adm-lte)
[![](https://img.shields.io/codecov/c/github/falmar/react-adm-lte.svg)](https://codecov.io/gh/falmar/react-adm-lte)

## Install

`npm install --save react-adm-lte`

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'

import {Layout} from 'react-adm-lte'

ReactDOM.render(
  <Layout
    sidebarMini
    skin='skin-blue'>
    ...
  </Layout>
  ,
  document.getElementById('root')
)
```

## Test

```sh
$ git clone https://github.com/falmar/react-adm-lte
$ cd react-adm-lte
$ npm install
$ npm test
```

## Contributions
Contributions are welcome!

## License
MIT

### TODO List

**Components**

- [x] Link component for external url or onClick function
- [x] Layout
- [ ] MainHeader
  - [x] Logo
  - [ ] Navbar    
    - [x] Sidebar Toggle
    - [x] Control Sidebar Toggle
    - [ ] Menu
      - [x] Messages
      - [x] Notifications
      - [x] Tasks
      - [x] User menu
        - [x] Base
        - [x] Header
        - [x] Body
        - [x] Footer
      - [ ] ...
- [x] Sidebar
  - [x] UserPanel
  - [x] SearchForm
  - [x] Menu
  - [x] MenuItem
- [x] ControlSidebar
  - [x] NavTab
    - [x] Tab
  - [x] tab content
    - [x] tab pane
      - [x] header
      - [x] sub header
      - [x] menu
- [ ] ...more...
