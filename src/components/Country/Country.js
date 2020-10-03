import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    //console.log(props);
    const {name, capital, alpha3Code} = props.country;
    return (
        <div style={{border:'2px solid blue', borderRadius: '20px', width: '70%',
                margin: '50px auto 30px', padding: '30px 0 20px 200px'}} className="all-country-style">
            <h2> Country Name: {name} </h2>
            <h4> Capital: {capital} </h4>
            <Link to={`/name/${name}`}> Click to see More about {alpha3Code}</Link>
        </div>
    );
};

export default Country;