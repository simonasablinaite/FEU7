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
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './todoList.css'


const TodoPage = () => {

   /*
Data galima gauti ir vienoje eiluteje:
const fullDate = new Date().toISOString().splice(0, 10);
   */
   const todoListData = [
      {
         id: 1,
         date: '2023-06-11',
         title: 'Todo Page',
         description: 'Description 1',
         done: false,
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

   const newTaskHandler = (newTodoTask) => {
      console.log(newTodoTask);
      setTodoList(prevState => [newTodoTask, ...prevState])
      setNewTask('')
   }

   const textAreaHandler = (event) => {
      console.log(event.target.value)
   }

   const taskDoneHandler = id => console.log(id);

   return (
      <div>
         <h1>Todos:</h1>
         <TodoForm
            onNewTask={newTaskHandler}
         />

         <TodoList
            todoList={todoList}
         />
      </div>
   )
}



export default TodoPage
