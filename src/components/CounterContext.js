import React, { createContext, useState } from 'react';

// Create the context
const CounterContext = createContext();

// Create a provider component
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterContext;
