import React from "react";
import Button from "./RandomButton";


function RandomNum() {
  function random() {
    alert(Math.floor(Math.random() * 101));
  }

  return <Button random={random}/>


}

export default RandomNum;