import React, { useContext, useState } from 'react'
import TodoItem from './TodoItem'
import Modal from './Modal.jsx'
import { Context } from './TodoContext'

const   TodoList = () => {
  const { todos, setTodos } = useContext(Context)
  const [updateModal, setUpdateModal] = useState(false)
  const [updateValue, setUpdateValue] = useState("")
  const [updateId, setUpdateId] = useState(0)

  function handleUpdateClick(e) {
    setUpdateModal(true)
    const updateData = todos.find(value => value.id == e.target.id)
    setUpdateValue(updateData.value)
    setUpdateId(e.target.id)
  }

  function handleUpdateSubmit(e) {
    e.preventDefault()
    const updateData = todos.find(value => value.id == updateId)
    updateData.value = updateValue
    setUpdateModal(false)
    setTodos([...todos])
  }

  const [moreModal, setMoreModal] = useState(false)
  const [moreData, setMoreData] = useState({})
  function handleMoreBtnClick(e) {
    const cilicedId =e.target.id
    setMoreModal(true)
    const finded0bj= todos.find(item => item.id == clickedId)
    setMoreData(finded0bj)
  }

  function handleMoreBtnClick(e) {
    const clicedId = e.target.id;
    setMoreModal(true);
    const findedObj = todos.find(item => item.id == clicedId);
    setMoreData(findedObj);
  }

  return (
    <>
      <ul className='w-[600px] space-y-5 p-5 rounded-md bg-slate-400 mx-auto mt-5'>
        {todos.map((item, index) => 
          <TodoItem 
            handleMoreBtnClick={handleMoreBtnClick} 
            handleUpdateClick={handleUpdateClick} 
            index={index} 
            item={item} 
            key={item.id} 
          />
        )}
      </ul>
      <Modal openModal={updateModal} setOpenModal={setUpdateModal}>
        <form onSubmit={handleUpdateSubmit} className='p-5 rounded-md bg-slate-400 mx-auto mt-5' autoComplete="off">
          <input 
            onChange={(e) => setUpdateValue(e.target.value)} 
            value={updateValue} 
            required 
            className='p-2 rounded-tl-md rounded-bl-md w-[80%] outline-none' 
            type="text" 
            placeholder='Update your todo' 
          />
          <button 
            type='submit' 
            className='w-[20%] bg-green-600 duration-300 hover:opacity-75 text-white font-semibold p-2 rounded-tr-md rounded-br-md'>
            Update
          </button>
        </form>
      </Modal>
      <Modal>
        <h2 className='text-center font-bold text-[30px]'>{moreData.value}</h2>
      </Modal>
    </>
  );
};


export default TodoList
