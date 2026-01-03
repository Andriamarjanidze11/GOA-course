import React from "react";

function Songitem(props) {
    return(
        <div>
            <button onClick={song1}>{props.song1}</button>
            <button onClick={song2}>{props.song2}</button>
            <button onClick={song3}>{props.song3}</button>
            <button onClick={song4}>{props.song4}</button>
        </div>
    )
}

export default Songitem;