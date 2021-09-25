import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './HiringArea.css'

const HiringArea = () => {
    const [persons, setPersons] = useState([]);
    useEffect(()=>{
        fetch('./persons.json')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[]);

    return (
        <div className="hiring-container">
            <div className="persons-container">
                {
                    persons.map(person => <Person person={person}></Person>)
                }
            </div>
            <div className="hiring-cart-container">
                <h2> Ji boss
                </h2>
            </div>
            
        </div>
    );
};

export default HiringArea;