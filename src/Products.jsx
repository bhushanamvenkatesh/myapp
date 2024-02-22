import React from "react";
import axios from "axios";

function Products() {
    var [products, setProducts] = React.useState([])
    React.useEffect(() => {
        axios.get('http://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data)
                setProducts([...res.data])
            })
    }, [])
    return <div>
        <h1>Products</h1>
        <div class='products'>
            {
                products.map((eachItem) => {
                    return <div>
                        <div class="card">
                            <img src={eachItem.image} class="card-img-top" stylealt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                })
            }
        </div>

    </div>
}

export default Products