import React, { useState } from 'react';

const Fibonacci = () => {
  const [count, setCount] = useState(10);
  const [sequence, setSequence] = useState([]);

  const calculateFibonacci = (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  };

  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  const handleGenerate = () => {
    if (count > 0) {
      setSequence(calculateFibonacci(count));
    } else {
      setSequence([]);
    }
  };

  return (
    <div className="container">
      <h2>Fibonacci Sequence Generator</h2>
      <div>
        <label>Number of terms:</label>
        <input
          type="number"
          value={count}
          onChange={handleChange}
          min="1"
          max="100"
          style={{ marginLeft: '10px', width: '60px' }}
        />
        <button onClick={handleGenerate} style={{ marginLeft: '10px' }}>
          Generate
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {sequence.length > 0 && (
          <div>
            <h3>Sequence:</h3>
            <p>{sequence.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fibonacci;
