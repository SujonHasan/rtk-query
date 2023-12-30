import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';

function TodoList() {

  const [newTodo, setNewTodo] = useState('');

  const newItemSection = <form action="">
    <label htmlFor="new-todo"> Enter a new todo item</label>
    <div className='pr-5'>
      <input type="text" id='new-todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
        placeholder='Enter new todo'
      />
    </div>

    <button className='submit'>
      <FontAwesomeIcon icon={faUpload} />
    </button>

  </form>

  let content; 

  return (
    <main>
      <h1>Todo List</h1>
      {newItemSection}
    </main>
  )
}

export default TodoList