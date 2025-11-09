import React from "react";

function Product({ price, inStock }) {
    return (
        <div>
            <p>ფასი: {price} ₾</p>
            <p>{inStock ? "ხელმისაწვდომია ✅" : "ამოიწურა ❌"}</p>
        </div>
    );
}

export default Product;
