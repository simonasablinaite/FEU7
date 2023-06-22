import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config';

const CreatePost = () => {
   const [users, setUsers] = useState([]);
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [user, setUser] = useState('')

   useEffect(() => {
      axios.get(`${API_URL}/users`)
         .then(res => {
            setUser(res.data[0].id)
            setUsers(res.data)
         })
   }, []);

   const newPostHandler = (event) => {
      event.preventDefault();

      // fetch(`${API_URL}/posts`, {
      //    method: 'POST',
      //    body: JSON.stringify({
      //       title,
      //       body,
      //       userId: +user,
      //    }),
      //    headers: {
      //       'Content-type': 'application/json; charset=UTF-8',
      //    },
      // })
      //    .then((response) => response.json())
      //    .then((json) => console.log(json));


      // AXIOS:
      axios.post(`${API_URL}/posts`, {
         title: title,
         body: body,
         userId: +user,
      }).then(res => console.log(res.data));
   }

   const titleHandler = event => setTitle(event.target.value);
   const bodyHandler = event => setBody(event.target.value);
   const userHandler = event => setUser(event.target.value);

   return (

      <form onSubmit={newPostHandler}>

         <div className='form-control'>
            <label htmlFor="title">Title:</label>
            <input type="text" id='title' name='title' value={title} onChange={titleHandler} />
         </div>

         <div className='form-control'>
            <label htmlFor="body">Body:</label>
            <textarea id='body' name='body' rows='5' value={body} onChange={bodyHandler} />
         </div>

         <div className='form-control'>
            <label htmlFor="user">User:</label>
            <select name="user" id="user" value={user} onChange={userHandler}>
               {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}

            </select>
         </div>

         <button>Create New Post</button>
      </form>

   )
}

export default CreatePost
