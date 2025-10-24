import { useState } from "react"

useState

function App() {
  const [num, usenum] = useState()

  function result(e) {
    e.preventDefault()

    console.log(e.target.inp.value)

    if(e.target.inp.value === ''){
      console.log('Please type something in the input:)')
    }
  }

  return (
    <>
      <form onSubmit={result}>
        <input type="text" name="inp"/>
        <input type="submit" />
      </form>
    </>
  )
}

export default App
