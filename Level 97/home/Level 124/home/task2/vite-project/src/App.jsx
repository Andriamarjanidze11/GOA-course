import React from "react"

function App() {

  return (
    <div>
      {/* flex */}

      <div className="flex flex-col gap-2.5">
        <button className="bg-blue-500 size-60 basis-64">Click Me!</button>

        <button className="bg-red-500 size 60 basis-80">Click Me!</button>

        <p className="text-sky-400 underline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima earum praesentium nemo odit eveniet deleniti quisquam aperiam dolore, natus maiores expedita doloribus, quibusdam provident. Sed nemo obcaecati eos laudantium alias!</p>

      </div>

      {/* grid */}

      <div className="grid grid-cols-4 gap-4">

        <button className="bg-green-400 size-50">Click Me!</button>

        <button className="bg-orange-600 size-30">Click Me!</button>

        <button className="bg-purple-600 size-45">Click Me!</button>

      </div>

    </div>
  )
}

export default App
