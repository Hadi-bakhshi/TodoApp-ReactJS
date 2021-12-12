const Todo = ({ todo, onComplete, onEdit }) => {
  return (
    <div>
      <div className="todo">
        <div className={todo.isCompleted ? "completed" : ""}>{todo.text}</div>
        <div>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onComplete}>Complete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
