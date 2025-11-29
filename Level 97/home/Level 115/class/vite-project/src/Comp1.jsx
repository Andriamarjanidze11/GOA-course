import React from "react";
import Child from "./App";


function Parent() {
    return <Child name="Dudu" age={13} country="Georgia" favArtist="Tame Impala" favSong="Borderline" />
}

export default Parent;