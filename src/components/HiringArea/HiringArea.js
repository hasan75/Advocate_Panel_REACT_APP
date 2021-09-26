import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './HiringArea.css'

const HiringArea = () => {
    const [persons, setPersons] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('./persons.json')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[]);

    const haldleAddToCart = (person) => {
        const newCart = [...cart, person];
        setCart(newCart);
    }

    return (
        <div className="hiring-container">
            <div className="persons-container">
                {
                    persons.map(person => <Person
                        key={person._id} 
                        person={person}
                        haldleAddToCart = {haldleAddToCart}>
                        </Person>)
                }
            </div>
            <div className="hiring-cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default HiringArea;