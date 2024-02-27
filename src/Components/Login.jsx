import React from "react";
import { useFormik } from "formik";
import './Login.css'
import { Link } from "react-router-dom";

function Login(){
    let loginData=useFormik({
        initialValues:{
            'userid':'',
            'password':''
        },
        onSubmit:((formdata)=>console.log(formdata))
    })
    return <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={loginData.handleSubmit}>
        <input type="text" name="userid" placeholder="Enter email or number" onChange={loginData.handleChange}/>
        <br />
        
        <input type="text" name="password" placeholder="Enter password" onChange={loginData.handleChange}/>
        <br /><br />
        <Link to='displayproducts'><button type="submit">Login</button></Link>

        </form>



    </div>
}

export default Login