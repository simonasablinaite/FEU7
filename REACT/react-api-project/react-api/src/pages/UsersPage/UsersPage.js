import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';

const UsersPage = () => {

  const [users, setUsers] = useState([]);


  // Duomenu gavimas is API:
  useEffect(() => {
    fetch(API_URL + '/users') // importuojamas url is config f-lo;
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
  }, []);

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/json/users/${user.id}`}>
              {user.id}. {user.name}
            </Link>
          </li>))}
      </ul>
    </div>
  )
}

export default UsersPage

/*
useEffect(() => {}) pirmas paramentas callBack f-ja, antras - dependencies [];
callBac'e turi buti fetchas kuriame kreipiamasi i puslapi. Tam, kad nereiketu kas karta atnaujinti internetio adreso, jis iskeliamas i configo f-la.
*/
