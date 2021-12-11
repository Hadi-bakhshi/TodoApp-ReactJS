import { useState } from "react";
const TodoForm = (props) => {
  const [todoInput, setTodoInput] = useState(" ");
  const changeHandler = (e) => {
    setTodoInput(e.target.value);
    console.log(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={todoInput} onChange={changeHandler} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
