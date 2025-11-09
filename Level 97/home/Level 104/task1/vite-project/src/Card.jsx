import React from "react";

function Card({ children }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px",
            backgroundColor: "#f9f9f9"
        }}>
            {children}
        </div>
    );
}

export default Card;
