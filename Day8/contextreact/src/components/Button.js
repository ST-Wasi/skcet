import React, { useContext } from "react";
import Heading from "./Heading";
import { GlobalContext } from "../App";

// here we cannot call hooks
function Button() {
  let context = useContext(GlobalContext)
  return (
    <div>
      <h1>Button {context.name}</h1>
    </div>
  );
}

export default Button;
