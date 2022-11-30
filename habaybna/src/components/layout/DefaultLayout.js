import React from 'react'
import Notifications from '../admin/ui/Notifications'
import Header from './Header'

function DefaultLayout(props) {
  return (
    <>
        <Header />
        {props.children}
        <Notifications />
    </>
  )
}

export default DefaultLayout