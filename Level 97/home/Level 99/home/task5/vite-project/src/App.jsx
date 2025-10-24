import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  function time(){
      const date = new Date()
      const hours= date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()

      console.log(hours, minutes, seconds)
  }

  setInterval(time,1)

  return (
    <>
      
    </>
  )
}

export default App







// დროის გამოთვლა

// შექმენით ფუნქცია, რომელიც აჩვენებს მიმდინარე დროას (ს საათი, წუთი და წამი) ფორმატში: HH:MM:SS.

// დააყენეთ ამ ფუნქციას 1 წამში ერთხელ ავტომატური გამეორება.

// თითოეულ პერიოდში, console.log-ში გამოიტანეთ დრო.

// დავალების მიზანი:
// დროის გამოყენება და ფუნქციის გამეორება პერიოდულად. 

