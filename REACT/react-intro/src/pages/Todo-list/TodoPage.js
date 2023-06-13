
import React from 'react'
import { useState } from 'react'
import './todoList.css'


const TodoPage = () => {
   const year = new Date().getFullYear();
   const month = new Date().getMonth() + 1;
   const day = new Date().getDate();

   const todoListData = [
      {
         id: 1,
         date: '2023-06-11',
         title: 'Todo Page',
         description: 'Sukurti todo listą. Liste turi atsivaizduoti: užduoties pavadinimas, sukūrimo data, aprašymas, bei iki kada reikia atlikti užduoti. Turi auromatiškai sugeneruoti užduoties id',
         dueDate: '2023-07-10'
      },
      {
         id: 2,
         date: '2023-06-11',
         title: 'Task 2',
         description: 'Description 2',
         dueDate: '2023-06-29'
      }
   ]

   const [todoList, setTodoList] = useState(todoListData);
   const [newTask, setNewTask] = useState('');

   const newTaskHandler = (event) => {
      event.preventDefault();

      setTodoList(prevState => {

         const newTodoTask = {
            title: newTask,
            date: `${year}-${month}-${day}`
         };

         const newState = [newTodoTask, ...prevState];
         return newState;
      })
      setNewTask('')
   }

   const inputHandler = (event) => {
      setNewTask(event.target.value)
   }

   return (
      <div>
         <form onSubmit={newTaskHandler}>
            <label htmlFor="new-task">Enter new task:</label>
            <input type="text" name='new-task' id='new-task' value={newTask} onChange={inputHandler} />

            <button className='btn'>Add task</button>
         </form>
         <ul className='todo-list'>
            {todoList.map((item, index) => (
               <li className='todo-list-element' key={index}>{item.title}, {item.date}</li>
            ))}
         </ul>

      </div>
   )
}



export default TodoPage
