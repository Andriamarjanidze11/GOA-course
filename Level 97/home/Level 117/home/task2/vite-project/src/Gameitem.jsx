import React from "react";

function Gameitem(props) {
    retrun (
        <div>
    <button onClick={props.game1}>{props.Minecraft}</button>
    <button onClick={props.game2}>{props.Fortnite}</button>
    <button onClick={props.game3}>{props.csgo}</button>
    <button onClick={props.game4}>{props.Valorant}</button>
        </div>
    )
}

export default Gameitem;