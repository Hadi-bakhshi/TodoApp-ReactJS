
const NavBar = ({ onCompletedTodos,onSelect,status}) => {

 

  if (!onCompletedTodos) return <h2>Set your daily todos</h2>;
  return (
    <header>
      <span>{onCompletedTodos}</span> <h2> is not completed</h2>
      <select onChange={onSelect} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </header>
  );
};

export default NavBar;
