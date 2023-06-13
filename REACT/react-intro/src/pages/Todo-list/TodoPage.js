
import React from 'react'
import { useState } from 'react'


const TodoPage = () => {

   // const todoListData = [
   //    {
   //       id: 1,
   //       date: '2023-06-11',
   //       title: 'Task 1',
   //       description: 'Description 1',
   //       dueDate: '2023-07-10'
   //    },
   //    {
   //       id: 2,
   //       date: '2023-06-11',
   //       title: 'Task 2',
   //       description: 'Description 2',
   //       dueDate: '2023-06-29'
   //    }
   // ]

   const [todoList, setTodoList] = useState([]);
   const [newTask, setNewTask] = useState('');

   const newTaskHandler = (event) => {
      event.preventDefault();

      setTodoList(prevState => {

         const newTodoTask = {
            title: newTask
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

            <button>Add task</button>
         </form>
         <ul>
            {todoList.map((item, index) => (
               <li key={index}>{item.title}</li>
            ))}
         </ul>

      </div>
   )
}



export default TodoPage
