import React from "react";
import { useContext } from "react";
import { TodoContext } from "../App";

function TodoListManager() {
  let context = useContext(TodoContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Add Task"
        onChange={(event) => {
          context.setInputValue(event.target.value);
        }}
      />
      <button onClick={()=>{
        context.setList([...context.list, context.inputValue])
      }}>Add Item</button>

      <ol>
        {context.list.map((item) => {
          return <li>{item}</li>;
        })}
      </ol>
    </div>
  );
}

export default TodoListManager;
