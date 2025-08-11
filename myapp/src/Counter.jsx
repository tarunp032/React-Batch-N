import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);

  const increment = () => {
    setCount(count + 1);
  };

  console.log(`>>>>>>count`, count);
  console.log(`>>>>>>setCount`, setCount);

  const decrement = () => {
    if (count === 0) {
      alert("Value is 0, you can't go in negative!");
      return;
    }
    setCount(count - 1);
  };
  const multiply = () => {
    setCount(count * 2);
  };
  const division = () => {
    setCount(count / 2);
  };
  const modulus = () => {
    setCount(count % 5);
  };
  return (
    <div>
      <h2>counter : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button
        onClick={decrement}
        style={{ backgroundColor: count === 0 ? "#ccc" : "" }}
      >
        Decrement
      </button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={division}>Division</button>
      <button onClick={modulus}>Modulus</button>
    </div>
  );
};

export default Counter;
