import React, { useState } from "react";
import { useRef } from "react";

function Form() {
  let fullnameInputRef = useRef();
  const [list, setList] = useState([]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let inputValue = fullnameInputRef.current.value;
          setList([...list, inputValue])
        }}
      >
        <input placeholder="Enter Task" type="text" ref={fullnameInputRef} />


        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;

// <ul> --> Un-Ordered List
// <ol> --> Ordered List
// <li> --> List Item
// State Type Array
