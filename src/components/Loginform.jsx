import React from 'react'
import { useLazyCheckQuery } from '../apicalls'
import { useFormik } from 'formik';

function Loginform() {
    const [checkUser]=useLazyCheckQuery()
    const adminDetails=useFormik({
        initialValues:{
            aname:"",
            password:''

        },
        onSubmit:values=>{
            console.log(values)
        }
    })

  return (
    <>

    <div className=''>
        <h1>well come to gold loans</h1>
        <form id='myform' onSubmit={adminDetails.handleSubmit}>
            <span>Enter user name</span><br />
            <input type="text" name='aname' placeholder='Enter name' onChange={adminDetails.handleChange}/><br />
            <span>Enter user name</span> <br />
            <input type="text" name='password' placeholder='Enter password' onChange={adminDetails.handleChange}/><br />
            <br />
            <div>
                <button type='submit'>submit</button>
            </div>
            
        </form>
    </div>
    </>
    
  )
}

export default Loginform