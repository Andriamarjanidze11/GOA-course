import React from "react";

function Status(props) {
    if(props.isOnline) {
        return <h1>Online</h1>
    } else {
        return <h2>Offline</h2>
    }
}

export default Status;