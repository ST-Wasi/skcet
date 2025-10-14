import logo from "./logo.svg";
import "./App.css";

// Given an array:
// copy the value of numbers in newnumbers
// let numbers = [1, 2, 3, 4, 5];
// let newnumbers = [...numbers];
// console.log("✌️newnumbers --->", newnumbers);

// given an object User , copy its value to updateduser and add the age key as well in updated user and log it
let user = { name: "Wasi", age: 99 };
let updatedUser = { ...user, age: 100, name: "Ashish", address: "MP" };
console.log("✌️updatedUser --->", updatedUser);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
