import React from "react";

export const CounterButtons = (props) => {
  const { addOne, minusOne, isDisabled } = props;
  return (
    <div>
      <button onClick={addOne} disabled={isDisabled}>
        Увеличить
      </button>
      <button onClick={minusOne}>Уменьшить</button>
    </div>
  );
};
