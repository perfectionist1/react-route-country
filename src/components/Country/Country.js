import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    //console.log(props);
    const {name, alpha3Code} = props.country;
    const history = useHistory();
    const clickHandle = (paramName) => {
        history.push(`/name/${paramName}`);
    };
    return (
        <div style={{border:'2px solid blue', borderRadius: '20px', width: '70%',
                margin: '50px auto 30px', padding: '30px 0 20px 200px'}} className="all-country-style">
            <h2> Country Name: <span style={{color: 'green'}}>{name} </span></h2>
            
            <Link to={`/name/${name}`}> Click to see More about {alpha3Code}</Link>
            <p><button onClick={ () => clickHandle(name)}>Click Me </button></p>  
        </div>
    );
};

export default Country;