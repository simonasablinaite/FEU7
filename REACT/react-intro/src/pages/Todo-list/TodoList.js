import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todoList, index }) => {
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
