import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todoList, onTaskDone }) => {
   if (!todoList || todoList.length === 0) { // patiktiname ar turime duomenu. Jei duomenu neturime, arba turime tuscia masyva, tada graziname tuscia stringa, kitu atveju - graziname item'a;
      return ''
   }
   return (

      <div className='todo-list-wrapper'>
         <ul className='todo-list'>
            {todoList.map((item, index) => <TodoItem
               item={item}
               key={index}
               index={index}
            />)}
         </ul>
      </div>

   )
}

export default TodoList
