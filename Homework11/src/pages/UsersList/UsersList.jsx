import React, { useEffect, useState } from 'react';
import { Link }                       from 'react-router-dom';

// import './Authorization.scss'

const UsersList = () => {
  const [users, setUsers] = useState( null );

  useEffect( () => {
    fetch( 'https://reqres.in/api/users?per_page=12' )
    .then( res => res.json() )
    .then( res => setUsers( res.data ) )
    .catch( e => console.error( e ) );
  }, [] );

  if ( !users ) return null;

  console.log( users );

  const renderUsers = ( data ) => (
    data.map( user => {
      return (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>
            {`${user.first_name} ${user.last_name}`}
            <img src={user.avatar} alt={user.last_name}/>
          </Link>
        </li>
      );
    } )
  );

  return (
    <div>
      <ul>
        {renderUsers( users )}
      </ul>
    </div>
  );
};

export default UsersList;