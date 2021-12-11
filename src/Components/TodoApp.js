import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoInput) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: todoInput,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList />
    </div>
  );
};

export default TodoApp;