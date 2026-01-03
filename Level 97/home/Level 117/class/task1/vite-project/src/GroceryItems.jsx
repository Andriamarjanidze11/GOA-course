import React from "react";

function GroceryItem(props) {
    return (
        <div>
        <button onClick={handleClick}>
            {props.items1}
        </button>
        
        <button onClick={handleClick2}>
            {props.item2}
        </button>

        <button onClick={handleClick3}>
            {props.item3}
        </button>
        </div>
    )
}

export default GroceryItem;