import React from 'react'
import { useState } from 'react'
function EditTodoForm({editTask,task1}) {
  const[value,setValue]=useState(task1.task);
  const handleSubmit=(e)=>{
    e.preventDefault();
    editTask(value,task1.id);
    setValue("");
  }
  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Update Task' onChange={(e)=>setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Update Task</button>
      </form>
    </div>
  )
}

export default EditTodoForm