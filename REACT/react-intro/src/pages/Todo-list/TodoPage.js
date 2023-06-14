/*
TODO UŽDUOTIS:
1. Sukurti 4 komponentus:
1.1. TodoPage (pradinis komponentas)
1.2. TodoForm (forma)
1.3. TodoList (visų todo užduočių sąrašas)
1.4. TodoItem (vienos todo užduoties komponentas)
 
2. Kiekviena sukurta užduotis turi turėti:
2.1. Unikalų id (prisideda automatiškai)
2.2. Pavadinimą
2.3. Aprašymą
2.4. Sukūrimo datą (prisideda automatiškai)
2.5. Done (nurodo ar užduotis jau atlikta)
2.6. Data iki kada užduotį reikia atlikti

3. Atvaizduoti kiek liko laiko iki užduoties deadline.
4. Pridėti galimybę pažymėti užduotį kaip atliktą.

5. Pridėti galimybę ištrinti užduotį.
6. Pridėti galimybę redaguoti užduotį.

6.1. Redaguojant užduotį id ir sukūrimo data lieka tokie patys.
6.2. Redaguojant užduotį pridėti naują property, kuri nurodo kada buvo modifikuota užduotis. Redagavimo datą atvaizduoti ekrane.

7. Padaryti jog atliktos užduotys būtų atvaizduojamos pabaigoje, o dar neatliktos - pradžioje.
*/

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
         description: 'Description 1',
         done: true,
         dueDate: '2023-07-10'
      },
      {
         id: 2,
         date: '2023-06-11',
         title: 'Task 2',
         description: 'Description 2',
         done: false,
         dueDate: '2023-06-29'
      }
   ]

   const [todoList, setTodoList] = useState(todoListData);
   const [newTask, setNewTask] = useState('');

   const [newTitle, setNewTitle] = useState('')
   const [newDescription, setNewDescription] = useState('');
   const [newdate, setNewDate] = useState('');


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



   const textAreaHandler = (event) => {
      console.log(event.target.value)
   }

   const taskChangeHandler = () => {
      console.log('veikia');
   }

   const taskDoneHandler = (id) => {
      console.log(id);
   }

   return (
      <div>
         <h1>Todos:</h1>
         <form onSubmit={newTaskHandler}>
            <div className='form-control'>
               <label htmlFor="todo-title">Title:</label>
               <input type="text" name='yodo-title' id='title' value={newTitle} />
            </div>
            <div className='form-control'>
               <label htmlFor="todo-description">Description:</label>
               <textarea name="todo-description" id="description" cols="60" rows="4" value={newDescription}></textarea>
            </div>
            <div className='form-control'>
               <label htmlFor="due-date">Due date:</label>
               <input type="date" name='todo-due-date' id='due-date' />
            </div>
         </form>

         <div className='todo-list-wrapper'>
            <ul className='todo-list'>
               {todoList && todoList.map((item, index) => (
                  <li key={index}>

                     <h3 className='todo-item'>{item.title}, {item.id}</h3>

                     <span className='created-data'>{item.date}</span><br />

                     <textarea value={newDescription} onChange={textAreaHandler} name="" id="" cols="60" rows="4">Here is task description</textarea>

                     <span>{item.dueDate}</span>

                     <div className='form-control'>
                        <label htmlFor="done">Task done</label>
                        <input type="checkbox" checked={item.done} onChange={taskChangeHandler} name='done' id='done' />
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}



export default TodoPage
