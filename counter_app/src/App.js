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
    <div>
      <h1>Counter: {num}</h1>
      {/* <button onClick={() => setNum(num + 1)}>Increment</button>
      <button onClick={() => setNum(num - 1)}>Decrement</button> */}

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
