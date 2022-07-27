import React from 'react';
import './Moviecard.css';

const Moviecard = (props) => {
    return (
        <>
            <div className="movie">
                <img src={props.image} alt=""/>
                <h1 className='movieDate'>{props.date}</h1>
            </div>  
        </>
    );
};

export default Moviecard;