import React from "react"
import {Link} from 'react-router-dom'
// const Navbar=React.forwardRef(function()) {

function Navbar(){

    return <>
        <nav className="navbar navbar-expand-lg bg-primary nav-container">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Ekart</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav d-flex flex-row align-items-center">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <input type="text" className="input-element" placeholder="Search"/>
                        <a class="nav-link" href="#"></a>
                    </div>
                </div>
              
                    {/* <i className="bi bi-cart cart-icon"><sup>{cartRef.current}</sup></i> */}
                   <Link to='cartcomponent'>
                   <i className="bi bi-cart cart-icon"><sup>{0}</sup></i>
                   </Link> 

                
                <button className="login-button">Logout</button>
                
            </div>
        </nav>
    </>
}

export default Navbar