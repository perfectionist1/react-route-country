import React from 'react';
import './CountryDetailsFinal.css';

const Test = (props) => {
    console.log(props.country);
    const {name, capital, region, population, flag} = props.country;

    return (
        <div className="country-style">
            <h2>Country: {name}</h2>
            <p>Capital: <strong> {capital}</strong></p>
            <p>Region: <strong>{region} </strong></p>
            <p>Population: <strong> {population}</strong></p>
            <img style={{height:'100px'}} src={flag} alt=""/>
        </div>
    );
};

export default Test;