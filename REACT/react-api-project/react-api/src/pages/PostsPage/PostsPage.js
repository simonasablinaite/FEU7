import React, { useEffect, useState } from 'react'

const PostsPage = () => {

   const [posts, setPosts] = useState();

   const createPost = () => {
      fetch('http://localhost:3000/posts', {
         method: 'POST',
         body: JSON.stringify({
            title: 'PAVADINIMAS',
            body: 'APRASYMAS',
            userId: 1,
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => response.json())
         .then((json) => console.log(json)); // gaunamas atsakymas is backendo

      fetch('https://jsonplaceholder.typicode.com/posts') // paleidziamas dar vienas fetchas gauti visiems post'ams
         .then(res => res.json())
         .then(data => console.log(data))
   }
   useEffect(() => {
      fetch(`http://localhost:3000/posts`)
         .then(res => res.json())
         .then(data => {
            console.log(data);
         })
   }, [])

   return (
      <div>
         <h1>Posts:</h1>
         <button onClick={createPost}>Create Post</button>
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
