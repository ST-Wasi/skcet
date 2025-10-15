import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { useState } from "react";
import { createContext } from "react";
export const GlobalContext = createContext();

function App() {
  const [name, setName] = useState("Wasi");
  return (
    <GlobalContext.Provider
      value={{
        name: "Wasi",
        setName: setName
      }}
    >
      <Button />
    </GlobalContext.Provider>
  );
}

export default App;


// 1. Create a TodoListManager.js File inside src/components
// 2. Render that file inside App.js file
// 3. You are not allowed to use useState() hook in TodoListManager.js File
// 4. Create all the required states wih the help of useState() in App.js File and Pass it inside context and use inside TodoListManager.js file with the help of useContext() Hook
