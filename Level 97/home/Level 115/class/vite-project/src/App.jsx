import React from "react";
import Parent from "./Comp1";

function Child(props) {
  return (
    <div>

      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.country}</h1>
      <h1>{props.favArtist}</h1>
      <h1>{props.favSong}</h1>

    </div>
  )
}

export default Child;