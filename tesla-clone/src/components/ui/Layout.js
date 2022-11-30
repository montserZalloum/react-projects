import React from 'react'
import MainNavigation from '../layout/MainNavigation'

function Layout(props) {
  return (
    <div>
        <MainNavigation />
        <main>
            {props.children}
        </main>
    </div>
  )
}

export default Layout