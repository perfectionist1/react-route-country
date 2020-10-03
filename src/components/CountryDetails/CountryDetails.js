import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState({});
    const {name, capital, region, population} = country;
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    useEffect( () => {
        fetch(url)
        .then( res => res.json())
        .then( data => setCountry(data))
    }, []);
    //console.log(country);
    return (
        <div>
            <h2>Country Name: {name}</h2>
            <p>Capital: {capital}</p>
        </div>
    );
};

export default CountryDetails;