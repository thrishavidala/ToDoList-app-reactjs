import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
function Todo({task,deleteTodo,editTodo,toggleComplete}) {
  return (
    <div className='Todo'>
      <p onClick={()=>toggleComplete(task.id) } className={`${task.completed ?'done':""}`}>{task.task}</p>
      <div>
      <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}></FontAwesomeIcon>
        
      </div>
    </div>
  )
}

export default Todo