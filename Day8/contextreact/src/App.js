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
        name: "Anything",
      }}
    >
      <Button />
    </GlobalContext.Provider>
  );
}

export default App;
