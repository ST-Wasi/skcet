import logo from "./logo.svg";
import "./App.css";
import TodoListManager from "./components/TodoListManager";
import { createContext, useState } from "react";

export const TodoContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState(["Go to gym"]);

  let valueObj = {
    inputValue: inputValue,
    setInputValue: setInputValue,
    list: list,
    setList: setList,
  };
  return (
    <TodoContext.Provider value={valueObj}>
      <TodoListManager />;
    </TodoContext.Provider>
  );
}

export default App;
