import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("All");

  useEffect(() => {
    filteredTodos(status);
  }, [todos, status]);

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

  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const selectHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  return (
    <div className="container">
      <NavBar
        onCompletedTodos={todos.filter((t) => !t.isCompleted).length}
        onSelect={selectHandler}
        status={status}
      />
      <TodoForm addTodoHandler={addTodo} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
