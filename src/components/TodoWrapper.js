import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import TodoForm from './TodoForm'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

function TodoWrapper() {
  const[todos,setTodos]=useState([]);
  const addTodo=(todo)=>{
    setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
  }
  const deleteTodo=(id)=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }
  const editTodo=(id)=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo))
  }
  const toggleComplete=(id)=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
  }
  const editTask=(task,id)=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo,task,isEditing:!todo.isEditing}:todo))
  }
  return (
    <div className='TodoWrapper'>
    <TodoForm addTodo={addTodo}/>
    {todos.map((todo,index)=>(
      todo.isEditing?(
        <EditTodoForm task1={todo} editTask={editTask}/>
      ):(
      <Todo task={todo} key={index}  deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete}/>)
    ))}
   
    </div>
  )
}

export default TodoWrapper