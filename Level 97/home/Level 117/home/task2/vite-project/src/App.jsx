import React from "react";
import Gameitem from "./Gameitem";

function Game() {
  function game1() {
    alert("You Selected" `${Minecraft}`, "!")
  }

  function game2() {
    alert("You Selected" `${Fortnite}`, "!")
  }


  function game3() {
    alert("You Selected" `${csgo}`, "!")
  }


  function game4() {
    alert("You Selected" `${Valorant}`, "!")
  }


  return <Gameitem Minecraft="Minecraft" Fortnine="Fortnine" csgo="CS:GO" Valorant="Valorant"/>
}

export default Game;