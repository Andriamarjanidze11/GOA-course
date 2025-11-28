import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from "./Comp1"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Comp1 />
        </div>
    </>
  )
}

export default App
