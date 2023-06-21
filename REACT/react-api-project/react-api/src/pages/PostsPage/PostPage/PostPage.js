import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { API_URL } from '../../../config';

const PostPage = () => {
   const { id } = useParams();

   const [post, setPost] = useState(null)

   useEffect(() => {
      axios.get(`${API_URL}/posts/${id}?_expand=user`)
         .then(res => setPost(res.data))
   }, [id])

   return (

      <div>
         {post && (
            <>
               <h1>{post.title}</h1>
               <p>{post.body}</p>
               <span>Author: {post.user.name}</span>
            </>
         )}

      </div>
   )
}

export default PostPage
