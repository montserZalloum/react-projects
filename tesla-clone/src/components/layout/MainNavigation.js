import React from 'react'
import {Link} from 'react-router-dom'
function MainNavigation() {
  return (
    <div>
        <Link to="/">All Meetups</Link>
        <Link to="/new">New Meetup</Link>
        <Link to="/favourites">My Favourites</Link>
    </div>
  )
}

export default MainNavigation