import React, { useEffect } from "react";

function Loginform() {

    useEffect(()=>{
        document.querySelector('input').focus()
    },[])

    const iref2=React.useRef()
    const iref3=React.useRef()
    const iref4=React.useRef()

    function change(e,ref){
        return e.key=="Enter"&& ref.current.focus()
    }

    function get(s){
        console.log(document.getElementsByName('myform'))
    }


    return <>
        <div>
            <h2>My Form</h2>
            <form name='myform' onClick={(e)=>e.preventDefault()}>
                <input type="text" name='fname' placeholder="Enter your first name" onKeyUp={(e)=>change(e,iref2)}/> <br /> 
                <input type="text" ref={iref2} name='lname' placeholder="Enter your last name" onKeyUp={(e)=>change(e,iref3)}/> <br />
                <input type="number" ref={iref3} name='age' placeholder="Enter your age" /><br />
                Gender: <input type="radio" name='gender' />:male<input type="radio" name='gender'/>:female
                <br />
                <select value='city'>
                    <option value="hyderabad" name='city'>Hyderabad</option>
                    <option value="vijayawada" name='city'>vijayawada</option>
                    <option value='bengalore' name='city'>Bengalore</option>
                    <option value="chennai" name='city'>Chennai</option>
                    
                </select>
                <br />
                <button onSubmit={(e)=>console.log(e)}>submit</button>





            </form>
        </div>



    </>
}

export default Loginform