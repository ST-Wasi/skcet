import React, { useContext } from "react";
import { GlobalContext } from "../App";

function Heading() {
  const context = useContext(GlobalContext);
  return (
    <div>
      <h1>Heading {context.name}</h1>
      <button
        onClick={() => {
          //   setName("Anything");
        }}
      >
        name change
      </button>
    </div>
  );
}

export default Heading;
