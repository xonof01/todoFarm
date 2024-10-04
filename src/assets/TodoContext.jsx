import { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); 

  return (
    <Context.Provider value={{ todos, setTodos }}>
      {children}
    </Context.Provider>
  );
};