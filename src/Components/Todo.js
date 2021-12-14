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
          <button className="button" onClick={onEdit}>Edit</button>
          <button className="button remove" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
