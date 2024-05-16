import React from "react";
import { CounterProvider } from "./components/CounterContext";
import CounterDisplay from "./components/CounterDisplay";
import CounterButton from "./components/CounterButton";

function App() {
  return (
    <CounterProvider>
      <h1>Counter App</h1>
      <CounterDisplay />
      <CounterButton />
    </CounterProvider>
  );
}

export default App;
