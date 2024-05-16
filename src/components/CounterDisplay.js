import React, { useContext } from 'react';
import CounterContext from './CounterContext';

function CounterDisplay() {
  const { count } = useContext(CounterContext);
  return <p>You clicked {count} times</p>;
}

export default CounterDisplay;
