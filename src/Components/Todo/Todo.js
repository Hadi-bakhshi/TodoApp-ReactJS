import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import './Todo.css'

const Todo = ({ todo, onComplete, onEdit, onDelete }) => {
  return (
    <div>
      <div className="todo">
        <div  className={`todoText ${todo.isCompleted ? "completed" : ""} `}>{todo.text}</div>
        <div className="btnContainer">
          <input
           className="taskCheckbox"
           value=""
           name="taskcheck"
            onClick={onComplete}
            type="checkbox"
          />
          <button className="button edit" onClick={onEdit}>
            <BiEdit />
          </button>
          <button className="button remove" onClick={onDelete}>
            <BiTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
