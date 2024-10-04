import React, { useContext } from 'react';
import { Context } from './TodoContext';

const TodoItem = ({ item, index, handleUpdateClick, handleMoreBtnClick }) => {
  const { todos, setTodos } = useContext(Context);

  function handleDeleteBtnClick(id) {
    const deleteIndex = todos.findIndex(item => item.id === id);
    todos.splice(deleteIndex, 1);
    setTodos([...todos]);
  }

  return (
    <li className='p-2 rounded-md bg-white flex items-center justify-between'>
      <div className='flex items-center'>
        <span>{index + 1}.</span>
        <strong>{item.value}</strong>
      </div>
      <div className='flex space-x-2'>
        <button 
          id={item.id} 
          onClick={handleUpdateClick} 
          className='p-2 rounded-md font-semibold bg-blue-600 text-white'>
          Update
        </button>
        <button 
          onClick={() => handleDeleteBtnClick(item.id)} 
          className='p-2 rounded-md font-semibold bg-red-600 text-white'>
          Delete
        </button>
        <button 
          id={item.id} 
          onClick={handleMoreBtnClick} 
          className='p-2 rounded-md font-semibold bg-green-600 text-white'>
          More
        </button>
      </div>
    </li>
  );
};

export default TodoItem;