import { useEffect, useState } from "react";
import { useRef } from "react";

const TodoForm = (props) => {
  const [todoInput, setTodoInput] = useState(props.edit ? props.edit.text : "");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setTodoInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!todoInput) {
      alert("Please enter a todo");
      return;
    }
    props.addTodoHandler(todoInput);
    setTodoInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <input
          placeholder={props.edit ? "Update Todo ..." : "Add Todo..."}
          type="text"
          value={todoInput}
          onChange={changeHandler}
          ref={inputRef}
        />
        <button className={`button ${props.edit ? "updateTodo" : "addTodo"}`} type="submit">{props.edit ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default TodoForm;
