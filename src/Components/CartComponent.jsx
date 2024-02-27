import React from "react";
import CartItem from "./CartItem";

function CartComponent({ cartArr }) {

    return <>
        <div className="cart-container">
            hie
            {/* <h1>{console.log(cartArr)}</h1>
            <h4 style={{ textAlign: 'center' }}>Cart Items</h4>
            {
                cartArr.length > 0 && cartArr.map((each => <CartItem {...each} />))
            }
            <h1>cart compo</h1> */}
        </div>
    </>
}

export default CartComponent