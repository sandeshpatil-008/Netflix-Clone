import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <div className='l-card'>
            <span>{props.heading}</span><br/>
            <span>{props.detail}</span>
            </div>
            <img src={props.image} alt="" />
        </div>
    );
};

export default Card;