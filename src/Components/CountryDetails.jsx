import axios from "axios";
import React from "react";
import { Params, useParams } from "react-router-dom";
function CountryDetails() {
    let [countrydetails, setDetails] = React.useState({})
    let { cname } = useParams()
    // console.log(cname)
    React.useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${cname}`)
            .then((res) => {
                setDetails({...res.data[0]})
            })
    }, [cname])

    return <div>
        {console.log(Boolean(!countrydetails))}
        {!countrydetails&&console.log(countrydetails.name)}
        {/* {countrydetails!==null}&&<div>
            <h1>{countrydetails.name.common}</h1>
        </div> */}
    </div>
}

export default CountryDetails