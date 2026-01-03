import React from "react";
import Songitem from "./Songitem";

function Song() {
    function song1() {
        alert(`Now playing ${song1}!`)
    }

    function song2() {
        alert(`Now playing ${song2}!`)
    }

    function song3() {
        alert(`Now playing ${song3}!`)
    }

    function song4() {
        alert(`Now playing ${song4}!`)
    }

    return <Songitem song1="Blinding Lights" song2="Levitating" song3="Peaches" song4="Stay"/>
}

// "Blinding Lights", "Levitating", "Peaches", "Stay"