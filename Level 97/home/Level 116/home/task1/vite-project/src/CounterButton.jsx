import React from "react";

function CounterButton(props) {
    return <button onClick={props.increment}>Increment</button>;
}

export default CounterButton;