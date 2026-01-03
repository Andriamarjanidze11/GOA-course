import React from "react";


const App = () => {
  const handleClick = () => {
    return alert('Hello!');
  }

  return <button onClick={handleClick}>Click</button>
  

}

export default App;