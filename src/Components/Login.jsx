import React from "react";
import { useFormik } from "formik";
import './Login.css'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    let loginData = useFormik({
        initialValues: {
            'uname': '',
            'password': ''
        },
        onSubmit: ((formdata) => {
            props.dispatch({ type: 'LOGIN', payload: { ...formdata } })
            if (props.userFormData.isUserValid) {
                navigate("/displayproducts");
            }
            else {
                alert('invalid credentials')
            }
        })
    })
    return <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={loginData.handleSubmit}>
            <input type="text" name="uname" placeholder="Enter email or number" onChange={loginData.handleChange} />
            <br />
            <input type="text" name="password" placeholder="Enter password" onChange={loginData.handleChange} />
            <br /><br />
            {/* <Link to='displayproducts'> */}
            <button type="submit">Login</button>
        </form>
    </div>
}

export default connect(store => store)(Login)