import React from "react";
import GroceryItem from "./GroceryItems";

function Groceries() {
  function handleClick() {
    alert(`you purchased: ${item1}`);
  }

  function handleClick2() {
    alert(`you purchased: ${item2}`);
  }

  function handleClick3() {
    alert(`you purchased: ${item3}`);
  }

  return <GroceryItem item1="Banana" item2="Juice" item3="Bread"/>
}

export default Groceries;