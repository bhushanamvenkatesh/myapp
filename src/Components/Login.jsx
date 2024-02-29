import React from "react";
import { useFormik } from "formik";
import './Login.css'
import { Link } from "react-router-dom";
import { connect } from "react-redux";


function Login(props){
    let iref=React.useRef()
    console.log(props)
    let loginData=useFormik({
        initialValues:{
            'name':'',
            'password':''
        },
        onSubmit:((formdata)=>{
            if(formdata.name==='venkat' && formdata.password==='12345'){
                {console.log('namv')}
                return <Link to='displayproducts'/> 
            }
        })
    })
    return <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={loginData.handleSubmit}>
        <input type="text" name="name" placeholder="Enter email or number" onChange={loginData.handleChange}/>
        <br />
        <input type="text" name="password" placeholder="Enter password" onChange={loginData.handleChange}/>
        <br /><br />
        {/* <Link to='displayproducts'> */}
            <button ref={iref} type="submit"><Link to='displayproducts'>Login</Link></button>
        </form>
    </div>
}

export default connect(store=>store)(Login)