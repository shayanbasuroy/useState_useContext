import React, { useContext } from 'react';
import CounterContext from './CounterContext';

function CounterButton() {
  const { setCount } = useContext(CounterContext);
  return (
    <button onClick={() => setCount(prevCount => prevCount + 1)}>
      Click me
    </button>
  );
}

export default CounterButton;
