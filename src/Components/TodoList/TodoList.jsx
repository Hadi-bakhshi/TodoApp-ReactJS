import "./TodoList.css";
import Todo from "../Todo/Todo";
import { useState } from "react";
import TodoForm from "../TodoFrom/TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text:"", isCompleted: false });

  const editTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text:"", isCompleted: false });
  };

  const renderTodos = () => {
    if (todos.length === 0) return;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };
  return (
    <div className="taskContainer">{edit.id ? (<TodoForm addTodoHandler={editTodo} edit={edit} />):(renderTodos())}</div>
  );
};

export default TodoList;
