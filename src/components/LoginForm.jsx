// import React from 'react'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'

// function LoginForm() {


//     const registrationSchema = Yup.object({
//         fname: Yup.string().min(2, 'Too Short').max(15, 'Too long').matches(/^[a-zA-Z\\s]+$/, 'shoud contain only alphabets and spaces').required('Required'),
//         age: Yup.string(),
//         email: Yup.string().email('Enter valid email').required('*Email is Required'),

//     })

//     let loginForm = useFormik({
//         initialValues: {
//             fname: "",
//             age: '',
//             email: ""
//         },

//         validationSchema: registrationSchema,
//         onSubmit: (fd) => console.log(fd),

//     })


//     return (
//         <div className='my-box'>
//             <form name='f' onSubmit={loginForm.handleSubmit}>
//                 Name:<input type="text" name='fname' id='n' onChange={loginForm.handleChange} /> <br />
//                 Age:<input type="number" name='age' id='a' onChange={loginForm.handleChange} /> <br />
//                 Email:<input type="mail" name='email' id='e' onChange={loginForm.handleChange} /> <br />
//                 <div className='button-container'>
//                     <button type='submit'>submit</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default LoginForm