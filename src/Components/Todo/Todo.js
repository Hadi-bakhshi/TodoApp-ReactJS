import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import "./Todo.css";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const Todo = ({ todo, onComplete, onEdit, onDelete }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="todo-container">
      <div className="todo">
        <div className={`todoText ${todo.isCompleted ? "completed" : ""} `}>
          {todo.text}
        </div>
        <div className="btnContainer">
          <input
            className="taskCheckbox"
            value=""
            name="taskcheck"
            onClick={onComplete}
            type="checkbox"
          />
          <button
            style={{
              backgroundColor: darkMode ? "transparent" : "",
              color: darkMode && "#ccc",
            }}
            className="button edit"
            onClick={onEdit}
          >
            <BiEdit />
          </button>
          <button
            style={{
              backgroundColor: darkMode ? "transparent" : "",
              color: darkMode && "#ccc",
            }}
            className="button remove"
            onClick={onDelete}
          >
            <BiTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
