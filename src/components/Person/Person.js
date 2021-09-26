import { faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Person.css';

const Person = (props) => {
    const {name, age, company, fees, email, picture} = props.person;
    const hireIcon = <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
    return (
        <div className="person">
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p><small>from: {company}</small></p>
            <h4>Age: {age}</h4>
            <h4>Consultency Fees: ${fees}</h4>
            <p>Email: {email}</p>
            <br />
            <button onClick={()=> props.haldleAddToCart(props.person)}>{hireIcon}  Hire Consultant</button>
        </div>
    );
};

export default Person;