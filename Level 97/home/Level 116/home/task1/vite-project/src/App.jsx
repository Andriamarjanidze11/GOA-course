import React, { useRef } from "react";
import CounterButton from "./CounterButton";

function App() {
  const counterRef = useRef(0);

  const handleIncrement = () => {
    counterRef.current = counterRef.current + 1;
    alert(counterRef.current);
  };

  return (
    <div>
      <CounterButton increment={handleIncrement} />
    </div>
  );
}

export default App;
