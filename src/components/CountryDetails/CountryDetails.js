import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetailsFinal from '../CountryDetailsFinal/CountryDetailsFinal';



const CountryDetails = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState([]);
    
    
    useEffect( () => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then( res => res.json())
        .then( data => setCountry(data))
    }, [])
    //console.log(country);
    return (
        <div>        
            {
                country.map( ct => <CountryDetailsFinal country={ct}></CountryDetailsFinal>)
            }
        </div>
    );
};

export default CountryDetails;