import React from "react";

function CartItem({ title, image, price, quantity }) {
    console.log(price)
    return <div className="cart-item">
        <img className="p-1" src={image} style={{ width: '30px', objectFit: "scale-down" }} />

        <p>{title.slice(0, 5)} </p>
        <p> Rs:{price}</p>
        <p>{quantity}</p>
    </div>
}
export default CartItem