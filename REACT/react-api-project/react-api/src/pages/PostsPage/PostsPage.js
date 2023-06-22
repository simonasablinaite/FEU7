import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../style/button.css'

import styled from 'styled-components'

const Button = styled.button`
background-color: #74c002;
border: 2px solid hotpink;
padding: 10px;
border-radius: 5px;
color: white;
cursor: pointer;

&:hover {
   background-color: #2dd22d;
   border: 2px solid #bb0b28;
   font-size: 15px;

}
`;

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
         <Button onClick={createPost}>Get Post</Button>

         <div className='posts-wrapper'>
            <button className='post-btn'><Link className='post-link' to='/json/create-post'>Create new post</Link></button>
            <ul>
               {posts.map(post => (
                  <li key={post.id}>
                     <Link to={'/json/posts/' + post.id}>{post.title}
                     </Link>
                  </li>
               ))}
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
