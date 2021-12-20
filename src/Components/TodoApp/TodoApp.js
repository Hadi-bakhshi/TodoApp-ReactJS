import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import TodoForm from "../TodoFrom/TodoForm";
import TodoList from "../TodoList/TodoList";
import './TodoApp.css'
import { ThemeContext } from "../../context";
import { useContext } from "react";

const TodoApp = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

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

  const filterTodos = (selectedOption) => {
    switch (selectedOption) {
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
    setSelectedOption(e);
      filterTodos(e.value);
  }

  return (
    <div style={{
      backgroundColor: darkMode ? "#555559" : "",
      color: darkMode && "white",
      border: darkMode && "1px solid #555559",
    }} className="container">
      <NavBar 
        onCompletedTodos={todos.filter((t) => !t.isCompleted).length}
        onChange={selectHandler}
        selectedOption={selectedOption}
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
