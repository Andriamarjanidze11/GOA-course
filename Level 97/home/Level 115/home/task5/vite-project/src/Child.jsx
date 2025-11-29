import React from "react";

function Child(props) {

    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.Lname}</h1>
            <h1>{props.function}</h1>
            <h1>{props.array}</h1>
            <h1>{props.object}</h1>
            <h1>{props.boolean}</h1>
            <h1>{props.plus}</h1>
            <h1>{props.minus}</h1>
            <h1>{props.multiply}</h1>
        </div>
    );
}

export default Child;