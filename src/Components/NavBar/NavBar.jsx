import Select from "react-select";
import './NavBar.css';

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];
const NavBar = ({ onCompletedTodos, onChange, selectedOption }) => {
  if (!onCompletedTodos) return <h2>Set your daily todos</h2>;
  return (
    <header>
      <span>{onCompletedTodos}</span> <h2> is not completed</h2>
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
