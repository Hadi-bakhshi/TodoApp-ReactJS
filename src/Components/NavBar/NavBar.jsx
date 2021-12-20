import Select from "react-select";
import Typewriter from "typewriter-effect";
import "./NavBar.css";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];
const NavBar = ({ onCompletedTodos, onChange, selectedOption }) => {

  if (!onCompletedTodos)
    return (
      <div className="navbartitle">
        <Typewriter
          options={{
            strings: [
              "It seems that you are done",
              "or",
              "Set your daily tasks to do",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    );
  return (
    <header>
      <span>{onCompletedTodos}</span> <h2> Tasks To Do</h2>
      <Select 
        value={selectedOption}
        onChange={onChange}
        options={options}
        className="select"
      />
    </header>
  );
};

export default NavBar;
