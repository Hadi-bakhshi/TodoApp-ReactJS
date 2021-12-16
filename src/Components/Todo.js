import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";

const Todo = ({ todo, onComplete, onEdit, onDelete }) => {
  return (
    <div>
      <div className="todo">
        <div
          onClick={onComplete}
          className={`todoText ${todo.isCompleted ? "completed" : ""}`}
        >
          {todo.text}
        </div>
        <div>
          <button
            className="button edit"
            onClick={onEdit}
          >
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
