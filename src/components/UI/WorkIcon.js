import React from 'react';
import hat from '../../images/services/graduation-hat.png';
import book from '../../images/services/book.png';
import './WorkIcon.css';

export default function WorkIcon(props) {
    return (
        <>
        <img className="qual-logo" src={props.inverse ? hat : book} alt="icon"/>
        </>
    )
}

