import React, { useState } from 'react'

const TodoForm = ({ onNewTask }) => {

   const [newTitle, setNewTitle] = useState('')
   const [newDescription, setNewDescription] = useState('');
   const [newDate, setNewDate] = useState('');

   const titleInputHandler = event => setNewTitle(event.target.value);
   const descriptionInputHandler = event => setNewDescription(event.target.value);
   const dateInputHandler = event => setNewDate(event.target.value);

   const newTaskHandler = (event) => {
      event.preventDefault();

      const year = new Date().getFullYear();
      const month = (new Date().getMonth() + 1).toString().padStart(2, '0'); // nurodau, kad menuo butinai turi buti dvizenklis skaicius. Jei yra vienzenklis - pridetu 0 priekyje-
      const day = (new Date().getDate()).toString().padStart(2, '0');

      const currentDate = `${year}-${month}-${day}`

      const newTodoTask = {
         id: Math.random().toFixed(2),
         title: newTitle,
         date: currentDate,
         description: newDescription,
         done: false,
         dueDate: newDate

      }

      onNewTask(newTodoTask)
      setNewTitle('');
      setNewDescription('');
      setNewDate('');
   }

   return (
      <form onSubmit={newTaskHandler}>
         <div className='form-control'>
            <label htmlFor="todo-title">Title:</label>
            <input type="text" name='yodo-title' id='title' value={newTitle} onChange={titleInputHandler} />
         </div>
         <div className='form-control'>
            <label htmlFor="todo-description">Description:</label>
            <textarea name="todo-description" id="description" cols="60" rows="4" value={newDescription} onChange={descriptionInputHandler}></textarea>
         </div>
         <div className='form-control'>
            <label htmlFor="due-date">Due date:</label>
            <input type="date" name='todo-due-date' id='due-date' value={newDate} onChange={dateInputHandler} />
         </div>

         <div className='form-control'>
            <button className='btn todo-btn'>Add task</button>

         </div>
      </form >
   )
}

export default TodoForm
