import React from "react";
import PrinterButton from "./PrinterButton";

function Printer() {

  function print() {
    const hello = "";
    for (let i = 0; i < 5000; i++) {
      hello += 'Hello';
    }
    alert(hello);
  }

  return <PrinterButton talk={print} />
}

export default Printer;