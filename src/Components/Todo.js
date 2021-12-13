const Todo = ({ todo, onComplete, onEdit, onDelete }) => {
  return (
    <div>
      <div className="todo">
        <div
          onClick={onComplete}
          className={todo.isCompleted ? "completed" : ""}
        >
          {todo.text}
        </div>
        <div>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
