import React from 'react'

const TodoItem = ({ index, item }) => {

   return (
      <div className='todo-item'>
         <li>

            <h3 className='todo-item'>{item.title}, {item.id}</h3>
            <span className='created-data'>{item.date}</span><br />
            {/* <textarea value={newDescription} onChange={textAreaHandler} name="" id="" cols="60" rows="4">Here is task description</textarea> */}
            <span>{item.dueDate}</span>
            <div className='form-control'>
               <label htmlFor={`done-${item.id}`}>Task done</label>
               <input
                  type="checkbox"
                  defaultChecked={item.done}
                  onChange={console.log((item.id))}
                  name='done'
                  id={`done-${index}`} />
            </div>
         </li>
      </div>
   )
}

export default TodoItem
