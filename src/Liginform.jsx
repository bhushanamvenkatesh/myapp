import React from "react";
import { useFormik } from "formik";
import Loginform2 from "./Method2";

function Loginfrom() {
    let myformdata = useFormik({
        initialValues: {
            'fname': "",
            'pass': "",
            'email': "",
            'age': ""
        },
        onSubmit: (fd) => {
            console.log('submit',fd)
        }
    })


    return <div className="my-form">
        <h1>Login form</h1>
        <form onSubmit={myformdata.handleSubmit}>
            <input type="text" name='fname' placeholder="Enter your name" onChange={myformdata.handleChange} /> <br />
            <input type="password" name='pass' placeholder="Enter your password" onChange={myformdata.handleChange} /> <br />
            <input type="text" name='email' placeholder="Enter your email" onChange={myformdata.handleChange} /> <br />
            <input type="text" name='age' placeholder="Enter your age" onChange={myformdata.handleChange} /> <br /><br />
            <button type="submit">submit</button>
        </form>
        <Loginform2 />
       

    </div>
}
export default Loginfrom