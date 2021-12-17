import "./App.css";
import TodoApp from "./Components/TodoApp/TodoApp";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar/>
      <TodoApp />
    </div>
  );
}

export default App;
