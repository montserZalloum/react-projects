import React from 'react'

function UsersList(props) {
  return (
    <ul>
        {props.data.map((user)=><li key={user.name}>{user.name} ({user.age} years old)</li>)}
    </ul>
  )
}

export default UsersList