import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { CounterButtons } from "./CounterButtons";

export const Counter = (props) => {
  const { initial = 0, step = 1 } = props;
  const [counter, setCounter] = useState(initial);
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    if (counter > 7) {
      setIsDisabled(true);
    }
    if (counter <= 7) {
      setIsDisabled(false);
    }

    // setIsDisabled(true);

  }, [counter, setIsDisabled]);
  const addOne = () => {
    setCounter(counter + step);
  };
  const minusOne = () => {
    setCounter(counter - step);
  };
  return (
    <div>
      <CounterDisplay value={counter} />
      <CounterButtons addOne={addOne} minusOne={minusOne} isDisabled={isDisabled}/>
    </div>
  );
};
