import React, { useState } from "react";
import classes from "./Counter.module.css";

const Counter = (props) => {
  const [currentValue, setCurrentValue] = useState(0);

  const handleDecrease = () => {
    setCurrentValue(currentValue - props.incrementBy);
  };

  const handleClear = () => {
    setCurrentValue(0);
  };

  const handleIncrease = () => {
    setCurrentValue(currentValue + props.incrementBy);
  };

  return (
    <div>
      <h2>Check out how our counter works</h2>
      <p>This one increments by {props.incrementBy}</p>
      <div className={classes.wrapper}>
        <div
          className={classes.value}
          style={
            currentValue === 0
              ? { color: "yellow" }
              : currentValue < 0
              ? { color: "red" }
              : { color: "green" }
          }
        >
          {currentValue}
        </div>
        <div className={classes.btnContainer}>
          <button className={classes.decrease} onClick={handleDecrease}>
            -{props.incrementBy}
          </button>
          <button className={classes.clear} onClick={handleClear}>
            clear
          </button>
          <button className={classes.increase} onClick={handleIncrease}>
            +{props.incrementBy}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
