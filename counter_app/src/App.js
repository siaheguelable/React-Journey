import { useState } from 'react';
 import logo from './logo.svg';
import './App.css';



function App() {
  const [num,setNum] = useState(0);

  const handleIncrement = () => {
    setNum(num + 1);
  };

  const handleDecrement = () => {
    setNum(num - 1);
  };

  const handleReset = () => {
    setNum(0);
  };

  return (
    <div className="app-container">
      <h1 className="counter-heading">Counter: {num}</h1>
      <div className="button-container">
        <button className="counter-button" onClick={handleIncrement}>Increment</button>
        <button className="counter-button" onClick={handleDecrement}>Decrement</button>
        <button className="counter-button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
