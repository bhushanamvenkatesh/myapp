import React from "react";

function ProductCard(p) {
    // console.log(p.addtoCart)
    let { title, category, image, price,id }=p
    // console.log(p)
    return <div className="pcard d-flex flex-column justify-content-between" >
        <img class="card-img-top" src={image} style={{width:'60px'}} alt="Card image cap"/>
            <div class="card-body d-flex flex-column justify-content-between">
                <p class="card-title">{title.slice(0,32)}</p>
                <p class="card-text">{price}</p>
                <button class='btn btn-primary' onClick={()=>p.addtoCart(p)}>add to cart</button>
            </div>
    </div>


}

export default ProductCard