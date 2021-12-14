import { useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoInput) => {
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

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const newTodos = { ...todos[index] };
    newTodos.text = newValue;
    const newTodosList = [...todos];
    newTodosList[index] = newTodos;
    setTodos(newTodosList);
  };

  return (
    <div className="container">
      <NavBar onCompletedTodos={todos.filter((t) => !t.isCompleted).length} />
      <TodoForm addTodoHandler={addTodo} />
      <TodoList
        todos={todos}
        onComplete={completeTodo}
        onDelete={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
