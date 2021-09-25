import React from 'react';
import './Person.css';

const Person = (props) => {
    const {name, age, company, fees, email, picture} = props.person;
    console.log(props.person)
    return (
        <div className="person">
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p><small>from: {company}</small></p>
            <h3>Age: {age}</h3>
            <h3>Consultency Fees:{fees}</h3>
            <p>Email: {email}</p>
            <br />
            <button>Add to Cart</button>
        </div>
    );
};

export default Person;