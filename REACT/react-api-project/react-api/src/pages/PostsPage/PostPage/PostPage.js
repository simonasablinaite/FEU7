import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { API_URL } from '../../../config';

const PostPage = () => {
   const { id } = useParams();

   const [post, setPost] = useState(null);
   const [postDelete, setPostDelete] = useState(false);

   useEffect(() => {
      axios.get(`${API_URL}/posts/${id}?_expand=user`)
         .then(res => setPost(res.data))
   }, [id])

   const deletePostHandler = () => {
      // fetch(`${API_URL}/posts/${id}`, { method: 'DELETE' }) // puslapis ismeta klaida, kad nebera toko posto (status code 404)
      //    .then(res => res.json())
      //    .then(data => setPostDelete(true))  // budas su iprastu fetchu

      axios.delete(`${API_URL}/posts/${id}`)
         .then(data => {
            setPostDelete(true) // budas su AXIOS
         })
   }

   return (

      <div>
         {postDelete ? (
            <>
               <h1>Post was deleted</h1>
               <Link to='/json/posts'>Go back to posts list</Link>
            </>
         ) : (
            post && (
               <>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                  <span>Author: {post.user.name}</span>

                  <div className='delete-wrapper' style={{ marginTop: '20px' }}>
                     <button onClick={deletePostHandler}>Delete Post</button>
                     <Link to={`/json/edit-post/${post.id}`}>Edit post</Link>
                  </div>
               </>
            )
         )}
      </div>
   )
}

export default PostPage
