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

  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const newTodos = { ...todos[index] };
    newTodos.isCompleted = !newTodos.isCompleted;
    const newTodosList = [...todos];
    newTodosList[index] = newTodos;
    setTodos(newTodosList);
  };

  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onComplete={completeTodo} />
    </div>
  );
};

export default TodoApp;
