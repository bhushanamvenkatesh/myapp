import axios from "axios";
import React from "react";
import {Link} from 'react-router-dom'

function About(){
    var [countries,setCountries]=React.useState([])
    React.useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then((res)=>setCountries([...res.data.slice(0,50)]))
    },[])
    

    return <div className="bg-container">
        <ul className="list-style">       
        {
            countries.length>0&&countries.map((eachCountries)=>{
                return <div className="card">
                    
                    <h1>{eachCountries.flag}</h1>
                    <Link to={`${eachCountries.name}`}>{eachCountries.name.common}</Link>
                    
                </div>
            })
        }
         </ul>
         <div className="details">
            Country Details

         </div>
    </div>
}

export default About