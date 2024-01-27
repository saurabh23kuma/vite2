import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 
export default function CounterApp() {
  return (
    <div className="counter">
    <h1>React Counter</h1>
    <span className="counter__output"></span>
    <div className="btn__container">
      <button className="control__btn">+</button>
      <button className="control__btn">-</button>
      <button className="reset">Reset</button>
    </div>
  </div>
  )
  }
 
 export default function CounterApp() {
  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
  }
 
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
  }