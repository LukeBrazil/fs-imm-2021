import React, { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <h1>Menu</h1>
      <button onClick={handleIncrement}>Increment</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
