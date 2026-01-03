import React from "react"


function App() {

  return (
    <div className="h-screen bg-blue-800">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-[65px] font-bold text-blue-500">Tailwind CSS</h1>

        <p className="text-blue-500">Build designs faster than ever before.</p>
      </div>

      <div className="flex flex-row p-15 pl-44 gap-10">
        <img src="https://tailwindcss.com/_next/static/media/card.645e1829.jpg" alt="" className="w-100 h-70 rounded-xl"/>

        <img src="https://uideck.com/_next/image?url=https%3A%2F%2Fapi.uideck.com%2Fpublic%2Fimages%2Fstartup-tailwind.jpg&w=3840&q=75" alt="" className="w-110 h-70 rounded-xl" />

        <img src="https://v1.tailwindcss.com/_next/static/media/workcation-screenshot.e15fad2353857da51319620da615ff93.jpg" alt="" className="w-100 h-70 rounded-xl "/>
      </div> 
      <p className="pl-30 text-[30px]">Tailwind is supported by the best such as:Polar,Cursor,Resend,TipTap... it is one of the most used.You can build anything with Tailwind.it's fast and easy to use.<a href="https://tailwindcss.com/docs/installation/using-vite" className="underline">Use Tailwind CSS now!</a></p>

      <hr />

      <div className="bg-blue-500 h-100">

      <footer className="flex justify-center pt-30 underline text-[20px]">
        <a href="https://tailwindcss.com/showcase">Tailwind CSS</a>
      </footer>
      </div>
    </div>
  )
}

export default App
