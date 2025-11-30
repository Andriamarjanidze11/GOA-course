import React from "react";
import EmojiButton from "./EmojiButton";


function Spam() {
  function spam() {
    let fire = "";
    for (let i = 0; i < 3000; i++) {
      fire += "🔥";
    }
    alert(fire);
  }
  return <EmojiButton spammer={spam} />
}

export default Spam;
