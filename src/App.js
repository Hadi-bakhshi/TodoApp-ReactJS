import "./App.css";
import TodoApp from "./Components/TodoApp/TodoApp";
import SideBar from "./Components/SideBar/SideBar";
import { ThemeContext } from "./context";
import { useContext } from "react";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
      className="App"
    >
      <SideBar />
      <TodoApp />
    </div>
  );
}

export default App;
