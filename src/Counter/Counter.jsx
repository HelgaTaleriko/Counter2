import React, {useState} from "react";
import {CounterDisplay} from "./CounterDisplay"
import {CounterButtons} from  "./CounterButtons"

export const Counter = (props) => {
    const {initial=0, step=1}=props
    const [counter,setCounter]=useState(initial)
    const addOne = ()=>{
        setCounter(counter+step)
    }
    const minusOne = ()=>{
        setCounter(counter-step)
    }
    return(
        <div>
            <CounterDisplay value={counter}/>
            <CounterButtons addOne={addOne} minusOne={minusOne}/>
        </div>
    )
}