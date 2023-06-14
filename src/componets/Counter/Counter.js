import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./../../Redux/Actions/counterAcutions";
import "./counter.css";

const Counter = () => {
  const count = useSelector((state) => state.count.count);
  const [number, setNumber] = useState("");
  console.log(number);
  const dispatch = useDispatch();

  return (
    <center className="counter-container">
      <h2 className="counter-value">Counter: {count}</h2>
      <input
          type="number"
          value={number}
          placeholder="Enter number"
          onChange={(e) => setNumber(e.target.value)}
        />
      <div className="counter-buttons">
        
        <button
          className="counter-button"
          onClick={() => {
            dispatch(increase(Number(number)));
            setNumber("");
          }}
        >
          Increment
        </button>
        <button
          className="counter-button"
          onClick={() => {
            dispatch(decrease(Number(number)));
            setNumber("");
          }}
        >
          Decrement
        </button>
      </div>
    </center>
  );
};

export default Counter;
