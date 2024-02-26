import React from "react";
import { Formik } from "formik";

function Loginform2(){
    return <div>

        <Formik initialValues={{'fname':'','age':""}}
                onSubmit={(fd)=>console.log(fd)}
        >
            {
                (formdata)=>{
                    return <form onSubmit={formdata.handleSubmit}>
                        <input type="text" name="fname" onChange={formdata.handleChange}/><br />
                        <input type="text" name='age' onChange={formdata.handleChange}/><br />
                        <button type="submit">submit</button>
                    </form>
                }
            }

        </Formik>


    </div>
}

export default Loginform2