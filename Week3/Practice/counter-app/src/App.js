import { useState } from 'react';
import './App.css';

function App() {
  const [cnt, setCnt] = useState(0);

  const increase = () => {
    setCnt((cnt) => cnt + 1);
  };

  const decrease = () => {
    setCnt((cnt) => cnt - 1);
  };

  const reset = () => {
    setCnt(0);
  };

  return (
    <div className = "container">
      <h3 className="title">Counter</h3>
      <div className = "counter">
        <p className="number">{cnt}</p>
        <div className="buttonGroup">
          <button className = "increaseButton" onClick={increase}>
            Increase
          </button>
          <button  className = "decreaseButton" onClick={decrease}>
            Decrease
          </button>
          <button className = "resetButton" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
