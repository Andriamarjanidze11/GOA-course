import React from "react";

function PrinterButton(props) {
    return (
        <button onClick={props.print}>
            click
        </button>
    )
}

export default PrinterButton;