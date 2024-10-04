import "./index.css";
import TodoForm from "./assets/TodoForm";
import TodoList from "./assets/TodoLIst"; // Corrected typo in the import (LIst -> List)
import { TodoContext } from "./assets/TodoContext"; // Import the TodoContext provider

function App() {
  return (
    <TodoContext>
      <TodoForm />
      <TodoList />
    </TodoContext>
  );
}

export default App;