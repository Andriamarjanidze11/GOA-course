import { use } from 'react'
import { useState } from 'react'


function App() {
  const [call, setCall] = useState(0)

  function reverse(x, y){
    return x-y
  }

  function callFunc(){
    const useFunc = reverse(22,11)
    setCall(useFunc)
  }

  return (
    <>
      <h1>{call}</h1>
      <button onClick={callFunc}>call</button>
    </>
  )
}

export default App
