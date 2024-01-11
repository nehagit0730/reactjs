import React, { useState } from 'react'

function Profile() {
    const[loggedIn,setLoggedIn]=useState(2)
  return (
    <div>
      <h1>Conditioning rendring</h1>
      {loggedIn==1?
      <h1>welcome user1</h1>
      :loggedIn==2?
      <h1>welcome user2</h1>: null
    }
    </div>
  )
}

export default Profile
