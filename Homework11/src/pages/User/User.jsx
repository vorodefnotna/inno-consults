import React, { useEffect, useState } from 'react';
import {useParams}                    from 'react-router-dom'

const User = () => {
  const [user, setUser] = useState(null)
  const {userId} = useParams()

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userId}`).then(res => res.json()).then(res => setUser(res.data))
  }, [userId])

  console.log('user', user);

  if(!user) return null

  return (
    <div>
      <h1>{user.first_name}</h1>
      <img src={user.avatar} alt=""/>
    </div>
  );
};

export default User;