import React from 'react'

const TodoList = ({ todoList }) => {
   return (

      <div className='todo-list-wrapper'>
         <ul className='todo-list'>
            {todoList.map((item, index) => (
               <li key={index}>

                  <h3 className='todo-item'>{item.title}, {item.id}</h3>
                  <span className='created-data'>{item.date}</span><br />
                  {/* <textarea value={newDescription} onChange={textAreaHandler} name="" id="" cols="60" rows="4">Here is task description</textarea> */}
                  <span>{item.dueDate}</span>
                  <div className='form-control'>
                     <label htmlFor="done">Task done</label>
                     {/* <input type="checkbox" checked={item.done} onChange={taskChangeHandler} name='done' id='done' /> */}
                  </div>
               </li>
            ))}
         </ul>
      </div>

   )
}

export default TodoList
