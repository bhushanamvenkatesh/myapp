import React from "react";
import CartItem from "./CartItem";
import { connect } from 'react-redux';

function CartComponent({cartData}) {
    // console.log(cartData)
    return <>
        <div className="cart-container">
            <h4 style={{ textAlign: 'center' }}>Cart Items</h4>
            {
                
                cartData.cartArr.length > 0? cartData.cartArr.map((each => <CartItem {...each} />)): <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"/>
            }
        </div>
    </>
}

export default connect(store=>store)(CartComponent)