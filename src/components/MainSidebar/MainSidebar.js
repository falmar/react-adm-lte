// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

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

export default MainSidebar
