import React from "react";
import ReverseBtn from "./ReverseButton";


function Reverser() {
  function reverse() {
    let react = "";
    for(let i = 0;i < 1000; i++) {
      react += "React is Fun!";
    }
    const reversed = [...react].reverse().join("");
    alert(reversed);
  }

  return <ReverseBtn reverse={reverse}/>
}

export default Reverser;