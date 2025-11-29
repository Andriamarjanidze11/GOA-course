import React from "react";
import Child from "./Child";

function Parent() {

  function Greet() {
    return <h1>Hi</h1>
  }

  const obj = {
    name: "dudu",
    age: 13
  }
  return (
    <div>
      <Child name="Ninia" />
      <Child Lname="Mazanashvili" />
      <Child age={13} />
      <Child function={Greet} />
      <Child array={["Dudu", "Mari", "Ninia", "Deme", "Dachi"]} />
      <Child object={obj} />
      <Child boolean={true} />
      <Child plus={5 + 5} />
      <Child minus={7 - 6} />
      <Child multiply={6 * 7} />
    </div>
  )
}

export default Parent;