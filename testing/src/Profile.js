import React, { useState } from 'react'

function Profile() {
    const[loggedIn,setLoggedIn]=useState(1)
  return (
    <div>
      <h1>Profile component</h1>
      {loggedIn==1?
      <h1>welcome user1</h1>:
      loggedIn==2?
      <h1>welcome user2</h1>: null
    }
    </div>
  )
}

export default Profile
