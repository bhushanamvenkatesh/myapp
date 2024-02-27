import React from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
// import Navbar from "./Navbar";
import CartComponent from "./CartComponent";
import Spinner from "./Spinner";

function Displayproducts() {
    let [products, setProducts] = React.useState([])
    let [cartArr, setCartArr] = React.useState([])
    let [isLoading, setLoader] = React.useState(true)
    let cartCount = React.useRef(0)

    cartCount.current = cartArr.reduce((a, each) => { return a = a + each.quantity }, 0)

    React.useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setProducts((a) => {
                setLoader(false)
                return (res.data)
            }))
            
        
    }, [])

    let addtoCart = function (id) {
        let item = products.filter((each) => each.id === id)
        let nobj = item[0]
        if (cartArr.length === 0) {
            nobj.quantity = 1
            setCartArr([...cartArr, nobj])
        }
        else {
            let temp = [...cartArr]
            let index = temp.findIndex((each) => each.id === nobj.id)
            if (index === -1) {
                setCartArr([...temp, { ...nobj, 'quantity': 1 }])
            }
            else {
                temp[index].quantity += 1
                setCartArr([...temp])
            }
        }

    }
    return <>
        {/* <Navbar ref={cartCount} /> */}
        {isLoading&&<Spinner />}

        <div className="t-container d-flex flex-row">
            <div class="d-flex flex-row flex-wrap products-container">
                {
                    products.map((eachProduct) => <ProductCard  {...eachProduct} addtoCart={addtoCart} />)
                }
            </div>
            {/* {cartArr.length > 0 && <CartComponent cartArr={cartArr} />} */}

        </div>
    </>

}
export default Displayproducts