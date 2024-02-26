import axios from "axios";
import React from "react";
import { Link} from 'react-router-dom'
// import CountryDetails from './CountryDetails'

function About() {
    var [countries, setCountries] = React.useState([])
    React.useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then((res) => setCountries([...res.data.slice(0, 50)]))
    }, [])


    return <div className="bg-container">
        <ul className="list-style">
            {
                countries.length > 0 && countries.map((eachCountries) => {
                    return <div className="card">
                        <h1>{eachCountries.flag}</h1>
                        
                        <Link to={`countrydetails/${eachCountries.name.common}`}>{eachCountries.name.common}</Link>
                    </div>
                })
            }
        </ul>
        <div className="details">
            <h1>ih</h1>

        </div>
    </div>
}

export default About