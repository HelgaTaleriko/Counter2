import React from "react";

export const CounterButtons = (props) => {
    const {addOne, minusOne} = props
    return (
        <div>
            <button onClick={addOne}>Увеличить</button>
            <button onClick={minusOne}>Уменьшить</button>
        </div>
    );


}