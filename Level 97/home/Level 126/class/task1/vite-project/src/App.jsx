import React from "react"


function App() {

  return (
    <div> 

      <div className="flex justify-center items-center gap-5">

      <button className="bg-blue-500 hover:bg-red-600 focus:outline-5 focus:outline-stone-500 active:bg-orange-700 ">
        Save changes
      </button>

      <button className="bg-gray-500 hover:bg-amber-600 focus:outline-2 focus:outline-violet-500 active:bg-blue-700">
        Save changes
      </button>

      <button className="bg-amber-500 hover:bg-stone-600 focus:outline-7 focus:outline-red-500 active:bg-green-700">
        Save changes
      </button>
      </div>
    </div>
  )
}

export default App
