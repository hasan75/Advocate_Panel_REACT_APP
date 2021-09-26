import { faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)
    const userIcon = <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon>
    const hiredIcon = <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
    const total = cart.reduce((previous, person) => previous + person.fees, 0)
    return (
        <div className="cart">
            <h2>{userIcon} Hiring Summary</h2>
            <h4>Total Hired: <span className="hired">{cart.length} Persons</span></h4>
            <ul>
                {
                    props.cart.map(person => <li>{person.name}</li>)
                }
            </ul>
            <h4>Total Amount Spent:<span className="spent-amount"> ${total} </span></h4>
            <button className="button-regular">{hiredIcon} Finish Hiring</button>
            
        </div>
    );
};

export default Cart;