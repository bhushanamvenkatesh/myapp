import React from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";


function Displayproducts() {
    let [products, setProducts] = React.useState([])
    const [cartArr,setCartArr]=React.useState([])
    React.useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setProducts((a) => (res.data)))
    }, [])

    function addtoCart(item){
        
        setCartArr((a)=>{
            let index=a.findIndex((i)=>i.title===item.title)
            let temp=[...a]
            let l={...item,'quantity':1}
            console.log(l)
             temp=index==-1?[...temp,item.quantity=1]:temp[index].quantity+=1
            return [...a,l]
        })
        
    }
    return <>
   <h1>Products</h1>
    <div className="t-container d-flex flex-row">
        <div class="d-flex flex-row flex-wrap products-container">
        {
            products.map((eachProduct) => <ProductCard addtoCart={addtoCart} {...eachProduct} />)
        }
        </div>
        <div className="cart-container">
        {/* <h1>{console.log(cartArr)}</h1> */}
        <h4 style={{textAlign:'center'}}>Cart Items</h4>
            {
                
                cartArr?.map((eachItem)=><CartItem {...eachItem}/>)
            }
        </div>
        
    </div>
    </>

}


export default Displayproducts