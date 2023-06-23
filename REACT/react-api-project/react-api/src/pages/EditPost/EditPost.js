import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../config';

const EditPost = () => {
   const { id } = useParams(); // kad gautume post (pagal id), kurri norime redaguoti

   const [post, setPost] = useState({});

   const [users, setUsers] = useState([]);
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [user, setUser] = useState('')

   useEffect(() => {
      axios.get(`${API_URL}/posts/${id}`) // naudojame get, nes noresime uzpildyti forma ankstesniais duomenimis
         .then(res => {
            const post = res.data;

            setTitle(post.title)
            setBody(post.body)
            setUser(post.userId);
         })
   }, [id])


   useEffect(() => {
      axios.get(`${API_URL}/users`)
         .then(res => {
            setUsers(res.data)
         })
   }, []);

   const titleHandler = event => setTitle(event.target.value);
   const bodyHandler = event => setBody(event.target.value);
   const userHandler = event => setUser(event.target.value);

   const editPostHandler = (event) => {
      event.preventDefault();

      axios.put(`${API_URL}/posts/${id}`, {
         id,
         title,
         body,
         userid: +user,
      }).then(res => console.log(res.data))
   }


   return (
      <form onSubmit={editPostHandler}>

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

         <button>Edit Post</button>
      </form>
   )
}

export default EditPost
