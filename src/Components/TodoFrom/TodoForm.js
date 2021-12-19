import { useEffect, useState } from "react";
import { useRef } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import "./todoform.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const TodoForm = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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
        style={{
          backgroundColor: darkMode ? "#666E7E" : "",
          color: darkMode && "white",
        
        }}
          placeholder={props.edit ? "Update Todo ..." : "Add Todo..."}
          type="text"
          value={todoInput}
          onChange={changeHandler}
          ref={inputRef}
        />
        <button
          style={{
            backgroundColor: darkMode ? "transparent" : "",
            color: darkMode && "#ccc",
          }}
          className={`button ${props.edit ? "updateTodo" : "addTodo"}`}
          type="submit"
        >
          {props.edit ? "Update" : <BsFillPlusCircleFill />}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
