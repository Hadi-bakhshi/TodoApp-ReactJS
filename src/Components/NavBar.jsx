const NavBar = ({ onCompletedTodos }) => {
  return (
    <header>
      {onCompletedTodos ? (
        <>
          <span>{onCompletedTodos}</span>
          <h2> is not completed</h2>
        </>
      ) : (
        <h2>Set your daily todos</h2>
      )}
    </header>
  );
};

export default NavBar;
