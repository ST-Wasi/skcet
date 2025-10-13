import { useState, useEffect } from "react";

function App2(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Something is updated");
  }, [count == 10]); // componentDidUpdate

  return (
    <div>
      <h1>Hello From Function Component {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update COunt
      </button>
    </div>
  );
}
export default App2;
