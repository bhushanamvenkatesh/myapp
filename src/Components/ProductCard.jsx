import React from "react";
import { connect } from "react-redux";

function ProductCard(p) {
    // console.log(p.addtoCart)
    let { title, category, image, price,id }=p
    // console.log(p)
    return <div className="pcard d-flex flex-column justify-content-between" >
        <img class="card-img-top i" src={image} style={{width:'60px'}} alt="Card image cap"/>
            <div class="card-body d-flex flex-column justify-content-between">
                <span class="card-title">{title.slice(0,32)}</span>
                <span class="card-text">Rs:{price}/-</span>
                {/* <button class='btn btn-primary' onClick={()=>p.addtoCart(id)}>add to cart</button> */}
                <button class='btn btn-primary' onClick={()=>p.addtoCart(p)}>add to cart</button>

            </div>
    </div>


}

export default connect(store=>store)(ProductCard)