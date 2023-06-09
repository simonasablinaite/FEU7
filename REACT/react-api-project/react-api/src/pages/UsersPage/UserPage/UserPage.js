import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../../config';

const UserPage = () => {
   // console.log(useParams());

   const { id } = useParams();

   const [user, setUser] = useState({})
   console.log(useState(user));

   useEffect(() => {
      fetch(`${API_URL}/users/${id}?_embed=posts`)
         .then(res => res.json())
         .then(data => {
            setUser(data);
         })
   }, [id])

   if (!user) {
      return '';
   }

   return (
      <div>
         <h1>{user.name} info:</h1>
      </div>
   )
}

export default UserPage
