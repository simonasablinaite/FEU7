import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const PostsPage = () => {

   const [posts, setPosts] = useState([]);

   const createPost = () => {
      fetch(`http://localhost:3000/posts`)
         .then(res => res.json())
         .then(postsData => {
            setPosts(postsData);
         });
   }
   useEffect(() => {

   }, [])

   return (
      <div>
         <h1>Posts:</h1>
         <button onClick={createPost}>Create Post</button>

         <div className='posts-wrapper'>
            <ul>
               {posts.map(post => <li key={post.id}><Link to={'/json/posts/' + post.id}>{post.title}</Link></li>)}
            </ul>
         </div>
      </div>
   )
}

export default PostsPage


/*
CRUD: siuo atveju kalba eina apie API, t.y. kaip bendrausime ir ka su juo galime padaryti

CREATE (post metodas - duomenu sukurimui)
READ (get metodas - duomenu paemimui (galima paimti kazka viena, arba visus duomenis))
UPDARE (put/patch metodas - duomenims redaguoti)
DELETE (delete metodas - duomenims istrinti)
*/
