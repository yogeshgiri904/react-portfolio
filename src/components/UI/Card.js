import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <>
            <div className="card-container">
                <div className="card-box" style={{backgroundColor : props.bgColor}}>
                    <div className="card-heading">
                        <h2>{props.heading}</h2>
                        <p><small>{props.subheading}</small></p>
                    </div>
                    <div className="card-content">
                            {props.content}
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Card;